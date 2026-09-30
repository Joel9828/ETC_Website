import type { VercelRequest, VercelResponse } from "@vercel/node";
import * as nodemailer from "nodemailer";

const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_EMAIL_LENGTH = 320;
const MAX_PHONE_LENGTH = 40;
const MAX_CATEGORY_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  fullName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  audience?: unknown;
  interest?: unknown;
  message?: unknown;
}

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function removeControlCharacters(value: string): string {
  return value.replace(/[\r\n\t]/g, " ").replace(/\s+/g, " ").trim();
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const body = (req.body ?? {}) as ContactPayload;
  const fullName = cleanText(body.fullName);
  const company = cleanText(body.company);
  const email = cleanText(body.email).toLowerCase();
  const phone = cleanText(body.phone);
  const audience = cleanText(body.audience);
  const interest = cleanText(body.interest);
  const message = cleanText(body.message);

  const fieldErrors: Record<string, string> = {};
  if (!fullName) fieldErrors.fullName = "Full name is required.";
  if (company.length > MAX_COMPANY_LENGTH) fieldErrors.company = "Company name is too long.";
  if (!email) fieldErrors.email = "Email is required.";
  else if (!emailPattern.test(email)) fieldErrors.email = "A valid email is required.";
  if (!phone) fieldErrors.phone = "Phone number is required.";
  if (!audience) fieldErrors.audience = "Please select how you are contacting us.";
  if (!interest) fieldErrors.interest = "Please select what you are interested in.";
  if (!message) fieldErrors.message = "Message is required.";

  if (fullName.length > MAX_NAME_LENGTH) fieldErrors.fullName = "Full name is too long.";
  if (email.length > MAX_EMAIL_LENGTH) fieldErrors.email = "Email is too long.";
  if (phone.length > MAX_PHONE_LENGTH) fieldErrors.phone = "Phone number is too long.";
  if (audience.length > MAX_CATEGORY_LENGTH) fieldErrors.audience = "Selection is too long.";
  if (interest.length > MAX_CATEGORY_LENGTH) fieldErrors.interest = "Selection is too long.";
  if (message.length > MAX_MESSAGE_LENGTH) fieldErrors.message = "Message is too long.";

  if (Object.keys(fieldErrors).length > 0) {
    res.status(400).json({
      error: "Please check the highlighted fields.",
      fields: fieldErrors,
    });
    return;
  }

  const smtpHost = process.env["SMTP_HOST"]?.trim();
  const smtpPortValue = process.env["SMTP_PORT"]?.trim();
  const smtpPort = Number(smtpPortValue);
  const smtpUser = process.env["SMTP_USER"]?.trim();
  const smtpPassword = process.env["SMTP_PASSWORD"]?.trim();
  const receiverEmail = process.env["CONTACT_RECEIVER_EMAIL"]?.trim();

  if (
    !smtpHost ||
    !smtpPortValue ||
    !Number.isInteger(smtpPort) ||
    smtpPort < 1 ||
    smtpPort > 65535 ||
    !smtpUser ||
    !smtpPassword ||
    !receiverEmail
  ) {
    console.error("Contact email service is missing required environment variables");
    res.status(503).json({
      error: "The contact form is temporarily unavailable.",
    });
    return;
  }

  const safeName = removeControlCharacters(fullName);
  const subject = `New contact form message from ${safeName}`;
  const text = [
    `Name: ${fullName}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Contact type: ${audience}`,
    `Interested in: ${interest}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      requireTLS: smtpPort === 587,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: receiverEmail,
      replyTo: email,
      subject,
      text,
    });

    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Could not send contact email", error);
    res.status(502).json({
      error: "The contact form is temporarily unavailable.",
    });
  }
}
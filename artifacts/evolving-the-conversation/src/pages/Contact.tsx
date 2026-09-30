import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

const contactDetails = [
  {
    key: "phone",
    icon: Phone,
    value: "+507 6207-0905",
    href: "tel:+50762070905",
  },
  {
    key: "email",
    icon: Mail,
    value: "evolvingtheconversation2@gmail.com",
    href: "mailto:evolvingtheconversation2@gmail.com",
  },
  {
    key: "address",
    icon: MapPin,
    value: "Ste 1. Building 117, 69 E Street, Panama",
    href: undefined,
  },
] as const;

type ContactFormData = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  audience: string;
  interest: string;
  message: string;
};

const emptyForm: ContactFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  audience: "",
  interest: "",
  message: "",
};

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isSubmitting = formStatus === "submitting";

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (formStatus !== "idle") setFormStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      setForm(emptyForm);
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] px-4 pb-24 pt-20 text-white sm:px-6 lg:px-8">
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#4FA3E3]">
            {t("contact.eyebrow")}
          </p>
          <h1 className="font-heading text-4xl font-black uppercase leading-tight tracking-wider md:text-6xl">
            {t("contact.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
            {t("contact.intro")}
          </p>
        </div>
      </section>

      <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-10 max-w-5xl">
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-3">
            {contactDetails.map(({ key, icon: Icon, value, href }) => {
              const content = (
                <>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#4FA3E3]/10 text-[#4FA3E3]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {t(`contact.${key}Label`)}
                  </p>
                  <p className="break-words text-sm font-semibold leading-relaxed text-primary">
                    {value}
                  </p>
                </>
              );

              return href ? (
                <a
                  key={key}
                  href={href}
                  className="group border-b border-gray-100 p-8 transition-colors hover:bg-gray-50 md:border-b-0 md:border-r"
                >
                  {content}
                </a>
              ) : (
                <div key={key} className="border-b border-gray-100 p-8 md:border-b-0">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <h2 className="mb-6 font-heading text-2xl font-black tracking-wide text-primary">
                {t("contact.formTitle")}
              </h2>

              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-full-name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("contact.fullName")}
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    value={form.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    placeholder={t("contact.fullNamePlaceholder")}
                    required
                    maxLength={120}
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-[#4FA3E3]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("contact.company")}
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={form.company}
                    onChange={(event) => updateField("company", event.target.value)}
                    placeholder={t("contact.companyPlaceholder")}
                    maxLength={160}
                    autoComplete="organization"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-[#4FA3E3]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                      {t("contact.email")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder={t("contact.emailPlaceholder")}
                      required
                      maxLength={320}
                      autoComplete="email"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-[#4FA3E3]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                      {t("contact.phone")}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder={t("contact.phonePlaceholder")}
                      required
                      maxLength={40}
                      autoComplete="tel"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-[#4FA3E3]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-audience" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("contact.audience")}
                  </label>
                  <select
                    id="contact-audience"
                    value={form.audience}
                    onChange={(event) => updateField("audience", event.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-[#4FA3E3]"
                  >
                    <option value="">{t("contact.audiencePlaceholder")}</option>
                    {t("contact.audienceOptions").map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-interest" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("contact.interest")}
                  </label>
                  <select
                    id="contact-interest"
                    value={form.interest}
                    onChange={(event) => updateField("interest", event.target.value)}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-[#4FA3E3]"
                  >
                    <option value="">{t("contact.interestPlaceholder")}</option>
                    {t("contact.interestOptions").map((option: string) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-500">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder={t("contact.messagePlaceholder")}
                    required
                    maxLength={5000}
                    rows={6}
                    className="w-full resize-y rounded-lg border border-gray-200 px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-gray-400 focus:border-[#4FA3E3]"
                  />
                </div>

                {formStatus === "success" && (
                  <div role="status" className="flex items-start gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{t("contact.successMessage")}</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div role="alert" className="flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{t("contact.errorMessage")}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-heading text-sm font-black uppercase tracking-widest text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  {isSubmitting ? t("contact.sending") : t("contact.sendMessage")}
                </button>
              </div>
            </form>

            <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 text-center text-white sm:p-10">
              <p className="text-base leading-relaxed text-gray-200">
                {t("contact.responseNote")}
              </p>
              <Link
                href="/"
                className="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-heading text-sm font-black uppercase tracking-widest text-primary transition-colors hover:bg-gray-100"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("contact.backHome")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
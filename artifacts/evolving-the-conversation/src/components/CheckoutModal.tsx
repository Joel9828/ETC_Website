// TODO: Replace mock PayPal simulation with real PayPal Checkout SDK / Orders API integration.
// Requires PAYPAL_CLIENT_ID (frontend) and PAYPAL_CLIENT_SECRET (backend) once PM provides PayPal business account credentials.
// Currently simulates a PayPal redirect + login + success flow after fake delays — no real charge occurs, no real PayPal SDK is loaded.

import { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { X, CheckCircle, Loader2 } from "lucide-react";
import { useLocation } from "wouter";

interface Pkg {
  name: string;
  freq: string;
  price: string;
  priceNum: number;
  subtotal: string;
  itbms: string;
}

interface Props {
  pkg: Pkg;
  onClose: () => void;
}

type Screen = "form" | "redirecting" | "paypal-login" | "processing" | "success";

// PayPal wordmark SVG (inline, brand-accurate colors)
function PayPalWordmark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* PP icon */}
      <path d="M8 4h4.5c2.5 0 4 1.2 3.8 3.5C16 10 14.2 12 11.5 12H9.5L8.8 16H6L8 4z" fill="#003087"/>
      <path d="M9.5 10.5h1.8c1.2 0 2-.6 2.1-1.8C13.5 7.5 12.8 7 11.5 7H9.8L9.5 10.5z" fill="#003087"/>
      <path d="M14 6h4.5c2.5 0 4 1.2 3.8 3.5C22 12 20.2 14 17.5 14H15.5L14.8 18H12L14 6z" fill="#009cde"/>
      <path d="M15.5 12.5h1.8c1.2 0 2-.6 2.1-1.8C19.5 9.5 18.8 9 17.5 9H15.8L15.5 12.5z" fill="#009cde"/>
      {/* "PayPal" text */}
      <text x="26" y="16" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#003087">Pay</text>
      <text x="46" y="16" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#009cde">Pal</text>
    </svg>
  );
}

export function CheckoutModal({ pkg, onClose }: Props) {
  const { t } = useLanguage();
  const [, navigate] = useLocation();
  const [screen, setScreen] = useState<Screen>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mockEmail, setMockEmail] = useState("");
  const [mockPassword, setMockPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const overlayRef = useRef<HTMLDivElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Required";
    if (!email.trim() || !email.includes("@")) e.email = "Valid email required";
    return e;
  };

  const startPayPalFlow = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setScreen("redirecting");
    // Simulate redirect delay → show mock PayPal login
    setTimeout(() => setScreen("paypal-login"), 1300);
  };

  const handlePayPalLogin = () => {
    setScreen("processing");
    // Simulate PayPal processing
    setTimeout(() => setScreen("success"), 1600);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current && screen === "form") onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">

        {/* — — — REDIRECTING SCREEN — — — */}
        {screen === "redirecting" && (
          <div className="flex flex-col items-center justify-center py-24 px-8 gap-6">
            <PayPalWordmark className="h-8 w-auto" />
            <Loader2 className="w-10 h-10 text-[#009cde] animate-spin" />
            <p className="text-gray-600 font-body text-base text-center">
              {t('checkout.redirecting')}
            </p>
          </div>
        )}

        {/* — — — MOCK PAYPAL LOGIN SCREEN — — — */}
        {screen === "paypal-login" && (
          <div className="flex flex-col items-center py-10 px-8 gap-5">
            <PayPalWordmark className="h-9 w-auto mb-1" />
            <h2 className="font-heading font-bold text-lg text-gray-800 text-center">
              {t('checkout.paypalLoginTitle')}
            </h2>
            <div className="w-full space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {t('checkout.paypalEmailLabel')}
                </label>
                <input
                  type="email"
                  value={mockEmail}
                  onChange={e => setMockEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#009cde] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {t('checkout.paypalPasswordLabel')}
                </label>
                <input
                  type="password"
                  value={mockPassword}
                  onChange={e => setMockPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#009cde] transition-colors"
                />
              </div>
            </div>
            <button
              onClick={handlePayPalLogin}
              className="w-full py-3.5 rounded-full font-heading font-black text-sm tracking-wide transition-colors"
              style={{ backgroundColor: "#FFC439", color: "#003087" }}
            >
              {t('checkout.paypalLoginBtn')}
            </button>
            <p className="text-xs text-gray-400 text-center">
              {t('checkout.securePaypal')}
            </p>
          </div>
        )}

        {/* — — — PROCESSING SCREEN — — — */}
        {screen === "processing" && (
          <div className="flex flex-col items-center justify-center py-24 px-8 gap-5">
            <Loader2 className="w-12 h-12 text-[#009cde] animate-spin" />
            <p className="text-primary font-heading font-bold text-lg text-center">
              {t('checkout.processing')}
            </p>
          </div>
        )}

        {/* — — — SUCCESS SCREEN — — — */}
        {screen === "success" && (
          <div className="flex flex-col items-center text-center py-12 px-8 gap-5">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-9 h-9 text-green-500" />
            </div>
            <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-wide">
              {t('checkout.successTitle')}
            </h2>

            {/* Order recap */}
            <div className="w-full bg-gray-50 rounded-xl p-4 text-left border border-gray-100 text-sm space-y-1.5">
              <p className="font-bold text-primary">{pkg.name}</p>
              <p className="text-gray-500">{pkg.freq}</p>
              <div className="border-t border-gray-200 my-2" />
              <div className="flex justify-between text-gray-600"><span>{t('checkout.subtotal')}</span><span>{pkg.subtotal}</span></div>
              <div className="flex justify-between text-gray-600"><span>{t('checkout.itbms')}</span><span>{pkg.itbms}</span></div>
              <div className="flex justify-between font-bold text-primary text-base mt-1"><span>{t('checkout.total')}</span><span>{pkg.price} USD</span></div>
            </div>

            <p className="text-gray-500 text-sm">
              {t('checkout.successNote')} <span className="font-semibold text-primary">{email}</span>.
            </p>

            <button
              onClick={() => { onClose(); navigate("/"); }}
              className="mt-2 w-full py-3.5 rounded-xl bg-primary text-white font-heading font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              {t('checkout.backHome')}
            </button>
          </div>
        )}

        {/* — — — CHECKOUT FORM — — — */}
        {screen === "form" && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="font-heading font-black text-lg text-primary uppercase tracking-wide">
                {t('checkout.title')}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label={t('checkout.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 px-6 py-5 space-y-5">

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {t('checkout.orderSummary')}
                </p>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-primary text-sm">{pkg.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{pkg.freq}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t('checkout.participant')}</p>
                  </div>
                  <span className="font-heading font-black text-primary text-lg">{pkg.price}</span>
                </div>
                <div className="border-t border-gray-200 mt-3 pt-3 space-y-1 text-xs text-gray-500">
                  <div className="flex justify-between"><span>{t('checkout.subtotal')}</span><span>{pkg.subtotal}</span></div>
                  <div className="flex justify-between"><span>{t('checkout.itbms')}</span><span>{pkg.itbms}</span></div>
                  <div className="flex justify-between font-bold text-primary text-sm mt-1">
                    <span>{t('checkout.total')}</span>
                    <span>{pkg.price} USD</span>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {t('checkout.fullName')}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={t('checkout.fullNamePlaceholder')}
                    className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#009cde]'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    {t('checkout.email')}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('checkout.emailPlaceholder')}
                    className={`w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#009cde]'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* PayPal Button */}
              <div className="space-y-3">
                <button
                  onClick={startPayPalFlow}
                  className="w-full py-4 rounded-full font-heading font-black text-base tracking-wide transition-opacity hover:opacity-90 flex items-center justify-center gap-2 shadow-md"
                  style={{ backgroundColor: "#FFC439" }}
                >
                  <PayPalWordmark className="h-6 w-auto" />
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 uppercase tracking-wider">or</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Pay with Card secondary button */}
                <button
                  onClick={startPayPalFlow}
                  className="w-full py-3.5 rounded-full border-2 border-gray-300 text-gray-600 font-heading font-bold text-sm hover:border-gray-400 hover:text-gray-800 transition-colors"
                >
                  {t('checkout.payWithCard')}
                </button>
              </div>

              {/* PayPal Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs pb-2">
                <PayPalWordmark className="h-4 w-auto opacity-60" />
                <span>{t('checkout.securePaypal')}</span>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}

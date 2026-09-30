import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckoutModal } from "@/components/CheckoutModal";
import { CheckCircle } from "lucide-react";

interface Package {
  name: string;
  freq: string;
  price: string;
  priceNum: number;
  subtotal: string;
  itbms: string;
}

export function Pricing() {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<(Package & { index: number }) | null>(null);

  const packages: Package[] = t('pricing.packages') as unknown as Package[];

  const highlights = [
    { icon: "🎓", label: t('pricing.feat1') },
    { icon: "💬", label: t('pricing.feat2') },
    { icon: "📅", label: t('pricing.feat3') },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {t('pricing.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            {t('pricing.hero.subtext')}
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, i) => {
              const isPopular = i === 2;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200 ${
                    isPopular
                      ? "bg-white border-2 border-accent shadow-2xl scale-[1.02] md:scale-105"
                      : "bg-white border border-gray-200 shadow-md hover:shadow-xl"
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="bg-accent text-white text-xs font-bold uppercase tracking-widest text-center py-2 px-4">
                      ⭐ {t('pricing.mostPopular')}
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-8 gap-5">
                    {/* Title & Freq */}
                    <div>
                      <h3 className="font-heading font-black text-2xl text-primary uppercase tracking-wide">
                        {pkg.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{pkg.freq}</p>
                    </div>

                    {/* Participant tag */}
                    <span className="inline-flex items-center gap-1.5 self-start bg-primary/8 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                      <span>👤</span> {t('pricing.participant')}
                    </span>

                    {/* Price */}
                    <div className="mt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-black text-4xl text-primary">{pkg.price}</span>
                        <span className="text-gray-500 text-sm font-medium">USD</span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1.5">
                        Subtotal: {pkg.subtotal} · ITBMS incluido: {pkg.itbms}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5 italic">{t('pricing.taxNote')}</p>
                    </div>

                    {/* Checklist */}
                    <ul className="flex flex-col gap-2 flex-1">
                      {[t('pricing.feat1'), t('pricing.feat2'), t('pricing.feat3')].map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() => setSelectedPackage({ ...pkg, index: i })}
                      className={`mt-4 w-full py-3.5 rounded-xl font-heading font-black text-sm uppercase tracking-widest transition-all duration-200 ${
                        isPopular
                          ? "bg-accent text-white hover:bg-accent/90 shadow-lg"
                          : "bg-primary text-white hover:bg-primary/90"
                      }`}
                    >
                      {t('pricing.buyNow')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-gray-500 text-sm mt-10">
            {t('pricing.disclaimer')}
          </p>
        </div>
      </section>

      {/* Checkout Modal */}
      {selectedPackage && (
        <CheckoutModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}

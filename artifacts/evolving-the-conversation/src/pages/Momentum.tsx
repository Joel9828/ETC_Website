import { CheckCircle2, Clock3, UsersRound } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

export function Momentum() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-bold uppercase tracking-widest text-primary mb-8">
            <Clock3 className="w-4 h-4" />
            {t("momentum.hero.badge")}
          </span>
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight mb-8 drop-shadow-lg">
            {t("momentum.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl leading-relaxed mb-10">
            {t("momentum.hero.subtitle")}
          </p>
          <CTAButton href="/contact">{t("momentum.hero.btn")}</CTAButton>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t("momentum.structure.title")}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t("momentum.structure.cards").map((card: { title: string; body: string }, index: number) => (
              <div key={card.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-primary">
                  {index === 0 ? <UsersRound className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary mb-4">{card.title}</h2>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-8 text-center">
            <p className="text-lg font-semibold text-primary leading-relaxed">
              {t("momentum.structure.note")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-wide leading-tight mb-6">
            {t("momentum.closing.title")}
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            {t("momentum.closing.body")}
          </p>
          <CTAButton href="/contact">{t("momentum.closing.btn")}</CTAButton>
        </div>
      </section>
    </div>
  );
}
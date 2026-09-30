import { CheckCircle2, CalendarDays, Video } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

export function Workshops() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-primary bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight mb-8 drop-shadow-lg">
            {t("workshops.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-10">
            {t("workshops.hero.subtitle")}
          </p>
          <CTAButton href="/contact">{t("workshops.hero.btn")}</CTAButton>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t("workshops.includes.title")}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t("workshops.includes.items").map((item: string, index: number) => (
              <div key={item} className="rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-primary">
                  {index === 0 ? <Video className="w-5 h-5" /> : index === 4 ? <CalendarDays className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                </div>
                <h2 className="font-heading font-bold text-xl text-primary">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t("workshops.pricing.title")}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t("workshops.pricing.options").map((option: { title: string; price: string; body: string }) => (
              <div key={option.title} className="rounded-2xl bg-white border border-gray-100 p-8 text-center shadow-lg">
                <p className="text-sm font-bold uppercase tracking-widest text-accent mb-4">{option.title}</p>
                <p className="font-heading font-black text-4xl text-primary mb-4">{option.price}</p>
                <p className="text-gray-600">{option.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-semibold text-primary">
            {t("workshops.pricing.note")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-wide leading-tight mb-6">
            {t("workshops.closing.title")}
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-10">
            {t("workshops.closing.body")}
          </p>
          <CTAButton href="/contact">{t("workshops.closing.btn")}</CTAButton>
        </div>
      </section>
    </div>
  );
}
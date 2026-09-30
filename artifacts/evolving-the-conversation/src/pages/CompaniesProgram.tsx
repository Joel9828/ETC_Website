import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function CompaniesProgram() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-primary text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80" />
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight drop-shadow-xl">
            {t('companiesProgram.hero.title')}
          </h1>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((num) => {
              const cardTitle = t(`companiesProgram.features.card${num}Title`);
              const bullets = t(`companiesProgram.features.card${num}Bullets`);
              return (
                <div key={num} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="font-heading font-black text-xl text-primary mb-6 border-b-2 border-accent pb-4 inline-block w-fit">
                    {cardTitle}
                  </h3>
                  <ul className="space-y-4 flex-grow text-gray-600 font-medium">
                    {bullets.map((bullet: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              {t('companiesProgram.features.btnConsultation')}
            </CTAButton>
            <CTAButton href="#footer">
              {t('companiesProgram.features.btnProposal')}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h2 className="font-heading font-black text-3xl md:text-5xl text-primary uppercase leading-tight">
              {t('companiesProgram.cta.title')}
            </h2>
            <div className="flex flex-col gap-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('companiesProgram.cta.body')}
              </p>
              <ul className="space-y-3">
                {t('companiesProgram.cta.bullets').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-4">
                <CTAButton variant="outline" href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {t('companiesProgram.features.btnConsultation')}
                </CTAButton>
                <CTAButton href="#footer">
                  {t('companiesProgram.features.btnProposal')}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stronger English Communication */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionHeading className="mb-12">{t('companiesProgram.stronger.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('companiesProgram.stronger.bullets').map((bullet: string, i: number) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-8 flex items-center justify-center text-lg font-medium text-center leading-relaxed">
                {bullet}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeading className="text-primary mb-4">{t('companiesProgram.method.title')}</SectionHeading>
          <p className="text-xl text-gray-600 mb-16">{t('companiesProgram.method.subtext')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {t('companiesProgram.method.cards').map((card: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden group hover:border-accent/50 transition-colors">
                <div className="text-6xl font-heading font-black text-gray-100 absolute -top-4 -right-4 group-hover:text-accent/10 transition-colors">
                  {card.num}
                </div>
                <h4 className="font-heading font-bold text-xl text-primary mb-4 relative z-10">{card.title}</h4>
                <p className="text-gray-600 relative z-10">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Model */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading className="mb-16">{t('companiesProgram.model.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {t('companiesProgram.model.cards').map((card: any, i: number) => (
              <div key={i} className="px-8 py-4 flex flex-col gap-4">
                <h4 className="font-heading font-bold text-2xl text-accent">{card.title}</h4>
                <p className="text-gray-300 text-lg">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Packages Include */}
      <section className="py-24 bg-[#F2F7FB]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeading className="text-primary mb-16">{t('companiesProgram.includes.title')}</SectionHeading>
          <div className="flex flex-wrap justify-center gap-4">
            {t('companiesProgram.includes.items').map((item: string, i: number) => (
              <div key={i} className="bg-white rounded-full px-6 py-3 shadow-md border border-accent/20 text-primary font-bold tracking-wide flex items-center gap-3">
                <span className="text-accent bg-accent/10 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {i + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading className="mb-16 text-center">{t('companiesProgram.modalities.title')}</SectionHeading>
          <div className="space-y-6">
            {t('companiesProgram.modalities.items').map((item: any, i: number) => (
              <div key={i} className="bg-white/5 border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/10 transition-colors">
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-xl mb-2 text-accent">{item.title}</h4>
                  <p className="text-gray-300">{item.body}</p>
                </div>
                <CTAButton variant="outline" href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional" className="shrink-0 text-sm py-2 px-4 whitespace-nowrap">
                  {t('companiesProgram.features.btnConsultation')}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-wide leading-tight mb-10">
            {t('companiesProgram.closing.title')}
          </h2>
          <CTAButton href="#footer" className="shadow-2xl">{t('companiesProgram.closing.btn')}</CTAButton>
        </div>
      </section>

    </div>
  );
}
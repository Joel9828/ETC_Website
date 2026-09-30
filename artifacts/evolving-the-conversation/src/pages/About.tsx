import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Shield, Lightbulb, Puzzle } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-primary bg-gradient-to-br from-[#0B1B3F] to-[#1E3A6E] text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="border border-white/20 rounded-2xl p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-wider mb-6 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
              {t('about.hero.body')}
            </p>
            <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional">{t('about.hero.btn')}</CTAButton>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-accent font-bold tracking-widest text-sm uppercase">{t('about.founder.label')}</span>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary uppercase tracking-wide">
                {t('about.founder.name')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.founder.body')}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/founder.jpg" 
                alt="Founder" 
                className="w-full h-full object-cover aspect-[4/5] object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-primary bg-gradient-to-br from-[#1E3A6E] to-[#0B1B3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16">{t('about.pillars.title')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <Shield className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('about.pillars.card1Title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.pillars.card1Body')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('about.pillars.card2Title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.pillars.card2Body')}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <Puzzle className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('about.pillars.card3Title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.pillars.card3Body')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t('about.programs.title')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-xl relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&fit=crop" 
                  alt="Corporations" 
                  className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-primary mb-4">{t('about.programs.corpTitle')}</h3>
              <ul className="space-y-2 text-gray-600">
                {t('about.programs.corpBullets').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-6 shadow-xl relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&fit=crop" 
                  alt="Professionals" 
                  className="w-full aspect-[16/9] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-primary mb-4">{t('about.programs.profTitle')}</h3>
              <ul className="space-y-2 text-gray-600">
                {t('about.programs.profBullets').map((bullet: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-primary bg-gradient-to-br from-[#0B1B3F] to-[#1E3A6E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16 text-white">{t('about.faq.title')}</SectionHeading>
          <FAQAccordion items={t('faqProfessionals')} />
        </div>
      </section>
    </div>
  );
}
import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";

export function Events() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-24 text-center">
        <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-widest">
          {t('events.title')}
        </h1>
      </section>
      
      <section className="flex-grow flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-8">
          <span className="text-4xl">📅</span>
        </div>
        <p className="text-2xl text-gray-500 font-medium mb-12">
          {t('events.comingSoon')}
        </p>
        <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional">{t('events.btn')}</CTAButton>
      </section>
    </div>
  );
}
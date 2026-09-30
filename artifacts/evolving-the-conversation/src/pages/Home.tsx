import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Users, Lightbulb, Puzzle, CheckCircle2 } from "lucide-react";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-primary bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl uppercase tracking-wider max-w-5xl leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            {t('home.hero.subtext')}
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 flex flex-col items-center gap-8">
            <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional">{t('home.hero.btn')}</CTAButton>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium tracking-wide bg-white/5 backdrop-blur-sm">
                {t('home.hero.tagCompany')}
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium tracking-wide bg-white/5 backdrop-blur-sm">
                {t('home.hero.tagProfessional')}
              </span>
              <span className="px-4 py-1.5 rounded-full border border-white/30 text-sm font-medium tracking-wide bg-white/5 backdrop-blur-sm">
                {t('home.hero.tagWorkshops')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Short Belief Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-12">{t('home.belief.label')}</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-primary leading-tight">
                {t('home.belief.title')}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {t('home.belief.body')}
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&fit=crop" 
                alt="Professional business meeting" 
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-24 bg-primary bg-gradient-to-br from-[#1E3A6E] to-[#0B1B3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16">{t('home.paths.title')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col h-full">
              <Users className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('home.paths.card1Title')}</h3>
              <p className="text-gray-300 flex-grow mb-8 leading-relaxed">
                {t('home.paths.card1Body')}
              </p>
              <CTAButton href="/companies" variant="outline" className="w-full mt-auto">
                {t('home.paths.card1Button')}
              </CTAButton>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col h-full">
              <Lightbulb className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('home.paths.card2Title')}</h3>
              <p className="text-gray-300 flex-grow mb-8 leading-relaxed">
                {t('home.paths.card2Body')}
              </p>
              <CTAButton href="/professionals" variant="outline" className="w-full mt-auto">
                {t('home.paths.card2Button')}
              </CTAButton>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col h-full">
              <Puzzle className="w-12 h-12 text-accent mb-6" />
              <h3 className="font-heading font-bold text-2xl mb-4">{t('home.paths.card3Title')}</h3>
              <p className="text-gray-300 flex-grow mb-8 leading-relaxed">
                {t('home.paths.card3Body')}
              </p>
              <CTAButton href="/events" variant="outline" className="w-full mt-auto">
                {t('home.paths.card3Button')}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading className="text-primary mb-6">{t('home.diff.title')}</SectionHeading>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-6 max-w-3xl mx-auto">
            {t('home.diff.subheading')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16 text-left">
            {t('home.diff.items').map((item: string) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 text-gray-700">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl relative w-full aspect-[21/9] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&fit=crop" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-wide leading-tight mb-6">
            {t('home.closing.title')}
          </h2>
          <p className="text-xl text-accent mb-12">
            {t('home.closing.subtext')}
          </p>
          <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional">{t('home.closing.btn')}</CTAButton>
        </div>
      </section>

    </div>
  );
}
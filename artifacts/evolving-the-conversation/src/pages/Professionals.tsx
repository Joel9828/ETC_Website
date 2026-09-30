import { useLanguage } from "@/context/LanguageContext";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function Professionals() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary bg-gradient-to-br from-[#0B1B3F] via-[#13284F] to-[#1E3A6E] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1400&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider leading-tight mb-8">
            {t('professionals.hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-100 max-w-3xl mx-auto mb-6 leading-tight">
            {t('professionals.hero.subheading')}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            {t('professionals.hero.body')}
          </p>
          <CTAButton href="/contact">{t('professionals.hero.btn')}</CTAButton>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-primary mb-8 leading-tight">
            {t('professionals.problem.title')}
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('professionals.problem.body')}
          </p>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-24 bg-primary bg-gradient-to-br from-[#1E3A6E] to-[#0B1B3F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16">{t('professionals.help.title')}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t('professionals.help.items').map((item: string) => (
              <div key={item} className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                <span className="text-gray-200 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-8">{t('professionals.approach.title')}</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t('professionals.approach.items').map((item: string) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-4 text-gray-700">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-primary mb-16">{t('professionals.who.title')}</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t('professionals.who.items').map((item: string) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-wide leading-tight mb-6">
            {t('professionals.callout.title')}
          </h2>
          <p className="text-xl text-accent mb-10">
            {t('professionals.callout.body')}
          </p>
          <CTAButton href="https://koalendar.com/e/professional-english-consultation-or-consulta-corporativa-de-ingles-profesional">
            {t('professionals.callout.btn')}
          </CTAButton>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl mx-auto text-center text-xl text-gray-600 leading-relaxed mb-16">
            {t('professionals.programs.body')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t('professionals.programs.teasers').map((program: { title: string; body: string; badge: string; btn: string; href: string }) => (
              <div key={program.title} className="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                {program.badge && (
                  <span className="self-start rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-5">
                    {program.badge}
                  </span>
                )}
                <h3 className="font-heading font-bold text-2xl text-primary mb-4">{program.title}</h3>
                <p className="flex-grow text-gray-600 leading-relaxed mb-8">{program.body}</p>
                <CTAButton href={program.href} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  {program.btn}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
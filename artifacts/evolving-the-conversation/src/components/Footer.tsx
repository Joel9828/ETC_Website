import { useLanguage } from "@/context/LanguageContext";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: t('footer.successToast'),
      description: "You will start receiving our newsletter soon.",
    });
    setEmail("");
  };

  return (
    <footer id="footer" className="bg-[#0B1B3F] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-primary rounded-lg flex items-center justify-center font-heading font-black text-xl">
                EC
              </div>
              <span className="font-heading font-bold tracking-widest uppercase text-sm w-32">
                {t('footer.tagline')}
              </span>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+50762070905" className="hover:text-accent transition-colors">{t('footer.phone')}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:evolvingtheconversation2@gmail.com" className="hover:text-accent transition-colors break-all">{t('footer.email')}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-lg">{t('footer.companyLinks')}</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link>
              <Link href="/about" className="hover:text-accent transition-colors">{t('nav.about')}</Link>
              <Link href="/blogs" className="hover:text-accent transition-colors">{t('nav.blogs')}</Link>
              <Link href="/companies" className="hover:text-accent transition-colors">{t('nav.programs')}</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-lg">{t('footer.helpLinks')}</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="#" className="hover:text-accent transition-colors">{t('footer.support')}</a>
              <a href="#" className="hover:text-accent transition-colors">{t('footer.terms')}</a>
              <span className="cursor-default">{t('footer.privacy')}</span>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-lg">{t('footer.newsletterTitle')}</h4>
            <p className="text-sm text-gray-300">{t('footer.newsletterDesc')}</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 mt-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="bg-white/10 border border-white/20 rounded px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <button type="submit" className="bg-accent hover:bg-accent/90 text-white font-bold py-2 px-4 rounded transition-colors">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
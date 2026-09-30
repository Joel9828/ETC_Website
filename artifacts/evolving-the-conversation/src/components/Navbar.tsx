import { useLanguage } from "@/context/LanguageContext";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.events'), href: '/events' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.blogs'), href: '/blogs' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/logo.jpg"
              alt="Evolving the Conversation"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.home')}
            </Link>
            
            {/* Dropdown */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className={cn("flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors", 
                location.startsWith('/companies') || location.startsWith('/professionals') ? 'text-primary' : 'text-gray-600')}>
                {t('nav.programs')} <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className={cn("absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-xl overflow-hidden transition-all duration-200 origin-top", dropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0")}>
                <div className="py-2 flex flex-col">
                  <Link href="/companies" className="px-5 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-700 hover:text-primary">
                    {t('nav.companies')}
                  </Link>
                  <Link href="/professionals" className="px-5 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-700 hover:text-primary">
                    {t('nav.professionals')}
                  </Link>
                  <Link href="/companies/program" className="px-5 py-3 hover:bg-gray-50 text-sm font-semibold text-gray-700 hover:text-primary">
                    {t('nav.corporateDetail')}
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/events" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/events' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.events')}
            </Link>
            
            <Link href="/about" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/about' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.about')}
            </Link>

            <Link href="/pricing" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/pricing' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.pricing')}
            </Link>

            <Link href="/blogs" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/blogs' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.blogs')}
            </Link>

            <Link href="/contact" className={cn("text-sm font-semibold hover:text-primary transition-colors", location === '/contact' ? 'text-primary' : 'text-gray-600')}>
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center gap-2 border-l pl-6 border-gray-200">
              <button 
                onClick={() => setLang('en')}
                className={cn("text-xs font-bold px-2 py-1 rounded transition-colors", lang === 'en' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100')}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('es')}
                className={cn("text-xs font-bold px-2 py-1 rounded transition-colors", lang === 'es' ? 'bg-primary text-white' : 'text-gray-500 hover:bg-gray-100')}
              >
                ES
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* 3px Accent Line */}
      <div className="h-[3px] w-full bg-accent" />

      {/* Mobile Slide-down Panel */}
      <div className={cn("md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300", mobileMenuOpen ? "max-h-screen border-b border-gray-100" : "max-h-0")}>
        <div className="flex flex-col py-4 px-4 gap-4">
          <Link href="/" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</Link>
          
          <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase">{t('nav.programs')}</span>
            <Link href="/companies" className="text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>{t('nav.companies')}</Link>
            <Link href="/professionals" className="text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>{t('nav.professionals')}</Link>
            <Link href="/companies/program" className="text-gray-700 font-medium" onClick={() => setMobileMenuOpen(false)}>{t('nav.corporateDetail')}</Link>
          </div>

          <Link href="/events" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.events')}</Link>
          <Link href="/about" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</Link>
          <Link href="/pricing" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</Link>
          <Link href="/blogs" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.blogs')}</Link>
          <Link href="/contact" className="font-semibold text-gray-800" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</Link>
          
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <button 
              onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
              className={cn("text-sm font-bold px-4 py-2 rounded transition-colors flex-1", lang === 'en' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600')}
            >
              ENGLISH
            </button>
            <button 
              onClick={() => { setLang('es'); setMobileMenuOpen(false); }}
              className={cn("text-sm font-bold px-4 py-2 rounded transition-colors flex-1", lang === 'es' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600')}
            >
              ESPAÑOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
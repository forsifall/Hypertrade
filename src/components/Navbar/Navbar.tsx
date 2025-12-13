'use client';
import { useState } from "react";
import { Menu, Wallet, X } from "lucide-react"; 
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const extractLangFromPath = (): string => {
    const segments = pathname.split('/').filter(Boolean);
    const lang = segments[0];

    const supportedLangs = ['en', 'ru', 'ja'];
    return supportedLangs.includes(lang) ? lang : 'en';
  };
  
  const currentLang = extractLangFromPath();
  
  const isActive = (href: string) => {
    const fullPath = `/${currentLang}${href === '/' ? '' : href}`;
    return pathname === fullPath || pathname.startsWith(`${fullPath}/`);
  };
  
  const isHomePage = pathname === `/${currentLang}` || pathname === `/${currentLang}/`;
  
  const translations = {
    en: {
      about: "About",
      blog: "Blog",
      advantages: "Advantages",
      integrations: "Integrations",
      faq: "FAQ",
      contacts: "Contacts",
      connectWallet: "Connect Wallet",
    },
    ru: {
      about: "О нас",
      blog: "Блог",
      advantages: "Преимущества",
      integrations: "Интеграции",
      faq: "Частые вопросы",
      contacts: "Контакты",
      connectWallet: "Подключить кошелек",
    },
    ja: {
      about: "私たちについて",
      blog: "ブログ",
      advantages: "利点",
      integrations: "統合",
      faq: "よくある質問",
      contacts: "連絡先",
      connectWallet: "ウォレットを接続",
    },
  };
  
  const t = translations[currentLang as keyof typeof translations] || translations.en;
  
  // Создание ссылок
  const createLink = (path: string) => {
    if (path.startsWith('#')) return path;
    if (path === '/') return `/${currentLang}`;
    return `/${currentLang}${path}`;
  };
  
  // Навигационные ссылки
  const navLinks = [
    { href: '/about', label: t.about },
    { href: '/blog', label: t.blog },
    { href: '/advantages', label: t.advantages },
    { href: '/integrations', label: t.integrations },
    { href: '/faq', label: t.faq },
    { href: '/contacts', label: t.contacts },
  ];
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-hyper-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href={createLink('/')} className="flex items-center gap-2 focus:outline-none">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-hyper-accent to-hyper-secondary flex items-center justify-center font-bold text-white">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Hypertrade
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map(({ href, label }) => {
                const isAnchor = href.startsWith('#');
                
                return (
                  <Link
                    key={href}
                    href={createLink(href)}
                    className={`hover:text-hyper-accent transition-colors px-3 py-2 text-sm font-medium ${
                      isAnchor
                        ? (isHomePage ? 'text-white' : 'text-gray-300')
                        : (isActive(href) ? 'text-hyper-accent' : 'text-gray-300')
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Десктопные кнопки справа */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-hyper-accent/10 hover:bg-hyper-accent/20 text-hyper-accent border border-hyper-accent/50 px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2">
              <Wallet size={16} />
              {t.connectWallet}
            </button>
          </div>

          {/* Мобильное меню */}
          <div className="-mr-2 flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню (выпадающее) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-hyper-800 border-b border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => {
              const isAnchor = href.startsWith('#');
              
              return (
                <Link
                  key={href}
                  href={createLink(href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                    isAnchor
                      ? (isHomePage ? 'text-white' : '')
                      : (isActive(href) ? 'text-hyper-accent' : '')
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            
            <button className="w-full text-left text-hyper-accent block px-3 py-2 rounded-md text-base font-medium mt-2">
              {t.connectWallet}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
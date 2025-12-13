'use client';

import { Language } from "@/app/translations";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const extractLangFromPath = (): Language => {
    const segments = pathname.split('/').filter(Boolean);
    const possibleLang = segments[0];
    
    if (possibleLang === 'ru' || possibleLang === 'ja') {
      return possibleLang;
    }
    return 'en'; 
  };

  const currentLang = extractLangFromPath();

  const getPathWithoutLang = (): string => {
    if (currentLang === 'en' && pathname.startsWith('/en')) {
      return pathname.replace('/en', '') || '/';
    }
    if (currentLang === 'ru' && pathname.startsWith('/ru')) {
      return pathname.replace('/ru', '') || '/';
    }
    if (currentLang === 'ja' && pathname.startsWith('/ja')) {
      return pathname.replace('/ja', '') || '/';
    }
    return pathname; 
  };

  const pathWithoutLang = getPathWithoutLang();

  const switchLanguage = (newLang: Language) => {
    const newPath = `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2 bg-hyper-800/50 rounded-lg p-1 border border-gray-700">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 text-xs font-bold rounded ${
          currentLang === "en"
            ? "bg-hyper-700 text-white"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ru")}
        className={`px-2 py-1 text-xs font-bold rounded ${
          currentLang === "ru"
            ? "bg-hyper-700 text-white"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => switchLanguage("ja")}
        className={`px-2 py-1 text-xs font-bold rounded ${
          currentLang === "ja"
            ? "bg-hyper-700 text-white"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        JA
      </button>
    </div>
  );
};
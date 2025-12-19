"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Language } from "@/app/translations";

export const LanguageSwitcher = ({ lang }: { lang: Language }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n, ready } = useTranslation();

  const [mounted, setMounted] = useState(false);

useLayoutEffect(() => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  setMounted(true);
}, []);
  const extractLangFromPath = (): Language => {
    const segments = pathname.split("/").filter(Boolean);
    const possibleLang = segments[0];
    if (possibleLang === "ru" || possibleLang === "ja") return possibleLang;
    return "en";
  };

  const currentLang = extractLangFromPath();

  const getPathWithoutLang = (): string => {
    if (["en", "ru", "ja"].includes(currentLang)) {
      return pathname.replace(`/${currentLang}`, "") || "/";
    }
    return pathname;
  };

  const pathWithoutLang = getPathWithoutLang();

  const switchLanguage = (newLang: Language) => {
    if (!mounted || !ready) return; 
    i18n.changeLanguage(newLang);
    const newPath = `/${newLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`;
    router.push(newPath);
  };

  if (!mounted) return null; 

  return (
    <div className="flex items-center gap-2 bg-hyper-800/50 rounded-lg p-1 border border-gray-700">
      {["en", "ru", "ja"].map((l) => (
        <button
          key={l}
          onClick={() => switchLanguage(l as Language)}
          className={`px-2 py-1 text-xs font-bold rounded ${
            currentLang === l
              ? "bg-hyper-700 text-white"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
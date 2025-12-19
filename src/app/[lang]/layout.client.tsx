"use client";

import "../../i18n"; // инициализация i18next
import React from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/other/ChatWidget";
import { Language } from "../translations";

interface ClientLayoutProps {
  children: React.ReactNode;
  lang: Language;
}

export default function ClientLayout({ children, lang }: ClientLayoutProps) {


  return (
    <>
      <Navbar lang={lang} />
      {children}
      <Footer lang={lang} />
      <ChatWidget lang={lang} />
    </>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Language } from "../translations";
import {Footer} from "@/components/Footer";
import { ChatWidget } from "@/components/other/ChatWidget";

export const metadata: Metadata = {
  title: "Hypertrade — агрегатор DEX для Hyperliquid",
  description: "Лучший DEX-агрегатор на Hyperliquid",
};

export default async function RootLayout({
  children,
  params, 
}: {
  children: React.ReactNode;
  params: { lang: Language }; 
}) {

  const lang = (await params).lang;

  return (
    <html>
      <body>
        <Navbar/>
        {children}
        <Footer lang={lang}></Footer>
        <ChatWidget lang={lang}/>
      </body>
    </html>
  );
}

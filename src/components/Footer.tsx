// --- Footer ---

import { getDictionary, Language } from "@/app/translations";
import Link from "next/link";

// eslint-disable-next-line
export const Footer = ({ lang }:{ lang: Language}) => {

      const translationData = getDictionary(lang);

  return (
    <>
      <footer className="bg-hyper-950 border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-hyper-accent to-hyper-secondary flex items-center justify-center font-bold text-white text-xs">
                  H
                </div>
                <span className="font-bold text-lg text-white">Hypertrade</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                {translationData.footer.desc}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">
                {translationData.footer.platform}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-hyper-accent transition-colors"
                  >
                    Terminal
                  </a>
                </li>
                <li>
                  <Link
                    href={`/${lang}/about`}
                    className="hover:text-hyper-accent transition-colors text-left"
                  >
                    {translationData.nav.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/blog`}
                    className="hover:text-hyper-accent transition-colors text-left"
                  >
                    {translationData.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/faq`}
                    className="hover:text-hyper-accent transition-colors text-left"
                  >
                    {translationData.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${lang}/contacts`}
                    className="hover:text-hyper-accent transition-colors text-left"
                  >
                    {translationData.nav.contacts}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">
                {translationData.footer.community}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-hyper-accent transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-hyper-accent transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-hyper-accent transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              {translationData.footer.rights}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

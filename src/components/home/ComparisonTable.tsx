import { getDictionary } from "@/app/translations";
import { Language } from "../types";
import { CheckCircle, X } from "lucide-react";

// --- Comparison Table Section (New) ---
export function ComparisonTable ({ lang }: { lang: Language }) {
  const translationData = getDictionary(lang);
  
  return (
    <section className="py-20 bg-hyper-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{translationData.comparison.title}</h2>
          <p className="text-gray-400">{translationData.comparison.subtitle}</p>
        </div>

        <div className="overflow-x-auto glass-panel rounded-2xl border border-gray-800">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-hyper-800/50 text-white border-b border-gray-700">
                <th className="p-4 sm:p-6 font-bold">
                  {translationData.comparison.headers[0]}
                </th>
                <th className="p-4 sm:p-6 font-bold text-hyper-accent">
                  {translationData.comparison.headers[1]}
                </th>
                <th className="p-4 sm:p-6 font-bold text-gray-400">
                  {translationData.comparison.headers[2]}
                </th>
                <th className="p-4 sm:p-6 font-bold text-gray-400">
                  {translationData.comparison.headers[3]}
                </th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
                 {/* eslint-disable-next-line */}
              {translationData.comparison.rows.map((row: any, idx: number) => (
                <tr
                  key={idx}
                  className="border-b border-gray-800 last:border-0 hover:bg-hyper-800/30 transition-colors"
                >
                  <td className="p-4 sm:p-6 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-6 text-hyper-accent font-bold">
                    {row.hypertrade === true ? (
                      <CheckCircle size={20} />
                    ) : (
                      row.hypertrade
                    )}
                  </td>
                  <td className="p-4 sm:p-6 text-red-400">
                    {row.dex === false ? (
                      <X size={20} />
                    ) : row.dex === true ? (
                      <CheckCircle size={20} className="text-green-500" />
                    ) : (
                      row.dex
                    )}
                  </td>
                  <td className="p-4 sm:p-6 text-yellow-400">
                    {row.others === false ? (
                      <X size={20} />
                    ) : row.others === true ? (
                      <CheckCircle size={20} className="text-green-500" />
                    ) : (
                      row.others
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-gray-300 italic max-w-3xl mx-auto">
          {translationData.comparison.conclusion}
        </p>
      </div>
    </section>
  );
};

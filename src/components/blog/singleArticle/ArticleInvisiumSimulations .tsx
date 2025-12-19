/* eslint-disable */
// @ts-nocheck
"use client"
import { Language } from "@/app/translations";
import BackButton from "@/components/ui/BackButton";
import { Cpu, Shield, Zap, Target, BarChart, Clock, Calendar, CheckCircle, AlertCircle, Layers, Search, Navigation, PieChart, Users, Globe, Lock, Brain } from "lucide-react";
import Link from "next/link";
import { getBlogPosts } from "../data";
import { useTranslation } from "react-i18next";

// --- Single Blog Article Component (Invisium Simulations) ---
export const ArticleInvisiumSimulations = ({lang}:{lang:Language}) => {
    // eslint-disable-next-line
  const post = getBlogPosts(lang).find((curr:any) => curr.id === "invisium-simulations");
    
      const { t } = useTranslation();
  return (
    <section className="bg-hyper-900 min-h-screen pb-20">
  {/* Header Image/Gradient */}
  <div className="h-64 md:h-80 w-full bg-gradient-to-r from-purple-900 via-violet-900 to-hyper-900 relative">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hyper-900 to-transparent"></div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-12 relative z-10">
      <div className="flex flex-wrap gap-4 text-sm font-medium text-hyper-accent mb-4">
        <span className="bg-hyper-accent/10 px-3 py-1 rounded-full border border-hyper-accent/20">Технологии</span>
        <span className="flex items-center gap-1 text-gray-400"><Clock size={14} /> 7 мин чтения</span>
        <span className="flex items-center gap-1 text-gray-400"><Calendar size={14} /> 12.12.2025</span>
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
        {post.title_8g7t}
      </h1>
    </div>
  </div>

  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">
      {/* Введение */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
        <AlertCircle className="text-red-400" /> {post.introTitle_m4n1}
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
        {post.introText_3k9f}
      </p>
      
      <div className="bg-hyper-800/50 p-6 rounded-xl border border-gray-700 my-8">
        <h4 className="font-bold text-white mb-4">{t(`Классическая проблема DeFi-трейдинга:`)}</h4>
        <ul className="space-y-3 text-gray-300">
          {/* eslint-disable-next-line */}
          {post.introList_7v5b.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <p className="text-gray-400 border-l-4 border-gray-600 pl-6 italic">
        {t(post.introNote_r2d8)}
      </p>

      {/* Решение */}
      <div className="bg-gradient-to-r from-green-900/20 to-hyper-accent/20 p-8 rounded-2xl border border-green-900/30 my-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Zap className="text-yellow-400" /> {t(post.solutionTitle_h6p0)}
        </h2>
        <p className="text-gray-300 mb-6">{t(post.solutionDesc_t4s9)}</p>
        <div className="space-y-4">
          {/* eslint-disable-next-line */}
          {post.solutionList_j8k3.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
              <span className="text-white">{t(item)}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-400 mt-6">{t(post.solutionNote_q1w2)}</p>
      </div>

      {/* Что такое Invisium */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
        <Cpu className="text-purple-400" /> {t(post.whatIsTitle_f5n8)}
      </h2>
      
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl my-8">
        <h3 className="text-xl font-bold text-white mb-3">{t(post.definitionTitle_e3m7)}</h3>
        <p className="text-gray-300">{t(post.definitionText_x6r9)}</p>
      </div>

      <h3 className="text-xl font-bold text-white mt-10 mb-4">{t(post.principleTitle_v4s1)}</h3>
      <div className="space-y-6 not-prose mb-12">
        {/* eslint-disable-next-line */}
        {post.principleSteps_1k8p.map((step, idx) => (
          <div key={idx} className="bg-hyper-800/20 p-6 rounded-xl border-l-4 border-hyper-accent">
            <div className="flex items-center gap-4">
              <div className="bg-hyper-accent/20 text-hyper-accent font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-white m-0">{t(step)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Сравнение */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-8">{t(post.whyImportantTitle_b3m9)}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
        {/* Без симуляции */}
        <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-xl">
          <h3 className="text-red-400 font-bold mb-6 border-b border-red-900/30 pb-3 flex items-center gap-2">
            <AlertCircle size={20} /> {t(post.withoutSimTitle_c7f2)}
          </h3>
          <div className="space-y-4 text-sm">
            <div className="bg-red-900/20 p-4 rounded-lg">
              <p className="text-gray-300 font-mono">{t(post.withoutSimQuote_p4t6)}</p>
            </div>
            <div className="bg-red-900/30 p-4 rounded-lg">
              <p className="text-red-300 font-mono">{t(post.withoutSimResult_n8j5)}</p>
            </div>
            <div className="text-center bg-red-900/40 p-3 rounded-lg border border-red-900/50">
              <p className="text-red-300 font-bold text-lg">{t(post.withoutSimLoss_h3k8)}</p>
            </div>
          </div>
        </div>

        {/* С симуляцией */}
        <div className="bg-green-900/10 border border-green-900/30 p-6 rounded-xl">
          <h3 className="text-green-400 font-bold mb-6 border-b border-green-900/30 pb-3 flex items-center gap-2">
            <CheckCircle size={20} /> {t(post.withSimTitle_v9r1)}
          </h3>
          <div className="space-y-4 text-sm">
            <div className="bg-green-900/20 p-4 rounded-lg">
              <p className="text-gray-300 font-mono">{t(post.withSimQuote_j2f7)}</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg">
              <p className="text-green-300 font-mono">{t(post.withSimResult_p6t3)}</p>
            </div>
            <div className="space-y-2">
              <div className="bg-green-900/20 p-3 rounded">
                <p className="text-gray-300 font-mono">{t(post.withSimDiff_m8b4)}</p>
              </div>
              <div className="bg-green-900/30 p-3 rounded">
                <p className="text-green-300 font-mono font-bold">{t(post.withSimAccuracy_g5h9)}</p>
              </div>
            </div>
            <div className="text-center bg-green-900/40 p-3 rounded-lg border border-green-900/50">
              <p className="text-green-300 font-bold text-lg">{t(post.withSimSaving_k2f1)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA блок */}
      <div className="bg-gradient-to-r from-purple-900/30 to-hyper-accent/30 p-8 rounded-2xl border border-hyper-accent/30 text-center not-prose mt-12">
        <h3 className="text-2xl font-bold text-white mb-6">{t(`Начните торговать с точностью 99.9% уже сегодня`)}</h3>
        <p className="text-gray-300 mb-6">{t(`Подключите Hypertrade и получите доступ к технологии Invisium Simulations`)}</p>
        <button className="bg-hyper-accent text-hyper-900 font-bold py-3 px-8 rounded-xl hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
          {t(`Подключить кошелёк`)}
        </button>
      </div>
    </article>
  </div>

 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">
      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{t(post.title_1a3)}</h1>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Navigation className="text-blue-400"/> {t(post.step1_4b7)}</h2>
      <p>{t(post.step1_desc_5c2)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {post.step1_list_6d9.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <p>{t(post.step1_result_7e1)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        {post.step1_routes_8f4.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Cpu className="text-purple-400"/> {t(post.step2_9g5)}</h2>
      <p>{t(post.step2_desc_0h3)}</p>
      <ul className="list-decimal list-inside text-gray-300 mb-4">
        {post.step2_steps_1j8.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <p>{t(post.step2_tech_2k4)}</p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Layers className="text-hyper-secondary"/> {t(post.step3_3l7)}</h2>
      <div className="overflow-x-auto not-prose mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Маршрут`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Симулированный результат`)}</th>
              <th className="p-4 text-red-400 font-medium">{t(`Price Impact`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Gas Cost`)}</th>
              <th className="p-4 text-green-400 font-medium">{t(`Итоговая выгода`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {post.step3_table_4m2.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-800 bg-hyper-800/20">
                <td className="p-4 text-white">{t(row.route)}</td>
                <td className="p-4 text-gray-300">{t(row.output)}</td>
                <td className="p-4 text-red-300">{t(row.impact)}</td>
                <td className="p-4 text-gray-300">{t(row.gas)}</td>
                <td className="p-4 text-green-300 font-bold">{t(row.final)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-8">{t(post.step3_choice_5n9)}</p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><CheckCircle className="text-green-400"/> {t(post.step4_6p0)}</h2>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        {post.step4_screen_7q2.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Zap className="text-yellow-400"/> {t(post.step5_8r4)}</h2>
      <ul className="list-disc list-inside text-gray-300 mb-12">
        {post.step5_desc_9s1.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t(post.benefits_title_0t2)}</h2>
      <h3 className="text-xl font-bold text-white mt-4 mb-2">{t(post.benefit1_1u3)}</h3>
      <p className="italic text-gray-400">{t(post.benefit1_problem_2v4)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-2">
        {post.benefit1_problem_list_3w5.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <p className="italic text-gray-400">{t(post.benefit1_solution_4x6)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {post.benefit1_solution_list_5y7.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <p>{t(post.benefit1_example_6z8)}</p>
      <p className="text-red-400">{t(post.benefit1_without_7a1)}</p>
      <p className="text-green-400 mb-8">{t(post.benefit1_with_8b2)}</p>

      <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(post.benefit2_9c3)}</h3>
      <p>{t(post.benefit2_desc_0d4)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {post.benefit2_list_1e5.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <ul className="list-disc list-inside text-gray-400 mb-8">
        {post.benefit2_stats_2f6.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(post.benefit3_3g7)}</h3>
      <p>{t(post.benefit3_desc_4h8)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-2">
        {post.benefit3_list_5i9.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <ul className="list-decimal list-inside text-gray-400 mb-8">
        {post.benefit3_example_6j0.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(post.benefit4_7k1)}</h3>
      <p>{t(post.benefit4_desc_8l2)}</p>
      <div className="overflow-x-auto not-prose mb-8">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Маршрут`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Output`)}</th>
              <th className="p-4 text-red-400 font-medium">{t(`Impact`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Gas`)}</th>
              <th className="p-4 text-green-400 font-medium">{t(`Total`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {post.benefit4_table_9m3.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-800 bg-hyper-800/20">
                <td className="p-4 text-white">{t(row.route)}</td>
                <td className="p-4 text-gray-300">{t(row.output)}</td>
                <td className="p-4 text-red-300">{t(row.impact)}</td>
                <td className="p-4 text-gray-300">{t(row.gas)}</td>
                <td className="p-4 text-green-300 font-bold">{t(row.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold text-white mt-6 mb-2">{t(post.benefit5_0n4)}</h3>
      <p>{t(post.benefit5_desc_1o5)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-12">
        {post.benefit5_adv_2p6.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
    </article>
  </div>


<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{t(post.title_1a5)}</h1>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Navigation className="text-blue-400"/> {t(post.step1_2b6)}</h2>
      <p>{t(post.step1_desc_3c7)}</p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Search className="text-hyper-accent"/> {t(post.step2_4d8)}</h2>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        {post.step2_list_5e9.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Cpu className="text-purple-400"/> {t(post.step3_6f0)}</h2>
      <p>{t(post.step3_desc_7g1)}</p>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.step3_screen_8h2.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Layers className="text-hyper-secondary"/> {t(post.step4_9i3)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.step4_list_0j4.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><AlertCircle className="text-red-400"/> {t(post.step5_1k5)}</h2>
      <p>{t(post.step5_desc_2l6)}</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        {post.step5_list_3m7.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>
      <p className="italic text-gray-400 mb-8">{t(post.step5_tip_4n8)}</p>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><CheckCircle className="text-green-400"/> {t(post.step6_5o9)}</h2>
      <ul className="list-decimal list-inside text-gray-300 mb-8">
        {post.step6_list_6p0.map((item, idx) => <li key={idx}>{t(item)}</li>)}
      </ul>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Clock className="text-hyper-accent"/> {t(post.step7_7q1)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 space-y-2">
        {post.step7_screen_8r2.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Layers className="text-hyper-secondary"/> {t(post.comparison_title_9s3)}</h2>
      <div className="overflow-x-auto not-prose mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-gray-400 font-medium">{t(`Параметр`)}</th>
              <th className="p-4 text-gray-400 font-medium">{t(`Традиционный DEX`)}</th>
              <th className="p-4 text-green-400 font-medium">{t(`Hypertrade Invisium`)}</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {post.comparison_table_0t4.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-800 bg-hyper-800/20">
                <td className="p-4 text-white">{t(row.param)}</td>
                <td className="p-4 text-gray-300">{t(row.dex)}</td>
                <td className="p-4 text-green-300 font-bold">{t(row.invisium)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-300 mb-12">{t(post.comparison_conclusion_1u5)}</p>
    </article>
  </div>

<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{t(post.title_1a6)}</h1>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Layers className="text-hyper-secondary"/> {t(post.case1_2b7)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.case1_desc_3c8.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Zap className="text-yellow-400"/> {t(post.case2_4d9)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.case2_desc_5e0.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><CheckCircle className="text-green-400"/> {t(post.case3_6f1)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.case3_desc_7g2.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><AlertCircle className="text-red-400"/> {t(post.limits_title_8h3)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-8 space-y-2">
        {post.limits_list_9i4.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Layers className="text-hyper-secondary"/> {t(post.tips_title_0j5)}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 space-y-2">
        {post.tips_list_1k6.map((item, idx) => <p key={idx} className="text-gray-300">{t(item)}</p>)}
      </div>

    </article>
  </div>


 <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
    <article className="prose prose-invert prose-lg max-w-none">

      <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{post.faq_title_1a}</h1>

      {/* FAQ Items */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <Layers className="text-hyper-secondary" />
            {post[`faq_${i+1}b`]}
          </h2>
          <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl space-y-2">
            {Array.isArray(post[`faq_${i+1}_desc_${i+2}c`]) 
              ? post[`faq_${i+1}_desc_${i+2}c`].map((item:any, idx:number) => <p key={idx} className="text-gray-300">{item}</p>)
              : <p className="text-gray-300">{post[`faq_${i+1}_desc_${i+2}c`]}</p>}
          </div>
        </div>
      ))}

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3"><Zap className="text-yellow-400"/> {post.conclusion_title_12d}</h2>
      <div className="bg-hyper-800/30 border border-gray-700 p-6 rounded-xl mb-12 space-y-2">
        {post.conclusion_list_13e.map((item, idx) => <p key={idx} className="text-gray-300">{item}</p>)}
      </div>

    </article>
  </div>
</section>
  );
};
import { getDictionary, Language } from "@/app/translations";
import { AlertCircle, BookOpen, Briefcase, Calendar, Clock, ExternalLink, FileText, Globe, Landmark, LifeBuoy, Mail, MapPin, Navigation, Phone, Send, User, Wallet } from "lucide-react";

// --- Contacts Component ---
export function Contacts({ lang }: { lang: Language }) {
  const translationData = getDictionary(lang);

// eslint-disable-next-line
  const contacts = translationData.contacts as any;

  const {
    address = [],
    phoneList = [],
    emailList = [],
    socials = [],
    emergency,
    meetings,
    coworking,
    keyContacts,
    companyInfo,
    banking,
    regional,
    legalSupport,
    supportChannels,
    education,
  } = contacts;

  return (
    <section className="py-20 bg-hyper-900 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {translationData.contacts.title}
        </h2>

        {/* Main Grid: Office & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Office Info */}
          <div className="glass-panel p-8 rounded-2xl lg:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <MapPin className="text-hyper-accent" /> {translationData.contacts.office}
            </h3>
            <div className="text-gray-400 space-y-1 text-sm">
              {address.map((line: string, idx: number) => (
                <p
                  key={idx}
                  className={idx === 0 ? "font-semibold text-white" : ""}
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Clock className="text-hyper-secondary" size={16} />{" "}
                {translationData.contacts.hours}
              </h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>{translationData.contacts.hoursVal}</p>
                <p>
                  <span className="text-red-400">{translationData.contacts.weekend}</span>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Navigation className="text-blue-400" size={16} />{" "}
                {translationData.contacts.howToGet}
              </h4>
              <ul className="text-sm text-gray-400 space-y-2">
                {translationData.contacts.directions?.map((dir: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    {dir}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Channels */}
          <div className="glass-panel p-8 rounded-2xl lg:col-span-1 flex flex-col gap-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <Phone className="text-green-400" /> {translationData.contacts.contactUs}
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  {translationData.contacts.phones}
                </p>
                <ul className="space-y-2 text-sm">
                    {/* eslint-disable-next-line */}
                  {phoneList.map((item: any, idx: number) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-gray-400">{item.label}:</span>{" "}
                      <a
                        href={item.href}
                        className="text-white hover:text-hyper-accent whitespace-nowrap"
                      >
                        {item.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  Email
                </p>
                <ul className="space-y-2 text-sm">
                    {/* eslint-disable-next-line */}
                  {emailList.map((item: any, idx: number) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-gray-400">{item.label}:</span>{" "}
                      <a
                        href={`mailto:${item.email}`}
                        className="text-white hover:text-hyper-accent"
                      >
                        {item.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-gray-700/50">
                <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                  {translationData.contacts.messengers}
                </p>
                <a
                  href={translationData.contacts.messengerLink?.href || "#"}
                  className="flex items-center gap-2 text-sm text-hyper-accent hover:underline"
                >
                  <Send size={14} /> {translationData.contacts.messengerLink?.label}
                </a>
              </div>
            </div>
          </div>

          {/* Emergency & Socials */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Emergency Block */}
            <div className="glass-panel p-6 rounded-2xl border border-red-500/30 bg-red-950/10">
              <h3 className="text-lg font-bold flex items-center gap-2 text-red-400 mb-4">
                <AlertCircle /> {emergency.title}
              </h3>
              <div className="text-sm space-y-3">
                <div className="flex justify-between items-center bg-hyper-900/50 p-2 rounded border border-gray-800/50">
                  <span className="text-gray-300 text-xs">Telegram SOS:</span>
                  <a
                    href="#"
                    className="text-white font-mono hover:text-red-400 text-xs"
                  >
                    {emergency.telegram}
                  </a>
                </div>
                <div className="flex justify-between items-center bg-hyper-900/50 p-2 rounded border border-gray-800/50">
                  <span className="text-gray-300 text-xs">Email Urgent:</span>
                  <a
                    href={`mailto:${emergency.email}`}
                    className="text-white font-mono hover:text-red-400 text-xs"
                  >
                    {emergency.email}
                  </a>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 italic">
                  {emergency.desc}
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-panel p-6 rounded-2xl flex-1">
              <h3 className="text-lg font-bold flex items-center gap-2 text-white mb-4">
                <Globe className="text-purple-400" /> {translationData.contacts.community}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {/* eslint-disable-next-line */}
                {socials.map((item: any, idx: number) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between p-2 bg-hyper-800 rounded hover:bg-hyper-700 text-sm text-gray-300 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink size={14} className="text-blue-500" />{" "}
                      {item.label}
                    </span>
                    <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.handle}
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <a
                  href="mailto:calendar@hypertrade.io"
                  className="flex items-center gap-2 text-sm text-hyper-accent hover:text-white transition-colors"
                >
                  <Calendar size={14} /> Calendly Booking
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Dynamic Key Contacts (Team) --- */}
        {keyContacts && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Briefcase className="text-hyper-accent" /> Key Contacts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* eslint-disable-next-line */}
              {keyContacts.map((contact: any, idx: number) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-xl border border-gray-800 hover:border-hyper-accent/30 transition-colors"
                >
                  <div className="font-bold text-lg text-white mb-1">
                    {contact.name}
                  </div>
                  <div className="text-hyper-accent text-xs uppercase font-semibold mb-3">
                    {contact.role}
                  </div>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex items-center gap-2">
                      <Mail size={14} /> {contact.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={14} /> {contact.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- Company & Banking Info (Dynamic) --- */}
        {(companyInfo || banking) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {companyInfo && (
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white mb-6">
                  <Landmark className="text-yellow-400" /> {companyInfo.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Legal Entity</span>
                    <span className="text-white">{companyInfo.entity}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">ID/EIN</span>
                    <span className="text-white">{companyInfo.ein}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Status</span>
                    <span className="text-white">{companyInfo.status}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Reg. Number</span>
                    <span className="text-white">{companyInfo.regNumber}</span>
                  </div>
                </div>
              </div>
            )}
            {banking && (
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold flex items-center gap-2 text-white mb-6">
                  <Wallet className="text-green-400" /> {banking.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-gray-500">Bank:</span>{" "}
                    <span className="text-white font-medium">
                      {banking.bankName}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">Address:</span>{" "}
                    <span className="text-gray-300">{banking.address}</span>
                  </p>
                  <p>
                    <span className="text-gray-500">Account:</span>{" "}
                    <span className="text-white font-mono">
                      {banking.account}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">Routing (ACH):</span>{" "}
                    <span className="text-white font-mono">
                      {banking.routing}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-500">SWIFT:</span>{" "}
                    <span className="text-white font-mono">
                      {banking.swift}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- Regional Offices & Legal (Dynamic) --- */}
        {(regional || legalSupport) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {regional && (
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="text-blue-400" /> {regional.title}
                </h3>
                <div className="space-y-3">
                    {/* eslint-disable-next-line */}
                  {regional.items.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row justify-between text-sm border-b border-gray-800 last:border-0 pb-2 last:pb-0"
                    >
                      <span className="text-gray-300">{item.region}</span>
                      <span className="text-hyper-accent">{item.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {legalSupport && (
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="text-gray-400" /> {legalSupport.title}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-gray-500 block text-xs uppercase">
                      Registered Agent
                    </span>
                    <span className="text-gray-300">{legalSupport.agent}</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-hyper-accent hover:underline">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-hyper-accent hover:underline">
                      Terms of Service
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">Compliance: </span>
                    <a
                      href={`mailto:${legalSupport.compliance}`}
                      className="text-white hover:text-hyper-accent"
                    >
                      {legalSupport.compliance}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* --- Support & Education (Dynamic) --- */}
        {(supportChannels || education) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {supportChannels && (
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <LifeBuoy className="text-blue-400" /> {supportChannels.title}
                </h3>
                <ul className="space-y-3">
                    {/* eslint-disable-next-line */}
                  {supportChannels.items.map((item: any, idx: number) => (
                    <li key={idx} className="text-sm">
                      <span className="font-bold text-white block">
                        {item.name}
                      </span>
                      <span className="text-gray-400">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {education && (
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-purple-500/50">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="text-purple-400" /> {education.title}
                </h3>
                <ul className="space-y-3">
                    {/* eslint-disable-next-line */}
                  {education.items.map((item: any, idx: number) => (
                    <li key={idx} className="text-sm">
                      <span className="font-bold text-white block">
                        {item.name}
                      </span>
                      <span className="text-gray-400">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Additional Locations & Meetings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-hyper-secondary/50 transition-colors">
            <div className="bg-hyper-800 p-3 rounded-lg flex-shrink-0 border border-gray-700">
              <MapPin className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2 text-lg">
                {coworking?.title}
              </h3>
              <p className="text-sm font-semibold text-white">
                {coworking?.address?.[0]}
              </p>
              <p className="text-sm text-gray-400">{coworking?.address?.[1]}</p>
              <p className="text-xs text-gray-500 mt-2 bg-hyper-800/50 p-1 rounded inline-block border border-gray-700/50">
                {coworking?.note}
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-hyper-secondary/50 transition-colors">
            <div className="bg-hyper-800 p-3 rounded-lg flex-shrink-0 border border-gray-700">
              <User className="text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2 text-lg">
                {meetings?.title}
              </h3>
              <p className="text-sm font-semibold text-white">
                {meetings?.desc}
              </p>
              <p className="text-sm text-gray-400">
                Time: <span className="text-white">{meetings?.time}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{meetings?.location}</p>
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="bg-yellow-900/10 border border-yellow-700/30 p-4 rounded-xl text-center text-sm text-yellow-500/80">
          <AlertCircle className="inline-block mr-2 mb-1" size={16} />
          {translationData.contacts.warning}
        </div>
      </div>
    </section>
  );
}

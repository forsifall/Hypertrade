// --- Ecosystem/Integrations Section ---
// eslint-disable-next-line
export default function IntegrationsPage ({ translationData }:{ translationData: any }) {
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-hyper-950 to-hyper-900 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{translationData.integrations.title}</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
        {translationData.integrations.subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* eslint-disable-next-line */}
        {translationData.integrations.items.map((item: any, idx: number) => (
          <div key={idx} className="glass-panel p-8 rounded-xl hover:border-hyper-accent transition-colors">
            <div className="text-hyper-accent font-bold text-xl mb-3">{item.title}</div>
            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
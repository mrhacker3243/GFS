export default function Business() {
  return (
    <section className="py-24 bg-[#022c22] text-[#fbbf24]" id="business">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-[#fbbf24]/10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="bg-[#fbbf24]/5 p-6 rounded-2xl border border-[#fbbf24]/20 mt-8 sm:mt-12 text-center">
              <h5 className="text-3xl font-bold text-white">35%</h5>
              <p className="text-[#fbbf24] text-xs font-semibold">Avg. Yield</p>
            </div>
            <div className="bg-[#fbbf24]/5 p-6 rounded-2xl border border-[#fbbf24]/20 text-center">
              <h5 className="text-3xl font-bold text-white">12+</h5>
              <p className="text-[#fbbf24] text-xs font-semibold">Digital Assets</p>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Masters of Digital Economy</h3>
            <p className="text-[#fbbf24]/70">Bridging traditional finance and decentralized assets.</p>
            <ul className="space-y-3">
              {["Institutional Custody", "DeFi Yield Farming"].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="w-5 h-5 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#022c22] text-[10px]">✓</span>
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Values() {
  return (
    <section className="py-24 bg-[#064e3b]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#fbbf24]/60 font-bold tracking-widest uppercase text-sm mb-3">Our Core Values</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-[#fbbf24] mb-16">Your Security is Our Priority</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {[
            { title: "Multi-Layer Encryption", desc: "Military-grade security protocols for your assets." },
            { title: "Guaranteed Liquidity", desc: "Access your funds instantly across major global exchanges." },
            { title: "24/7 Expert Support", desc: "Our dedicated team is available around the clock." }
          ].map((val, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-[#fbbf24]/10 bg-[#022c22] hover:bg-[#fbbf24]/5 transition group">
              <h4 className="text-xl font-bold mb-3 text-[#fbbf24]">{val.title}</h4>
              <p className="text-[#fbbf24]/60 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
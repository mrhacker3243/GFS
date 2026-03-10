export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <span>New: AI Powered Analytics Now Live</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#fbbf24]">
              Secure Your <span className="text-white">Financial Future</span> with Precision.
            </h1>
            <p className="text-base sm:text-lg text-[#fbbf24]/70 max-w-lg mx-auto lg:mx-0 font-medium">
              Global Financial Solution provides institutional-grade trading strategies and digital currency management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#fbbf24] text-[#022c22] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:-translate-y-1">Open Account</button>
              <button className="border-2 border-[#fbbf24] text-[#fbbf24] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#fbbf24] hover:text-[#022c22] transition">View Performance</button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#fbbf24]/10 absolute -inset-4 rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1611974717482-48a66504b7c6?auto=format&fit=crop&q=80&w=1000" 
              alt="Dashboard" 
              className="rounded-2xl shadow-2xl relative border border-[#fbbf24]/20 brightness-90 contrast-110"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#022c22]">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-[#fbbf24]/5 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fbbf24] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fbbf24]"></span>
              </span>
              <span>AI Powered Trading Now Live</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white">
              Invest in the <br />
              <span className="text-[#fbbf24] bg-clip-text">Future of Wealth.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-[#fbbf24]/70 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Global Financial Solution combines institutional expertise with cutting-edge technology to maximize your digital asset portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#fbbf24] text-[#022c22] px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.5)] transition-all transform hover:-translate-y-1 active:scale-95">
                Start Investing
              </button>
              <button className="glass border border-[#fbbf24]/30 text-[#fbbf24] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#fbbf24]/10 transition-all backdrop-blur-sm">
                Live Charts
              </button>
            </div>
          </div>

          {/* Right Image (Professional Framing) */}
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#fbbf24]/50 to-transparent rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Image Container with Floating Animation */}
            <div className="relative animate-float">
              <div className="p-2 bg-gradient-to-b from-[#fbbf24]/20 to-transparent rounded-[2.5rem] backdrop-blur-xl border border-white/5 shadow-2xl">
                <img 
                  src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Financial Trading Dashboard" 
                  className="rounded-[2rem] shadow-inner relative z-10 brightness-[0.85] contrast-[1.1] grayscale-[20%] group-hover:grayscale-0 transition duration-700 w-full h-auto"
                />
              </div>
              
              {/* Floating Badge (Mini Professional Touch) */}
              <div className="absolute -bottom-6 -left-6 bg-[#064e3b] border border-[#fbbf24]/30 p-4 rounded-2xl shadow-2xl hidden md:block backdrop-blur-md">
                <p className="text-[#fbbf24] text-xs font-bold uppercase tracking-widest">Active Users</p>
                <p className="text-white text-xl font-black">12.5k+</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}
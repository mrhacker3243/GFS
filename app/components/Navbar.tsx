"use client";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#022c22]/90 backdrop-blur-md border-b border-[#fbbf24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* Rounded Logo Container */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 p-1 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#fbbf24]/20 shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-500">
              <div className="w-full h-full rounded-full bg-[#022c22] overflow-hidden border-2 border-[#022c22] flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Global Financial Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Decorative Spinning Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#fbbf24]/30 animate-[spin_10s_linear_infinite] group-hover:border-[#fbbf24]/60" />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white leading-none">
                GLOBAL <span className="text-[#fbbf24]">FINANCIAL</span>
              </span>
              <span className="text-[10px] text-[#fbbf24]/60 tracking-[0.3em] font-bold uppercase leading-tight mt-1">
                Solutions
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 font-medium text-[#fbbf24]/80">
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#plans" className="hover:text-white transition-colors duration-300">Plans</a>
            <a href="#business" className="hover:text-white transition-colors duration-300">Business</a>
          </div>

          {/* Contact Us - WhatsApp Redirect */}
          <div>
            <a 
              href="https://wa.me/923243123456" // <--- Yahan apna sahi WhatsApp number enter karein
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#fbbf24] text-[#022c22] px-5 py-2.5 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg text-sm group active:scale-95"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                fill="currentColor" 
                className="group-hover:rotate-12 transition-transform"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Contact Us</span>
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#022c22]/90 backdrop-blur-md border-b border-[#fbbf24]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#fbbf24] rounded-lg flex items-center justify-center text-[#022c22] font-bold text-xl">G</div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#fbbf24]">Global Financial</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-[#fbbf24]/80">
            <a href="#about" className="hover:text-white transition">About Us</a>
            <a href="#plans" className="hover:text-white transition">Plans</a>
            <a href="#business" className="hover:text-white transition">Business</a>
            <a href="#contact" className="hover:text-white transition">Contact Us</a>
          </div>
          <div>
            <a href="#register" className="bg-[#fbbf24] text-[#022c22] px-4 sm:px-6 py-2.5 rounded-full font-semibold hover:bg-white transition shadow-lg text-sm sm:text-base">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
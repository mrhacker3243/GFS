import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Business from './components/Business';
import PlanCard from './components/PlanCard';
import Testimonials from './components/Testimonials';


export default function LandingPage() {
  return (
    <div className="bg-[#022c22] text-[#fbbf24] overflow-x-hidden selection:bg-[#fbbf24] selection:text-[#022c22]">
      <Navbar />
      <Hero />
      <Values />
      <Business />

      {/* Plans Section */}
      {/* Plans Section */}
      <section className="py-24 bg-[#022c22]" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#fbbf24] mb-16">Choose Your Plan</h3>

          {/* 320px Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-0">
            <PlanCard imgSrc="./png01.jpeg" />
            <PlanCard imgSrc="/png01.jpeg" />
            <PlanCard imgSrc="/png01.jpeg" />
            <PlanCard imgSrc="/png01.jpeg" />
          </div>
        </div>
      </section>

      <Testimonials />

      <footer className="bg-[#022c22] text-[#fbbf24] py-16 border-t border-[#fbbf24]/10" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-[#fbbf24] text-[#022c22] rounded flex items-center justify-center font-bold">G</div>
            <span className="text-xl font-bold tracking-tight text-white">Global Financial</span>
          </div>
          <p className="text-[#fbbf24]/40 text-xs sm:text-sm italic">© 2026 Global Financial Solution.</p>
        </div>
      </footer>
    </div>
  );
}
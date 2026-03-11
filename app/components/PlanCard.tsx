interface PlanProps {
  imgSrc: string;
}

export default function PlanCard({ imgSrc }: PlanProps) {
  return (
    <div className="group relative flex flex-col bg-[#064e3b]/30 overflow-hidden rounded-[1.5rem] border border-[#fbbf24]/20 hover:border-[#fbbf24] transition-all duration-500 shadow-xl">
      
      {/* Image Container - Fixed Aspect Ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#022c22]">
        <img 
          src={imgSrc} 
          alt="Investment Plan" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Gradient Overlay for Professional Look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent opacity-60" />
      </div>

      {/* Button Overlay - Center Focus */}
      <div className="absolute inset-0 bg-[#022c22]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
        <div className="bg-[#fbbf24] p-3 rounded-full mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#022c22]"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <button className="bg-[#fbbf24] text-[#022c22] px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wider shadow-[0_10px_20px_rgba(251,191,36,0.3)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Activate Plan
        </button>
      </div>

      {/* Subtle Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fbbf24] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
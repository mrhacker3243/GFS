interface PlanProps {
  imgSrc: string;
}

export default function PlanCard({ imgSrc }: PlanProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border-2 border-[#fbbf24]/20 hover:border-[#fbbf24] transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
      <img 
        src={imgSrc} 
        alt="Investment Plan" 
        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
      {/* Button Overlay (Optional) */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="bg-[#fbbf24] text-[#022c22] px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
          Invest Now
        </button>
      </div>
    </div>
  );
}
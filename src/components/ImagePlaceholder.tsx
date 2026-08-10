interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspect?: "square" | "wide" | "tall" | "hero";
}

const aspects = {
  square: "aspect-square",
  wide: "aspect-video",
  tall: "aspect-[3/4]",
  hero: "aspect-[16/7]",
};

export default function ImagePlaceholder({ className = "", label = "Image", aspect = "wide" }: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspects[aspect]} ${className} flex flex-col items-center justify-center gap-2 bg-[#2a3240] border border-[#3a4450] relative overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #e8e6e1 0, #e8e6e1 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-30">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#e8e6e1" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="#e8e6e1" strokeWidth="1.5" />
        <path d="M21 15L16 10L5 21" stroke="#e8e6e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs text-[#e8e6e1]/30 font-mono tracking-widest uppercase">{label}</span>
    </div>
  );
}

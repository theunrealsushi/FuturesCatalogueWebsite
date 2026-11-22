import ImagePlaceholder from "./ImagePlaceholder";
import { resolveOfferingImage } from "../data/offeringImages";

interface OfferingImageProps {
  image?: string;
  alt: string;
  aspect?: "square" | "wide" | "tall" | "hero";
  className?: string;
  label?: string;
}

const aspectClass = {
  square: "aspect-square",
  wide: "aspect-video",
  tall: "aspect-[3/4]",
  hero: "aspect-[16/7]",
};

export default function OfferingImage({
  image,
  alt,
  aspect = "wide",
  className = "",
  label = "Offering image",
}: OfferingImageProps) {
  const src = resolveOfferingImage(image);

  if (!src) {
    return <ImagePlaceholder aspect={aspect} label={label} className={className} />;
  }

  return (
    <div className={${aspectClass[aspect]} ${className} relative overflow-hidden bg-[#2a3240]}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    </div>
  );
}
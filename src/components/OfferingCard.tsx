import { Link } from "react-router";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Offering } from "../data/content";

const tagColors: Record<string, string> = {
  Bestseller: "#d4b84a",
  New: "#5f7a6e",
  Limited: "#c04a2a",
  Certified: "#5f7a6e",
  Featured: "#d4b84a",
  Exclusive: "#c04a2a",
  Seasonal: "#5a3f35",
  "Community Pick": "#5f7a6e",
};

interface OfferingCardProps {
  offering: Offering;
  href: string;
  accent: string;
}


export default function OfferingCard({ offering, href, accent }: OfferingCardProps) {
  return (
    <Link
      to={href}
      className="group block rounded-sm overflow-hidden border border-[#3a4450] hover:border-opacity-60 transition-all duration-200 hover:translate-y-[-2px]"
      style={{ backgroundColor: "#1e2530" }}
    >
      <div className="relative">
        <ImagePlaceholder aspect="wide" label="Product image" />
        {offering.tag && (
          <span
            className="absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm"
            style={{
              backgroundColor: tagColors[offering.tag] || "#5f7a6e",
              color: "#1e2530",
            }}
          >
            {offering.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3
          className="text-sm font-semibold text-[#e8e6e1] mb-1.5 group-hover:text-opacity-90 transition-colors"
          style={{ color: "#e8e6e1" }}
        >
          {offering.name}
        </h3>
        <p className="text-xs text-[#e8e6e1]/50 leading-relaxed mb-3 line-clamp-2">
          {offering.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold" style={{ color: accent }}>
            {offering.price}
          </span>
          <span className="text-[10px] text-[#e8e6e1]/30">incl. VAT</span>
        </div>
      </div>
    </Link>
  );
}

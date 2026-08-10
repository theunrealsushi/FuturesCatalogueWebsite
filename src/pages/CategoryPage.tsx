import { useParams, Navigate } from "react-router";
import { narrativeMap, getNarrativeCategory } from "../data/content";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import OfferingCard from "../components/OfferingCard";
import Breadcrumb from "../components/Breadcrumb";

export default function CategoryPage() {
  const { narrativeId = "", categoryId = "" } = useParams();
  const narrative = narrativeMap[narrativeId];
  const category = getNarrativeCategory(narrativeId, categoryId);

  if (!narrative || !category) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1e2530", color: "#e8e6e1" }}>
      <Nav narrativeId={narrativeId} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          accent={narrative.accent}
          crumbs={[
            { label: "Kahvi 2050", href: "/" },
            { label: narrative.name, href: `/${narrativeId}` },
            { label: category.name },
          ]}
        />

        <div className="mb-10">
          <div
            className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: narrative.accent }}
          >
            {narrative.name}
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#e8e6e1] mb-4" style={{ letterSpacing: "-0.02em" }}>
            {category.name}
          </h1>
          <p className="text-sm text-[#e8e6e1]/50 max-w-2xl leading-relaxed">{category.description}</p>
        </div>

        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#3a4450]">
          <span className="text-xs text-[#e8e6e1]/40">
            {category.offerings.length} offering{category.offerings.length !== 1 ? "s" : ""}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#e8e6e1]/30">Sort:</span>
            <span className="text-xs text-[#e8e6e1]/50 cursor-default">Featured</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.offerings.map((offering) => (
            <OfferingCard
              key={offering.id}
              offering={offering}
              href={`/${narrativeId}/${categoryId}/${offering.id}`}
              accent={narrative.accent}
            />
          ))}
        </div>
      </div>

      <Footer accent={narrative.accent} />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router";
import { narrativeMap } from "../data/content";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImagePlaceholder from "../components/ImagePlaceholder";

// ── Typewriter ───────────────────────────────────────────────────────────────
function useTypewriter(lines: string[], speed = 45, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const target = lines[li];
    if (!erasing) {
      if (ci < target.length) {
        const t = setTimeout(() => setCi((c) => c + 1), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setErasing(true), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (ci > 0) {
        const t = setTimeout(() => setCi((c) => c - 1), speed / 2);
        return () => clearTimeout(t);
      } else {
        setErasing(false);
        setLi((i) => (i + 1) % lines.length);
      }
    }
  }, [ci, erasing, li, lines, speed, pause]);

  useEffect(() => setDisplay(lines[li].slice(0, ci)), [ci, li, lines]);
  return display;
}

// ── Blinking cursor ──────────────────────────────────────────────────────────
function BlinkCursor({ color = "#38BDF8" }: { color?: string }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color }}>▋</span>;
}

// ── Animated price pill ──────────────────────────────────────────────────────
const MONO = "'SF Mono', 'Cascadia Code', Consolas, ui-monospace, monospace";
const CYAN = "rgba(56,189,248,0.25)";
const CYAN_T = "#38BDF8";

function PricePill() {
  const prices = ["€18.20", "€18.31", "€18.40", "€18.37", "€18.40"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % prices.length), 1400);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 text-xs shrink-0"
      style={{
        backgroundColor: "rgba(56,189,248,0.08)",
        border: `1px solid ${CYAN}`,
        borderRadius: "2px",
        fontFamily: MONO,
        color: CYAN_T,
        letterSpacing: "0.10em",
      }}
    >
      <span className="opacity-50">DYNAMIC RATE:</span>
      <span style={{ color: "#e8e6e1" }}>{prices[idx]}</span>
    </span>
  );
}

// ── Techno HUD bar ───────────────────────────────────────────────────────────
function TechnoHUD() {
  const hudLines = [
    "SYSTEM: RECALCULATING...",
    "GENOMIC MATCH: 98.4% DNA FIT",
    "YIELD INDEX: +14.2%",
    "CARBON DELTA: -1.1kg CO2e / UNIT",
  ];
  const hudText = useTypewriter(hudLines, 42, 1600);

  return (
    <div
      className="border-b px-4 sm:px-6 py-2 flex items-center gap-3 overflow-hidden"
      style={{ backgroundColor: "rgba(56,189,248,0.04)", borderColor: CYAN, fontFamily: MONO }}
    >
      <span
        className="text-[10px] tracking-widest uppercase shrink-0"
        style={{ color: "rgba(56,189,248,0.5)", letterSpacing: "0.12em" }}
      >
        KIE™ LIVE
      </span>
      <span className="h-3 w-px shrink-0" style={{ backgroundColor: CYAN }} />
      <span className="text-xs flex-1 truncate" style={{ color: CYAN_T, letterSpacing: "0.08em" }}>
        {hudText}
        <BlinkCursor />
      </span>
      <PricePill />
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function NarrativeHome() {
  const { narrativeId = "" } = useParams();
  const narrative = narrativeMap[narrativeId];
  const [activeTab, setActiveTab] = useState(0);

  if (!narrative) return <Navigate to="/" replace />;

  const isTechno = narrativeId === "techno";
  const bg = isTechno ? "#0F172A" : "#1e2530";
  const activeCat = narrative.categories[activeTab];
  const borderColor = isTechno ? CYAN : "#3a4450";

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg, color: "#e8e6e1" }}>
      {/* Sticky header band — Nav + HUD pin together */}
      <div className="sticky top-0 z-40">
        <Nav narrativeId={narrativeId} />
        {isTechno && <TechnoHUD />}
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ borderBottom: `1px solid ${borderColor}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: narrative.accent, fontFamily: isTechno ? MONO : undefined }}
            >
              {narrative.heroSubtext}
            </div>
            <h1
              className="text-3xl sm:text-5xl font-semibold text-[#e8e6e1] mb-6 leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              {narrative.name}
            </h1>
            <p className="text-sm text-[#e8e6e1]/50 leading-relaxed max-w-md" style={{ fontFamily: "'Roboto Mono', monospace", textAlign: "justify" }}>
              {narrative.description}
            </p>
          </div>
          <div className="relative">
            <ImagePlaceholder aspect="hero" label="Hero image" className="rounded-sm" />
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
            />
          </div>
        </div>
      </div>

      {/* Tabbed catalogue */}
      <div style={{ borderTop: `1px solid ${borderColor}` }}>
        {/* Tab bar */}
        <div
          className="sticky z-30 flex"
          style={{ top: isTechno ? "88px" : "57px", borderBottom: `1px solid ${borderColor}`, backgroundColor: bg }}
        >
          {narrative.categories.map((cat, i) => {
            const isActive = i === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className="px-6 py-4 text-xs font-semibold uppercase tracking-widest transition-colors relative"
                style={{
                  fontFamily: MONO,
                  color: isActive ? (isTechno ? CYAN_T : narrative.accent) : "rgba(232,230,225,0.35)",
                  backgroundColor: isActive ? (isTechno ? "rgba(56,189,248,0.04)" : narrative.accent + "08") : "transparent",
                  letterSpacing: "0.14em",
                }}
              >
                {isTechno ? cat.name.toUpperCase() : cat.name}
                {/* Active underline */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ backgroundColor: isTechno ? CYAN_T : narrative.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active tab content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-xs text-[#e8e6e1]/35 mb-10 max-w-2xl" style={{ fontFamily: isTechno ? MONO : undefined }}>
            {activeCat.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {activeCat.offerings.map((offering) => (
              <Link
                key={offering.id}
                to={`/${narrativeId}/${activeCat.id}/${offering.id}`}
                className="group block"
              >
                <div
                  className="relative rounded-sm overflow-hidden mb-3"
                  style={{ border: `1px solid ${borderColor}` }}
                >
                  <ImagePlaceholder aspect="wide" label="Offering image" />
                  {offering.tag && (
                    <span
                      className="absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: isTechno ? "rgba(56,189,248,0.15)" : narrative.accent,
                        color: isTechno ? CYAN_T : "#1e2530",
                        border: isTechno ? `1px solid ${CYAN}` : undefined,
                        fontFamily: isTechno ? MONO : undefined,
                      }}
                    >
                      {offering.tag}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-[#e8e6e1] mb-1 group-hover:opacity-80 transition-opacity">
                  {offering.name}
                </h3>
                <p className="text-xs text-[#e8e6e1]/40 mb-2 leading-relaxed line-clamp-2">
                  {offering.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Narrative banner */}
      <div
        className="py-10"
        style={{
          borderTop: `1px solid ${isTechno ? CYAN : "#3a4450"}`,
          borderBottom: `1px solid ${isTechno ? CYAN : "#3a4450"}`,
          backgroundColor: isTechno ? "rgba(56,189,248,0.03)" : narrative.accent + "10",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-lg sm:text-2xl font-medium"
            style={{ color: isTechno ? CYAN_T : narrative.secondary, fontFamily: isTechno ? MONO : undefined }}
          >
            {isTechno ? `// "${narrative.tagline}" //` : narrative.tagline}
          </p>
          <Link
            to="/"
            className="text-xs text-[#e8e6e1]/40 hover:text-[#e8e6e1]/70 transition-colors"
            style={{ fontFamily: isTechno ? MONO : undefined }}
          >
            ← Back to all narratives
          </Link>
        </div>
      </div>

      <Footer accent={isTechno ? CYAN_T : narrative.accent} />
    </div>
  );
}

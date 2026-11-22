import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router";
import { narrativeMap, getOffering, getNarrativeCategory } from "../data/content";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ImagePlaceholder from "../components/ImagePlaceholder";

const MONO = "'SF Mono', 'Cascadia Code', Consolas, ui-monospace, monospace";
const HEADING = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";

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

// ── Citizen Verification Modal (Regulated narrative only) ──────────────────
function CitizenVerificationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<"verifying" | "confirmed">("verifying");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full mx-4 flex flex-col gap-5"
        style={{
          maxWidth: "520px",
          backgroundColor: "#0F172A",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "4px",
          padding: "28px",
          fontFamily: MONO,
        }}
      >
        {/* Title */}
        <div>
          <div
            className="text-[10px] tracking-widest uppercase mb-3"
            style={{ color: "#c04a2a" }}
          >
            EU ESPR CITIZEN VERIFICATION
          </div>
          <div
            className="h-px w-full"
            style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
          />
        </div>

        {step === "verifying" ? (
          <>
            <div className="flex flex-col gap-3">
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
                STEP 1 OF 2 — IDENTITY CHECK
              </div>
              <div className="flex items-start gap-3 p-4 rounded-sm" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "#d4b84a" }}>▶</span>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm" style={{ color: "#e8e6e1" }}>
                    Reading Biometric Hash: FI-88391-B...
                  </span>
                  <span className="text-xs font-semibold" style={{ color: "#5f7a6e" }}>
                    [ VERIFIED ]
                  </span>
                </div>
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                Data processed under EU Regulation 2047/ESPR-09 · Zero retention · Ephemeral session only
              </div>
            </div>
            <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />
            <div className="flex justify-end">
              <button
                onClick={() => setStep("confirmed")}
                className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#c04a2a", color: "#0F172A", borderRadius: "2px" }}
              >
                CONFIRM ALLOCATION →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
                STEP 2 OF 2 — ALLOCATION CONFIRMED
              </div>
              <div className="flex flex-col gap-2 p-4 rounded-sm" style={{ backgroundColor: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.20)" }}>
                {[
                  ["Ration Claimed", "250g Synth-Arabica"],
                  ["Updated Monthly Quota", "0g / 250g Remaining"],
                  ["Pick-up Code", "GS1-EU-99201"],
                ].map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>{key}:</span>
                    <span className="text-xs font-semibold" style={{ color: "#e8e6e1" }}>{val}</span>
                  </div>
                ))}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                Present pick-up code at registered government depository terminal. Valid 72h.
              </div>
            </div>
            <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{ border: "1px solid rgba(255,255,255,0.20)", color: "#e8e6e1", borderRadius: "2px", backgroundColor: "transparent" }}
              >
                [ DONE / RETURN TO TERMINAL ]
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Delivery / Pick-up toggle (Regulated narrative only) ───────────────────
function DeliveryToggle() {
  const [selected, setSelected] = useState<"delivery" | "pickup">("delivery");

  return (
    <div className="mb-5">
      <div
        className="flex text-[10px] uppercase tracking-widest"
        style={{ fontFamily: MONO, border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px" }}
      >
        {(["delivery", "pickup"] as const).map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className="flex-1 px-3 py-2.5 text-left transition-colors"
            style={{
              backgroundColor: selected === opt ? "rgba(255,255,255,0.06)" : "transparent",
              color: selected === opt ? "#e8e6e1" : "rgba(232,230,225,0.35)",
              border: selected === opt ? "1px solid rgba(255,255,255,0.25)" : "1px solid transparent",
              margin: "-1px",
            }}
          >
            {opt === "delivery"
              ? "DELIVERY (EU LOGISTICS ROUTE #04)"
              : "MUNICIPAL HUB PICK-UP (ESPOO VAULT — FREE CARBON ALLOCATION)"}
          </button>
        ))}
      </div>
      <p
        className="text-[10px] mt-2"
        style={{ color: "rgba(232,230,225,0.35)", fontFamily: MONO }}
      >
        Pick-up available within 15 mins at local government depository.
      </p>
    </div>
  );
}

// ── Techno HUD (offering page variant) ────────────────────────────────────
const CYAN = "rgba(56,189,248,0.25)";
const CYAN_T = "#38BDF8";

function PricePill({ price }: { price?: string }) {
  const prices = ["€18.20", "€18.31", "€18.40", "€18.37", "€18.40"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % prices.length), 1400);
    return () => clearInterval(t);
  }, []);
  const display = price ?? prices[idx];
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
      <span className="opacity-50">MARKET RATE:</span>
      <span style={{ color: "#e8e6e1" }}>{display}</span>
    </span>
  );
}

function TechnoHUDBar({ offeringPrice }: { offeringPrice?: string }) {
  const hudLines = [
    "UNIT STATUS: AVAILABLE — BATCH SYNTH-902",
    "GENOMIC MATCH: 98.4% DNA FIT",
    "FULFILMENT NODE: ESPOO-HUB-04 ONLINE",
    "CARBON DELTA: -1.1kg CO2e / UNIT",
    "YIELD INDEX: +14.2% — CERTIFIED CLEAR",
  ];
  const hudText = useTypewriter(hudLines, 42, 1600);

  return (
    <div
      className="px-4 sm:px-6 py-2 flex items-center gap-3 overflow-hidden border-b"
      style={{
        backgroundColor: "rgba(15,23,42,0.95)",
        borderColor: CYAN,
        fontFamily: MONO,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
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
      <PricePill price={offeringPrice} />
    </div>
  );
}

// ── Techno delivery toggle ─────────────────────────────────────────────────

function TechnoDeliveryToggle({ selected, onChange }: { selected: "drone" | "hyperloop"; onChange: (v: "drone" | "hyperloop") => void }) {
  return (
    <div className="mb-4">
      <div
        className="flex text-[10px] uppercase"
        style={{ fontFamily: MONO, outline: `1px solid ${CYAN}`, borderRadius: "2px", letterSpacing: "0.10em" }}
      >
        {(["drone", "hyperloop"] as const).map((opt, i) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="flex-1 px-3 py-2.5 text-left transition-colors"
            style={{
              backgroundColor: selected === opt ? "rgba(56,189,248,0.08)" : "transparent",
              color: selected === opt ? CYAN_T : "rgba(232,230,225,0.30)",
              outline: selected === opt ? `1px solid ${CYAN_T}` : "1px solid transparent",
              outlineOffset: "-1px",
              borderRight: i === 0 ? `1px solid ${CYAN}` : "none",
            }}
          >
            {opt === "drone" ? "AUTONOMOUS DRONE DROP" : "HYPERLOOP VAULT PICK-UP"}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Typewriter hook ────────────────────────────────────────────────────────
function useTypewriter(lines: string[], speed = 45, pause = 1600) {
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

function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return <span style={{ opacity: on ? 1 : 0, color: CYAN_T }}>▋</span>;
}

// ── Techno DPP accordion ───────────────────────────────────────────────────
function TechnoDPPAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const streamText = useTypewriter(["> 3 BIO-REFILLS LOGGED", "> CONTAINER EFFICIENCY: 99.8%", "> CIRCULAR CYCLE ACTIVE"], 40, 1400);

  const staticTabs = [
    {
      label: "TAB-01 // GENOMIC TRACEABILITY",
      rows: [
        ["Batch ID", "SYNTH-902"],
        ["Bioreactor", "#ESPOO-04"],
        ["Contaminant Pass", "0.00% — CLEAR"],
        ["Genomic Sequence", "FI-ARABICA-X-2049-Δ7"],
        ["Lab Cert.", "EU ESPR / ISO 17025:2049"],
      ],
    },
    {
      label: "TAB-02 // USAGE & EXTRACTION PROTOCOL",
      rows: [
        ["Precision Dose", "10.0 g / serving"],
        ["Temperature", "92.4°C"],
        ["Pressure", "18.2 Bar"],
        ["Pre-infusion", "4.0 s at 3 Bar"],
        ["Total TDS", "9.8% ± 0.2"],
      ],
    },
  ];

  return (
    <div className="mt-8" style={{ border: `1px solid ${CYAN}`, borderRadius: "2px" }}>
      <div
        className="px-4 py-2.5 text-[10px] tracking-widest uppercase"
        style={{ borderBottom: `1px solid ${CYAN}`, color: "rgba(56,189,248,0.6)", fontFamily: MONO, backgroundColor: "rgba(56,189,248,0.04)", letterSpacing: "0.12em" }}
      >
        DIGITAL PRODUCT PASSPORT POWERED BY BLOBCHAIN
      </div>

      {staticTabs.map((tab, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${CYAN}` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 transition-colors"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.12em", color: open === i ? CYAN_T : "rgba(232,230,225,0.45)", backgroundColor: open === i ? "rgba(56,189,248,0.05)" : "transparent" }}
          >
            <span>{tab.label}</span>
            <span style={{ opacity: 0.5 }}>{open === i ? "[ − ]" : "[ + ]"}</span>
          </button>
          {open === i && (
            <div className="px-4 pb-4 flex flex-col gap-2">
              {tab.rows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "rgba(232,230,225,0.35)", fontFamily: MONO }}>{k}:</span>
                  <span className="text-xs" style={{ color: "#e8e6e1", fontFamily: MONO }}>{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div>
        <button
          onClick={() => setOpen(open === 2 ? null : 2)}
          className="w-full flex items-center justify-between px-4 py-3 transition-colors"
          style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.12em", color: open === 2 ? CYAN_T : "rgba(232,230,225,0.45)", backgroundColor: open === 2 ? "rgba(56,189,248,0.05)" : "transparent" }}
        >
          <span>TAB-03 // CIRCULARITY &amp; USER LOG</span>
          <span style={{ opacity: 0.5 }}>{open === 2 ? "[ − ]" : "[ + ]"}</span>
        </button>
        {open === 2 && (
          <div className="px-4 pb-4">
            <div className="p-3 text-xs rounded-sm" style={{ backgroundColor: "rgba(0,0,0,0.35)", fontFamily: MONO, color: "#10B981", lineHeight: 1.9 }}>
              {streamText}<BlinkCursor />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Inline expandable dossier ──────────────────────────────────────────────
function InlineDossier({ description, shortDescription, accentColor, ingredients }: { description: string[]; shortDescription: string; accentColor: string; ingredients?: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const fullText = [shortDescription, ...description].filter(Boolean).join("  ");

  return (
    <div className="mb-6">
      <div
        className="text-sm leading-relaxed"
        style={{
          color: "rgba(232,230,225,0.55)",
          fontFamily: MONO,
          display: "-webkit-box",
          WebkitLineClamp: expanded ? "none" : 4,
          WebkitBoxOrient: "vertical",
          overflow: expanded ? "visible" : "hidden",
        } as object}
      >
        {fullText}
          {ingredients && ingredients.length > 0 && (
        <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: accentColor, fontFamily: MONO }}>
            Ingredient Declaration // EU Reg. 2047/NUT-06
          </div>
          <ul className="space-y-1.5">
            {ingredients.map((item, i) => (
              <li key={i} className="flex gap-2 text-xs" style={{ color: "rgba(232,230,225,0.45)", fontFamily: MONO }}>
                <span style={{ color: accentColor, opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{ color: accentColor, fontFamily: MONO }}
      >
        {expanded ? "[ − COLLAPSE ]" : "[ + EXPAND DOSSIER ]"}
      </button>
    
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function OfferingPage() {
  const { narrativeId = "", categoryId = "", offeringId = "" } = useParams();
  const narrative = narrativeMap[narrativeId];
  const category = getNarrativeCategory(narrativeId, categoryId);
  const offering = getOffering(narrativeId, categoryId, offeringId);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setVisible(false);
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, [offeringId]);
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [technoDelivery, setTechnoDelivery] = useState<"drone" | "hyperloop">("drone");
  const [cartCount, setCartCount] = useState(0);
  const [cartFlash, setCartFlash] = useState(false);

  if (!narrative || !category || !offering) return <Navigate to="/" replace />;

  const isRegulated = narrativeId === "regulated";
  const isTechno = narrativeId === "techno";
  const otherOfferings = category.offerings.filter((o) => o.id !== offeringId).slice(0, 3);

  const bg = isRegulated ? "#0F172A" : isTechno ? "#0F172A" : "#1e2530";

  function addToCart() {
    setCartCount((n) => n + 1);
    setCartFlash(true);
    setTimeout(() => setCartFlash(false), 900);
  }

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: bg,
        color: "#e8e6e1",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      {verifyOpen && <CitizenVerificationModal onClose={() => setVerifyOpen(false)} />}

      {/* Sticky header band — Nav + HUD for techno, just Nav otherwise */}
      <div className="sticky top-0 z-40">
        <Nav narrativeId={narrativeId} />
        {isTechno && <TechnoHUDBar offeringPrice={offering.price} />}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumb
          accent={narrative.accent}
          crumbs={[
            { label: "Kahvi 2050", href: "/" },
            { label: narrative.name, href: `/${narrativeId}` },
            { label: offering.name },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div>
            <div className="relative rounded-sm overflow-hidden">
              <ImagePlaceholder aspect="square" label="Primary image" className="w-full" />
              {offering.tag && (
                <span
                  className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                  style={{
                    backgroundColor: tagColors[offering.tag] || "#5f7a6e",
                    color: "#1e2530",
                  }}
                >
                  {offering.tag}
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div
              className="text-[10px] font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: narrative.accent, fontFamily: isRegulated ? MONO : undefined }}
            >
              {narrative.name} · {category.name}
            </div>

            <h1
              className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight"
              style={{ letterSpacing: "-0.02em", color: isRegulated ? "#F0F6FC" : "#e8e6e1", fontFamily: isRegulated ? HEADING : undefined }}
            >
              {offering.name}
            </h1>

            <InlineDossier
              description={offering.description}
              shortDescription={offering.shortDescription}
              accentColor={isRegulated ? "rgba(192,74,42,0.8)" : isTechno ? "rgba(56,189,248,0.7)" : narrative.accent}
              ingredients={offering.ingredients}
            />

            <div
              className="py-6 flex items-end justify-between"
              style={{ borderTop: `1px solid ${isRegulated ? "rgba(255,255,255,0.15)" : "#3a4450"}` }}
            >
              <div>
                <div className="text-xs text-[#e8e6e1]/30 mb-1" style={{ fontFamily: isRegulated ? MONO : undefined }}>
                  {isRegulated ? "PRICE PER 250G // VAT INCLUDED" : "Price"}
                </div>
                <div className="text-2xl font-semibold" style={{ color: narrative.accent, fontFamily: isRegulated ? MONO : undefined }}>
                  {offering.price}
                </div>
                <div className="text-[10px] text-[#e8e6e1]/30 mt-0.5" style={{ fontFamily: isRegulated ? MONO : undefined }}>
                  {isRegulated ? "Monthly ration ceiling applies · EU Reg. 2047/ESPR-09" : "Including VAT at applicable rate"}
                </div>
              </div>
            </div>

            {/* Delivery toggle — regulated */}
            {isRegulated && <DeliveryToggle />}

            {/* Delivery toggle — techno */}
            {isTechno && (
              <TechnoDeliveryToggle selected={technoDelivery} onChange={setTechnoDelivery} />
            )}

            {/* CTA */}
            {isRegulated ? (
              <button
                onClick={() => setVerifyOpen(true)}
                className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
                style={{ backgroundColor: "#e8e6e1", color: "#0F172A", fontFamily: MONO, border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2px" }}
              >
                [ VERIFY CITIZEN ID &amp; CLAIM RATION ]
              </button>
            ) : isTechno ? (
              <button
                onClick={addToCart}
                className="w-full py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
                style={{
                  backgroundColor: cartFlash ? "#10B981" : CYAN_T,
                  color: "#0F172A",
                  fontFamily: MONO,
                  border: `1px solid ${CYAN}`,
                  borderRadius: "2px",
                  letterSpacing: "0.12em",
                  transition: "background-color 300ms ease",
                }}
              >
                {cartFlash ? `✓ ADDED TO CART (${cartCount})` : `[ ADD TO CART — ${offering.price} ]`}
              </button>
            ) : (
              <button
                className="w-full py-3.5 text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 hover:opacity-85 active:scale-[0.99]"
                style={{ backgroundColor: narrative.accent, color: "#1e2530" }}
              >
                {offering.ctaLabel}
              </button>
            )}

            <div
              className="mt-6 pt-6 space-y-3"
              style={{ borderTop: `1px solid ${isRegulated ? "rgba(255,255,255,0.15)" : "#3a4450"}` }}
            >
              <div className="flex items-center gap-3 text-xs text-[#e8e6e1]/40">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M8 1l1.8 3.6L14 5.2l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.6L8 1z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span style={{ fontFamily: isRegulated || isTechno ? MONO : undefined }}>
                  {isRegulated ? "ESPR CERTIFIED BY FINNISH ENVIRONMENTAL DATA LAB" : isTechno ? "BLOBCHAIN DPP AVAILABLE · GENOMIC BATCH CERTIFIED" : "Verified by Kahvi 2050 quality assurance"}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#e8e6e1]/40">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span style={{ fontFamily: isRegulated || isTechno ? MONO : undefined }}>
                  {isRegulated ? "CITIZEN ID REQUIRED · BIOMETRIC VERIFICATION" : isTechno ? `FULFILMENT: ${technoDelivery === "drone" ? "AUTONOMOUS DRONE DROP · ETA 4 MINS" : "HYPERLOOP VAULT · ESPOO HUB · INSTANT"}` : "Available for immediate booking or dispatch"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description section removed — all narratives now show inline above */}
        {false && (
          <div className="pt-12 mb-16" style={{ borderTop: `1px solid ${isTechno ? CYAN : "#3a4450"}` }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-sm font-semibold tracking-widest uppercase mb-6" style={{ color: "rgba(232,230,225,0.30)" }}>
                  About this offering
                </h2>
                <div className="space-y-5">
                  {offering.description.map((para, i) => (
                    <p key={i} className="text-sm text-[#e8e6e1]/70 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(232,230,225,0.30)" }}>Narrative</div>
                  <Link to={`/${narrativeId}`} className="text-xs hover:opacity-80 transition-opacity" style={{ color: narrative.accent }}>{narrative.name} →</Link>
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(232,230,225,0.30)" }}>Category</div>
                  <Link to={`/${narrativeId}/${categoryId}`} className="text-xs hover:opacity-80 transition-opacity" style={{ color: narrative.accent }}>{category.name} →</Link>
                </div>
                {offering.tag && (
                  <div>
                    <div className="text-[10px] font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(232,230,225,0.30)" }}>Status</div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm" style={{ backgroundColor: (tagColors[offering.tag] || "#5f7a6e") + "25", color: tagColors[offering.tag] || "#5f7a6e" }}>
                      {offering.tag}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Techno DPP accordion */}
        {isTechno && (
          <div className="mb-16">
            <TechnoDPPAccordion />
          </div>
        )}

        {/* More from this category */}
        {otherOfferings.length > 0 && (
          <div className="pt-12" style={{ borderTop: `1px solid ${isRegulated ? "rgba(255,255,255,0.15)" : "#3a4450"}` }}>
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-sm font-semibold"
                style={{ color: "#e8e6e1", fontFamily: isRegulated ? HEADING : undefined }}
              >
                More in {category.name}
              </h2>
              <Link to={`/${narrativeId}/${categoryId}`} className="text-xs hover:opacity-70 transition-opacity" style={{ color: narrative.accent }}>
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherOfferings.map((o) => (
                <Link key={o.id} to={`/${narrativeId}/${categoryId}/${o.id}`} className="group block">
                  <div className="rounded-sm overflow-hidden mb-3" style={{ border: `1px solid ${isRegulated ? "rgba(255,255,255,0.15)" : "#3a4450"}` }}>
                    <ImagePlaceholder aspect="wide" label="Offering image" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#e8e6e1] mb-1 group-hover:opacity-80 transition-opacity">
                    {o.name}
                  </h3>
                  <div className="text-xs font-semibold" style={{ color: narrative.accent }}>
                    {o.price}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer accent={narrative.accent} />
    </div>
  );
}

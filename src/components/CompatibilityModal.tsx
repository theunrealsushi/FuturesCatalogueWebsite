const HEADING = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = "'SF Mono', 'Cascadia Code', Consolas, ui-monospace, monospace";

interface CompatibilityModalProps {
  onClose: () => void;
}

export default function CompatibilityModal({ onClose }: CompatibilityModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full mx-4 flex flex-col gap-5"
        style={{
          maxWidth: "560px",
          backgroundColor: "#161B22",
          border: "1px solid #30363D",
          borderRadius: "16px",
          padding: "24px",
          fontFamily: BODY,
        }}
      >
        {/* Status badge — mono */}
        <div>
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              color: "#F59E0B",
              backgroundColor: "rgba(245,158,11,0.15)",
              fontFamily: MONO,
            }}
          >
            SYSTEM NOTICE // LEGACY ENVIRONMENT
          </span>
        </div>

        {/* Headline — Sora */}
        <h2
          className="font-bold leading-snug"
          style={{ color: "#F0F6FC", fontSize: "22px", margin: 0, fontFamily: HEADING }}
        >
          Incompatible Device Environment
        </h2>

        {/* Body — system sans */}
        <div className="flex flex-col gap-3">
          <p className="text-sm leading-relaxed" style={{ color: "#8B949E", fontFamily: BODY }}>
            Your device lacks the 2047 Agent Handshake protocol. Features like spatial haptics and live voice are disabled. Some advanced features such as Live Carbon Budgeting may not display correctly.  
          </p>
        
        </div>

        {/* Checklist — mono */}
        <div
          className="flex flex-col gap-2 rounded-lg"
          style={{
            backgroundColor: "rgba(13,17,23,0.6)",
            border: "1px solid #21262D",
            padding: "14px 16px",
          }}
        >
          <div
            className="text-[10px] tracking-widest uppercase mb-1"
            style={{ color: "#484F58", fontFamily: MONO }}
          >
            ENVIRONMENT DIAGNOSTICS
          </div>
          {[
            { icon: "!", label: "Personal AI Agent", status: "NOT DETECTED (Fallback to Human Input)", ok: false },
            { icon: "!", label: "Spatial Haptic Render", status: "DISABLED (Hardware Incompatible)", ok: false },
            { icon: "!", label: "Voice Render", status: "DISABLED (Hardware Incompatible)", ok: false },
            { icon: "✓", label: "Static 2D Catalogue View", status: "ENABLED", ok: true },
          ].map(({ icon, label, status, ok }) => (
            <div key={label} className="flex items-center gap-3">
              <span
                className="w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{
                  fontFamily: MONO,
                  color: ok ? "#10B981" : "#F59E0B",
                  backgroundColor: ok ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)",
                  border: `1px solid ${ok ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}
              >
                {icon}
              </span>
              <span className="text-xs flex-1" style={{ color: "#8B949E", fontFamily: MONO }}>
                {label}
              </span>
              <span
                className="text-xs"
                style={{ color: ok ? "#10B981" : "#F59E0B", fontFamily: MONO }}
              >
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #21262D" }} />

        {/* Button — system sans (button text spec) */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: "#10B981", color: "#0D1117", fontFamily: BODY }}
          >
            Proceed to Catalogue
          </button>
        </div>
      </div>
    </div>
  );
}

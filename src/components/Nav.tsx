import { Link } from "react-router";
import { narrativeMap } from "../data/content";

interface NavProps {
  narrativeId: string;
}

export default function Nav({ narrativeId }: NavProps) {
  const narrative = narrativeMap[narrativeId];
  if (!narrative) return null;

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "#1e2530",
        borderColor: narrative.accent + "33",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-6 h-14">
          <Link
            to="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
            style={{ color: narrative.accent }}
          >
            Kahvi 2050
          </Link>

<div className="hidden md:flex items-center gap-3 ml-auto">
            {/* Active — human input pill */}
            <div
              className="flex items-center gap-2 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              {/* Profile icon */}
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5.5" r="2.5" stroke="#10B981" strokeWidth="1.4" />
                <path d="M2.5 14c0-2.485 2.462-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#10B981" }} />
              <span
                className="text-[10px] font-medium tracking-widest uppercase"
                style={{ color: "#10B981", fontFamily: "'JetBrains Mono', monospace" }}
              >
                INPUT: human OPERATOR
              </span>
            </div>

            {/* Inactive — agent standby */}
            <div className="flex items-center gap-2 cursor-default">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.3 }}>
                <rect x="2" y="6" width="12" height="8" rx="2" stroke="#e8e6e1" strokeWidth="1.4" />
                <path d="M5 6V5a3 3 0 016 0v1" stroke="#e8e6e1" strokeWidth="1.4" />
                <circle cx="5.5" cy="10" r="1" fill="#e8e6e1" />
                <circle cx="10.5" cy="10" r="1" fill="#e8e6e1" />
                <path d="M8 2v2" stroke="#e8e6e1" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span
                className="text-[10px] font-medium tracking-widest uppercase"
                style={{ color: "#6E7681", fontFamily: "'JetBrains Mono', monospace" }}
              >
                AGENT: STANDBY
              </span>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

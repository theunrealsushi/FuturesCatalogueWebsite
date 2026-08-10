import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { narratives } from "../data/content";
import CompatibilityModal from "../components/CompatibilityModal";

const HEADING = "'Sora', -apple-system, BlinkMacSystemFont, sans-serif";
const BODY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = "'SF Mono', 'Cascadia Code', Consolas, ui-monospace, monospace";

const PARAS = [
  "This website catalogues a collection of products, services, communities and rituals set in 2050 Helsinki, co-created with coffee businesses, industry professionals and coffee enthusiasts, through participatory design fiction workshops.",
  "The prototypes are organized into three distinct imaginary 2050 worlds and their coffee cultures. Some of the products, services and systems exists in multiple parallel worlds but manifest in different forms. In each prototype listing, you will find details about how they came to exist in their world and their implications.",
  "The Kahvi 2050 website is part of Sushmita Charlu's larger project on Imagining a Post-Extractive Coffee Culture in Finland.",
];

// Shared AudioContext — avoids hitting browser limits on concurrent contexts
let sharedCtx: AudioContext | null = null;
function getCtx() {
  if (!sharedCtx || sharedCtx.state === "closed") sharedCtx = new AudioContext();
  return sharedCtx;
}

function createKeyClick(char: string) {
  try {
    const ctx = getCtx();
    const now = ctx.currentTime;

    // Vary pitch and volume slightly per character for human feel
    const isSpace = char === " ";
    const isPunct = /[.,;:!?]/.test(char);
    const volume = isSpace ? 0.02 : isPunct ? 0.12 : 0.06 + Math.random() * 0.04;
    const freq = isPunct ? 2200 : 2800 + Math.random() * 1400;
    const decay = isPunct ? 0.045 : 0.022 + Math.random() * 0.012;

    if (isSpace) return; // spaces are silent — natural pause

    // Attack transient — very short noise burst
    const attackSize = Math.floor(ctx.sampleRate * 0.004);
    const attackBuf = ctx.createBuffer(1, attackSize, ctx.sampleRate);
    const attackData = attackBuf.getChannelData(0);
    for (let i = 0; i < attackSize; i++) {
      attackData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / attackSize, 2);
    }

    // Body — longer filtered noise
    const bodySize = Math.floor(ctx.sampleRate * decay);
    const bodyBuf = ctx.createBuffer(1, bodySize, ctx.sampleRate);
    const bodyData = bodyBuf.getChannelData(0);
    for (let i = 0; i < bodySize; i++) {
      bodyData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bodySize, 6);
    }

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = freq;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + decay);

    // Attack (unfiltered click)
    const attackSrc = ctx.createBufferSource();
    attackSrc.buffer = attackBuf;
    const attackGain = ctx.createGain();
    attackGain.gain.setValueAtTime(volume * 1.4, now);
    attackSrc.connect(attackGain);
    attackGain.connect(ctx.destination);
    attackSrc.start(now);

    // Body (filtered resonance)
    const bodySrc = ctx.createBufferSource();
    bodySrc.buffer = bodyBuf;
    bodySrc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    bodySrc.start(now);
  } catch (_) {}
}

function useSequentialTypewriter(paragraphs: string[], ready: boolean, speed = 54) {
  const [texts, setTexts] = useState<string[]>(() => paragraphs.map(() => ""));
  const [activePara, setActivePara] = useState(0);
  const [done, setDone] = useState(false);

  const stateRef = useRef({ pi: 0, ci: 0, timer: 0 as unknown as ReturnType<typeof setTimeout> });
  const readyRef = useRef(ready);
  readyRef.current = ready;

  const finish = useCallback(() => {
    clearTimeout(stateRef.current.timer);
    setTexts([...paragraphs]);
    setActivePara(paragraphs.length);
    setDone(true);
  }, [paragraphs]);

  const skip = useCallback(() => { finish(); }, [finish]);

  useEffect(() => {
    // Reset state on each effect run (handles strict-mode double invoke)
    stateRef.current.pi = 0;
    stateRef.current.ci = 0;
    setTexts(paragraphs.map(() => ""));
    setActivePara(0);
    setDone(false);

    function poll() {
      if (!readyRef.current) {
        stateRef.current.timer = setTimeout(poll, 100);
        return;
      }
      stateRef.current.timer = setTimeout(tick, 500);
    }

    function tick() {
      const { pi, ci } = stateRef.current;
      const target = paragraphs[pi];
      const nextCi = ci + 1;
      stateRef.current.ci = nextCi;

      const char = target[nextCi - 1] ?? "";
      createKeyClick(char);

      setTexts((prev) => {
        const next = [...prev];
        next[pi] = target.slice(0, nextCi);
        return next;
      });

      if (nextCi < target.length) {
        const isPunct = /[.,;:!?]/.test(char);
        const isSpace = char === " ";
        const delay = isPunct
          ? speed * 4 + Math.random() * speed * 3
          : isSpace
          ? speed * 1.5 + Math.random() * speed
          : speed * (0.6 + Math.random() * 0.9);
        stateRef.current.timer = setTimeout(tick, delay);
      } else if (pi < paragraphs.length - 1) {
        stateRef.current.pi = pi + 1;
        stateRef.current.ci = 0;
        setActivePara(pi + 1);
        stateRef.current.timer = setTimeout(tick, speed * 6);
      } else {
        setActivePara(paragraphs.length);
        setDone(true);
      }
    }

    poll();
    return () => clearTimeout(stateRef.current.timer);
  }, []);

  return { texts, activePara, done, skip };
}


const narrativeDescriptions = {
  regulated: "dgakhdhahdlhaildhilsahdilhaihd.",
  techno: "kcbjksabjbjabjbjbjb.",
  crafted: "Cooperative-owned, hand-made, community-governed. A marketplace built around craft, care, and shared ritual.",
};

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(() => {
    try {
      return sessionStorage.getItem("modal-dismissed") !== "1";
    } catch {
      return true;
    }
  });
  const { texts, activePara, done, skip } = useSequentialTypewriter(PARAS, !modalOpen);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: "rgba(30,37,48,0)", fontFamily: BODY }} onClick={!done ? skip : undefined}>
      {modalOpen && (
        <CompatibilityModal
          onClose={() => {
            try { sessionStorage.setItem("modal-dismissed", "1"); } catch {}
            setModalOpen(false);
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24" style={{ backgroundColor: "rgb(29,33,39)" }}>
        <header className="mb-16 sm:mb-24">
          {/* Metadata label — mono */}
          <div
            className="text-xs tracking-[0.3em] uppercase text-[#e8e6e1]/30 mb-5"
            style={{ fontFamily: MONO }}
          >
            Helsinki, Finland — 2050
          </div>
          {/* Primary heading — Sora, static */}
          <h1
            className="font-semibold mb-6"
            style={{ fontFamily: HEADING, letterSpacing: "-0.02em", color: "#F0F6FC", fontSize: "28px", lineHeight: "32px" }}
          >
            A catalogue of fictional prototypes for a <span style={{ whiteSpace: "nowrap" }}>post-extractive</span> coffee culture in Finland
          </h1>
          {/* Body — typewriter on first visit, sequential per paragraph */}
          <div className="space-y-4 text-[#e8e6e1]/50 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace", textAlign: "justify", fontSize: "12px" }}>
            {PARAS.map((full, i) => (
              <p key={i} style={{ minHeight: i >= activePara && texts[i] === "" ? "0" : undefined }}>
                {texts[i]}
                {activePara === i && texts[i] !== full && (
                  <span
                    className="inline-block w-[2px] h-[1em] ml-0.5 align-middle"
                    style={{ backgroundColor: "currentColor", animation: "blink 0.53s step-end infinite" }}
                  />
                )}
              </p>
            ))}
          </div>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#3a4450]"
          style={{ opacity: done ? 1 : 0, transition: "opacity 0.8s ease", pointerEvents: done ? "auto" : "none" }}
        >
          {narratives.map((narrative) => (
            <Link
              key={narrative.id}
              to={`/${narrative.id}`}
              className="group relative flex flex-col justify-between p-8 sm:p-10 min-h-[420px] sm:min-h-[520px] transition-all duration-300"
              style={{ backgroundColor: "#1e2530" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: narrative.accent + "08" }}
              />

              <div className="relative">
                {/* Narrative label — mono, +18% tracking */}
                <div
                  className="font-semibold uppercase mb-4"
                  style={{ color: narrative.accent, fontFamily: MONO, fontSize: "11px", letterSpacing: "0.18em" }}
                >
                  Narrative {narratives.indexOf(narrative) + 1}
                </div>
                {/* Section title — Sora */}
                <h2
                  className="text-xl sm:text-2xl font-semibold mb-4 leading-tight"
                  style={{ color: "#F0F6FC", fontFamily: HEADING }}
                >
                  {narrative.name}
                </h2>
                {/* Description — system sans (Roboto Mono for regulated) */}
                <p
                  className="text-xs text-[#e8e6e1]/40 leading-relaxed"
                  style={{ fontFamily: "'Roboto Mono', monospace" }}
                >
                  {narrativeDescriptions[narrative.id as keyof typeof narrativeDescriptions]}
                </p>
              </div>

              <div className="relative">
                <div className="mb-6">
                  {/* Tagline — mono brackets, +0 color/opacity change */}
                  <p
                    className="font-medium leading-tight uppercase"
                    style={{ color: narrative.secondary, fontFamily: MONO, fontSize: "14px" }}
                  >
                    // "{narrative.tagline}" //
                  </p>
                </div>


                {/* CTA — mono HUD format */}
                <div
                  className="mt-6 font-medium uppercase transition-colors"
                  style={{ color: narrative.accent, fontFamily: MONO, fontSize: "12px", letterSpacing: "0.15em" }}
                >
                  ENTER [ → ]
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-[#3a4450] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8e6e1]/20" style={{ fontFamily: MONO }}>
            © 2050 Kahvi 2050 Collective · Helsinki · FI-2050-COL-004
          </p>
          <p className="text-xs text-[#e8e6e1]/20" style={{ fontFamily: MONO }}>
            A design fiction futures catalogue
          </p>
        </footer>
      </div>
    </div>
  );
}

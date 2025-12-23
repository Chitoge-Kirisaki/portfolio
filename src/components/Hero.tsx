import { useEffect, useMemo, useRef, useState } from "react";
import KunalImg from "../assets/final_prod_kunal.png";
import useTypewriter from "./useTypewriter";

export default function Hero() {
  const words = useMemo(
    () => [
      "data-driven builder",
      "product-minded coder",
      "full-stack web dev",
      "analytics-first thinker",
      "SQL + Python enjoyer",
      "API wrangler",
      "professional debugger",
      "engineering with business intent",
      "turning insights into features",
    ],
    []
  );

  const typed = useTypewriter(words);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [imgOffset, setImgOffset] = useState({ x: 0, y: 0 });
  const [heroIn, setHeroIn] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setHeroIn(true), 60);

    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = heroRef.current!.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);

        const clamp = (v: number) => Math.max(-1, Math.min(1, v));

        const strengthX = 12;
        const strengthY = 10;

        setImgOffset({
          x: clamp(dx) * strengthX,
          y: clamp(dy) * strengthY,
        });
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-teal-400/15 blur-[160px]" />
        <div className="absolute left-10 top-40 h-[300px] w-[300px] rounded-full bg-[#ed786b]/10 blur-[160px]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 items-center">
        {/* LEFT */}
        <div>
          <h1
            className="text-5xl font-bold text-[#ed786b] md:text-6xl"
            style={{
              textShadow:
                "0 0 22px rgba(237,120,107,0.55), 0 0 48px rgba(237,120,107,0.3)",
            }}
          >
            Kunal
          </h1>

          <div className="mt-4 flex items-center gap-2 text-2xl tracking-wider text-[#ed786b]/90">
            <span className="uppercase">{typed}</span>
            <span className="h-6 w-[2px] bg-[#ed786b] animate-pulse" />
          </div>

          <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
            I build data-driven products at the intersection of analytics,
            software, and product thinking. I turn messy datasets and vague ideas
            into clear insights, usable features, and measurable outcomes.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-[#ed786b] px-6 py-3 font-semibold text-black transition-all hover:bg-teal-300 hover:shadow-[0_0_18px_rgba(94,234,212,0.45)]"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="rounded-lg border border-teal-300/50 px-6 py-3 font-semibold text-teal-200 hover:border-[#ed786b] hover:text-[#ed786b] transition-colors"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={heroRef}
          className={[
            "relative hidden md:flex items-center justify-center -translate-y-12",
            heroIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4",
            "transition-all duration-700 ease-out",
          ].join(" ")}
        >
          <div className="absolute inset-0 rounded-full bg-[#ed786b]/18 blur-[160px]" />
          <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-teal-400/12 blur-[180px]" />

          <div className="relative">
            <img
              src={KunalImg}
              alt="Kunal Biswas"
              draggable={false}
              className="relative z-10 h-[700px] object-contain select-none"
              style={{
                transform: `translate(${imgOffset.x}px, calc(${imgOffset.y}px - 6px))`,
                transition: "transform 120ms ease-out",
                filter: `
                  brightness(1.10)
                  contrast(1.12)
                  saturate(1.05)
                  drop-shadow(0 0 30px rgba(237,120,107,0.18))
                  drop-shadow(0 0 18px rgba(94,234,212,0.18))
                `,
              }}
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 75%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

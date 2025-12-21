import React, { useEffect, useMemo, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import BrushCursor from "./components/BrushCursor";
import KunalImg from "./assets/final_prod_kunal.png";

/* ---------------- TYPEWRITER ---------------- */
function useTypewriter(
  words: string[],
  opts?: { typingMs?: number; deletingMs?: number; pauseMs?: number }
) {
  const typingMs = opts?.typingMs ?? 65;
  const deletingMs = opts?.deletingMs ?? 35;
  const pauseMs = opts?.pauseMs ?? 900;

  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
      return;
    }

    const next = deleting
      ? current.slice(0, text.length - 1)
      : current.slice(0, text.length + 1);

    const t = setTimeout(
      () => setText(next),
      deleting ? deletingMs : typingMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typingMs, deletingMs, pauseMs]);

  return text;
}

/* ---------------- NAV ---------------- */
function Nav() {
  const items = [
    { label: "0. ABOUT", href: "#about" },
    { label: "1. SKILLS", href: "#skills" },
    { label: "2. PROJECTS", href: "#projects" },
    { label: "3. CONTACT", href: "#contact" },
    { label: "4. RESUME", href: "#resume" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xs tracking-widest text-white/60">DRAG ANYWHERE</div>

        <nav className="hidden md:flex items-center gap-5 text-xs tracking-wider text-white/70">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="hover:text-teal-300 transition-colors"
            >
              <span className="text-sky-300">{it.label.split(" ")[0]}</span>{" "}
              {it.label.slice(2)}
            </a>
          ))}

          <div className="ml-2 flex items-center gap-3">
            <a
              href="https://github.com/Kunal1337"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-teal-300 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/Kunalbiswas1"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-teal-300 transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- SECTION ---------------- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <div className="mt-6 text-white/70">{children}</div>
      </div>
    </section>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  const words = useMemo(
    () => [
      "data-driven builder",
      "product-minded coder",
      "full-stack web dev",
      "analytics-first thinker",
      "SQL + Python enjoyer",
      "API wrangler",
      "professional debugger",
      "ship it > perfect it",
    ],
    []
  );

  const typed = useTypewriter(words);

  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <BrushCursor />

      <main className="pt-24">
        {/* HERO */}
        <div className="relative overflow-hidden">
          {/* background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 top-20 h-[520px] w-[520px] rounded-full bg-teal-400/15 blur-[160px]" />
            <div className="absolute left-10 top-40 h-[300px] w-[300px] rounded-full bg-[#ed786b]/10 blur-[160px]" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
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
                MIS + CS student building clean, data-informed products. I like
                turning messy problems into simple interfaces, measurable outcomes,
                and shippable code.
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
            <div className="relative hidden md:flex items-end justify-center translate-y-6 min-h-[700px]">
              <div className="absolute inset-0 rounded-full bg-[#ed786b]/18 blur-[160px]" />
              <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-teal-400/12 blur-[180px]" />

              <div className="relative">
                <img
                  src={KunalImg}
                  alt="Kunal Biswas"
                  draggable={false}
                  className="relative z-10 h-[700px] object-contain select-none"
                  style={{
                    filter: `
                      brightness(1.10)
                      contrast(1.12)
                      saturate(1.05)
                      drop-shadow(0 0 22px rgba(237,120,107,0.22))
                      drop-shadow(0 0 18px rgba(94,234,212,0.18))
                    `,
                  }}
                />

                {/* bottom fade */}
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

        <Section id="about" title="About">
          <p>Put your short PM-style summary here.</p>
        </Section>

        <Section id="skills" title="Skills">
          <p>Technical + Data + Product Thinking buckets.</p>
        </Section>

        <Section id="projects" title="Projects">
          <p>Project cards go here.</p>
        </Section>

        <Section id="contact" title="Get in Touch">
          <p>Email + links.</p>
        </Section>

        <Section id="resume" title="Resume">
          <p>Resume download / embed.</p>
        </Section>

        <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Kunal Biswas
        </footer>
      </main>
    </div>
  );
}

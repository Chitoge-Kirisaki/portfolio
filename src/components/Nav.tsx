import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Nav() {
    const items = [
        { label: "0. ABOUT", href: "#about" },
        { label: "1. PROJECTS", href: "#projects" },
        { label: "2. CONTACT", href: "#contact" },
        { label: "3. RESUME", href: "#resume" },
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
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://linkedin.com/in/Kunalbiswas1"
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/60 hover:text-teal-300 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

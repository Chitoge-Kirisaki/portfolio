import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* EMAIL */}
            <a
                href="mailto:ksb2895@utexas.edu"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-teal-300/40 hover:bg-white/[0.04]"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ed786b]/15 text-[#ed786b]">
                            <Mail size={18} />
                        </span>
                        <div>
                            <div className="text-sm font-semibold text-white">Email</div>
                            <div className="mt-0.5 text-sm text-white/60">ksb2895@utexas.edu</div>
                        </div>
                    </div>

                    <ArrowUpRight
                        size={18}
                        className="text-white/40 transition group-hover:text-teal-200"
                    />
                </div>

                <div className="mt-3 text-xs text-white/50">
                    Best for internship + project outreach
                </div>
            </a>

            {/* LINKEDIN */}
            <a
                href="https://linkedin.com/in/kunalbiswas1"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-teal-300/40 hover:bg-white/[0.04]"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-300/10 text-teal-200">
                            <Linkedin size={18} />
                        </span>
                        <div>
                            <div className="text-sm font-semibold text-white">LinkedIn</div>
                            <div className="mt-0.5 text-sm text-white/60">/in/kunalbiswas1</div>
                        </div>
                    </div>

                    <ArrowUpRight
                        size={18}
                        className="text-white/40 transition group-hover:text-teal-200"
                    />
                </div>

                <div className="mt-3 text-xs text-white/50">
                    Quick context + recent work
                </div>
            </a>

            {/* GITHUB */}
            <a
                href="https://github.com/Kunal1337"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-teal-300/40 hover:bg-white/[0.04]"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/80">
                            <Github size={18} />
                        </span>
                        <div>
                            <div className="text-sm font-semibold text-white">GitHub</div>
                            <div className="mt-0.5 text-sm text-white/60">Kunal1337</div>
                        </div>
                    </div>

                    <ArrowUpRight
                        size={18}
                        className="text-white/40 transition group-hover:text-teal-200"
                    />
                </div>

                <div className="mt-3 text-xs text-white/50">
                    Code + projects + commits
                </div>
            </a>
        </div>
    );
}

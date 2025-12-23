import React from "react";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
    // If you use PDF instead, change this to "/Kunal_Biswas_Resume.pdf"
    const RESUME_URL = "/Kunal_Biswas_Resume.pdf";

    return (
        <div className="mt-2 max-w-3xl">
            <p className="text-white/70 leading-relaxed">
                Download my resume
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-[#ed786b] px-5 py-3 font-semibold text-black transition-all hover:bg-teal-300 hover:shadow-[0_0_18px_rgba(94,234,212,0.45)]"
                >
                    <Download size={18} />
                    Download Resume
                </a>

                <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-3 font-semibold text-white/80 transition hover:border-teal-300/40 hover:text-white"
                >
                    <ExternalLink size={18} />
                    Open in new tab
                </a>
            </div>

            <div className="mt-3 text-xs text-white/50">
                Tip: a PDF looks best in browsers.
            </div>
        </div>
    );
}

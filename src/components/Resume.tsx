import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
    const RESUME_URL = "/Kunal_Biswas_resume.pdf";

    return (
        <div className="mt-2 max-w-3xl">
            <p className="text-white/70 leading-relaxed">Download my resume</p>

            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-[#ed786b] px-5 py-3 font-semibold text-black transition-all hover:bg-teal-300"
                >
                    <Download size={18} />
                    Download Resume
                </a>

                <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-5 py-3 font-semibold text-white/80 transition hover:border-teal-300/40 hover:text-teal-200"
                >
                    <ExternalLink size={18} />
                    Open in new tab
                </a>
            </div>
        </div>
    );
}

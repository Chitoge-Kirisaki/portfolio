import React from "react";

type Props = {
    id: string;
    openId: string | null;
    setOpenId: (id: string | null) => void;
    title: string;
    subtitle: string;
    content: {
        context: string;
        role: string;
        problem?: string;
        approach: string[];
        solution: string;
        outcome: string;
        skills: string[];
        artifacts?: { label: string; href: string }[];
    };
};

export default function ProjectCard({
    id,
    openId,
    setOpenId,
    title,
    subtitle,
    content,
}: Props) {
    const open = openId === id;

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
            {/* COLLAPSED HEADER */}
            <button
                onClick={() => setOpenId(open ? null : id)}
                className="w-full px-6 py-5 text-left hover:bg-white/[0.04] transition"
            >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{subtitle}</p>
                <p className="mt-2 text-sm text-teal-300">
                    Context · My Role · Outcome →
                </p>
            </button>

            {/* EXPANDED */}
            {open && (
                <div className="px-6 pb-6 space-y-6 text-white/70">
                    <Section label="Context">{content.context}</Section>
                    <Section label="My Role">{content.role}</Section>
                    {content.problem && (
                        <Section label="Problem Framing">{content.problem}</Section>
                    )}

                    <Section label="Approach">
                        <ul className="list-disc pl-5 space-y-1">
                            {content.approach.map((a, i) => (
                                <li key={i}>{a}</li>
                            ))}
                        </ul>
                    </Section>

                    <Section label="Solution">{content.solution}</Section>
                    <Section label="Outcome">{content.outcome}</Section>

                    <Section label="Skills Applied">
                        <div className="flex flex-wrap gap-2">
                            {content.skills.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full border border-white/15 px-3 py-1 text-sm"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </Section>

                    {content.artifacts && (
                        <Section label="Project Artifacts">
                            <div className="flex flex-col gap-2">
                                {content.artifacts.map((a) => (
                                    <a
                                        key={a.label}
                                        href={a.href}
                                        className="text-teal-300 hover:underline"
                                    >
                                        {a.label}
                                    </a>
                                ))}
                            </div>
                        </Section>
                    )}
                </div>
            )}
        </div>
    );
}

function Section(
    { label, children }: { label: string; children: React.ReactNode }
) {
    return (
        <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
                {label}
            </h4>
            <div className="mt-2">{children}</div>
        </div>
    );
}
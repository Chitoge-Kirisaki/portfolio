import React from "react";

export default function Section({
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

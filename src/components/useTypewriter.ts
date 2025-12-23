import { useEffect, useState } from "react";

export default function useTypewriter(
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

        const t = setTimeout(() => setText(next), deleting ? deletingMs : typingMs);
        return () => clearTimeout(t);
    }, [text, deleting, i, words, typingMs, deletingMs, pauseMs]);

    return text;
}

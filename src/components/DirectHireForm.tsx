export default function DirectHireForm() {
    return (
        <div className="mt-24 mx-auto max-w-4xl px-6">
            <h3 className="text-xl font-semibold text-white mb-2">
                Skip the ATS. Reach me directly.
            </h3>

            <p className="mb-6 text-white/60">
                If my work resonates, leave a note. I read every message.
            </p>

            <div className="overflow-hidden rounded-xl border border-white/10">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd1EkEgJbC9JLFKiLG6L88pPlxp2WV206HDASL_TtXxP7JwmQ/viewform?usp=dialog"
                    width="100%"
                    height={650}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Direct Hire Form"
                />
            </div>
        </div>
    );
}

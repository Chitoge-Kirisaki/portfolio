import React, { useMemo, useState } from "react";

type Project = {
    id: string;
    title: string;
    subtitle: string; // 1-line problem framing (collapsed)
    contextLine: string; // "Context · Role · Outcome →" row text
    context: string;
    role: string;
    problemFraming?: string;
    approach: string[];
    solution: string;
    outcome: string;
    skills: string[];
    artifacts?: { label: string; href: string }[];
};

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {children}
        </span>
    );
}

function Block({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
                {label}
            </h4>
            <div className="mt-2 text-white/70 leading-relaxed">{children}</div>
        </div>
    );
}

export default function Projects() {
    const projects = useMemo<Project[]>(
        () => [
            {
                id: "otis",
                title: "Optimizing IT Help Desk Onboarding Through Data-Driven Insights",
                subtitle:
                    "Identified onboarding bottlenecks and improved training strategy for a university IT help desk.",
                contextLine: "Student IT Help Desk · Analytics Lead · Scalable onboarding framework",
                context:
                    "The student IT help desk supported a wide range of requests, but onboarding outcomes varied widely. Training materials were fragmented, outdated, and often replaced by word-of-mouth knowledge. New associates took longer to become effective and escalated issues that stronger guidance could prevent.",
                role:
                    "I led the analytical and problem-framing work, partnered with another intern, and collaborated closely with full-time staff to connect operational data with day-to-day pain points.",
                problemFraming:
                    "The problem wasn’t just “missing documentation.” It was unclear which documentation mattered most. Before proposing changes, I needed to learn which ticket types created the most friction and where training consistently failed.",
                approach: [
                    "Interviewed current and former student associates to surface recurring onboarding pain points",
                    "Audited existing documentation for accessibility, relevance, and consistency",
                    "Analyzed historical help desk ticket data to identify high-friction categories and resolution bottlenecks",
                    "Validated qualitative findings against quantitative patterns in the data",
                    "Prioritized high-impact categories instead of trying to cover every edge case",
                ],
                solution:
                    "Proposed a centralized, dynamic onboarding handbook embedded into the team’s workflow, focused on the highest-impact ticket categories, optimized for clarity, and designed to stay current as systems and processes evolve.",
                outcome:
                    "Aligned stakeholders around a more scalable onboarding strategy. Leadership adopted the recommendations as a reference point for future onboarding improvements and training updates.",
                skills: [
                    "SQL",
                    "Data Analysis",
                    "Data Cleaning",
                    "Stakeholder Interviews",
                    "Root Cause Analysis",
                    "Data Visualization",
                    "Process Improvement",
                ],
                artifacts: [
                    { label: "View White Paper →", href: "https://docs.google.com/document/d/13jBTa62ZkL1wbZ971MQPrM4JZFvxvDz3gr47spu-anI/edit?usp=sharing" },
                    { label: "View Sample Visualizations →", href: "https://github.com/Kunal1337/OTIS-Help-Desk-Training-Optimization-Project/tree/main/PowerBI%20Tables" },
                ],
            },
            {
                id: "watches",
                title: "Designing and Building a Full-Stack E-Commerce Platform",
                subtitle:
                    "Built an end-to-end transactional system to understand product + technical tradeoffs.",
                contextLine: "Personal Project · End-to-End Owner · Production-style flows",
                context:
                    "I wanted to understand how real products work beyond isolated features: how user flows, persistence, and admin controls interact in one system. I designed a functional e-commerce platform that mirrors real-world complexity: accounts, inventory, and order tracking.",
                role:
                    "I independently scoped, designed, and built the platform end-to-end, owning product decisions, system architecture, and full-stack implementation.",
                problemFraming:
                    "The goal wasn’t maximum polish or feature count. It was learning the tradeoffs behind a realistic transactional system: how users/admins interact with the data model, and how constraints shape product decisions.",
                approach: [
                    "Defined core user + admin flows (browse, checkout, order history, inventory management)",
                    "Designed a relational schema for products, users, orders, and admin actions",
                    "Implemented backend logic for CRUD, authentication, and persistence",
                    "Built frontend components to reflect real state transitions and interactions",
                    "Iterated to handle edge cases and ensure consistency across workflows",
                ],
                solution:
                    "Delivered a working platform where users browse products, complete mock purchases, and view order history, while admins securely manage inventory and product data, structured around production-style workflows.",
                outcome:
                    "Strengthened my ability to reason about systems, feasibility, and product tradeoffs. Reinforced how technical decisions directly impact UX and operational complexity.",
                skills: [
                    "Full-Stack Development",
                    "System Design",
                    "REST APIs",
                    "Database Modeling",
                    "Authentication",
                    "Product Scoping",
                    "Tradeoff Analysis",
                ],
                artifacts: [
                    { label: "View Live Demo →", href: "https://webdevfinal-f.onrender.com/" },
                    { label: "View GitHub Repository →", href: "https://github.com/Kunal1337/webDevFinal" },
                ],
            },
            {
                id: "stocks",
                title: "Exploring Trading Patterns Through Applied Data Analysis",
                subtitle:
                    "Analyzed historical market data to evaluate simple strategies and their limits.",
                contextLine: "Personal Project · Independent Build · Interpretable analysis",
                context:
                    "I wanted to test common trading strategies on real market data and understand where their assumptions break down. I built an analysis pipeline that emphasizes transparency and interpretability over black-box prediction.",
                role:
                    "I designed and implemented the analysis independently: data ingestion, processing, strategy logic, and visualization.",
                problemFraming:
                    "The goal wasn’t “predict perfectly.” It was evaluating how simple strategies behave across time horizons and being honest about variability and limitations.",
                approach: [
                    "Built a Python pipeline to ingest and process user-provided stock data",
                    "Implemented multiple baseline strategies (e.g., moving-average based approaches)",
                    "Compared behavior across short- and long-term windows",
                    "Visualized outcomes to support interpretation and comparison",
                    "Documented failure modes where strategies did not generalize",
                ],
                solution:
                    "Created an app workflow where users upload data and see how strategies behave under different conditions. Visual outputs highlight volatility, patterns, and inconsistencies. Insight-first, not hype-first.",
                outcome:
                    "Reinforced interpretability and skepticism in analysis. Improved my ability to communicate insights clearly and reason about model limits, not just results.",
                skills: [
                    "Python",
                    "Pandas",
                    "Data Analysis",
                    "Data Visualization",
                    "Analytical Reasoning",
                    "Model Evaluation",
                ],
                artifacts: [
                    { label: "View GitHub Repository →", href: "https://github.com/Kunal1337/Moving-Averages-Stock-Trading" },
                    { label: "View Sample Outputs →", href: "https://drive.google.com/drive/folders/1QNcIVXfUNcKP4B67HFMrhsr9whHA7Y9a?usp=sharing" },
                ],
            },
            {
                id: "nba-props",
                title: "Building an NBA Player Props Analytics Platform",
                subtitle:
                    "Aggregated live NBA player prop lines and historical performance to surface high-probability betting opportunities.",
                contextLine: "Personal Project · Full-Stack + Data · Live odds analysis",
                context:
                    "Sportsbook prop lines and a player's actual performance trends live in separate places, so bettors are left doing the comparison manually. I built a full-stack application that aggregates NBA player prop lines and analyzes performance trends to identify high-probability opportunities, synthesizing real-time market data with historical performance into a streamlined, data-driven decision tool.",
                role:
                    "I independently designed and built the platform end-to-end: backend data pipeline, odds/stats integration, analysis logic, and frontend dashboard.",
                problemFraming:
                    "The goal wasn't picking winners. It was turning scattered inputs, live sportsbook odds and a player's recent game logs, into one comparable number: how often has this player actually cleared this line recently.",
                approach: [
                    "Built a Node/Express backend that pulls live player-prop odds (points, assists, rebounds, threes) from The Odds API across DraftKings, FanDuel, and BetMGM",
                    "Pulled player game logs and schedule data from the NBA's public stats CDN, with BallDontLie as a fallback for player-to-team resolution",
                    "Calculated hit rates for each prop line over the last 5, 10, and 20 games, the full season, and head-to-head vs. the upcoming opponent",
                    "Layered in opponent defensive matchup ratings by position to flag favorable or unfavorable spots",
                    "Added caching and concurrency limits to stay within third-party API rate limits, with Socket.io for live updates on the frontend",
                ],
                solution:
                    "Delivered a React dashboard where users filter props by stat type and minimum hit rate, browse a 'Top Locks' list of the highest-hit-rate lines, spot 'Trending' players whose recent form diverges from their season baseline, and drill into a player's full performance history in a detail view.",
                outcome:
                    "Strengthened my ability to build real-time, multi-source data pipelines around undocumented and rate-limited APIs, and to turn raw stats into a single, decision-ready signal.",
                skills: [
                    "Node.js",
                    "Express",
                    "React",
                    "Socket.io",
                    "REST API Integration",
                    "Data Caching",
                    "Statistical Analysis",
                    "Full-Stack Development",
                ],
                artifacts: [
                    { label: "View Live Demo →", href: "https://nba-props-1.onrender.com/" },
                    { label: "View GitHub Repository →", href: "https://github.com/Kunal1337/NBA-Props" },
                ],
            },
            {
                id: "cloudflare-feedback",
                title: "Prototyping an AI Feedback Aggregator on Cloudflare's Developer Platform",
                subtitle:
                    "Built and deployed a full-stack feedback-analysis tool for a Cloudflare Product Manager Intern take-home challenge.",
                contextLine: "Cloudflare PM Intern Assignment · Product + Builder · Deployed on Workers",
                context:
                    "The assignment: product feedback arrives scattered across support tickets, GitHub issues, Discord, and more, making it hard to extract themes, urgency, and sentiment. The challenge was to prototype a tool that aggregates and analyzes that feedback, time-boxed to a few hours, while using the exercise to also evaluate Cloudflare's own developer platform as a first-time user.",
                role:
                    "I acted as both product owner and builder: scoped the solution, built and deployed it on Cloudflare's platform, and wrote up the architecture and product feedback the assignment asked for.",
                problemFraming:
                    "With a hard time-box, the risk was over-scoping. I chose depth over breadth: a small set of feedback sources analyzed well, rather than a wide integration surface built shallowly.",
                approach: [
                    "Scoped a lightweight feedback-aggregation dashboard instead of trying to cover every possible channel",
                    "Built a Cloudflare Worker backend using Workers AI to analyze feedback per source and D1 to store structured results",
                    "Seeded mock feedback across sources (GitHub, Discord, and more), since real third-party integration wasn't required",
                    "Built a React and TypeScript frontend to seed data, trigger per-source AI analysis, and generate a synthesized cross-source report",
                    "Kept a running friction log of onboarding, documentation, and UI/UX issues hit while building on the platform, each paired with a suggested product fix",
                ],
                solution:
                    "A Worker-hosted API (seed, per-source analysis, global synthesis) backed by D1, paired with a dashboard that lets a PM seed mock feedback, run AI analysis per source, and pull a global summary across all sources.",
                outcome:
                    "Delivered a working prototype within the time-box, plus a concrete set of UX friction points and suggested fixes, the core deliverable the assignment was actually evaluating.",
                skills: [
                    "Cloudflare Workers",
                    "Workers AI",
                    "D1 (SQL)",
                    "React",
                    "TypeScript",
                    "Product Thinking",
                    "Rapid Prototyping",
                ],
                artifacts: [
                    { label: "View GitHub Repository →", href: "https://github.com/Kunal1337/cloudflare-fb-dashboard/tree/main/dashboard-ui" },
                ],
            },
            {
                id: "steam-scraper",
                title: "Community Engagement Monitor for Steam Discussion Boards",
                subtitle:
                    "A rate-limited scraper and dashboard tracking unanswered threads and community activity across EA's Steam discussion boards.",
                contextLine: "Personal Project · Independent Build · Deployed on Streamlit",
                context:
                    "Large game discussion boards generate more threads than a community team can manually track, so posts that need a response can sit unanswered indefinitely. I built a scraper and monitoring dashboard focused on EA's game discussion boards on Steam to surface which threads actually need attention.",
                role:
                    "I independently built the full pipeline: the scraper, the scheduled data collection, and the Streamlit dashboard.",
                approach: [
                    "Built a polite, rate-limited scraper with a hard 2-second delay between requests and a capped scope per run",
                    "Added exponential backoff for 429 and 5xx responses, plus a circuit breaker that halts the run after repeated throttling failures",
                    "Automated recurring runs via GitHub Actions",
                    "Tracked unanswered threads, post-to-reply ratios, and EA-vs-player posting activity against a maintained list of known official accounts",
                    "Added language detection with a minimum-character threshold, so short or ambiguous text is left 'Unknown' instead of guessed",
                ],
                solution:
                    "A Streamlit dashboard that separates volume from urgency: compare games side by side, drill into one, and surface the threads that are aging or unanswered without reading every post.",
                outcome:
                    "Reinforced responsible-scraping practices under rate limits, working around fragile and undocumented HTML structure, and being explicit about the limits of automated detection rather than guessing.",
                skills: [
                    "Python",
                    "Web Scraping",
                    "Streamlit",
                    "Data Pipelines",
                    "GitHub Actions",
                    "Rate-Limit Handling",
                    "Language Detection",
                ],
                artifacts: [
                    { label: "View Live Dashboard →", href: "https://ea-games-on-steam.streamlit.app/" },
                    { label: "View GitHub Repository →", href: "https://github.com/Kunal1337/steam_discussions_scraper" },
                ],
            },
        ],
        []
    );

    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="mt-2">
            <p className="max-w-3xl text-white/70">
                Selected work demonstrating how I approach ambiguous problems, use data to
                inform decisions, and execute thoughtfully.
            </p>

            <div className="mt-10 space-y-4">
                {projects.map((p) => {
                    const open = openId === p.id;

                    return (
                        <div
                            key={p.id}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                        >
                            {/* Collapsed header (clickable) */}
                            <button
                                type="button"
                                onClick={() => toggle(p.id)}
                                className="w-full text-left px-6 py-5"
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {p.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-white/65 leading-relaxed">
                                            {p.subtitle}
                                        </p>

                                        <div className="mt-4 text-xs tracking-wide text-white/55">
                                            {p.contextLine} <span className="text-white/40">→</span>
                                        </div>
                                    </div>

                                    <div className="mt-1 shrink-0 text-xs text-white/50">
                                        {open ? "Collapse" : "Expand"}
                                    </div>
                                </div>
                            </button>

                            {/* Expanded content */}
                            {open && (
                                <div className="px-6 pb-6">
                                    <div className="h-px w-full bg-white/10" />

                                    <div className="mt-6 grid gap-8">
                                        <Block label="Context">{p.context}</Block>
                                        <Block label="My Role">{p.role}</Block>

                                        {p.problemFraming && (
                                            <Block label="Problem Framing">{p.problemFraming}</Block>
                                        )}

                                        <Block label="Approach">
                                            <ul className="list-disc pl-5 space-y-2">
                                                {p.approach.map((a) => (
                                                    <li key={a}>{a}</li>
                                                ))}
                                            </ul>
                                        </Block>

                                        <Block label="Solution">{p.solution}</Block>
                                        <Block label="Outcome">{p.outcome}</Block>

                                        <details className="group">
                                            <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-white/60">
                                                Skills Applied
                                            </summary>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {p.skills.map((s) => (
                                                    <Pill key={s}>{s}</Pill>
                                                ))}
                                            </div>
                                        </details>

                                        {p.artifacts && p.artifacts.length > 0 && (
                                            <details className="group">
                                                <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wider text-white/60">
                                                    Project Artifacts
                                                </summary>
                                                <div className="mt-3 flex flex-col gap-2">
                                                    {p.artifacts.map((a) => (
                                                        <a
                                                            key={a.label}
                                                            href={a.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="text-teal-300/90 hover:text-[#ed786b] transition-colors"
                                                        >
                                                            {a.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </details>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

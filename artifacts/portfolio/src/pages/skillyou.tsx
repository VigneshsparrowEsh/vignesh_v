import { Link } from "wouter";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  Compass,
  FileText,
  GraduationCap,
  LineChart,
  Map,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

const AMBER = "#F5A623";
const BG = "#0A0A0A";
const SURFACE = "#111111";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "#8A8A8A";

type IconComponent = typeof Compass;

const modules: { icon: IconComponent; title: string; points: string[] }[] = [
  { icon: Compass, title: "Career Discovery Engine", points: ["Discover suitable career paths", "Match interests and strengths", "Explore salary trends", "Understand industry demand"] },
  { icon: Target, title: "Skill Gap Analyzer", points: ["Analyzes current skills and desired career", "Outputs gap score", "Prioritizes missing skills", "Recommends learning paths"] },
  { icon: Bot, title: "AI Career Advisor", points: ["Answers career questions", "Suggests career transitions", "Recommends certifications", "Supports interview preparation"] },
  { icon: Map, title: "Learning Roadmap Builder", points: ["30-day action plan", "90-day growth plan", "6-month career roadmap", "Milestone-based progress"] },
  { icon: FileText, title: "Resume & Profile Optimizer", points: ["Resume analysis", "ATS scoring", "LinkedIn optimization", "Portfolio suggestions"] },
  { icon: LineChart, title: "Job Readiness Score", points: ["Skill readiness", "Resume quality", "Interview readiness", "Market competitiveness"] },
];

const revenueStreams = [
  ["Freemium Subscription", "Basic assessments for free; premium unlocks unlimited AI coaching, advanced reports, and personalized roadmaps."],
  ["Resume Services", "Paid resume reviews, ATS optimization, and LinkedIn audits."],
  ["Learning Partnerships", "Affiliate revenue from courses, certifications, and bootcamps."],
  ["B2B Licensing", "Career services for colleges, universities, training institutes, and placement cells."],
  ["Enterprise Talent Development", "Corporate upskilling, internal mobility, and career progression planning."],
];
const customers = [["Students", "16–25", "Career discovery, roadmaps, skill recommendations"], ["Job Seekers", "Career movers", "Resume improvement, interview preparation, transition guidance"], ["Working Professionals", "Growth focused", "Upskilling, promotions, career growth planning"], ["Educational Institutions", "B2B", "Student career services, placement support, skill assessments"]];
const roadmap = [["MVP", "Career assessment, AI advisor, roadmap generation"], ["Version 2", "Skill gap engine and resume analyzer"], ["Version 3", "Job matching and AI interview coach"], ["Version 4", "Institutional dashboard and enterprise platform"]];
const competitors = [["Coursera", "Limited", "No", "No", "No"], ["LinkedIn Learning", "Partial", "No", "Partial", "No"], ["CareerFoundry", "Partial", "No", "No", "Partial"], ["SkillYou", "Yes", "Yes", "Yes", "Yes"]];
const marketCards: { icon: IconComponent; title: string; copy: string }[] = [
  { icon: LineChart, title: "EdTech Market", copy: "Multi-billion-dollar global industry with growing demand for online learning." },
  { icon: Users, title: "Career Guidance", copy: "Increasing need for personalized support while AI-driven coaching is still emerging." },
  { icon: Sparkles, title: "Upskilling Economy", copy: "Driven by AI transformation, automation, remote work, and continuous learning." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.28em] font-semibold mb-4" style={{ color: AMBER }}>{children}</p>;
}

export default function SkillYou() {
  return (
    <div style={{ background: BG, color: "#E4E4E4" }} className="min-h-screen overflow-x-hidden font-body selection:bg-[#F5A623] selection:text-black">
      <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between glass-nav scrolled">
        <Link href="/" className="font-display text-2xl font-semibold tracking-wide text-white cursor-none">Vignesh V.</Link>
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold transition-colors hover:text-[#F5A623]" style={{ color: MUTED }}><ArrowLeft className="h-4 w-4" /> Back to work</Link>
      </nav>
      <div className="fixed top-20 left-0 right-0 z-40 h-px" style={{ background: `${AMBER}22` }} />
      <main>
        <section className="relative pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 70% 20%, rgba(139,92,246,0.24), transparent 36%), radial-gradient(circle at 20% 70%, rgba(245,166,35,0.16), transparent 32%)" }} />
          <div className="relative container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
            <div><SectionLabel>Startup case study</SectionLabel><h1 className="font-display font-semibold text-white leading-[0.98] mb-6" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", letterSpacing: "-0.05em" }}>SkillYou</h1><h2 className="text-2xl md:text-4xl font-semibold text-white mb-6">AI-Powered Career Growth Platform</h2><p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "#B8B8B8" }}>Helping students and professionals discover career paths, identify skill gaps, build personalized learning roadmaps, and become job-ready using AI.</p></div>
            <div className="grid gap-3">{[["Role", "Founder, Product Designer, AI Strategist"], ["Status", "Concept → MVP Development"], ["Vision", "Democratize career guidance and make personalized career coaching accessible to everyone."]].map(([label, value]) => <div key={label} className="border p-5" style={{ borderColor: BORDER, background: "rgba(17,17,17,0.82)" }}><p className="text-xs uppercase tracking-widest mb-2" style={{ color: AMBER }}>{label}</p><p className="text-white font-medium">{value}</p></div>)}</div>
          </div>
        </section>
        <section className="py-20" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}><div className="container px-6 md:px-12 mx-auto max-w-7xl"><SectionLabel>01 / The problem</SectionLabel><h2 className="font-display text-4xl md:text-6xl text-white mb-10">Why SkillYou Exists</h2><div className="grid md:grid-cols-3 gap-px mb-12" style={{ background: BORDER }}>{[["Career Confusion", "Students and professionals are unsure which career path matches their strengths because there are too many options and conflicting advice."], ["Skill Gap Uncertainty", "Users often do not know which skills employers actually want or which competencies they are missing."], ["Fragmented Learning Journey", "Courses, certifications, and career advice are scattered across platforms with no personalized roadmap."]].map(([title, copy]) => <div key={title} className="p-8" style={{ background: "#0D0D0D" }}><h3 className="text-2xl font-semibold text-white mb-4">{title}</h3><p className="leading-relaxed" style={{ color: MUTED }}>{copy}</p></div>)}</div><div className="overflow-hidden border" style={{ borderColor: BORDER }}><div className="grid grid-cols-2 p-4 text-xs uppercase tracking-widest" style={{ background: "#0D0D0D", color: AMBER }}><span>Challenge</span><span>Existing Platforms</span></div>{[["Generic recommendations", "Most career sites"], ["No personalized guidance", "Traditional learning portals"], ["No skill-gap analysis", "Course marketplaces"], ["Expensive career coaching", "Career consultants"]].map(([a, b]) => <div key={a} className="grid grid-cols-2 p-4 border-t" style={{ borderColor: BORDER }}><span>{a}</span><span style={{ color: MUTED }}>{b}</span></div>)}</div></div></section>
        <section className="py-20"><div className="container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-[0.9fr_1.1fr] gap-12"><div><SectionLabel>02 / The solution</SectionLabel><h2 className="font-display text-4xl md:text-6xl text-white mb-6">Introducing SkillYou</h2><p className="text-lg leading-relaxed mb-8" style={{ color: MUTED }}>SkillYou combines AI, career intelligence, and personalized learning into one platform.</p><blockquote className="border-l-2 pl-6 text-2xl md:text-3xl font-display text-white" style={{ borderColor: AMBER }}>“Know where you are, understand where you want to go, and get an AI-generated roadmap to reach there.”</blockquote></div><div className="grid sm:grid-cols-2 gap-4">{modules.map((module) => { const Icon = module.icon; return <article key={module.title} className="border p-6" style={{ borderColor: BORDER, background: SURFACE }}><Icon className="h-7 w-7 mb-5" style={{ color: AMBER }} /><h3 className="text-xl font-semibold text-white mb-4">{module.title}</h3><ul className="space-y-2 text-sm" style={{ color: MUTED }}>{module.points.map((point) => <li key={point} className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: AMBER }} />{point}</li>)}</ul></article>; })}</div></div></section>
        <section className="py-20" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}><div className="container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-2 gap-14"><div><SectionLabel>03 / Founder story</SectionLabel><h2 className="font-display text-4xl md:text-6xl text-white mb-6">Why I Started SkillYou</h2><div className="space-y-5 leading-relaxed" style={{ color: MUTED }}><p>While exploring AI, career development, and education technology, I noticed that students and professionals often struggle to make informed career decisions.</p><p>Many people spend years learning skills without knowing whether those skills align with market demand.</p><p>I wanted to create a platform that acts like a personal AI career mentor—guiding users from career discovery to skill development and job readiness.</p><p className="text-white">SkillYou was born from the belief that everyone deserves personalized career guidance, regardless of their background or financial situation.</p></div></div><div><SectionLabel>04 / Business model</SectionLabel><div className="space-y-3">{revenueStreams.map(([title, copy]) => <div key={title} className="border p-5" style={{ borderColor: BORDER, background: "#0D0D0D" }}><h3 className="text-white font-semibold mb-2">{title}</h3><p className="text-sm leading-relaxed" style={{ color: MUTED }}>{copy}</p></div>)}</div></div></div></section>
        <section className="py-20"><div className="container px-6 md:px-12 mx-auto max-w-7xl"><SectionLabel>05 / Market and customers</SectionLabel><div className="grid lg:grid-cols-3 gap-4 mb-10">{marketCards.map(({ icon: Icon, title, copy }) => <div key={title} className="border p-7" style={{ borderColor: BORDER, background: SURFACE }}><Icon className="h-7 w-7 mb-5" style={{ color: AMBER }} /><h3 className="text-2xl text-white font-semibold mb-3">{title}</h3><p style={{ color: MUTED }}>{copy}</p></div>)}</div><div className="grid md:grid-cols-4 gap-px" style={{ background: BORDER }}>{customers.map(([name, tag, need]) => <div key={name} className="p-6" style={{ background: "#0D0D0D" }}><p className="text-xs uppercase tracking-widest mb-3" style={{ color: AMBER }}>{tag}</p><h3 className="text-xl text-white font-semibold mb-3">{name}</h3><p className="text-sm" style={{ color: MUTED }}>{need}</p></div>)}</div></div></section>
        <section className="py-20" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}><div className="container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-2 gap-14"><div><SectionLabel>06 / Competitive analysis</SectionLabel><div className="overflow-x-auto border" style={{ borderColor: BORDER }}><table className="w-full text-sm min-w-[620px]"><thead style={{ background: "#0D0D0D", color: AMBER }}><tr>{["Platform", "Career Guidance", "AI Advisor", "Skill Gap Analysis", "Roadmap"].map((h) => <th key={h} className="text-left p-4 uppercase tracking-widest text-xs">{h}</th>)}</tr></thead><tbody>{competitors.map((row) => <tr key={row[0]} className={row[0] === "SkillYou" ? "text-white" : ""}>{row.map((cell, i) => <td key={i} className="p-4 border-t" style={{ borderColor: BORDER, color: row[0] === "SkillYou" ? (i === 0 ? "#fff" : AMBER) : MUTED }}>{cell}</td>)}</tr>)}</tbody></table></div></div><div><SectionLabel>07 / Go-to-market strategy</SectionLabel><div className="space-y-4">{[["Phase 1", "College students and fresh graduates", "LinkedIn, Instagram, communities, campus ambassadors"], ["Phase 2", "Working professionals", "SEO, content marketing, YouTube, AI career webinars"], ["Phase 3", "Colleges and institutions", "Direct outreach, partnerships, workshops"]].map(([phase, audience, channels]) => <div key={phase} className="border p-6" style={{ borderColor: BORDER, background: "#0D0D0D" }}><h3 className="text-white text-xl font-semibold mb-3">{phase}</h3><p className="mb-2"><span style={{ color: AMBER }}>Audience:</span> {audience}</p><p style={{ color: MUTED }}><span className="text-white">Channels:</span> {channels}</p></div>)}</div></div></div></section>
        <section className="py-20"><div className="container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-[0.8fr_1.2fr] gap-14"><div><SectionLabel>08 / Product roadmap</SectionLabel><h2 className="font-display text-4xl md:text-6xl text-white mb-6">From MVP to ecosystem</h2><p style={{ color: MUTED }}>The roadmap moves from personalized career guidance into job matching, interview coaching, institutional dashboards, and enterprise talent development.</p></div><div className="grid sm:grid-cols-2 gap-4">{roadmap.map(([version, copy]) => <div key={version} className="border p-7" style={{ borderColor: BORDER, background: SURFACE }}><Rocket className="h-6 w-6 mb-5" style={{ color: AMBER }} /><h3 className="text-2xl text-white font-semibold mb-3">{version}</h3><p style={{ color: MUTED }}>{copy}</p></div>)}</div></div></section>
        <section className="py-20" style={{ background: SURFACE, borderTop: `1px solid ${BORDER}` }}><div className="container px-6 md:px-12 mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-start"><div><SectionLabel>09 / Impact vision</SectionLabel><h2 className="font-display text-4xl md:text-6xl text-white mb-6">Build the world's most personalized AI-powered career growth ecosystem.</h2><ul className="space-y-3" style={{ color: MUTED }}>{["Discover the right careers", "Learn the right skills", "Become job-ready faster", "Achieve professional growth with confidence"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 style={{ color: AMBER }} className="h-5 w-5 shrink-0" />{item}</li>)}</ul></div><div><SectionLabel>10 / Founder learnings</SectionLabel><div className="grid sm:grid-cols-2 gap-3">{["Product Strategy", "Market Research", "User Research", "AI Integration Planning", "Business Model Design", "Growth Planning", "Startup Execution", "Go-To-Market Thinking"].map((learning) => <div key={learning} className="border p-5 flex items-center gap-3" style={{ borderColor: BORDER, background: "#0D0D0D" }}><GraduationCap className="h-5 w-5" style={{ color: AMBER }} /><span className="text-white font-medium">{learning}</span></div>)}</div></div></div></section>
      </main>
      <footer className="py-10 border-t" style={{ borderColor: BORDER }}><div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-4 text-sm" style={{ color: MUTED }}><p>© {new Date().getFullYear()} SkillYou case study by Vignesh V.</p><div className="flex gap-5"><a href="https://skillyou.in" target="_blank" rel="noreferrer" className="hover:text-[#F5A623]">Visit skillyou.in</a><Link href="/" className="hover:text-[#F5A623]">Portfolio Home</Link></div></div></footer>
    </div>
  );
}

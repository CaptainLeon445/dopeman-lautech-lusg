import { useEffect, useRef, useState } from "react";
import {
  Compass,
  Wrench,
  Home as HomeIcon,
  BarChart3,
  ShieldCheck,
  Briefcase,
  PartyPopper,
  Quote,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Sunrise,
  GraduationCap,
  MapPin,
} from "lucide-react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import lautechLogo from "./assets/lautech-logo.jpg";
import teamAssistantGeneralSecretary from "./assets/team-assistant-general-secretary.jpg";
import teamFinancialSecretary from "./assets/team-financial-secretary.jpg";
import teamGeneralSecretary from "./assets/team-general-secretary.jpg";
import teamSportDirector from "./assets/team-sport-director.jpg";
import teamWelfareDirector from "./assets/team-welfare-director.jpg";
import teamPro from "./assets/team-pro.jpg";
import teamVp1 from "./assets/team-vp1.jpg";

/* ---------------------------------------------------------
   NEW DAWN — Campaign site for Famakin Mubaraq Olanrewaju
   "DOPEMAN" — LSUG Presidential Aspirant, LAUTECH

   NOTE ON STYLING: custom colors, gradients and precise spacing
   are applied as inline styles; Tailwind classes are used only
   for layout (flex/grid/gap/padding/etc).
--------------------------------------------------------- */

const C = {
  ink: "#0B1120",
  panel: "#1B2B45",
  panelAlt: "#111A2E",
  panelSoft: "#10182B",
  gold: "#F2A93B",
  goldHover: "#f6bb61",
  goldInk: "#231404",
  coral: "#E85D4C",
  text: "#EDEFF5",
  textDim: "#C7CEDD",
  textFaint: "#8FA3C7",
  line: "rgba(255,255,255,0.10)",
  lineSoft: "rgba(255,255,255,0.06)",
};

const serif = "'Fraunces', Georgia, serif";
const mono = "'IBM Plex Mono', ui-monospace, monospace";
const sans = "'Manrope', system-ui, sans-serif";

const NAV_OFFSET = 88; // px — clears the sticky header when jumping to a section

const PILLARS = [
  {
    letter: "N",
    title: "Networked Academics",
    icon: GraduationCap,
    body:
      "A course-rep support portal, a shared bank of past questions and tutorial notes, and organised revision clinics before exams.",
  },
  {
    letter: "E",
    title: "Every Faculty's Welfare",
    icon: Wrench,
    body:
      "Advocacy for working lab and studio equipment, practicum and SIWES support, and faster faculty response — from Agriculture to Engineering, Environmental Sciences to Management, Pure & Applied Sciences to the Arts.",
  },
  {
    letter: "W",
    title: "Welfare & Transportation",
    icon: HomeIcon,
    body:
      "Fairer hostel allocation, affordable and reliable campus transport fares, steady water supply, and a health centre that actually opens on time.",
  },
  {
    letter: "D",
    title: "Digital Transparency",
    icon: BarChart3,
    body:
      "A public dashboard for LSUG income and spending, and open town-halls before any decision that affects students' pockets.",
  },
  {
    letter: "A",
    title: "A Secure Campus",
    icon: ShieldCheck,
    body:
      "A working anti-harassment reporting line, a student legal-aid desk, and consistent pressure for better campus lighting and security patrols.",
  },
  {
    letter: "W",
    title: "Workforce & Innovation",
    icon: Briefcase,
    body:
      "Skill bootcamps tailored by field — CAD and SolidWorks for Engineering, agribusiness for Agriculture, GIS for Environmental Sciences, financial modelling for Management — plus a shared innovation and startup hub for every student's ideas.",
  },
  {
    letter: "N",
    title: "New Campus Culture",
    icon: PartyPopper,
    body:
      "A revived sports calendar, real inter-department competitions, and a mental health support line students can trust.",
  },
];

const TEAM = [
  {
    role: "Assistant General Secretary",
    name: "Omotosho Okikijesu",
    pka: "Olasunmbo",
    photo: teamAssistantGeneralSecretary,
  },
  {
    role: "Financial Secretary",
    name: "Isola Jesutosin Oluwaseyi",
    pka: "Sheyman",
    photo: teamFinancialSecretary,
  },
  {
    role: "General Secretary",
    name: "Afolabi Precious Enitan",
    pka: "Zephyr",
    photo: teamGeneralSecretary,
  },
  {
    role: "Sport Director",
    name: "Mikail Abdulsemiu Ayomide",
    pka: "Folounsho",
    photo: teamSportDirector,
  },
  {
    role: "Welfare Director",
    name: "Adesokan Abdul Rahman Afolabi",
    pka: "Jaunty Jnr",
    photo: teamWelfareDirector,
  },
  {
    role: "PRO",
    name: "Oyetoro Nasrudeen Olamilekan",
    pka: "Eniola",
    photo: teamPro,
  },
  {
    role: "VP 1",
    name: "Lawalson Ayomide",
    pka: "Smiling",
    photo: teamVp1,
  },
];

const PROJECTS = [
  {
    tag: "First 100 days",
    title: "LSUG Budget Dashboard",
    body:
      "A simple public page showing what LSUG collects and what it spends — updated every semester, no exceptions.",
  },
  {
    tag: "Semester 1",
    title: "Hostel & Water Task Force",
    body:
      "A joint committee with hall reps and works department to fix water and lighting complaints on a published timeline.",
  },
  {
    tag: "Semester 1",
    title: "Cross-Faculty Skills Bootcamp",
    body:
      "Weekend technical-skill sessions run with senior students and alumni — CAD and SolidWorks, GIS, financial modelling, and agribusiness tracks — open to every college.",
  },
  {
    tag: "Ongoing",
    title: "Report Line",
    body:
      "A confidential channel for harassment, extortion, and welfare complaints, with monthly published (anonymised) case counts.",
  },
];

const PROMISES = [
  "Publish every kobo of LSUG income and spending, every semester.",
  "Hold a town-hall before any new levy or fee is proposed.",
  "Fight for functional lab, studio, and workshop equipment in every college — Agriculture, Engineering, Environmental Sciences, and beyond.",
  "Set up a real, confidential harassment and welfare report line.",
  "Push for a fixed water and light maintenance schedule in every hostel.",
  "Run at least one free skill-acquisition bootcamp every semester.",
  "Bring back a proper sports and cultural calendar for all departments.",
];

const FEEDBACK = [
  {
    name: "Add a real quote",
    role: "e.g. 300L, College of Agricultural Sciences",
    body:
      "Replace this card with an actual quote from a student who has heard the agenda — keep it short and specific.",
  },
  {
    name: "Add a real quote",
    role: "e.g. Course Rep, College of Management Sciences",
    body:
      "Swap in feedback from a course rep, hall exec, or lecturer who can speak to the plan — real names build trust.",
  },
  {
    name: "Add a real quote",
    role: "e.g. Final year, Environmental Sciences",
    body:
      "A short line about why they're voting New Dawn works better here than a long paragraph.",
  },
];

/* ---------- small scroll-reveal helper ---------- */
function Reveal({ children, className = "", delay = 0, style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity 700ms ease-out, transform 700ms ease-out",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

const cardBase = {
  border: `1px solid ${C.line}`,
  background: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.documentElement.style.scrollBehavior = prefersReduced
      ? "auto"
      : "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setScrollPct(Math.max(0, Math.min(1, pct)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#agenda", label: "Agenda" },
    { href: "#projects", label: "Projects" },
    { href: "#promises", label: "Promises" },
    { href: "#feedback", label: "Feedback" },
    { href: "#join", label: "Get Involved" },
  ];

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: sans, background: C.ink, color: C.text }}
    >
      {/* ---------- signature horizon element: rises as you scroll ---------- */}
      <div
        aria-hidden="true"
        className="fixed left-0 right-0 pointer-events-none"
        style={{
          top: `${18 - scrollPct * 14}vh`,
          height: "2px",
          zIndex: 0,
          background: `linear-gradient(90deg, transparent, ${C.gold} 20%, ${C.coral} 50%, ${C.gold} 80%, transparent)`,
          opacity: 0.35 + scrollPct * 0.4,
          transition: "top 80ms linear, opacity 80ms linear",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed pointer-events-none rounded-full"
        style={{
          top: `${18 - scrollPct * 14}vh`,
          left: "50%",
          width: `${140 + scrollPct * 60}px`,
          height: `${140 + scrollPct * 60}px`,
          transform: "translate(-50%, -50%)",
          zIndex: 0,
          background: `radial-gradient(circle, rgba(242,169,59,0.35) 0%, rgba(232,93,76,0.12) 55%, transparent 75%)`,
          filter: "blur(2px)",
          transition: "top 80ms linear, width 120ms linear, height 120ms linear",
        }}
      />

      {/* ---------- blueprint grid texture ---------- */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(#8FA3C7 1px, transparent 1px), linear-gradient(90deg, #8FA3C7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ================= NAV ================= */}
      {/* ---------- skip link for keyboard & screen-reader users ---------- */}
      <a
        href="#top"
        className="fixed left-4 z-50 px-4 py-2 rounded-full text-sm font-semibold"
        style={{
          top: "-60px",
          background: C.gold,
          color: C.goldInk,
          transition: "top 150ms ease-out",
        }}
        onFocus={(e) => (e.currentTarget.style.top = "12px")}
        onBlur={(e) => (e.currentTarget.style.top = "-60px")}
      >
        Skip to content
      </a>

      <header
        className="sticky top-0 z-30"
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(11,17,32,0.82)",
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span
              className="flex items-center justify-center rounded-full overflow-hidden shrink-0"
              style={{
                height: "36px",
                width: "36px",
                border: `1px solid rgba(242,169,59,0.5)`,
              }}
            >
              <img
                src={lautechLogo}
                alt="LAUTECH logo"
                className="w-full h-full"
                style={{ objectFit: "cover" }}
              />
            </span>
            <span style={{ fontFamily: mono, letterSpacing: "0.05em", fontWeight: 600 }}>
              NEW&nbsp;DAWN
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: C.textDim }}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textDim)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#join"
            className="hidden md:inline-flex items-center gap-2 rounded-full font-semibold text-sm px-5 py-2.5 transition-colors"
            style={{ background: C.gold, color: C.goldInk }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
          >
            Join the campaign <ArrowRight size={15} />
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            style={{ color: C.text }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 py-5 flex flex-col gap-4 text-sm"
            style={{ borderTop: `1px solid ${C.line}`, background: C.ink, color: C.textDim }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{ color: "inherit" }}>
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full font-semibold px-5 py-2.5"
              style={{ background: C.gold, color: C.goldInk }}
            >
              Join the campaign <ArrowRight size={15} />
            </a>
          </div>
        )}
      </header>

      <main id="top" className="relative" style={{ zIndex: 1 }}>
        {/* ================= HERO / SPLASH ================= */}
        <section
          className="relative px-6"
          style={{
            paddingTop: "6rem",
            paddingBottom: "6rem",
            background: `radial-gradient(120% 90% at 50% -10%, ${C.panel} 0%, ${C.ink} 55%, ${C.ink} 100%)`,
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
            <Reveal>
              <p
                className="uppercase text-xs mb-5"
                style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}
              >
                LAUTECH · LSUG Presidential Election · 2026
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl mb-6"
                style={{ fontFamily: serif, fontWeight: 600, lineHeight: 1.02 }}
              >
                The new dawn
                <span
                  className="block italic"
                  style={{
                    fontWeight: 400,
                    backgroundImage: `linear-gradient(90deg, ${C.gold}, ${C.coral})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  is here.
                </span>
              </h1>
              <p className="text-lg leading-relaxed max-w-lg mb-4" style={{ color: C.textDim }}>
                A secure campus. Affordable transportation. Improved welfare.
                Academic excellence. Innovation. Sporting success. This is
                the vision, the mission, and the movement behind{" "}
                <span style={{ color: C.text, fontWeight: 700 }}>
                  Famakin Mubaraq Olanrewaju — "DOPEMAN"
                </span>
                , for President, LSUG '26.
              </p>
              <p className="text-sm mb-9" style={{ color: C.textFaint, fontFamily: mono }}>
                #NewDawn · #LautechisDope · #LSUGElection2026
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#agenda"
                  className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3.5 transition-colors"
                  style={{ background: C.gold, color: C.goldInk }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                >
                  See the agenda <ArrowRight size={16} />
                </a>
                <a
                  href="#feedback"
                  className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3.5 transition-colors"
                  style={{ border: `1px solid rgba(255,255,255,0.2)`, color: C.text }}
                >
                  Read student feedback
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              {/* Portrait / splash placeholder — swap this block for a real
                  campaign photo (recommend a 4:5 upright portrait, min 1200px). */}
              <div className="relative mx-auto" style={{ maxWidth: "380px" }}>
                <div
                  className="absolute rounded-3xl"
                  style={{
                    inset: "-16px",
                    opacity: 0.55,
                    filter: "blur(40px)",
                    background: `linear-gradient(135deg, ${C.gold}, ${C.coral})`,
                  }}
                />
                <div
                  className="relative w-full overflow-hidden flex flex-col items-center justify-end"
                  style={{
                    aspectRatio: "4 / 5",
                    borderRadius: "22px",
                    border: `1px solid rgba(255,255,255,0.15)`,
                    background: C.panelAlt,
                  }}
                >
                  <img
                    src={img1}
                    alt="Famakin Mubaraq Olanrewaju (DOPEMAN), LSUG presidential candidate"
                    className="absolute inset-0 w-full h-full"
                    style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  />
                  <div
                    className="relative w-full px-5 pb-5 pt-8 text-center"
                    style={{
                      background: `linear-gradient(0deg, ${C.ink} 0%, rgba(11,17,32,0.82) 55%, transparent 100%)`,
                    }}
                  >
                    <p className="text-sm font-semibold">Famakin Mubaraq Olanrewaju</p>
                    <p className="text-xs mt-1" style={{ color: C.textFaint, fontFamily: mono }}>
                      "DOPEMAN" · For President, LSUG '26
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="px-6 py-16 md:py-20" style={{ borderTop: `1px solid ${C.lineSoft}` }}>
          <div className="max-w-6xl mx-auto">
            <Reveal className="mb-10">
              <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
                The team
              </span>
              <h2 className="text-2xl md:text-3xl mt-3" style={{ fontFamily: serif, fontWeight: 600 }}>
                Running alongside DOPEMAN.
              </h2>
            </Reveal>

            <div className="flex flex-wrap gap-4">
              {TEAM.map((member, i) => (
                <Reveal key={member.role} delay={(i % 4) * 80} className="flex-1" style={{ minWidth: "160px" }}>
                  <div
                    className="h-full flex flex-col items-center text-center p-4"
                    style={cardBase}
                  >
                    <div
                      className="relative overflow-hidden mb-4"
                      style={{
                        width: "88px",
                        height: "88px",
                        borderRadius: "9999px",
                        border: `1px solid rgba(242,169,59,0.4)`,
                      }}
                    >
                      <img
                        src={member.photo}
                        alt={`${member.name} "${member.pka}", ${member.role}`}
                        className="absolute inset-0 w-full h-full"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p
                      className="text-xs uppercase mb-1"
                      style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.1em" }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: C.text }}>
                      {member.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: C.textFaint, fontFamily: mono }}>
                      "{member.pka}"
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section className="px-6 py-20 md:py-24" style={{ borderTop: `1px solid ${C.lineSoft}` }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr,1.2fr] gap-12 items-start">
            <Reveal>
              <div
                className="relative overflow-hidden mx-auto md:mx-0"
                style={{
                  maxWidth: "320px",
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  border: `1px solid rgba(255,255,255,0.12)`,
                }}
              >
                <img
                  src={img2}
                  alt="Famakin Mubaraq Olanrewaju (DOPEMAN)"
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center 12%" }}
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex items-center gap-2 mb-6" style={{ color: C.gold }}>
                <Compass size={18} />
                <span className="uppercase text-xs" style={{ fontFamily: mono, letterSpacing: "0.2em" }}>
                  Who is DOPEMAN
                </span>
              </div>
              <blockquote
                className="text-2xl md:text-4xl leading-snug mb-8"
                style={{ fontFamily: serif, fontWeight: 500 }}
              >
                "This is the vision. This is the mission. This is the
                movement — together we rise, together we shine."
              </blockquote>
              <p className="leading-relaxed" style={{ color: C.textDim }}>
                Famakin Mubaraq Olanrewaju, known across campus as{" "}
                <span style={{ color: C.text, fontWeight: 700 }}>DOPEMAN</span>,
                is a student of Mechanical Engineering at Ladoke Akintola
                University of Technology — running not for one department,
                but for every student across the university: Agriculture,
                Arts, Environmental Sciences, Engineering, Management, and
                Pure & Applied Sciences alike. His campaign, New Dawn, is
                built on one promise: a students' union that delivers a
                secure campus, affordable transportation, improved welfare,
                academic excellence, innovation, and sporting success — for
                every student, every college, every semester.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm" style={{ color: C.textFaint }}>
                <MapPin size={15} />
                <span>Ladoke Akintola University of Technology, Ogbomoso</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= MANIFESTO BAND ================= */}
        <section
          className="px-6 py-16 md:py-20 text-center relative overflow-hidden"
          style={{
            borderTop: `1px solid ${C.lineSoft}`,
            borderBottom: `1px solid ${C.lineSoft}`,
            background: `linear-gradient(135deg, rgba(242,169,59,0.08), rgba(232,93,76,0.05))`,
          }}
        >
          <Reveal>
            <p
              className="text-2xl md:text-4xl italic mb-3"
              style={{ fontFamily: serif, fontWeight: 500 }}
            >
              Together we rise. Together we shine.
            </p>
            <p
              className="text-sm uppercase"
              style={{ color: C.textFaint, fontFamily: mono, letterSpacing: "0.2em" }}
            >
              This is the New Dawn. This is the LAUTECH Dream.
            </p>
          </Reveal>
        </section>

        {/* ================= COLLEGES STRIP ================= */}
        <section className="px-6 py-14" style={{ borderTop: `1px solid ${C.lineSoft}` }}>
          <div className="max-w-5xl mx-auto text-center">
            <Reveal>
              <p
                className="uppercase text-xs mb-6"
                style={{ color: C.textFaint, fontFamily: mono, letterSpacing: "0.2em" }}
              >
                One union. Every college.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Engineering & Technology",
                  "Agricultural Sciences",
                  "Environmental Sciences",
                  "Pure and Applied Sciences",
                  "Renewable and Natural Sciences",
                  "Basic Medical, Clinical & Nursing Sciences",
                  "Computing and Informatics",
                  "Food and Consumer Sciences",
                  "Management Sciences",
                  "Arts and Social Sciences",
                ].map((c) => (
                  <span
                    key={c}
                    className="text-sm px-4 py-2 rounded-full"
                    style={{ border: `1px solid ${C.line}`, color: C.textDim }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= AGENDA / PILLARS ================= */}
        <section
          id="agenda"
          className="px-6 py-20 md:py-24"
          style={{
            scrollMarginTop: `${NAV_OFFSET}px`,
            borderTop: `1px solid ${C.lineSoft}`,
            background: `linear-gradient(180deg, transparent 0%, ${C.panelSoft} 100%)`,
          }}
        >
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-14">
              <div className="flex items-center gap-2 mb-4" style={{ color: C.gold }}>
                <Sunrise size={18} />
                <span className="uppercase text-xs" style={{ fontFamily: mono, letterSpacing: "0.2em" }}>
                  The agenda
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: serif, fontWeight: 600 }}>
                Seven letters. One mandate.
              </h2>
              <p className="leading-relaxed" style={{ color: C.textDim }}>
                NEW DAWN 26 isn't a slogan — every letter is a working area
                the union will be held to, from day one of the term.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={(i % 3) * 90}>
                    <div
                      className="h-full p-6 transition-colors"
                      style={cardBase}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(242,169,59,0.4)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = C.line;
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      }}
                    >
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="text-3xl"
                          style={{ fontFamily: serif, fontWeight: 600, color: "rgba(242,169,59,0.8)" }}
                        >
                          {p.letter}
                        </span>
                        <Icon size={20} style={{ color: C.textFaint }} />
                      </div>
                      <h3 className="font-semibold mb-2" style={{ color: C.text }}>
                        {p.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
                        {p.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="px-6 py-20 md:py-24" style={{ scrollMarginTop: `${NAV_OFFSET}px`, borderTop: `1px solid ${C.lineSoft}` }}>
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-12">
              <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
                Flagship projects
              </span>
              <h2 className="text-3xl md:text-4xl mt-4" style={{ fontFamily: serif, fontWeight: 600 }}>
                Not just ideas — a build schedule.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5">
              {PROJECTS.map((proj, i) => (
                <Reveal key={proj.title} delay={(i % 2) * 100}>
                  <div
                    className="h-full p-7"
                    style={{
                      border: `1px solid ${C.line}`,
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04), transparent)",
                    }}
                  >
                    <span
                      className="inline-block text-xs px-3 py-1 rounded-full mb-4"
                      style={{ border: `1px solid rgba(242,169,59,0.4)`, color: C.gold, fontFamily: mono }}
                    >
                      {proj.tag}
                    </span>
                    <h3 className="text-xl mb-2.5" style={{ fontFamily: serif, fontWeight: 600 }}>
                      {proj.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.textDim }}>
                      {proj.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROMISES ================= */}
        <section
          id="promises"
          className="px-6 py-20 md:py-24"
          style={{
            scrollMarginTop: `${NAV_OFFSET}px`,
            borderTop: `1px solid ${C.lineSoft}`,
            background: `linear-gradient(180deg, ${C.panelSoft} 0%, transparent 100%)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-12">
              <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
                The promises
              </span>
              <h2 className="text-3xl md:text-4xl mt-4 mb-4" style={{ fontFamily: serif, fontWeight: 600 }}>
                What DOPEMAN is accountable for.
              </h2>
              <p className="leading-relaxed max-w-2xl" style={{ color: C.textDim }}>
                Short, specific, and checkable at the end of every semester —
                on purpose.
              </p>
            </Reveal>

            <ul style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
              {PROMISES.map((pr, i) => (
                <Reveal key={i}>
                  <li
                    className="flex items-start gap-4 py-5"
                    style={i > 0 ? { borderTop: `1px solid ${C.lineSoft}` } : undefined}
                  >
                    <span className="text-sm shrink-0" style={{ color: C.gold, fontFamily: mono, marginTop: "2px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed" style={{ color: C.text }}>{pr}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= FEEDBACK ================= */}
        <section id="feedback" className="px-6 py-20 md:py-24" style={{ scrollMarginTop: `${NAV_OFFSET}px`, borderTop: `1px solid ${C.lineSoft}` }}>
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-2xl mb-12">
              <span className="uppercase text-xs" style={{ color: C.gold, fontFamily: mono, letterSpacing: "0.2em" }}>
                Feedback &amp; comments
              </span>
              <h2 className="text-3xl md:text-4xl mt-4 mb-4" style={{ fontFamily: serif, fontWeight: 600 }}>
                What the campus is saying.
              </h2>
              <p className="leading-relaxed" style={{ color: C.textDim }}>
                These cards are placeholders — swap them for real quotes from
                students, course reps, or hall execs before publishing.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5">
              {FEEDBACK.map((f, i) => (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="h-full p-6"
                    style={{
                      border: `1px dashed rgba(255,255,255,0.2)`,
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <Quote size={20} style={{ color: C.gold, marginBottom: "1rem" }} />
                    <p className="text-sm leading-relaxed italic mb-5" style={{ color: C.textDim }}>
                      {f.body}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: C.text }}>{f.name}</p>
                    <p className="text-xs" style={{ color: C.textFaint, fontFamily: mono }}>{f.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= JOIN / CTA ================= */}
        <section id="join" className="px-6 py-20 md:py-28 relative" style={{ scrollMarginTop: `${NAV_OFFSET}px`, borderTop: `1px solid ${C.lineSoft}`, overflow: "hidden" }}>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(70% 100% at 50% 100%, rgba(242,169,59,0.16) 0%, transparent 70%)`,
            }}
          />
          <div className="max-w-3xl mx-auto text-center relative">
            <Reveal>
              <h2 className="text-3xl md:text-5xl mb-5" style={{ fontFamily: serif, fontWeight: 600 }}>
                LAUTECH's new dawn starts with your vote.
              </h2>
              <p className="mb-9 max-w-xl mx-auto" style={{ color: C.textDim }}>
                Join the campaign, share the agenda with your department, or
                send in feedback we should be hearing.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:newdawn26@example.com"
                  className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3.5 transition-colors"
                  style={{ background: C.gold, color: C.goldInk }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.goldHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = C.gold)}
                >
                  <Mail size={16} /> Email the campaign
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full font-semibold px-6 py-3.5"
                  style={{ border: `1px solid rgba(255,255,255,0.2)`, color: C.text }}
                >
                  <MessageCircle size={16} /> Send feedback
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="px-6 py-12 relative" style={{ borderTop: `1px solid ${C.line}`, zIndex: 1 }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p style={{ fontFamily: mono, fontWeight: 600, letterSpacing: "0.05em" }}>NEW DAWN · DOPEMAN '26</p>
            <p className="text-sm mt-1" style={{ color: C.textFaint }}>
              Famakin Mubaraq Olanrewaju "DOPEMAN" for President, LSUG '26 ·
              Ladoke Akintola University of Technology
            </p>
          </div>
          <div className="flex items-center gap-4" style={{ color: C.textDim }}>
            <a href="#" aria-label="Instagram" style={{ color: "inherit" }}><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter / X" style={{ color: "inherit" }}><Twitter size={18} /></a>
            <a href="#" aria-label="WhatsApp" style={{ color: "inherit" }}><MessageCircle size={18} /></a>
            <a href="mailto:newdawn26@example.com" aria-label="Email" style={{ color: "inherit" }}><Mail size={18} /></a>
          </div>
        </div>
        <p className="max-w-6xl mx-auto text-xs mt-8" style={{ color: "#5C6B8A" }}>
          Paid for by the New Dawn campaign — #NewDawn #LautechisDope
          #LSUGElection2026. Update social links and email above before
          publishing.
        </p>
      </footer>
    </div>
  );
}

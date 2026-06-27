import { useState } from "react";
import langSvg from "@/imports/Language/svg-e2df7ph8c8";
import imgLangBg from "@/imports/Language/0c38fe6dfc1da69ecb5985c13c6ba378ea15db9f.png";
import acctSvg from "@/imports/AccountSetup/svg-koe1q9z3qn";
import imgAcctBg from "@/imports/AccountSetup/7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgAcctAvatar from "@/imports/AccountSetup/b0afb79cbab4017d5185f140e316064c5c5b956d.png";
import pathSvg from "@/imports/IPhone131481/svg-4gfpglcetd";
import imgPathBg from "@/imports/IPhone131481/7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgPathCoach from "@/imports/IPhone131481/f3204f6d6a925d8486c9347e863e616d771db6a0.png";
import imgPathPlayer from "@/imports/IPhone131481/d31700a31bd0f699783da43b640821d39441601d.png";
import imgPathClub from "@/imports/IPhone131481/fbf8693cb3f77e255e6376038de9f1309e354a19.png";
import focusSvg from "@/imports/IPhone131483/svg-9mcd9v2fx2";
import imgFocusBg from "@/imports/IPhone131483/7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgFocusPlayers from "@/imports/IPhone131483/352e34c9207e3e50efffaa772adf00e85063ea60.png";
import imgFocusCoaches from "@/imports/IPhone131483/f1076af045ce2908158991cb9398bf2e413e40c7.png";
import imgFocusClubs from "@/imports/IPhone131483/8eb9a82921a1ca2d98ebe425e46b464da8b8e9fa.png";
import craftSvg from "@/imports/IPhone131485/svg-7uvncccet6";
import imgCraftBg from "@/imports/IPhone131485/7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgCraftF2f from "@/imports/IPhone131485/8061b85ca8116291a8ad7c45d0f1076c1f7e79f4.png";
import imgCraftHybrid from "@/imports/IPhone131485/13d4fbdfa615284e780ef7870316d836eb2ce517.png";
import imgCraftExp from "@/imports/IPhone131485/0a6466bfac504c0ae76947c42e1b0d1cf0cafd99.png";
import tierSvg from "@/imports/SelectYourTier/svg-bqdv8516oo";
import imgTierBg from "@/imports/SelectYourTier/7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgTierGrassroots from "@/imports/SelectYourTier/ec4d385c9140280e89272fb4a6187fc66a84eb83.png";
import imgTierLocal from "@/imports/SelectYourTier/cebde80a090439f562e4eaa6adfb4c16bb584b3c.png";
import imgTierPro from "@/imports/SelectYourTier/eefcd4a79dbd109148d3e5de52012d56e8ba4ae4.png";
import { LandingPageWrapper } from "./components/LandingPageWrapper";

// ─── Types ────────────────────────────────────────────────────────────────────

type RolePath = "COACH" | "PLAYER" | "CLUB";
type CoachTierOption = "GRASSROOTS" | "LOCAL" | "PRO" | "MARQUEE";
type FocusOption = "PLAYERS & ATHLETES" | "OTHER COACHES" | "CLUBS & TEAMS";
type AgeRange = "8" | "9-12" | "12-16" | "16+";
type SessionMode = "F2F" | "ONLINE" | "HYBRID";

// ─── Account Setup (Onboarding step 2) page ───────────────────────────────────

function AccountSetupPage({ onBack, onSubmit }: { onBack: () => void; onSubmit: () => void }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-['Inter',sans-serif]">

      {/* ── Full-bleed football background ── */}
      <div className="absolute inset-0">
        <img
          src={imgAcctBg}
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.35) saturate(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.7)] to-[rgba(5,5,5,0.9)]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d7ff00 1px, transparent 1px), linear-gradient(90deg, #d7ff00 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg mx-auto flex flex-col gap-8">

          {/* Back arrow */}
          <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={acctSvg.pced3100} fill="#D7FF00" />
            </svg>
          </button>

          {/* Heading */}
          <div>
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#d4ff00] leading-none tracking-[-1.2px] uppercase mb-4"
              style={{ fontSize: "clamp(52px,9vw,72px)" }}
            >
              SET UP YOUR<br />ACCOUNT
            </h1>
            <p className="text-white text-sm leading-relaxed">Join the elite network for modern football professionals.</p>
          </div>

          {/* Avatar upload */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              {/* Outer ring with dashed lime border */}
              <div className="w-32 h-32 rounded-full bg-[#1a2028] border-2 border-dashed border-[#454932] flex items-center justify-center overflow-hidden cursor-pointer group hover:border-[#ccf200]/50 transition-colors">
                <img
                  src={imgAcctAvatar}
                  alt="Avatar"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                {/* Camera icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ccf200] rounded-full px-3 py-2 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <svg width="20" height="18" viewBox="0 0 44 32" fill="none">
                      <path d={acctSvg.p2ce9ba00} fill="#181E00" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[#c5c9ac] text-xs font-medium">Tap to upload headshot</p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-bold tracking-[0.96px] uppercase">FULL NAME</label>
              <div className="backdrop-blur-[6px] bg-[rgba(24,26,30,0.6)] border border-white/10 rounded-xl flex items-center gap-3 px-4 py-3.5">
                <svg width="16" height="16" viewBox="0 0 28 16" fill="none">
                  <path d={acctSvg.p85bff00} fill="white" />
                </svg>
                <input
                  type="text"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Cristiano Ronaldo"
                  className="flex-1 bg-transparent text-white/60 text-sm placeholder:text-white/40 focus:outline-none focus:text-white transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-bold tracking-[0.96px] uppercase">EMAIL ADDRESS</label>
              <div className="backdrop-blur-[6px] bg-[rgba(24,26,30,0.6)] border border-white/10 rounded-xl flex items-center gap-3 px-4 py-3.5">
                <svg width="16" height="13" viewBox="0 0 32 16" fill="none">
                  <path d={acctSvg.p13e73800} fill="white" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="cr7@valur.app"
                  className="flex-1 bg-transparent text-white/60 text-sm placeholder:text-white/40 focus:outline-none focus:text-white transition-colors"
                />
              </div>
            </div>
          </div>

          {/* CREATE ACCOUNT button */}
          <button
            onClick={onSubmit}
            className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-[#181e00] font-['Bebas_Neue',sans-serif] text-xl tracking-[0.6px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
          >
            CREATE ACCOUNT
            <svg width="7" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d={acctSvg.p28c84800} fill="#181E00" />
            </svg>
          </button>

          {/* Sign in link */}
          <p className="text-center text-[13px] font-bold tracking-[1.2px] uppercase">
            <span className="text-white">ALREADY HAVE AN ACCOUNT? </span>
            <button onClick={onSubmit} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">SIGN IN</button>
          </p>

        </div>
      </div>
    </div>
  );
}

// ─── Choose Your Path (Onboarding step 3) page ────────────────────────────────

const ROLE_OPTIONS: { role: RolePath; img: string; desc: string }[] = [
  { role: "COACH",  img: imgPathCoach,  desc: "Analyze performance, manage sessions, and lead your team to victory." },
  { role: "PLAYER", img: imgPathPlayer, desc: "Track stats, access training plans, and elevate your game to the pro level." },
  { role: "CLUB",   img: imgPathClub,   desc: "Manage rosters, coordinate logistics, and build a lasting football legacy." },
];

function ChoosePathPage({ onBack, onContinue }: { onBack: () => void; onContinue: (path: RolePath) => void }) {
  const [selected, setSelected] = useState<RolePath>("COACH");

  return (
    <div className="relative min-h-screen bg-[#0e141b] overflow-hidden font-['Inter',sans-serif]">

      {/* ── Full-bleed cinematic background ── */}
      <div className="absolute inset-0">
        <img
          src={imgPathBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.3) saturate(0.5)", marginLeft: "-5.31%", width: "110.62%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e141b] via-[rgba(14,20,27,0.8)] to-[rgba(14,20,27,0.4)]" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d7ff00 1px, transparent 1px), linear-gradient(90deg, #d7ff00 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg mx-auto flex flex-col gap-8">

          {/* Back arrow */}
          <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={pathSvg.pced3100} fill="#D7FF00" />
            </svg>
          </button>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#d4ff00] leading-none tracking-[-1.2px] uppercase"
              style={{ fontSize: "clamp(52px,9vw,72px)" }}
            >
              CHOOSE YOUR<br />PATH
            </h1>
            <p className="text-white/80 text-sm leading-relaxed">Select your entry point to the elite football ecosystem.</p>
          </div>

          {/* Role cards */}
          <div className="flex flex-col gap-3">
            {ROLE_OPTIONS.map(({ role, img, desc }) => {
              const isActive = selected === role;
              return (
                <button
                  key={role}
                  onClick={() => setSelected(role)}
                  className={`relative w-full h-[120px] rounded-xl overflow-hidden text-left group transition-all ${
                    isActive ? "border border-[#ccf200] shadow-[0_0_16px_rgba(204,242,0,0.15)]" : "border border-white/10 hover:border-white/20"
                  }`}
                  style={{ backdropFilter: "blur(10px)", background: "rgba(17,19,21,0.8)" }}
                >
                  {/* Background image with gradient */}
                  <div className="absolute inset-px rounded-xl overflow-hidden">
                    <img src={img} alt={role} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,5,5,0.4)] to-[rgba(5,5,5,0.9)] rounded-xl" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-[0.6px]">{role}</span>
                      {/* Check icon when active */}
                    </div>
                    <p className="text-white/60 text-xs leading-[20px] max-w-[240px]">{desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* CONTINUE button */}
          <button
            onClick={() => onContinue(selected)}
            className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl tracking-[1.2px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
          >
            CONTINUE
            <svg width="13" height="12" viewBox="0 0 20 12" fill="none">
              <path d={pathSvg.p8cbad20} fill="black" />
            </svg>
          </button>

          {/* Sign in link */}
          <p className="text-center text-[12px] font-bold tracking-[1.2px] uppercase">
            <span className="text-white">Already have an account? </span>
            <button onClick={() => onContinue(selected)} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">Sign In</button>
          </p>

        </div>
      </div>
    </div>
  );
}

// ─── Select Your Tier (Onboarding step 4) page ────────────────────────────────

const TIERS_ONBOARDING: {
  tier: CoachTierOption;
  img: string;
  desc: string;
  recommended?: boolean;
}[] = [
  { tier: "GRASSROOTS", img: imgTierGrassroots, desc: "Ideal for starting your coaching journey." },
  { tier: "LOCAL",      img: imgTierLocal,       desc: "Professional tools for community leaders." },
  { tier: "PRO",        img: imgTierPro,          desc: "Advanced analytics and team management.", recommended: true },
  { tier: "MARQUEE",    img: imgTierBg,           desc: "Elite features for global performance." },
];

function SelectTierPage({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [selected, setSelected] = useState<CoachTierOption>("GRASSROOTS");

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-['Inter',sans-serif]">

      {/* ── Cinematic background ── */}
      <div className="absolute inset-0">
        <img
          src={imgTierBg}
          alt=""
          className="absolute h-full max-w-none top-0 w-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.5)", left: "-5.31%", width: "110.62%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e141b] via-[rgba(14,20,27,0.8)] to-[rgba(14,20,27,0.4)]" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d7ff00 1px, transparent 1px), linear-gradient(90deg, #d7ff00 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg mx-auto flex flex-col gap-6">

          {/* Back arrow */}
          <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={tierSvg.pced3100} fill="#D7FF00" />
            </svg>
          </button>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#d4ff00] leading-none tracking-[-2px] uppercase"
              style={{ fontSize: "clamp(52px,9vw,72px)" }}
            >
              SELECT YOUR<br />TIER
            </h1>
            <p className="text-white text-xs font-bold tracking-[1px] uppercase">COACH SETUP</p>
            <p className="text-white/80 text-sm leading-relaxed mt-1">Choose the level of tools that fits your coaching impact.</p>
          </div>

          {/* Tier cards */}
          <div className="flex flex-col gap-4">
            {TIERS_ONBOARDING.map(({ tier, img, desc, recommended }) => {
              const isActive = selected === tier;
              return (
                <button
                  key={tier}
                  onClick={() => setSelected(tier)}
                  className={`relative w-full h-[112px] rounded-xl overflow-hidden text-left transition-all ${
                    isActive
                      ? "border-2 border-[#ccf200] shadow-[0px_0px_20px_0px_rgba(204,242,0,0.2)]"
                      : "border border-[rgba(69,73,50,0.3)] hover:border-[rgba(69,73,50,0.6)]"
                  }`}
                >
                  {/* Background image */}
                  <div className="absolute inset-px rounded-xl overflow-hidden">
                    <img src={img} alt={tier} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Left-to-right gradient overlay */}
                  <div className="absolute inset-px rounded-xl bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.4)]" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center px-4 py-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-[0.6px]">{tier}</span>
                      {recommended && (
                        <span className="bg-[#ccf200] text-[#181e00] text-[9px] font-bold tracking-[0.45px] uppercase px-1.5 py-0.5 rounded-[2px]">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <p className="text-white text-[13px] leading-[16.25px] max-w-[200px]">{desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <p className="text-white text-xs text-center uppercase tracking-wide">
            Not sure? Pick Grassroots and update later.
          </p>

          {/* CONTINUE button */}
          <button
            onClick={onContinue}
            className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl tracking-[1.2px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
          >
            CONTINUE
            <svg width="13" height="12" viewBox="0 0 20 12" fill="none">
              <path d={tierSvg.p8cbad20} fill="black" />
            </svg>
          </button>

          {/* Sign in link */}
          <p className="text-center text-[12px] font-bold tracking-[1.2px] uppercase">
            <span className="text-white">Already have an account? </span>
            <button onClick={onContinue} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">Sign In</button>
          </p>

        </div>
      </div>
    </div>
  );
}

// ─── Define Your Craft (Onboarding step 5) page ───────────────────────────────

const SPECIALTIES_ALL = [
  "Specialized coaching development",
  "Periodized annual planning",
  "Principles of play",
  "Opposition analysis",
  "Own-team analysis",
  "Visual coaching",
  "Sideline coaching",
  "Spiideo education",
  "GPS data education",
];

function DefineCraftPage({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [sessionMode, setSessionMode] = useState<SessionMode>("HYBRID");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>(["Principles of play"]);
  const [experience, setExperience] = useState(12);

  const expLabel = experience === 0 ? "0"
    : experience <= 5 ? `${experience}`
    : experience <= 10 ? `${experience}`
    : experience <= 15 ? `${experience}`
    : `${experience}+`;

  const expTier = experience >= 15 ? "Marquee Coach"
    : experience >= 10 ? "Pro Coach"
    : experience >= 5 ? "Local Coach"
    : "Grassroots Coach";

  const toggleSpecialty = (s: string) =>
    setSelectedSpecialties(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );

  const SESSION_TYPES: { mode: SessionMode; icon: JSX.Element; img: string; label: string }[] = [
    {
      mode: "F2F",
      label: "F2F",
      img: imgCraftF2f,
      icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d={craftSvg.p22de3980} fill="white" /></svg>,
    },
    {
      mode: "ONLINE",
      label: "ONLINE",
      img: imgCraftF2f,
      icon: <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d={craftSvg.p3dfc3600} fill="white" /></svg>,
    },
    {
      mode: "HYBRID",
      label: "HYBRID",
      img: imgCraftHybrid,
      icon: <svg width="20" height="18" viewBox="0 0 20 18" fill="none"><path d={craftSvg.p20d1fa00} fill="white" /></svg>,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0e141b] overflow-hidden font-['Inter',sans-serif]">

      {/* ── Cinematic background ── */}
      <div className="absolute inset-0">
        <img src={imgCraftBg} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.3) saturate(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e141b] via-[rgba(14,20,27,0.8)] to-[rgba(14,20,27,0.4)]" />
        <div className="absolute inset-0 bg-black/50" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d7ff00 1px, transparent 1px), linear-gradient(90deg, #d7ff00 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pb-40">
        <div className="w-full max-w-2xl mx-auto px-6 pt-14 flex flex-col gap-8">

          {/* Back + Heading */}
          <div className="flex flex-col gap-3">
            <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
              <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
                <path d={craftSvg.pced3100} fill="#D7FF00" />
              </svg>
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] uppercase leading-none tracking-[-2px]"
                style={{ fontSize: "clamp(52px,9vw,72px)" }}>
                DEFINE YOUR<br />CRAFT
              </h1>
              <p className="text-white text-xs font-bold uppercase tracking-[1px] mt-2">COACH SETUP</p>
            </div>
          </div>

          {/* ── Session Type ── */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.24px]">Session Type</h2>
            <div className="grid grid-cols-3 gap-3">
              {SESSION_TYPES.map(({ mode, label, img, icon }) => {
                const isActive = sessionMode === mode;
                return (
                  <button
                    key={mode}
                    onClick={() => setSessionMode(mode)}
                    className={`relative h-[106px] rounded-xl overflow-hidden backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] flex flex-col items-center justify-center gap-2 border transition-all ${isActive ? "border-[#ccf200]" : "border-white/10 hover:border-white/20"}`}
                  >
                    <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative">{icon}</div>
                    <span className="relative text-[#dde3ed] text-xs font-normal">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Hybrid Model Info Box */}
            {sessionMode === "HYBRID" && (
              <div className="bg-[rgba(17,19,21,0.8)] border border-[#ccf200] rounded-xl p-4 flex gap-3 items-start">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                  <path d={craftSvg.p2b636a44} fill="#D4FF00" fillRule="evenodd" clipRule="evenodd" />
                </svg>
                <div className="flex flex-col gap-1">
                  <p className="text-[#d4ff00] text-xs font-bold tracking-[0.6px] uppercase">HYBRID MODEL INFO</p>
                  <p className="text-white/80 text-sm leading-[19.25px]">
                    As a remote expert, you provide the technical guidance via video while a local coach co-runs the physical session on-site with the players.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ── Specialties ── */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.24px]">Specialties</h2>
            <div className="flex flex-wrap gap-2">
              {SPECIALTIES_ALL.map(s => {
                const active = selectedSpecialties.includes(s);
                return (
                  <button
                    key={s}
                    onClick={() => toggleSpecialty(s)}
                    className={`backdrop-blur-[10px] px-4 py-2 rounded-full text-sm font-medium transition-all ${active
                      ? "bg-[rgba(215,255,0,0.8)] text-black font-bold border border-white/10"
                      : "bg-[rgba(17,19,21,0.8)] text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.24px]">Experience</h2>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07]">
              <img src={imgCraftExp} alt="" className="w-full h-full object-cover absolute inset-0 opacity-60 rounded-2xl" />
              <div className="relative p-6 flex flex-col gap-5">
                {/* Big number */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-8xl leading-none tracking-[-2px]">{experience}</span>
                  </div>
                  <p className="text-white text-sm font-semibold">years of experience</p>
                  {/* Tier badge */}
                  <div className="inline-flex mt-2">
                    <div className="bg-[rgba(215,255,0,0.08)] border border-[rgba(215,255,0,0.28)] rounded-xl px-4 py-1.5">
                      <span className="text-[#d7ff00] text-sm font-bold tracking-[0.4px]">{expTier}</span>
                    </div>
                  </div>
                </div>

                {/* Slider */}
                <div className="flex flex-col gap-3">
                  {/* Custom slider track */}
                  <div className="relative h-11 flex items-center px-1">
                    <div className="absolute left-1 right-1 h-[6px] bg-[rgba(255,255,255,0.08)] rounded-[3px]" />
                    <div
                      className="absolute left-1 h-[6px] rounded-[3px] shadow-[0_0_12px_rgba(215,255,0,0.45)]"
                      style={{ width: `${(experience / 20) * 100}%`, background: "linear-gradient(90deg, #b8e000, #d7ff00)" }}
                    />
                    {/* Tick marks at 5, 10, 15, 20 */}
                    {[5, 10, 15, 20].map(v => (
                      <div
                        key={v}
                        className={`absolute w-[3px] h-[10px] rounded-[2px]`}
                        style={{
                          left: `${(v / 20) * 100}%`,
                          transform: "translateX(-50%)",
                          background: v <= experience ? "rgba(14,20,27,0.6)" : "rgba(255,255,255,0.15)",
                        }}
                      />
                    ))}
                    {/* Thumb */}
                    <div
                      className="absolute w-7 h-7 bg-[#d7ff00] rounded-[14px] shadow-[0_0_8px_rgba(215,255,0,0.45)] flex items-center justify-center cursor-pointer"
                      style={{ left: `calc(${(experience / 20) * 100}% - 14px)` }}
                      onMouseDown={e => {
                        const track = e.currentTarget.parentElement!;
                        const move = (mv: MouseEvent) => {
                          const rect = track.getBoundingClientRect();
                          const pct = Math.max(0, Math.min(1, (mv.clientX - rect.left) / rect.width));
                          setExperience(Math.round(pct * 20));
                        };
                        const up = () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
                        document.addEventListener("mousemove", move);
                        document.addEventListener("mouseup", up);
                      }}
                    >
                      <div className="flex gap-[2.5px]">
                        {[0,1,2].map(i => <div key={i} className="w-[2px] h-[10px] bg-[rgba(14,20,27,0.55)] rounded-[1px]" />)}
                      </div>
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="flex justify-between px-1 text-[10px] font-semibold">
                    {["0", "5 Yrs", "10 Yrs", "15 Yrs", "20 Yrs+"].map((l, i) => (
                      <span key={l} className={i * 5 <= experience ? "text-white" : "text-[rgba(197,201,172,0.25)]"}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Sticky footer ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/5 px-6 py-5 flex flex-col gap-4 z-20">
        <button
          onClick={onContinue}
          className="w-full max-w-2xl mx-auto bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl tracking-[1.2px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
        >
          CONTINUE
          <svg width="13" height="12" viewBox="0 0 20 12" fill="none">
            <path d={craftSvg.p8cbad20} fill="black" />
          </svg>
        </button>
        <p className="text-center text-[12px] font-bold tracking-[1.2px] uppercase">
          <span className="text-white">Already have an account? </span>
          <button onClick={onContinue} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">Sign In</button>
        </p>
      </div>
    </div>
  );
}

// ─── Choose Your Focus (Onboarding step 6) page ───────────────────────────────

const FOCUS_OPTIONS: { id: FocusOption; img: string; sub: string }[] = [
  { id: "PLAYERS & ATHLETES", img: imgFocusPlayers, sub: "1-on-1 growth & development" },
  { id: "OTHER COACHES",      img: imgFocusCoaches, sub: "Mentorship & certifications" },
  { id: "CLUBS & TEAMS",      img: imgFocusClubs,   sub: "Squad packages & team tactics" },
];

const AGE_RANGES: AgeRange[] = ["8", "9-12", "12-16", "16+"];

function ChooseFocusPage({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [selectedFocus, setSelectedFocus] = useState<FocusOption[]>(["PLAYERS & ATHLETES", "OTHER COACHES"]);
  const [selectedAge, setSelectedAge] = useState<AgeRange>("9-12");

  const toggleFocus = (f: FocusOption) =>
    setSelectedFocus(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
    );

  return (
    <div className="relative min-h-screen bg-[#0e141b] overflow-hidden font-['Inter',sans-serif]">

      {/* ── Cinematic background ── */}
      <div className="absolute inset-0">
        <img src={imgFocusBg} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.3) saturate(0.5)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e141b] via-[rgba(14,20,27,0.8)] to-[rgba(14,20,27,0.4)]" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#d7ff00 1px, transparent 1px), linear-gradient(90deg, #d7ff00 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      {/* ── Scrollable content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center pb-44">
        <div className="w-full max-w-2xl mx-auto px-6 pt-14 flex flex-col gap-8">

          {/* Back + Heading */}
          <div className="flex flex-col gap-3">
            <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
              <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
                <path d={focusSvg.pced3100} fill="#D7FF00" />
              </svg>
            </button>
            <div>
              <h1 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] uppercase leading-none tracking-[-2px]"
                style={{ fontSize: "clamp(52px,9vw,72px)" }}>
                CHOOSE YOUR<br />FOCUS
              </h1>
              <p className="text-white text-xs font-bold uppercase tracking-[1px] mt-2">COACH SETUP</p>
            </div>
          </div>

          {/* ── Who Do You Coach ── */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.24px] uppercase">Who do you coach?</h2>
              <span className="text-[#d7ff00] text-xs font-bold tracking-[1px] uppercase">MULTI-SELECT</span>
            </div>
            <div className="flex flex-col gap-3">
              {FOCUS_OPTIONS.map(({ id, img, sub }) => {
                const isActive = selectedFocus.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleFocus(id)}
                    className={`relative h-[128px] rounded-xl overflow-hidden backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] text-left transition-all ${
                      isActive ? "border border-[#d7ff00]" : "border border-white/10 hover:border-white/20"
                    }`}
                  >
                    {/* Background image at 40% opacity */}
                    <div className="absolute inset-px overflow-hidden rounded-xl opacity-40 pointer-events-none">
                      <img src={img} alt={id} className="absolute w-full max-w-none object-cover" style={{ height: "282.54%", top: "-91.27%" }} />
                    </div>
                    {/* Bottom gradient */}
                    <div className="absolute inset-px rounded-xl bg-gradient-to-t from-[#050505] to-transparent" />
                    {/* Text */}
                    <div className="absolute inset-px flex flex-col justify-end p-4 rounded-xl">
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-[0.6px] uppercase leading-7">{id}</p>
                      <p className="text-white/80 text-sm font-medium leading-4 mt-0.5">{sub}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Age Specialization ── */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.24px] uppercase">Age Specialization</h2>
            <div className="flex gap-3">
              {AGE_RANGES.map(age => {
                const isActive = selectedAge === age;
                return (
                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`flex-1 h-[38px] rounded-full backdrop-blur-[10px] text-sm font-medium transition-all border ${
                      isActive
                        ? "bg-[#ccf200] text-[#181e00] font-bold border-white/10"
                        : "bg-[rgba(17,19,21,0.8)] text-white border-white/10 hover:border-white/20"
                    }`}
                  >
                    {age}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Sticky footer ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/5 px-6 py-5 flex flex-col gap-4 z-20">
        <button
          onClick={onContinue}
          className="w-full max-w-2xl mx-auto bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl tracking-[1.2px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
        >
          CONTINUE
          <svg width="13" height="12" viewBox="0 0 20 12" fill="none">
            <path d={focusSvg.p8cbad20} fill="black" />
          </svg>
        </button>
        <p className="text-center text-[12px] font-bold tracking-[1.2px] uppercase">
          <span className="text-white">Already have an account? </span>
          <button onClick={onContinue} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">Sign In</button>
        </p>
      </div>
    </div>
  );
}

// ─── Language Select (Onboarding) page ────────────────────────────────────────

const LANGUAGES = [
  { name: "ENGLISH",   region: "GLOBAL",            active: true  },
  { name: "Icelandic", region: "ICELAND",            active: false },
  { name: "DEUTSCH",   region: "DUTCH REGION",       active: false },
  { name: "FRANÇAIS",  region: "EUROPE & AFRICA",    active: false },
  { name: "PORTUGUÊS", region: "BRASIL & PORTUGAL",  active: false },
];

function LanguageSelectPage({ onBack, onContinue }: { onBack: () => void; onContinue: () => void }) {
  const [selected, setSelected] = useState("ENGLISH");

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-['Inter',sans-serif]">

      {/* ── Full-bleed cinematic background ── */}
      <div className="absolute inset-0">
        <img
          src={imgLangBg}
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ filter: "brightness(0.45) saturate(0.6)" }}
        />
        {/* Gradient: fully opaque at bottom so cards read clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg mx-auto flex flex-col gap-8">

          {/* Back arrow */}
          <button onClick={onBack} className="self-start text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={langSvg.pced3100} fill="#D7FF00" />
            </svg>
          </button>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1
              className="font-['Bebas_Neue',sans-serif] text-[#d4ff00] leading-none tracking-[-2px] uppercase"
              style={{ fontSize: "clamp(56px, 10vw, 80px)", textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
            >
              SELECT<br />LANGUAGE
            </h1>
            {/* Lime accent bar */}
            <div className="bg-[#ccf200] h-1 rounded-full w-12" />
          </div>

          {/* Language list */}
          <div className="flex flex-col gap-3">
            {LANGUAGES.map(({ name, region }) => {
              const isSelected = selected === name;
              return (
                <button
                  key={name}
                  onClick={() => setSelected(name)}
                  className={`w-full backdrop-blur-[10px] bg-[#111315] rounded-xl flex items-center justify-between px-6 py-5 transition-all text-left ${
                    isSelected
                      ? "border border-[#ccf200] shadow-[0_0_16px_rgba(204,242,0,0.15)]"
                      : "border border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-[0.6px]">{name}</span>
                    <span className="text-[#c5c9ac] text-xs font-bold tracking-[0.96px] opacity-60">{region}</span>
                  </div>
                  {/* Radio circle */}
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 ${isSelected ? "border-[#ccf200]" : "border-white/20"}`}>
                    {isSelected && (
                      <svg width="12" height="9" viewBox="0 0 12.225 9.01875" fill="none">
                        <path d={langSvg.p17545d00} fill="#CCF200" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* CONTINUE button */}
          <button
            onClick={onContinue}
            className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-[#181e00] font-['Bebas_Neue',sans-serif] text-xl tracking-[0.72px] uppercase rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_8px_12px_rgba(204,242,0,0.2)]"
          >
            CONTINUE
            <svg width="7" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d={langSvg.p28c84800} fill="#181E00" />
            </svg>
          </button>

          {/* Sign in link */}
          <p className="text-center text-[13px] font-bold tracking-[1.2px] uppercase">
            <span className="text-white">ALREADY HAVE AN ACCOUNT? </span>
            <button onClick={onContinue} className="text-[#ccf200] hover:text-[#d7ff00] transition-colors">SIGN IN</button>
          </p>

        </div>
      </div>
    </div>
  );
}

// ─── Landing page ─────────────────────────────────────────────────────────────

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return <LandingPageWrapper onEnter={onEnter} />;
}

export { LanguageSelectPage, AccountSetupPage, ChoosePathPage, SelectTierPage, DefineCraftPage, ChooseFocusPage, LandingPage };

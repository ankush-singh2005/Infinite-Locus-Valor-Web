import { useState } from "react";
import clubSvg from "@/imports/ClubDashboard/svg-xtriuqbksi";
import coachesSvg from "@/imports/IPhone131476/svg-fivdpg3end";
import filterSvg from "@/imports/Filters/svg-t65pxhih7x";
import coachProfileSvg from "@/imports/CoachProfile/svg-pw2yblvze9";
import imgCoachProfileBg from "@/imports/CoachProfile/fdd1ecca109be1f0b74e3cd99555b845303169ab.png";
import valurSvg from "@/imports/ValurWebPlatform/svg-7eqw8ruehn";
import shortlistSvg from "@/imports/ShortlistedCoaches-1/svg-pjtt8tq0zy";
import imgCoachGylfi from "@/imports/ShortlistedCoaches-1/fdd1ecca109be1f0b74e3cd99555b845303169ab.png";
import imgCoachSiljaS from "@/imports/ShortlistedCoaches-1/257d04f3b2fdd1bfdbc53390c6d4ac9ddb510a69.png";
import sessionsSvg from "@/imports/Sessions-1/svg-s1rsm035op";
import bookSvg from "@/imports/BookCoach/svg-wt5no4pkrm";
import paymentSvg from "@/imports/Payment/svg-lx5kpz79n9";
import squadSvg from "@/imports/ManageSquads/svg-0uulbedxnv";
import bookDealsSvg from "@/imports/BookCoach-1/svg-u03dujh4na";
import imgSquadCoach1 from "@/imports/ManageSquads/64d47ccd288b46bf9dd467b6e91778f2ebbfcdd4.png";
import imgSquadCoach2 from "@/imports/ManageSquads/257d04f3b2fdd1bfdbc53390c6d4ac9ddb510a69.png";
import imgSquadCoach3 from "@/imports/ManageSquads/fdd1ecca109be1f0b74e3cd99555b845303169ab.png";
import imgSessionCoach from "@/imports/Sessions-1/cd49dc555811a690c3e467d40aa5f748ad72f7f4.png";
import imgSessionTactics from "@/imports/Sessions-1/391d32cca024e7602053df22cd5478c881f7fde5.png";
import img0 from "@/imports/CoachDashboard/3fdee62d81f68130daeb6252b1a63281fadf2430.png";
import img1 from "@/imports/CoachDashboard/eb2aa3983147930c8729e8f7f0810d792bb9da12.png";
import img2 from "@/imports/CoachDashboard/10693231349170d72cabd383c55bacf254b0f8bd.png";
import img3 from "@/imports/CoachDashboard/b0e2a095e49d4224b9b6ff81794384c867155619.png";
import imgAthlete from "@/imports/CoachDashboard/c31c5f5a0b3d05af3bb2530e33e1bf1f7660749d.png";
import imgCoachBjarni from "@/imports/IPhone131476/48d6bae6542cecb646cc87140625fae1cef12189.png";
import imgCoachSilja from "@/imports/IPhone131476/931d1b55e47b0162c8fe22a0039f24dd5ce4fcf0.png";
import imgCoachKirian from "@/imports/IPhone131476/51e6127a161e043d1eaa8155ff1c106e8699e402.png";
import imgCoachGym from "@/imports/IPhone131476/f0f43417a27bb9153d7e508805e838b6d5b36920.png";
import imgEliteStrikerMasterclass from "@/imports/PublicProfile-1/d50e3c3a12c1539e74b66c8e2404deede40d323c.png";
import imgTactical11Session from "@/imports/PublicProfile-1/a067f765e4732487d9e06eb110f90a88f4e25c39.png";
import imgTestimonialAvatar1 from "@/imports/PublicProfile-1/8113ad3537bdd4c60f0345b4b14bd37fdd1fa84f.png";
import imgTestimonialAvatar2 from "@/imports/PublicProfile-1/9bb8f1c9d2e95d18f1d9ca80ae8a5702ee2026ca.png";

// ─── Club Dashboard page ──────────────────────────────────────────────────────

const CLUB_SQUAD_TABS = ["U-09-12", "U-12-16", "U-16-22", "SENIOR"];

const CLUB_ALERTS = [
  { icon: "📋", text: "U-14 Elite Squad report is now ready for review.", time: "44 AGO" },
  { icon: "🔄", text: "Coach Marcus requested a time change for session #302.", time: "1H AGO" },
  { icon: "👤", text: "3 new player applications for Academy Tier.", time: "3H AGO" },
];

const CLUB_QUICK_ACTIONS = [
  { icon: clubSvg.p2d7d8580, label: "FIND A COACH", sub: "Access elite specialist trainers", vb: "0 0 20.5 19.5", action: "find-coach" },
  { icon: clubSvg.p643d217, label: "BROWSE PACKAGES", sub: "Custom elite development plans", vb: "0 0 20 20", action: "" },
  { icon: clubSvg.p5df3d80, label: "MANAGE SQUADS", sub: "Roster, performance & analytics", vb: "0 0 24 12", action: "manage-squads" },
];

function ClubDashboardPage({ onFindCoach, onShortlisted, onSessions, onManageSquads, onLectures }: { onFindCoach?: () => void; onShortlisted?: () => void; onSessions?: () => void; onManageSquads?: () => void; onLectures?: () => void }) {
  const [squadTab, setSquadTab] = useState("U-09-12");

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">
      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18", active: true },
            { label: "Players", icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5", active: false },
            { label: "Coaches", icon: clubSvg.p5df3d80, vb: "0 0 24 12", active: false },
            { label: "Sessions", icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667", active: false },
            { label: "Profile", icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20", active: false },
          ].map(({ label, icon, vb, active }) => (
            <button key={label} onClick={() => label === "Sessions" && onSessions?.()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none">
                <path d={icon} fill={active ? "#d7ff00" : "#555"} />
              </svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase tracking-[0.25px] mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#050505]/95 backdrop-blur border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-wide leading-none">ELITE CROWN</p>
            <p className="text-[#555] text-xs uppercase tracking-widest mt-0.5">Junior Tier Club</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative bg-[#0e0f11] border border-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center hover:border-[#ccf200]/40 transition-colors">
              <svg width="16" height="20" viewBox="0 0 16 23" fill="none"><path d={clubSvg.p33780880} fill="white" /></svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#d7ff00] rounded-full" />
            </button>
            <button className="bg-[#0e0f11] border border-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center hover:border-[#ccf200]/40 transition-colors">
              <svg width="18" height="18" viewBox="0 0 20.1 20" fill="none"><path d={clubSvg.p3cdadd00} fill="white" /></svg>
            </button>
          </div>
        </header>

        <div className="px-8 py-8">
          <div className="grid grid-cols-[1fr_340px] gap-8 items-start max-w-7xl">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-6">

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "ACTIVE BOOKINGS", value: "12", badge: "↑ 8%", badgeColor: "text-[#6bff83]" },
                  { label: "SPEND THIS MONTH", value: "50,000 ISK", badge: "↓ 13%", badgeColor: "text-red-400" },
                  { label: "ACTIVE PLAYERS", value: "184", badge: null },
                  { label: "PENDING REQUESTS", value: "07", badge: null },
                ].map(({ label, value, badge, badgeColor }) => (
                  <div key={label} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-2">{label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-['Bebas_Neue',sans-serif] text-white text-3xl tracking-wide">{value}</span>
                      {badge && <span className={`text-xs font-bold ${badgeColor}`}>{badge}</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Bookings */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase">Active Bookings</p>
                  <button className="text-[#ccf200] text-xs uppercase font-semibold hover:text-[#d7ff00] transition-colors">VIEW ALL</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Marcus Rashford", time: "16:30 · West Pilton A", type: "F2F", tier: "U-14 ELITE", img: img1 },
                    { name: "Buka Dembélé", time: "16:00 · Tactical Online", type: "ONLINE", tier: "U-18 PC", img: img2 },
                  ].map(sess => (
                    <div key={sess.name} className="bg-[rgba(17,19,21,0.8)] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors group cursor-pointer">
                      <div className="relative h-36 overflow-hidden">
                        <img src={imgAthlete} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-white text-sm font-bold leading-tight">{sess.name}</p>
                          <p className="text-white/60 text-xs mt-0.5">{sess.time}</p>
                        </div>
                      </div>
                      <div className="p-3 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#ccf200]">
                          <img src={sess.img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex gap-1.5 ml-auto">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${sess.type === "F2F" ? "bg-[#d7ff00] text-black" : "bg-[#13203d] text-[#60a5fa]"}`}>{sess.type}</span>
                          <span className="text-[10px] text-[#888] border border-[#2a2a2a] px-2 py-0.5 rounded-lg">{sess.tier}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Latest Alerts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase">Latest Alerts</p>
                  <button className="text-[#ccf200] text-xs uppercase font-semibold hover:text-[#d7ff00] transition-colors">SEE ALL</button>
                </div>
                <div className="flex flex-col gap-2">
                  {CLUB_ALERTS.map((alert, i) => (
                    <div key={i} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-white/20 transition-colors">
                      <span className="text-base shrink-0">{alert.icon}</span>
                      <p className="text-white/80 text-sm flex-1 leading-relaxed">{alert.text}</p>
                      <span className="text-[#555] text-[10px] font-bold shrink-0">{alert.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coaches/Players Saved */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "COACHES YOU SAVED", count: "+4", avatars: [img1, img2, img3], action: onShortlisted },
                  { label: "PLAYERS YOU SAVED", count: "+12", avatars: [img1, img2, img3], action: undefined },
                ].map(({ label, count, avatars, action }) => (
                  <div key={label} onClick={action} className={`bg-[#0e0f11] border border-[#2a2a2a] rounded-xl p-4 ${action ? "cursor-pointer hover:border-[#ccf200]/30 transition-colors" : ""}`}>
                    <p className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-3">{label}</p>
                    <div className="flex items-center gap-1">
                      {avatars.map((src, i) => (
                        <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#0e0f11]" style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 3 - i }}>
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                      <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-2 border-[#0e0f11] flex items-center justify-center text-white/60 text-xs font-bold" style={{ marginLeft: -10 }}>
                        {count}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lectures & Seminars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase">Lectures & Seminars</p>
                  <button onClick={onLectures} className="text-[#ccf200] text-xs uppercase font-semibold hover:text-[#d7ff00] transition-colors">VIEW ALL</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Optimising Performance Nutrition for Peak Power", tag: "NEW", img: imgEliteStrikerMasterclass, avatar: imgTestimonialAvatar1, author: "Dr. Sarah Jenkins", date: "Oct 24, 2023 · 10:00 AM – 11:30 AM", type: "In-person" },
                    { title: "Advanced Patterns of Play", tag: "TRENDING", img: imgTactical11Session, avatar: imgTestimonialAvatar2, author: "Coach Marcus", date: "Oct 26 · Thu", type: "Online" },
                  ].map(lec => (
                    <div key={lec.title} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-white/20 transition-colors cursor-pointer group">
                      <div className="relative h-40 overflow-hidden">
                        <img src={lec.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                        <span className="absolute top-3 left-3 bg-[#ccf200] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">{lec.tag}</span>
                      </div>
                      <div className="p-4">
                        <p className="font-['Bebas_Neue',sans-serif] text-white text-lg tracking-wide leading-tight mb-2">{lec.title}</p>
                        <div className="flex items-center gap-2">
                          <img src={lec.avatar} alt="" className="w-6 h-6 rounded-full object-cover" />
                          <div>
                            <p className="text-white text-xs font-medium">{lec.author}</p>
                            <p className="text-[#888] text-[10px]">{lec.date}</p>
                          </div>
                          <span className="ml-auto text-[10px] text-[#888] border border-[#2a2a2a] px-2 py-0.5 rounded">{lec.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="flex flex-col gap-6 sticky top-[80px]">

              {/* Squad Management */}
              <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase">Squad Management</p>
                  <button className="text-[#ccf200] text-xs uppercase font-semibold hover:text-[#d7ff00] transition-colors">MANAGE</button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {CLUB_SQUAD_TABS.map(tab => (
                    <button
                      key={tab}
                      onClick={() => setSquadTab(tab)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${squadTab === tab ? "bg-[#ccf200] text-black" : "bg-[#1a1a1a] text-[#888] hover:text-white border border-white/5"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="mt-4 bg-[#111] border border-white/5 rounded-xl p-4 text-center">
                  <p className="text-[#555] text-sm">Squad: {squadTab}</p>
                  <p className="text-white text-2xl font-['Bebas_Neue',sans-serif] tracking-wide mt-1">12 Players</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="text-[10px] text-[#888]">8 Active</span>
                    <span className="text-[#2a2a2a]">·</span>
                    <span className="text-[10px] text-[#888]">4 Pending</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase mb-4">Quick Actions</p>
                <div className="flex flex-col gap-3">
                  {CLUB_QUICK_ACTIONS.map(({ icon, label, sub, vb, action }) => (
                    <button key={label} onClick={() => { if (action === "find-coach") onFindCoach?.(); if (action === "manage-squads") onManageSquads?.(); }} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-2xl flex items-center gap-4 px-5 py-4 hover:border-[#ccf200]/30 hover:bg-[#141414] transition-all group text-left">
                      <div className="w-9 h-9 rounded-xl bg-[#1a1a1a] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox={vb} fill="none">
                          <path d={icon} fill="#CCF200" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{label}</p>
                        <p className="text-[#888] text-xs mt-0.5">{sub}</p>
                      </div>
                      <svg className="ml-auto text-[#333] group-hover:text-[#ccf200] transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pending Requests */}
              <div className="bg-[#0e0f11] border border-[#ccf200]/30 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-sm font-bold uppercase tracking-wide">Pending Requests</p>
                  <span className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl">07</span>
                </div>
                <p className="text-[#888] text-xs mb-4">Player applications & session requests</p>
                <div className="flex items-center gap-1">
                  {[img1, img2, img3].map((src, i) => (
                    <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#0e0f11]" style={{ marginLeft: i === 0 ? 0 : -8 }}>
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <span className="text-[#888] text-xs ml-2">+4 more</span>
                </div>
                <button className="mt-4 w-full bg-[#ccf200] hover:bg-[#d7ff00] text-black font-['Bebas_Neue',sans-serif] text-lg rounded-xl py-2.5 transition-colors tracking-wide">
                  REVIEW ALL
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Club Coaches page ────────────────────────────────────────────────────────

type CoachFilterTab = "ALL" | "F2F" | "ONLINE" | "BOTH";

const COACHES_LIST = [
  {
    id: 1,
    name: "Bjarni Mark",
    img: imgCoachBjarni,
    tier: "MARQUEE",
    tierColor: "bg-[#fbbf24] text-black",
    type: "ONLINE",
    typeColor: "bg-[#13203d] text-[#60a5fa] border border-[#60a5fa]/30",
    rating: "4.3",
    reviews: "124 REVIEWS",
    price: "100,000 ISK",
    distance: "2.3 KM AWAY",
  },
  {
    id: 2,
    name: "Silja Ólfarsdóttir",
    img: imgCoachSilja,
    tier: "PRO",
    tierColor: "bg-white text-black",
    type: "F2F",
    typeColor: "bg-[rgba(204,242,0,0.9)] text-black",
    rating: "4.9",
    reviews: "41 REVIEWS",
    price: "200,000 ISK",
    distance: null,
  },
  {
    id: 3,
    name: "Kirian Alvira Costa",
    img: imgCoachKirian,
    tier: "F2F",
    tierColor: "bg-[rgba(204,242,0,0.9)] text-black",
    type: "F2F",
    typeColor: "bg-[rgba(204,242,0,0.9)] text-black",
    rating: "4.3",
    reviews: "42 REVIEWS",
    price: "150,000 ISK",
    distance: "0.8 KM AWAY",
  },
  {
    id: 4,
    name: "Marcus Training",
    img: imgCoachGym,
    tier: "PRO",
    tierColor: "bg-white text-black",
    type: "ONLINE",
    typeColor: "bg-[#13203d] text-[#60a5fa] border border-[#60a5fa]/30",
    rating: "4.7",
    reviews: "89 REVIEWS",
    price: "120,000 ISK",
    distance: null,
  },
];

const ACTIVE_CHIPS = ["All", "ONLINE", "PRICE < £500", "4.5+ ★"];

function ClubCoachesPage({ onBack, onFilters, onViewCoach }: { onBack: () => void; onFilters?: () => void; onViewCoach?: () => void }) {
  const [search, setSearch] = useState("");
  const [filterTab, setFilterTab] = useState<CoachFilterTab>("ALL");
  const [chips, setChips] = useState(ACTIVE_CHIPS);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = COACHES_LIST.filter(c =>
    filterTab === "ALL" ? true : c.type === filterTab
  ).filter(c =>
    search === "" || c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">
      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18", active: false },
            { label: "Players", icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5", active: false },
            { label: "Coaches", icon: clubSvg.p5df3d80, vb: "0 0 24 12", active: true },
            { label: "Sessions", icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667", active: false },
            { label: "Profile", icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20", active: false },
          ].map(({ label, icon, vb, active }) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none">
                <path d={icon} fill={active ? "#d7ff00" : "#555"} />
              </svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="shrink-0 bg-black border-b border-white/10 px-8 py-5 flex items-center justify-between">
          <h1 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-4xl tracking-[1.8px] uppercase">COACHES</h1>
          <div className="flex items-center gap-3">
            <button className="bg-[#0e0f11] border border-[#2a2a2a] w-10 h-10 rounded-full flex items-center justify-center hover:border-[#ccf200]/40 transition-colors">
              <svg width="18" height="18" viewBox="0 0 20.1 20" fill="none"><path d={clubSvg.p3cdadd00} fill="white" /></svg>
            </button>
          </div>
        </header>

        {/* Search + filters */}
        <div className="shrink-0 bg-black border-b border-white/5 px-8 pt-5 pb-0">
          {/* Search row */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center gap-3 px-4 py-3">
              <svg width="15" height="15" viewBox="0 0 14.5703 14.5703" fill="none">
                <path d={coachesSvg.p326c200} fill="#94A3B8" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search coach or specialty"
                className="flex-1 bg-transparent text-white text-sm placeholder:text-[#6b7280] focus:outline-none"
              />
            </div>
            <button onClick={onFilters} className="bg-[#1a1a1a] border border-[rgba(204,242,0,0.5)] rounded-xl w-12 h-12 flex items-center justify-center hover:bg-[#262626] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d={coachesSvg.p7660280} fill="#CBD5E1" />
              </svg>
            </button>
            <button className="bg-[#1a1a1a] border border-[#262626] rounded-xl w-12 h-12 flex items-center justify-center hover:bg-[#262626] transition-colors">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d={coachesSvg.p737f060} fill="#CBD5E1" />
              </svg>
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 mb-4">
            {(["ALL", "F2F", "ONLINE", "BOTH"] as CoachFilterTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setFilterTab(tab)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${filterTab === tab ? "bg-[#d7ff00] text-[#2b3400]" : "bg-[#0e1011] text-[#dde3ed] border border-white/5 hover:border-white/10"}`}
              >{tab}</button>
            ))}
          </div>

          {/* Active filter chips */}
          <div className="flex items-center gap-2 pb-4 overflow-x-auto">
            {chips.map(chip => (
              <div key={chip} className="bg-[#0e1011] border border-white/5 flex items-center gap-2 px-3 py-1.5 rounded-xl shrink-0">
                <span className="text-white text-[10px] font-bold uppercase">{chip}</span>
                <button onClick={() => setChips(prev => prev.filter(c => c !== chip))}>
                  <svg width="8" height="8" viewBox="0 0 8.14844 8.14844" fill="none">
                    <path d={coachesSvg.p1b67a800} fill="#F1F5F9" />
                  </svg>
                </button>
              </div>
            ))}
            {chips.length > 0 && (
              <button onClick={() => setChips([])} className="text-[#ccf200] text-[10px] font-bold uppercase shrink-0 pl-1">CLEAR ALL</button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <p className="text-[#888] text-xs font-semibold uppercase tracking-widest mb-5">
            {filtered.length} RESULTS FOUND
          </p>
          <div className="flex flex-col gap-4 w-full">
            {filtered.map(coach => (
              <div key={coach.id} className="bg-[rgba(17,19,21,0.8)] border border-white/10 rounded-2xl overflow-hidden hover:border-[#ccf200]/30 transition-all group cursor-pointer flex h-[180px]">

                {/* Left: fixed-width image */}
                <div className="relative w-[260px] shrink-0 overflow-hidden">
                  <img
                    src={coach.img}
                    alt={coach.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Right-side fade so image blends into card */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(17,19,21,0.9)]" />
                  {/* Tier badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${coach.tierColor}`}>{coach.tier}</span>
                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                    <svg width="11" height="10" viewBox="0 0 11.6484 11.0742" fill="none">
                      <path d={coachesSvg.pee52d80} fill="#CCF200" />
                    </svg>
                    <span className="text-white text-xs font-bold">{coach.rating}</span>
                    <span className="text-white/60 text-[10px]">({coach.reviews})</span>
                  </div>
                </div>

                {/* Right: info panel — takes remaining width */}
                <div className="flex-1 flex flex-col justify-between p-5 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-[0.6px] leading-tight truncate">{coach.name}</p>
                      {coach.distance && (
                        <div className="flex items-center gap-1 mt-1">
                          <svg width="7" height="10" viewBox="0 0 6.98438 9.98438" fill="none">
                            <path d={coachesSvg.p77b6100} fill="#888" />
                          </svg>
                          <span className="text-[#888] text-xs">{coach.distance}</span>
                        </div>
                      )}
                    </div>
                    {/* Favorite */}
                    <button
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 hover:border-[#d7ff00]/40 transition-colors"
                      onClick={e => { e.stopPropagation(); setFavorites(prev => prev.includes(coach.id) ? prev.filter(x => x !== coach.id) : [...prev, coach.id]); }}
                    >
                      <svg width="16" height="15" viewBox="0 0 19.9688 18.3281" fill="none">
                        <path d={coachesSvg.p399fbb00} fill={favorites.includes(coach.id) ? "#d7ff00" : "none"} stroke={favorites.includes(coach.id) ? "#d7ff00" : "white"} strokeWidth="1.5" />
                      </svg>
                    </button>
                  </div>

                  {/* Type badge */}
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-lg ${coach.typeColor}`}>{coach.type}</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#888] text-[10px] uppercase tracking-wide">Starting from</p>
                      <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-xl tracking-wide">{coach.price}</p>
                    </div>
                    <button onClick={onViewCoach} className="bg-[#ccf200] hover:bg-[#d7ff00] h-9 px-4 rounded-xl flex items-center gap-2 transition-colors shrink-0">
                      <span className="font-['Bebas_Neue',sans-serif] text-black text-sm tracking-wide">VIEW</span>
                      <svg width="12" height="12" viewBox="0 0 16.0312 16.0312" fill="none">
                        <path d={coachesSvg.p26b3e2c0} fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Filters page ─────────────────────────────────────────────────────────────

const WEEK_LABELS = ["M","T","W","T","F","S","S"];
const SPECIALTY_OPTIONS = ["Goalkeeper","Defender","Midfielder","Forward","Fitness","Tactics","Strength & Conditioning"];
const TIER_OPTIONS = ["Grassroots","Local","Pro","Marquee"];
const RATING_OPTIONS = ["4.0+","4.5+","5.0"];

function FiltersPage({ onBack, onApply }: { onBack: () => void; onApply: () => void }) {
  const [sessionType, setSessionType] = useState("ALL");
  const [location, setLocation] = useState("London, United Kingdom");
  const [radius, setRadius]   = useState(10);
  const [priceMin, setPriceMin] = useState(50000);
  const [priceMax, setPriceMax] = useState(200000);
  const [rating, setRating]   = useState("4.5+");
  const [tier, setTier]       = useState("Pro");
  const [specialties, setSpecialties] = useState<string[]>(["Goalkeeper","Fitness"]);
  const [activeDays, setActiveDays]   = useState<number[]>([4]); // Friday = index 4
  const [fastTrack, setFastTrack]     = useState(true);

  const toggleSpecialty = (s: string) =>
    setSpecialties(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
  const toggleDay = (i: number) =>
    setActiveDays(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);
  const reset = () => {
    setSessionType("ALL"); setRadius(10); setPriceMin(50000); setPriceMax(200000);
    setRating("4.5+"); setTier("Pro"); setSpecialties([]); setActiveDays([]); setFastTrack(false);
  };

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white font-['Inter',sans-serif]">

      {/* ── Header ── */}
      <header className="shrink-0 border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-3 text-white hover:text-[#d7ff00] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d={filterSvg.p15494480} fill="currentColor" />
          </svg>
          <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest">FILTERS</span>
        </button>
        <button onClick={reset} className="text-[#d7ff00] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">RESET</button>
      </header>

      {/* ── Scrollable sections ── each section on its own row ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-6 py-6 flex flex-col gap-8">

          {/* 1. SESSION TYPE */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Session Type</h2>
            <div className="flex gap-2 flex-wrap">
              {["ALL","F2F","ONLINE","BOTH"].map(t => (
                <button key={t} onClick={() => setSessionType(t)}
                  className={`flex-1 min-w-[72px] py-2.5 rounded-xl text-sm font-bold uppercase transition-all ${sessionType === t ? "bg-[#d7ff00] text-[#2b3400]" : "bg-[#0e1011] text-[#dde3ed] border border-white/5 hover:border-white/15"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* 2. LOCATION */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Location</h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col gap-5">
              {/* Input row */}
              <div className="flex items-center gap-3">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d={filterSvg.p1869180} fill="#CCF200" />
                </svg>
                <input value={location} onChange={e => setLocation(e.target.value)}
                  className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-white/40" />
              </div>
              {/* Radius */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#888] font-semibold uppercase tracking-widest">Radius</span>
                  <span className="text-[#d7ff00] font-bold">{radius} KM</span>
                </div>
                <div className="relative h-9 flex items-center">
                  <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full" />
                  <div className="absolute left-0 h-1 bg-[#d7ff00] rounded-full shadow-[0_0_10px_rgba(215,255,0,0.4)]"
                    style={{ width: `${(radius / 50) * 100}%` }} />
                  <input type="range" min={1} max={50} value={radius} onChange={e => setRadius(+e.target.value)}
                    className="absolute w-full opacity-0 cursor-pointer h-9 z-10" />
                  <div className="absolute w-7 h-7 bg-[#d7ff00] rounded-full shadow-[0_0_8px_rgba(215,255,0,0.45)] flex items-center justify-center pointer-events-none"
                    style={{ left: `calc(${(radius / 50) * 100}% - 14px)` }}>
                    <div className="flex gap-[2.5px]">{[0,1,2].map(i => <div key={i} className="w-[2px] h-2.5 bg-[rgba(14,20,27,0.55)] rounded-full" />)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. PRICE PER SESSION */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Price Per Session</h2>
            <div className="bg-[#111] border border-white/10 rounded-xl p-5 flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#888] text-[10px] uppercase tracking-widest font-semibold mb-1">MIN</p>
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl">{priceMin.toLocaleString()} ISK</p>
                </div>
                <div className="text-right">
                  <p className="text-[#888] text-[10px] uppercase tracking-widest font-semibold mb-1">MAX</p>
                  <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl">{priceMax.toLocaleString()} ISK</p>
                </div>
              </div>
              {/* Min handle */}
              {[{val: priceMin, set: (v: number) => setPriceMin(Math.min(v, priceMax - 10000)), label: "Min price"},
                {val: priceMax, set: (v: number) => setPriceMax(Math.max(v, priceMin + 10000)), label: "Max price"}
              ].map(({val, set, label}) => (
                <div key={label} className="relative h-9 flex items-center">
                  <div className="absolute left-0 right-0 h-1 bg-white/10 rounded-full" />
                  <div className="absolute left-0 h-1 bg-[#d7ff00] rounded-full shadow-[0_0_10px_rgba(215,255,0,0.4)]"
                    style={{ width: `${(val / 500000) * 100}%` }} />
                  <input type="range" min={0} max={500000} step={5000} value={val}
                    onChange={e => set(+e.target.value)}
                    aria-label={label}
                    className="absolute w-full opacity-0 cursor-pointer h-9 z-10" />
                  <div className="absolute w-7 h-7 bg-[#d7ff00] rounded-full shadow-[0_0_8px_rgba(215,255,0,0.45)] flex items-center justify-center pointer-events-none"
                    style={{ left: `calc(${(val / 500000) * 100}% - 14px)` }}>
                    <div className="flex gap-[2.5px]">{[0,1,2].map(i => <div key={i} className="w-[2px] h-2.5 bg-[rgba(14,20,27,0.55)] rounded-full" />)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. MINIMUM RATING */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Minimum Rating</h2>
            <div className="flex flex-col gap-2">
              {RATING_OPTIONS.map(r => (
                <button key={r} onClick={() => setRating(r)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-bold transition-all text-left ${rating === r ? "bg-[#d7ff00]/10 border-[#d7ff00] text-[#d7ff00]" : "border-white/10 text-[#888] hover:border-white/20"}`}>
                  <svg width="13" height="12" viewBox="0 0 15 14.25" fill="none">
                    <path d={filterSvg.p389def00} fill={rating === r ? "#CCF200" : "#555"} />
                  </svg>
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* 5. COACH TIER */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Coach Tier</h2>
            <div className="flex flex-col gap-2">
              {TIER_OPTIONS.map(t => (
                <button key={t} onClick={() => setTier(t)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${tier === t ? "bg-[#d7ff00] text-black border-transparent font-bold" : "bg-transparent text-[#dde3ed] border-white/10 hover:border-white/20"}`}>
                  {t}
                  {tier === t && <div className="w-2 h-2 rounded-full bg-black/40" />}
                </button>
              ))}
            </div>
          </div>

          {/* 6. SPECIALTY */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Specialty</h2>
              <span className="text-[#888] text-xs font-semibold uppercase tracking-widest">MULTI-SELECT</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SPECIALTY_OPTIONS.map(s => (
                <button key={s} onClick={() => toggleSpecialty(s)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${specialties.includes(s) ? "bg-[#d7ff00] text-black border-transparent font-bold" : "bg-transparent text-[#dde3ed] border-white/10 hover:border-white/20"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 7. AVAILABLE THIS WEEK */}
          <div className="flex flex-col gap-4">
            <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Available This Week</h2>
            {/* Day selector — equal-width, each day its own button */}
            <div className="grid grid-cols-7 gap-2">
              {WEEK_LABELS.map((label, i) => (
                <button key={i} onClick={() => toggleDay(i)}
                  className={`h-11 rounded-xl text-sm font-bold uppercase transition-all border ${activeDays.includes(i) ? "bg-[#d7ff00] text-black border-transparent" : "bg-transparent text-[#888] border-white/10 hover:border-white/20"}`}>
                  {label}
                </button>
              ))}
            </div>
            {/* Fast Track Discovery toggle — on its own row below */}
            <div className="bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 flex items-center justify-between">
              <span className="text-white text-xs font-bold uppercase tracking-[1px]">Fast Track Discovery</span>
              <button onClick={() => setFastTrack(v => !v)}
                className={`w-12 h-6 rounded-full transition-all flex items-center px-1 ${fastTrack ? "bg-[rgba(215,255,0,0.2)] justify-end" : "bg-[#2a2a2a] justify-start"}`}>
                <div className={`w-4 h-4 rounded-full transition-colors ${fastTrack ? "bg-[#d7ff00]" : "bg-[#555]"}`} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Sticky footer ── */}
      <div className="shrink-0 border-t border-white/10 bg-[#050505] px-6 py-4 flex gap-3">
        <button onClick={reset}
          className="flex-1 border border-white/20 hover:border-white/40 text-white font-['Bebas_Neue',sans-serif] text-lg rounded-xl py-3.5 transition-all tracking-widest uppercase">
          RESET FILTERS
        </button>
        <button onClick={onApply}
          className="flex-[2] bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-lg rounded-xl py-3.5 transition-colors shadow-[0_4px_20px_rgba(215,255,0,0.25)] tracking-widest uppercase">
          SHOW 42 COACHES
        </button>
      </div>
    </div>
  );
}

// ─── Coach Profile page ────────────────────────────────────────────────────────

const AVAILABILITY_DAYS = [
  { day: "MON", date: 14, active: true },
  { day: "TUE", date: 15, active: false },
  { day: "WED", date: 16, active: false },
  { day: "THU", date: 17, active: false },
];

const SESSION_PACKAGES = [
  { title: "ELITE FINISHING", desc: "High-intensity technical shooting", price: "100,000 ISK", unit: "/hr" },
  { title: "TACTICAL ANALYSIS", desc: "1-on-1 video & positional review", price: "120,000 ISK", unit: "/hr" },
];

const REVIEWS = [
  { text: '"Marcus completely transformed my positioning. Best coach on the platform by far."', author: "— Leo R." },
  { text: '"Detailed, professional, and high energy. The tactical analysis session was eye-opening."', author: "— Sarah K." },
];

function CoachProfilePage({ onBack, onBook }: { onBack: () => void; onBook?: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Players",   icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12", active: true },
            { label: "Sessions",  icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667" },
            { label: "Profile",   icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20" },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Coaches" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none">
                <path d={icon} fill={active ? "#d7ff00" : "#555"} />
              </svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 overflow-y-auto">

        {/* ── Hero ── */}
        <div className="relative h-72 overflow-hidden">
          <img src={imgCoachProfileBg} alt="Stadium" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[rgba(5,5,5,0.5)] to-transparent" />
          {/* Header row */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-5">
            <button onClick={onBack} className="flex items-center gap-2 text-[#ccf200] hover:text-white transition-colors">
              <svg width="8" height="13" viewBox="0 0 7.4 12" fill="none">
                <path d={valurSvg.p30eabf00} fill="currentColor" />
              </svg>
              <span className="font-['Bebas_Neue',sans-serif] text-lg tracking-widest">COACH PROFILE</span>
            </button>
            <button className="w-9 h-9 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/60 transition-colors">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d={coachProfileSvg.p2b729200} fill="white" />
              </svg>
            </button>
          </div>
          {/* Coach identity */}
          <div className="absolute bottom-6 left-8 flex flex-col gap-2">
            {/* Tier badge */}
            <div className="flex items-center gap-2">
              <span className="bg-[#fbbf24] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">✦ MARQUEE</span>
            </div>
            <h1 className="font-['Bebas_Neue',sans-serif] text-white text-5xl tracking-wide leading-none">GYLFI SIG</h1>
            <div className="flex gap-2">
              <span className="bg-[#13203d] text-[#60a5fa] text-xs font-bold px-2.5 py-1 rounded-lg border border-[#60a5fa]/30">ONLINE</span>
              <span className="bg-[rgba(204,242,0,0.9)] text-black text-xs font-bold px-2.5 py-1 rounded-lg">F2F</span>
            </div>
          </div>
        </div>

        <div className="px-8 py-6 grid grid-cols-[1fr_360px] gap-8 items-start max-w-7xl">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7">

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-white/10 bg-[#0e0f11] border border-[#2a2a2a] rounded-2xl overflow-hidden">
              {[
                { value: "450+", label: "SESSIONS" },
                { value: "ENG/SPA", label: "LANGUAGES" },
                { value: "1H", label: "RESPONSE" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center py-4 gap-0.5">
                  <span className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-wide">{value}</span>
                  <span className="text-[#888] text-[10px] uppercase tracking-widest font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* Specialist tags */}
            <div className="flex gap-2">
              {["STRIKER COACH", "U21 SPECIALIST"].map(tag => (
                <span key={tag} className="border border-[rgba(204,242,0,0.3)] text-[#ccf200] text-xs px-3 py-1.5 rounded-full">{tag}</span>
              ))}
            </div>

            {/* Bio */}
            <div>
              <p className="text-white text-sm leading-[26px]">
                Expert in technical finishing and tactical positional play. Former professional with 10+ years coaching elite youth prospects.
                {expanded && " Specialising in striker development, off-the-ball movement, and clinical finishing under pressure. UEFA A licensed with experience across top academies in Europe."}
              </p>
              <button onClick={() => setExpanded(v => !v)} className="text-[#ccf200] text-sm font-bold mt-1 hover:text-[#d7ff00] transition-colors">
                {expanded ? "Read less" : "Read more"}
              </button>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-[0.6px] uppercase">Credentials</h2>
              <div className="flex flex-col gap-3">
                {["UEFA A LICENSE", "PRO PERFORMANCE CERT", "10Y CLUB EXP"].map(cred => (
                  <div key={cred} className="flex items-center gap-3">
                    <svg width="17" height="16" viewBox="0 0 16.5 15.75" fill="none">
                      <path d={coachProfileSvg.p26ccbe40} fill="#CCF200" />
                    </svg>
                    <span className="text-[#dde3ed] text-sm">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-[0.6px] uppercase">Availability</h2>
                <span className="text-[#ccf200] text-sm">Next: Tomorrow</span>
              </div>
              <div className="flex gap-3">
                {AVAILABILITY_DAYS.map(({ day, date, active }) => (
                  <div key={day} className={`flex flex-col items-center py-3 px-5 rounded-xl border min-w-[72px] backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] ${active ? "border-[rgba(204,242,0,0.5)]" : "border-white/10"}`}>
                    <span className={`text-[10px] font-semibold uppercase ${active ? "text-[#ccf200]" : "text-[#888]"}`}>{day}</span>
                    <span className={`font-['Bebas_Neue',sans-serif] text-2xl leading-9 ${active ? "text-white" : "text-[#888]"}`}>{date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <h2 className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-[0.6px] uppercase">Reviews</h2>
                <div className="flex items-center gap-1.5 ml-2">
                  <svg width="13" height="12" viewBox="0 0 11.6667 11.0833" fill="none">
                    <path d={coachProfileSvg.p21398000} fill="#CCF200" />
                  </svg>
                  <span className="text-white font-bold text-sm">4.9</span>
                  <span className="text-[#888] text-sm">(124)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white/80 text-sm leading-relaxed italic mb-2">{r.text}</p>
                    <p className="text-[#ccf200] text-xs font-bold">{r.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — sticky booking panel ── */}
          <div className="flex flex-col gap-5 sticky top-0">

            {/* Session Packages */}
            <div className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-[0.6px] uppercase">Session Packages</h2>
              <div className="flex flex-col gap-3">
                {SESSION_PACKAGES.map(pkg => (
                  <div key={pkg.title} className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl p-4 flex flex-col gap-3 hover:border-white/20 transition-colors">
                    <div>
                      <p className="font-['Bebas_Neue',sans-serif] text-white text-lg tracking-wide">{pkg.title}</p>
                      <p className="text-[#888] text-xs mt-0.5">{pkg.desc}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-xl tracking-wide">{pkg.price}</span>
                        <span className="text-[#888] text-xs ml-1">{pkg.unit}</span>
                      </div>
                      <button onClick={onBook} className="bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-sm px-5 py-2 rounded-xl transition-colors tracking-wide">BOOK</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Session CTA */}
            <button className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl rounded-xl py-4 transition-colors shadow-[0_4px_20px_rgba(215,255,0,0.25)] tracking-widest uppercase">
              REQUEST SESSION
            </button>

            {/* Quick stats */}
            <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-xl p-4 flex flex-col gap-3">
              <p className="text-[#888] text-xs font-semibold uppercase tracking-widest">Coach at a glance</p>
              {[
                { label: "Response time", value: "Under 1 hour" },
                { label: "Sessions completed", value: "450+" },
                { label: "Active clients", value: "12" },
                { label: "Satisfaction rate", value: "97%" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-[#888] text-xs">{label}</span>
                  <span className="text-white text-xs font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Shortlisted Coaches page ──────────────────────────────────────────────────

type ShortlistView = "BY SQUAD" | "FLAT LIST";

const SQUAD_GROUPS = [
  {
    squad: "U-14 ELITE",
    coaches: [
      {
        name: "Gylfi Sig",
        img: imgCoachGylfi,
        rating: "4.9",
        type: "F2F",
        typeColor: "bg-[#d7ff00] text-black",
        role: "Elite Coach",
        price: "120,000 ISK",
        quote: '"Excellent striker drills for high-intensity training."',
        active: true,
      },
    ],
  },
  {
    squad: "U-18 PRO",
    coaches: [
      {
        name: "Silja Úlfarsdóttir",
        img: imgCoachSiljaS,
        rating: "4.9",
        type: "ONLINE",
        typeColor: "bg-[rgba(37,99,235,0.2)] text-[#60a5fa]",
        role: "Elite Coach",
        price: "20,000 ISK",
        quote: '"Excellent striker drills for high-intensity training."',
        active: false,
      },
    ],
  },
];

function ShortlistedCoachesPage({ onBack, onViewCoach }: { onBack: () => void; onViewCoach?: () => void }) {
  const [view, setView] = useState<ShortlistView>("BY SQUAD");
  const [selected, setSelected] = useState<string[]>([]);

  const allCoaches = SQUAD_GROUPS.flatMap(g => g.coaches.map(c => ({ ...c, squad: g.squad })));

  const toggleSelect = (name: string) =>
    setSelected(prev => prev.includes(name) ? prev.filter(x => x !== name) : [...prev, name]);

  function CoachCard({ coach, squadLabel }: { coach: typeof allCoaches[0]; squadLabel?: string }) {
    const isSelected = selected.includes(coach.name);
    return (
      <div
        className={`bg-black border rounded-xl overflow-hidden transition-all ${coach.active ? "border-[#d7ff00]" : "border-white/10 hover:border-white/20"} ${isSelected ? "ring-2 ring-[#ccf200]/40" : ""}`}
      >
        <div className="p-4 flex flex-col gap-4">
          {/* Coach info row */}
          <div className="flex gap-4 items-start">
            {/* Photo */}
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 cursor-pointer" onClick={onViewCoach}>
              <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
            </div>
            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white text-lg font-medium leading-7 cursor-pointer hover:text-[#ccf200] transition-colors" onClick={onViewCoach}>{coach.name}</p>
                <div className="flex items-center gap-1">
                  <svg width="13" height="12" viewBox="0 0 13.3333 12.6667" fill="none">
                    <path d={shortlistSvg.p265d2480} fill="#CCF200" />
                  </svg>
                  <span className="text-white text-xs font-medium">{coach.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-bold px-3 py-1 rounded-xl ${coach.typeColor}`}>{coach.type}</span>
                <span className="text-[#c5c9ac] text-sm">{coach.role}</span>
              </div>
              <p className="text-[#ccf200] text-sm font-medium">From {coach.price}</p>
            </div>
            {/* Select checkbox */}
            <button
              onClick={() => toggleSelect(coach.name)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? "bg-[#ccf200] border-[#ccf200]" : "border-white/30 hover:border-[#ccf200]/50"}`}
            >
              {isSelected && <div className="w-2.5 h-1.5 border-b-2 border-l-2 border-black rotate-[-45deg] translate-y-[-1px]" />}
            </button>
          </div>

          {/* Quote */}
          <div className="border-l-2 border-[rgba(204,242,0,0.3)] pl-3">
            <p className="text-white text-sm leading-5 italic">{coach.quote}</p>
          </div>

          {/* Book button — right-aligned, compact */}
          <div className="flex justify-end">
            <button className="bg-[#ccf200] hover:bg-[#d7ff00] text-[#2b3400] font-['Bebas_Neue',sans-serif] text-base rounded-xl px-6 py-2.5 transition-colors tracking-widest uppercase">
              BOOK FOR SQUAD
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Players",   icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12", active: true },
            { label: "Sessions",  icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667" },
            { label: "Profile",   icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20" },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-black border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" style={{ transform: "rotate(180deg)" }}>
              <path d={shortlistSvg.p3e1a4b00} fill="#D7FF00" />
            </svg>
            <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest">SHORTLISTED COACHES</span>
          </button>
          <span className="text-[#888] text-sm">{allCoaches.length} coaches saved</span>
        </header>

        {/* View toggle */}
        <div className="shrink-0 bg-[#0a0a0a] px-8 py-4 border-b border-white/5">
          <div className="bg-[#0f1012] border border-white/5 rounded-xl p-1 flex gap-1 max-w-xs">
            {(["BY SQUAD", "FLAT LIST"] as ShortlistView[]).map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`flex-1 py-2.5 rounded-[10px] text-sm font-bold uppercase transition-all ${view === v ? "bg-[#ccf200] text-[#181e00]" : "text-white hover:text-white/80"}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 pb-24">
          <div className="w-full flex flex-col gap-8">

            {view === "BY SQUAD" ? (
              /* By Squad view — grouped */
              SQUAD_GROUPS.map(group => (
                <div key={group.squad} className="flex flex-col gap-4">
                  <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[0.6px] uppercase">{group.squad}</h2>
                  <div className="flex flex-col gap-4">
                    {group.coaches.map(coach => (
                      <CoachCard key={coach.name} coach={{ ...coach, squad: group.squad }} squadLabel={group.squad} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Flat list view */
              <div className="flex flex-col gap-4">
                {allCoaches.map(coach => (
                  <CoachCard key={coach.name} coach={coach} squadLabel={coach.squad} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Sticky bottom action bar ── */}
        <div className="shrink-0 absolute bottom-0 left-[220px] right-0 bg-[rgba(17,19,21,0.9)] backdrop-blur-xl border-t border-[rgba(204,242,0,0.2)] px-8 py-3 flex items-center justify-between">
          <span className="text-[#ccf200] text-sm font-medium">{selected.length} Selected</span>
          <div className="flex items-center gap-2">
            <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selected.length >= 2 ? "text-white hover:bg-white/10" : "text-[#555] cursor-not-allowed"}`}>
              Compare
            </button>
            <button
              onClick={() => setSelected([])}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selected.length > 0 ? "text-[#ffb4ab] hover:bg-red-500/10" : "text-[#555] cursor-not-allowed"}`}>
              Remove
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Sessions page ─────────────────────────────────────────────────────────────

const SESSIONS_DATA = [
  {
    id: 1,
    title: "ELITE STRIKER CLINIC",
    coach: "Coach Marcus Thorne",
    type: "F2F",
    typeColor: "bg-[#d7ff00] text-black",
    date: "TODAY",
    time: "18:30",
    status: "CONFIRMED",
    statusColor: "bg-[rgba(34,197,94,0.15)] text-[#4ade80] border border-[rgba(34,197,94,0.3)]",
    cta: "GET DIRECTIONS",
    img: imgSessionCoach,
  },
  {
    id: 2,
    title: "TACTICAL ANALYSIS",
    coach: "Analyst Sarah Chen",
    type: "ONLINE",
    typeColor: "bg-[rgba(37,99,235,0.2)] text-[#60a5fa]",
    date: "THU, 14 OCT",
    time: "20:00",
    status: "PENDING",
    statusColor: "bg-[rgba(251,191,36,0.15)] text-[#fbbf24] border border-[rgba(251,191,36,0.3)]",
    cta: "VIEW DETAILS",
    img: imgSessionTactics,
  },
];

function SessionsPage({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"UPCOMING" | "PAST">("UPCOMING");
  const [squadFilter, setSquadFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("F2F");
  const [periodFilter, setPeriodFilter] = useState("THIS WEEK");

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: sessionsSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Players",   icon: sessionsSvg.p5df3d80,  vb: "0 0 24 12" },
            { label: "Coaches",   icon: sessionsSvg.p5df3d80,  vb: "0 0 24 12" },
            { label: "Sessions",  icon: sessionsSvg.p2a946800, vb: "0 0 18 20", active: true },
            { label: "Profile",   icon: sessionsSvg.p3cdadd00, vb: "0 0 20.1 20" },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-black border-b border-white/10 px-8 py-5">
          <h1 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-4xl tracking-[1.8px] uppercase">SESSIONS</h1>
        </header>

        {/* UPCOMING / PAST tabs */}
        <div className="shrink-0 bg-black border-b border-white/10 px-8 flex gap-8">
          {(["UPCOMING", "PAST"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`py-3.5 text-sm font-semibold uppercase tracking-widest border-b-2 transition-all ${tab === t ? "border-[#d7ff00] text-[#d7ff00]" : "border-transparent text-[#888] hover:text-white"}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="shrink-0 bg-[#0a0a0a] px-8 py-4 flex flex-col gap-4 border-b border-white/5">
          {/* Squad filter */}
          <div className="flex gap-2">
            {["ALL","U-14","U-18","SESSIONS"].map(f => (
              <button key={f} onClick={() => setSquadFilter(f)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${squadFilter === f ? "bg-[#d7ff00] text-[#2b3400]" : "bg-[#1a1a1a] text-[#888] hover:text-white border border-white/5"}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Session type */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[#d7ff00] text-sm font-['Bebas_Neue',sans-serif] tracking-wide uppercase">Session Type</p>
            <div className="flex gap-2">
              {["F2F","ONLINE","BOTH"].map(f => (
                <button key={f} onClick={() => setTypeFilter(f)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${typeFilter === f ? "bg-[#d7ff00] text-[#2b3400]" : "bg-[#1a1a1a] text-[#888] hover:text-white border border-white/5"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Period */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[#d7ff00] text-sm font-['Bebas_Neue',sans-serif] tracking-wide uppercase">Period</p>
            <div className="flex gap-2">
              {["THIS WEEK","NEXT WEEK","MONTH"].map(f => (
                <button key={f} onClick={() => setPeriodFilter(f)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase transition-all ${periodFilter === f ? "bg-[#d7ff00] text-[#2b3400]" : "bg-[#1a1a1a] text-[#888] hover:text-white border border-white/5"}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Session list */}
        <div className="flex-1 overflow-y-auto px-8 py-6 pb-24">
          <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-[1px] uppercase mb-4">{periodFilter}</h2>
          <div className="flex flex-col gap-4 w-full">
            {SESSIONS_DATA.map(session => (
              <div key={session.id} className="bg-[#111] border border-white/10 rounded-xl overflow-hidden flex hover:border-white/20 transition-colors group">

                {/* Left — fixed image */}
                <div className="relative w-[200px] shrink-0 overflow-hidden">
                  <img src={session.img} alt={session.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(17,17,17,0.85)]" />
                </div>

                {/* Right — info, takes all remaining width */}
                <div className="flex-1 p-5 flex flex-col gap-3">

                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-['Bebas_Neue',sans-serif] text-white text-xl tracking-wide">{session.title}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${session.typeColor}`}>{session.type}</span>
                      </div>
                      <p className="text-[#888] text-sm">{session.coach}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-lg shrink-0 ${session.statusColor}`}>{session.status}</span>
                  </div>

                  {/* Date + Time */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-white/70">
                      <svg width="11" height="12" viewBox="0 0 12 13.3333" fill="none">
                        <path d={sessionsSvg.p270cf300} fill="#888" />
                      </svg>
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70">
                      <svg width="11" height="11" viewBox="0 0 13.3333 13.3333" fill="none">
                        <path d={sessionsSvg.p8e10ae0} fill="#888" />
                      </svg>
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* CTA — directly below date/time */}
                  <button className="w-full bg-[#d7ff00] hover:bg-[#ccf200] text-[#2b3400] font-['Bebas_Neue',sans-serif] text-sm rounded-xl py-2.5 transition-colors tracking-widest uppercase">
                    {session.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REQUEST SESSION sticky CTA */}
        <div className="shrink-0 border-t border-white/10 bg-[#0a0a0a] px-8 py-4">
          <button className="w-full max-w-3xl bg-[#d7ff00] hover:bg-[#ccf200] text-[#2b3400] font-['Bebas_Neue',sans-serif] text-xl rounded-xl py-4 transition-colors shadow-[0_4px_20px_rgba(215,255,0,0.2)] tracking-widest uppercase">
            REQUEST SESSION
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Book Coach page ───────────────────────────────────────────────────────────

const SQUADS = [
  { name: "SQUAD A",     count: "12 Players" },
  { name: "SQUAD B",     count: "10 Players" },
  { name: "YOUTH ELITE", count: "8 Players"  },
];

const DATE_OPTIONS = [
  { day: "MON", date: 14 },
  { day: "TUE", date: 15 },
  { day: "WED", date: 16 },
  { day: "THU", date: 17 },
];

const TIME_SLOTS = ["09:00 AM","10:30 AM","02:00 PM","03:30 PM","05:00 PM","06:30 PM"];

function BookCoachPage({ onBack, onPay, packageTitle = "ELITE FINISHING", packagePrice = "200,000 ISK" }: {
  onBack: () => void;
  onPay?: () => void;
  packageTitle?: string;
  packagePrice?: string;
}) {
  const [squad, setSquad]           = useState("SQUAD A");
  const [date, setDate]             = useState(14);
  const [time, setTime]             = useState("09:00 AM");
  const [location, setLocation]     = useState<"COACH'S PIN" | "USE OUR GROUND">("USE OUR GROUND");
  const [focus, setFocus]           = useState("");

  const selectedSquad = SQUADS.find(s => s.name === squad);
  const selectedDay   = DATE_OPTIONS.find(d => d.date === date);

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12", active: true },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-black/90 backdrop-blur border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={bookSvg.p3068a900} fill="#D7FF00" />
            </svg>
            <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest text-[#ccf200]">BOOK COACH</span>
          </button>
          <span className="text-[#888] text-sm font-semibold">{packageTitle}</span>
        </header>

        {/* Scrollable form */}
        <div className="flex-1 overflow-y-auto px-8 py-6 pb-32">
          <div className="max-w-2xl flex flex-col gap-8">

            {/* 1. SQUAD ASSIGNMENT */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Squad Assignment</h2>
              {/* Squad pills */}
              <div className="flex gap-3 flex-wrap">
                {SQUADS.map(s => (
                  <button key={s.name} onClick={() => setSquad(s.name)}
                    className={`flex flex-col items-center px-6 py-3 rounded-xl border transition-all min-w-[110px] ${squad === s.name ? "border-[#ccf200] bg-[rgba(204,242,0,0.08)]" : "border-white/10 bg-[#111] hover:border-white/20"}`}>
                    <span className={`text-sm font-bold uppercase ${squad === s.name ? "text-[#ccf200]" : "text-white"}`}>{s.name}</span>
                    <span className="text-white/60 text-xs mt-0.5">{s.count}</span>
                  </button>
                ))}
              </div>
              {/* Roster link */}
              <button className="flex items-center gap-2 text-sm text-[#ccf200] hover:text-[#d7ff00] transition-colors self-start">
                <svg width="16" height="12" viewBox="0 0 16.5 12" fill="none">
                  <path d={bookSvg.p21e50b00} fill="#CCF200" />
                </svg>
                Select specific players from roster
              </button>
              {/* Info box */}
              <div className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d={bookSvg.p6c8ea80} fill="#CCF200" />
                </svg>
                <span className="text-white/80 text-sm">Package allows up to <strong className="text-[#ccf200]">12 players</strong></span>
              </div>
            </section>

            {/* 2. SELECT DATE */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Select Date</h2>
              <div className="flex gap-3">
                {DATE_OPTIONS.map(d => (
                  <button key={d.date} onClick={() => setDate(d.date)}
                    className={`flex flex-col items-center px-5 py-3 rounded-xl border transition-all min-w-[70px] ${date === d.date ? "border-[#ccf200] bg-[rgba(204,242,0,0.08)]" : "border-white/10 bg-[#111] hover:border-white/20"}`}>
                    <span className={`text-[10px] font-semibold uppercase ${date === d.date ? "text-[#ccf200]" : "text-[#888]"}`}>{d.day}</span>
                    <span className={`font-['Bebas_Neue',sans-serif] text-2xl leading-8 ${date === d.date ? "text-white" : "text-[#555]"}`}>{d.date}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* 3. TIME SLOT */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Time Slot</h2>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map(t => (
                  <button key={t} onClick={() => setTime(t)}
                    className={`py-2.5 rounded-xl border text-sm font-semibold transition-all ${time === t ? "border-[#ccf200] bg-[rgba(204,242,0,0.08)] text-[#ccf200]" : "border-white/10 bg-[#111] text-white hover:border-white/20"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* 4. LOCATION */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Location</h2>
              {/* Toggle */}
              <div className="flex gap-2">
                <button onClick={() => setLocation("COACH'S PIN")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold uppercase transition-all ${location === "COACH'S PIN" ? "border-[#ccf200] bg-[rgba(204,242,0,0.08)] text-[#ccf200]" : "border-white/10 bg-[#111] text-white hover:border-white/20"}`}>
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none"><path d={bookSvg.p321d0880} fill="currentColor" /></svg>
                  {"COACH'S PIN"}
                </button>
                <button onClick={() => setLocation("USE OUR GROUND")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-bold uppercase transition-all ${location === "USE OUR GROUND" ? "border-[#ccf200] bg-[rgba(204,242,0,0.08)] text-[#ccf200]" : "border-white/10 bg-[#111] text-white hover:border-white/20"}`}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d={bookSvg.p22de3980} fill="currentColor" /></svg>
                  USE OUR GROUND
                </button>
              </div>
              {/* Venue */}
              {location === "USE OUR GROUND" && (
                <div className="flex flex-col gap-2">
                  <div className="bg-[#111] border border-white/10 rounded-xl px-4 py-3">
                    <p className="text-white text-sm">Elite Training Center, Pitch 4</p>
                  </div>
                  <div className="flex gap-3">
                    {["Floodlights","Changing Rooms"].map(a => (
                      <div key={a} className="flex items-center gap-1.5 text-[#888] text-xs">
                        <svg width="12" height="12" viewBox="0 0 11.6667 11.6667" fill="none">
                          <path d={bookSvg.p1d9bcc00} fill="#CCF200" />
                        </svg>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* 5. SESSION FOCUS */}
            <section className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Session Focus</h2>
              <textarea
                value={focus}
                onChange={e => setFocus(e.target.value)}
                placeholder="Goals for the squad, specific focus areas for Coach Marcus..."
                rows={4}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 resize-none focus:outline-none focus:border-[#ccf200]/40 transition-colors"
              />
            </section>

            {/* 6. BOOKING SUMMARY */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Booking Summary</h2>
              <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
                {[
                  { label: "SQUAD & COUNT", value: `${squad} • ${selectedSquad?.count}` },
                  { label: "DATE & TIME",   value: `Oct ${date} • ${time}` },
                  { label: "TYPE",          value: "F2F • 1 Session" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 last:border-0">
                    <span className="text-[#888] text-xs font-semibold uppercase tracking-widest">{label}</span>
                    <span className="text-white text-sm">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-5 py-4 bg-[#0e0e0e]">
                  <span className="text-white text-sm font-bold uppercase tracking-widest">TOTAL AMOUNT</span>
                  <span className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-wide">{packagePrice}</span>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Sticky CTA */}
        <div className="shrink-0 border-t border-white/10 bg-[#050505] px-8 py-4">
          <button onClick={onPay} className="w-full max-w-2xl bg-[#d7ff00] hover:bg-[#ccf200] text-[#2b3400] font-['Bebas_Neue',sans-serif] text-xl rounded-xl py-4 transition-colors shadow-[0_4px_20px_rgba(215,255,0,0.25)] tracking-widest uppercase">
            CONTINUE TO PAYMENT
          </button>
        </div>
      </main>
    </div>
  );
}

// ─── Payment page ──────────────────────────────────────────────────────────────

type PaymentMethod = "card" | "apple" | "google" | "wallet";

const COUPONS = [
  { tag: "SPECIAL OFFER", title: "Save 10% on first session", code: "FIRSTVALUR", color: "border-[rgba(204,242,0,0.3)] bg-[rgba(204,242,0,0.04)]" },
  { tag: "LOYALTY REWARD", title: "Bundle Discount – £15 Off", code: "BUNDLEUP", color: "border-white/10 bg-[#111]" },
];

function PaymentPage({ onBack, amount = "120,000 ISK" }: { onBack: () => void; amount?: string }) {
  const [coupon, setCoupon]         = useState("");
  const [payMethod, setPayMethod]   = useState<PaymentMethod>("card");
  const [gst, setGst]               = useState("07AABCM1234F1Z5");
  const [taxEmail, setTaxEmail]     = useState("finance@elitesquad.pro");

  const METHODS: { id: PaymentMethod; label: string; sub?: string; icon: JSX.Element }[] = [
    {
      id: "card", label: "Credit/Debit Card", sub: "SAVED  Visa **** 4421",
      icon: <svg width="20" height="16" viewBox="0 0 19.9688 16.0312" fill="none"><path d={paymentSvg.p31170e00} fill="white" /></svg>,
    },
    {
      id: "apple", label: "Apple Pay",
      icon: <svg width="18" height="22" viewBox="0 0 14.9376 18.528" fill="none"><path d={paymentSvg.pdcb9920} fill="white" /></svg>,
    },
    {
      id: "google", label: "Google Pay",
      icon: (
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d={paymentSvg.p17a7fc80} fill="#EA4335" />
          <path d={paymentSvg.p20603340} fill="#FBBC05" />
          <path d={paymentSvg.p197ca980} fill="#34A853" />
          <path d={paymentSvg.p1d661240} fill="#4285F4" />
        </svg>
      ),
    },
    {
      id: "wallet", label: "Valur Wallet", sub: "Balance: £25.00",
      icon: <svg width="16" height="16" viewBox="0 0 15.8203 11.6797" fill="none"><path d={paymentSvg.pb4cdb00} fill="white" /></svg>,
    },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12", active: true },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-[rgba(10,10,10,0.95)] backdrop-blur border-b border-[#262626] px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[#d7ff00] hover:text-white transition-colors">
            <svg width="7" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d={paymentSvg.p1cc3a100} fill="#D7FF00" />
            </svg>
            <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest text-[#d7ff00]">PAYMENT</span>
          </button>
        </header>

        {/* Scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6 pb-28">
          <div className="max-w-2xl flex flex-col gap-8">

            {/* 1. ORDER SUMMARY */}
            <section className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Order Summary</h2>
              <div className="bg-[#111] border border-white/10 rounded-xl overflow-hidden">
                {/* Coach + Package */}
                <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-white/5">
                  <div>
                    <p className="text-[#888] text-[10px] uppercase tracking-widest mb-0.5">COACH</p>
                    <p className="text-white text-sm font-bold">Marcus Vane</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#888] text-[10px] uppercase tracking-widest mb-0.5">PACKAGE</p>
                    <p className="text-white text-sm font-bold">Elite Finishing (F2F)</p>
                  </div>
                </div>
                {/* Date */}
                <div className="px-5 py-3 flex items-center gap-2 border-b border-white/5">
                  <svg width="11" height="12" viewBox="0 0 11.6484 12.8516" fill="none">
                    <path d={paymentSvg.pb0d4120} fill="#888" />
                  </svg>
                  <span className="text-[#888] text-sm">Wed, Oct 18 • 09:00 AM</span>
                </div>
                {/* Price breakdown */}
                <div className="px-5 py-3 flex flex-col gap-2">
                  {[
                    { label: "Session Price", value: "100,000 ISK", lime: false },
                    { label: "Platform Fee",  value: "20,000 ISK",  lime: false },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-[#888] text-sm">{label}</span>
                      <span className="text-white text-sm">{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">TOTAL</span>
                    <span className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-2xl tracking-wide">{amount}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. APPLY COUPON */}
            <section className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Apply Coupon</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="ENTER CODE"
                  className="flex-1 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm uppercase tracking-[1px] placeholder:text-[#555] focus:outline-none focus:border-[#ccf200]/40 transition-colors"
                />
                <button className="bg-[#111] border border-white/20 hover:border-[#ccf200]/40 text-white font-bold text-sm px-5 rounded-xl transition-colors uppercase tracking-wide">
                  APPLY
                </button>
              </div>
              {/* Coupon cards */}
              <div className="grid grid-cols-2 gap-3">
                {COUPONS.map(c => (
                  <button key={c.code} onClick={() => setCoupon(c.code)}
                    className={`border rounded-xl p-4 text-left transition-all hover:border-[#ccf200]/40 ${c.color}`}>
                    <p className="text-[#ccf200] text-[10px] font-bold uppercase tracking-widest mb-1">{c.tag}</p>
                    <p className="text-white text-sm font-bold leading-tight">{c.title}</p>
                    <p className="text-[#555] text-[10px] mt-1 uppercase tracking-wide">CODE: {c.code}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* 3. PAYMENT METHOD */}
            <section className="flex flex-col gap-3">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Payment Method</h2>
              <div className="flex flex-col gap-2">
                {METHODS.map(m => (
                  <button key={m.id} onClick={() => setPayMethod(m.id)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border transition-all text-left ${payMethod === m.id ? "border-[#ccf200] bg-[rgba(204,242,0,0.05)]" : "border-white/10 bg-[#111] hover:border-white/20"}`}>
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center shrink-0">
                      {m.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold">{m.label}</p>
                      {m.sub && <p className="text-[#888] text-xs mt-0.5">{m.sub}</p>}
                    </div>
                    {payMethod === m.id ? (
                      <svg width="20" height="20" viewBox="0 0 19.9688 19.9688" fill="none">
                        <path d={paymentSvg.p16781800} fill="#CCF200" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 19.9688 19.9688" fill="none">
                        <path d={paymentSvg.pd99300} fill="none" stroke="#555" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* 4. BILLING DETAILS */}
            <section className="flex flex-col gap-4">
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide uppercase">Billing Details</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">GST Number</label>
                  <input
                    value={gst}
                    onChange={e => setGst(e.target.value)}
                    className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#ccf200]/40 transition-colors tracking-[1px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-xs font-bold uppercase tracking-widest">Tax Invoice Recipient</label>
                  <input
                    value={taxEmail}
                    onChange={e => setTaxEmail(e.target.value)}
                    placeholder="finance@elitesquad.pro"
                    className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ccf200]/40 transition-colors placeholder:text-[#555]"
                  />
                </div>
                <button className="text-[#ccf200] text-sm font-bold uppercase tracking-widest underline underline-offset-2 hover:text-[#d7ff00] transition-colors self-start">
                  GENERATE PROFORMA INVOICE
                </button>
              </div>
            </section>

          </div>
        </div>

        {/* Sticky footer CTA */}
        <div className="shrink-0 border-t border-[#262626] bg-[#0a0a0a] px-8 py-4 flex flex-col gap-2">
          <button className="w-full max-w-2xl bg-[#d4ff00] hover:bg-[#ccf200] text-black font-['Bebas_Neue',sans-serif] text-xl rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-[0_4px_20px_rgba(215,255,0,0.2)] tracking-widest uppercase">
            PAY {amount}
            <svg width="7" height="12" viewBox="0 0 7.4 12" fill="none">
              <path d={paymentSvg.p28c84800} fill="#181E00" />
            </svg>
          </button>
          <div className="flex items-center justify-center gap-2 text-[#555] text-[10px] uppercase tracking-widest">
            <svg width="8" height="11" viewBox="0 0 8.01562 10.5" fill="none">
              <path d={paymentSvg.p36c5c880} fill="#555" />
            </svg>
            Safe & Secure 256-Bit Encryption
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Manage Squads page ────────────────────────────────────────────────────────

const SQUADS_DATA = [
  {
    id: 1,
    name: "U-14 ELITE",
    sub: "UNDER 14S • ACADEMY LEVEL",
    players: 18,
    nextDay: "FRI,",
    nextTime: "14:30",
    coach: "Coach M. Reynolds",
    coachImg: imgSquadCoach1,
  },
  {
    id: 2,
    name: "U-16 PREMIER",
    sub: "UNDER 16S • REGIONAL",
    players: 22,
    nextDay: "SAT,",
    nextTime: "09:00",
    coach: "Coach D. Sterling",
    coachImg: imgSquadCoach2,
  },
  {
    id: 3,
    name: "U-12 DEVELOPMENT",
    sub: "UNDER 12S • FOUNDATION",
    players: 14,
    nextDay: "TUE,",
    nextTime: "17:00",
    coach: null,
    coachImg: null,
  },
  {
    id: 4,
    name: "RESERVE A",
    sub: "SENIOR • SECOND TEAM",
    players: 20,
    nextDay: "MON,",
    nextTime: "19:30",
    coach: "Coach S. Wu",
    coachImg: imgSquadCoach3,
  },
];

function ManageSquadsPage({ onBack }: { onBack: () => void }) {
  const [showAdd, setShowAdd] = useState(false);
  const [newSquad, setNewSquad] = useState({ name: "", sub: "" });

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18", active: true },
            { label: "Players",   icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12" },
            { label: "Sessions",  icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667" },
            { label: "Profile",   icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20" },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => (label === "Dashboard" || active) && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-black border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" style={{ transform: "rotate(180deg)" }}>
              <path d={squadSvg.p3e1a4b00} fill="#D7FF00" />
            </svg>
            <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest">SQUAD MANAGEMENT</span>
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="w-full flex flex-col gap-6">

            {/* Section header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="font-['Bebas_Neue',sans-serif] text-white text-2xl tracking-wide uppercase">Active Squads</h2>
                <span className="bg-[rgba(204,242,0,0.1)] border border-[rgba(204,242,0,0.2)] text-[#ccf200] text-xs font-bold px-2.5 py-1 rounded-lg">
                  {String(SQUADS_DATA.length).padStart(2, "0")}
                </span>
              </div>
              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 bg-[#ccf200] hover:bg-[#d7ff00] text-black font-bold text-sm px-4 py-2.5 rounded-xl transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d={squadSvg.p2bb32400} fill="black" />
                </svg>
                ADD SQUAD
              </button>
            </div>

            {/* Add Squad form (inline) */}
            {showAdd && (
              <div className="bg-[#111] border border-[#ccf200]/40 rounded-2xl p-5 flex flex-col gap-3">
                <h3 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-wide">NEW SQUAD</h3>
                <input
                  value={newSquad.name}
                  onChange={e => setNewSquad(p => ({ ...p, name: e.target.value }))}
                  placeholder="Squad name (e.g. U-18 ELITE)"
                  className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm uppercase tracking-wide placeholder:text-[#555] focus:outline-none focus:border-[#ccf200]/40 transition-colors"
                />
                <input
                  value={newSquad.sub}
                  onChange={e => setNewSquad(p => ({ ...p, sub: e.target.value }))}
                  placeholder="Category (e.g. UNDER 18S • PREMIER)"
                  className="bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm uppercase tracking-wide placeholder:text-[#555] focus:outline-none focus:border-[#ccf200]/40 transition-colors"
                />
                <div className="flex gap-2">
                  <button onClick={() => setShowAdd(false)} className="flex-1 border border-white/20 text-white font-bold text-sm py-2.5 rounded-xl hover:border-white/40 transition-colors uppercase">Cancel</button>
                  <button onClick={() => setShowAdd(false)} className="flex-1 bg-[#ccf200] text-black font-bold text-sm py-2.5 rounded-xl hover:bg-[#d7ff00] transition-colors uppercase">Create Squad</button>
                </div>
              </div>
            )}

            {/* Squad cards */}
            <div className="flex flex-col gap-4">
              {SQUADS_DATA.map(squad => (
                <div key={squad.id} className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/15 transition-colors">
                  <div className="p-5 flex flex-col gap-4">

                    {/* Squad name + menu */}
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl tracking-wide leading-tight uppercase">{squad.name}</h3>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">{squad.sub}</p>
                      </div>
                      <button className="p-1.5 rounded-full hover:bg-white/10 transition-colors shrink-0">
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="none">
                          <path d={squadSvg.p3caf0c80} fill="#94A3B8" />
                        </svg>
                      </button>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-0">
                      <div className="flex-1">
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">PLAYERS</p>
                        <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl leading-tight">{squad.players}</p>
                      </div>
                      {/* Divider */}
                      <div className="w-px h-10 bg-white/10 mx-6" />
                      <div className="flex-1">
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">NEXT SESSION</p>
                        <p className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-2xl leading-tight">{squad.nextDay} {squad.nextTime}</p>
                      </div>
                    </div>

                    {/* Coach row */}
                    <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                      {squad.coach ? (
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0">
                            <img src={squad.coachImg!} alt={squad.coach} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-white text-sm font-medium">{squad.coach}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 opacity-50">
                          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 11 8" fill="none">
                              <path d={squadSvg.p278fac00} fill="#888" />
                            </svg>
                          </div>
                          <span className="text-[#888] text-sm italic">No coach assigned</span>
                        </div>
                      )}
                      <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                        <svg width="4" height="7" viewBox="0 0 3.82083 6.50417" fill="none">
                          <path d={squadSvg.p19bb3500} fill="#888" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Package Deals page ────────────────────────────────────────────────────────

const SQUAD_SIZES = [
  { label: "SQUAD A", players: "4 Players" },
  { label: "SQUAD B", players: "8 Players" },
  { label: "SQUAD C", players: "12 Players" },
  { label: "SQUAD D", players: "16 Players" },
];

const PACKAGES = [
  {
    id: "basic",
    name: "Basic Package",
    sub: "Fundamentals for your team",
    price: "100,000 ISK",
    cta: "SELECT BASIC",
    featured: false,
    features: ["Standard Court Access", "Water & Hydration Station"],
  },
  {
    id: "pro",
    name: "PRO Package",
    sub: "Elite performance tools",
    price: "200,000 ISK",
    cta: "BOOK PRO",
    featured: true,
    features: ["Premium Indoor Courts", "Dedicated Pro Coach (1hr)", "High-End Equipment Rental"],
  },
  {
    id: "elite",
    name: "Elite Package",
    sub: "The complete VIP stadium experience",
    price: "400,000 ISK",
    cta: "SELECT ELITE",
    featured: false,
    features: ["Full Stadium Access", "Full Catering & Recovery Lounge", "Private Locker Rooms"],
  },
];

function PackageDealsPage({ onBack, onPay }: { onBack: () => void; onPay?: () => void }) {
  const [selectedSquad, setSelectedSquad] = useState(1);

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden font-['Inter',sans-serif]">

      {/* ── Sidebar ── */}
      <aside className="w-[220px] shrink-0 h-full bg-[#0a0a0a] border-r border-[#1e1e1e] flex flex-col">
        <div className="px-6 pt-8 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ccf200] flex items-center justify-center shrink-0">
              <span className="font-['Bebas_Neue',sans-serif] text-black text-lg">EC</span>
            </div>
            <div>
              <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-base leading-none tracking-wide">ELITE CROWN</p>
              <p className="text-[#555] text-[10px] uppercase tracking-[1px] mt-0.5">Junior Tier</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 flex flex-col gap-1">
          {[
            { label: "Dashboard", icon: clubSvg.p191dcc80, vb: "0 0 18 18" },
            { label: "Players",   icon: clubSvg.p2d7d8580, vb: "0 0 20.5 19.5" },
            { label: "Coaches",   icon: clubSvg.p5df3d80,  vb: "0 0 24 12", active: true },
            { label: "Sessions",  icon: clubSvg.p29478120, vb: "0 0 11.6667 11.6667" },
            { label: "Profile",   icon: clubSvg.p3cdadd00, vb: "0 0 20.1 20" },
          ].map(({ label, icon, vb, active }: any) => (
            <button key={label} onClick={() => label === "Dashboard" && onBack()} className={`flex items-center gap-3 px-4 py-3 rounded-[14px] text-sm font-medium transition-all w-full text-left ${active ? "bg-[rgba(200,240,0,0.10)]" : "hover:bg-white/5"}`}>
              <svg width="18" height="18" viewBox={vb} fill="none"><path d={icon} fill={active ? "#d7ff00" : "#555"} /></svg>
              <span className={active ? "text-[#d7ff00]" : "text-[#555]"}>{label}</span>
              {active && <div className="ml-auto w-[6px] h-[6px] rounded-full bg-[#c8f000]" />}
            </button>
          ))}
        </nav>
        <div className="px-3 pb-6">
          <div className="bg-[#0e0f11] border border-[#2a2a2a] rounded-[14px] p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[1.4px] border-[#c8f000] shrink-0">
                <img src={img0} alt="Club" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Club Admin</p>
                <p className="text-[#888] text-[10px] uppercase mt-0.5">Elite Crown FC</p>
              </div>
            </div>
            <div className="bg-[rgba(200,240,0,0.1)] rounded-[10px] px-3 py-1.5 text-center">
              <span className="text-[#c8f000] text-[10px] font-bold uppercase tracking-[0.5px]">Junior Tier Active</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="shrink-0 bg-black border-b border-white/10 px-8 py-4 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-3 text-[#d7ff00] hover:text-white transition-colors">
            <svg width="11" height="17" viewBox="0 0 11 17" fill="none">
              <path d={bookDealsSvg.p3068a900} fill="#D7FF00" />
            </svg>
            <span className="font-['Bebas_Neue',sans-serif] text-xl tracking-widest">PACKAGE DEALS</span>
          </button>
          <button className="p-2 rounded-xl hover:bg-white/10 transition-colors">
            <svg width="20" height="20" viewBox="0 0 19.982 20" fill="none">
              <path d={bookDealsSvg.pb5c2400} fill="#CCF200" />
            </svg>
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">

            {/* Squad size selector */}
            <div>
              <h2 className="font-['Bebas_Neue',sans-serif] text-[#d7ff00] text-xl tracking-widest uppercase mb-4">SELECT SQUAD SIZE</h2>
              <div className="flex gap-3 flex-wrap">
                {SQUAD_SIZES.map((sq, i) => (
                  <button
                    key={sq.label}
                    onClick={() => setSelectedSquad(i)}
                    className={`flex flex-col items-center px-5 py-3 rounded-[12px] backdrop-blur-[10px] border transition-all ${
                      selectedSquad === i
                        ? "bg-[rgba(17,19,21,0.8)] border-[#d7ff00] shadow-[0px_0px_15px_0px_rgba(215,255,0,0.2)]"
                        : "bg-[rgba(17,19,21,0.8)] border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span className={`text-[13px] font-bold uppercase ${selectedSquad === i ? "text-[#ccf200]" : "text-[#dde3ed]"}`}>{sq.label}</span>
                    <span className="text-white/60 text-sm">{sq.players}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Package cards */}
            <div className="flex flex-col gap-6">
              {PACKAGES.map(pkg => (
                <div
                  key={pkg.id}
                  className={`relative rounded-[12px] backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border ${
                    pkg.featured ? "border-[#ccf200]" : "border-white/10"
                  } overflow-hidden`}
                >
                  {pkg.featured && (
                    <div className="absolute top-3 left-3 bg-[#ccf200] text-black text-[9px] font-bold uppercase px-2 py-0.5 rounded-md tracking-wider">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-5 pt-8">
                    {/* Title row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-['Bebas_Neue',sans-serif] text-white text-xl leading-tight">{pkg.name}</h3>
                        <p className="text-white text-sm mt-0.5 opacity-80">{pkg.sub}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="font-['Bebas_Neue',sans-serif] text-[#ccf200] text-[26px] leading-tight">{pkg.price}</p>
                        <p className="text-[#ccf200] text-[11px] font-medium tracking-[0.7px] opacity-80">/SESSION</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3 mb-5">
                      {pkg.features.map(f => (
                        <div key={f} className="flex items-center gap-3">
                          <svg width="16.5" height="15.75" viewBox="0 0 16.5 15.75" fill="none" className="shrink-0">
                            <path d={bookDealsSvg.p26ccbe40} fill="#CCF200" />
                          </svg>
                          <span className="text-[#dde3ed] text-[13px] uppercase tracking-wide">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button
                      onClick={onPay}
                      className="w-full bg-[#b3d400] hover:bg-[#ccf200] text-[#181e00] font-['Bebas_Neue',sans-serif] text-xl tracking-[0.72px] py-3 rounded-[12px] drop-shadow-[0px_0px_10px_rgba(179,212,0,0.4)] transition-colors"
                    >
                      {pkg.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Compare strip */}
            <button className="w-full bg-[#0e0f11] border border-white/10 rounded-[8px] px-4 py-4 flex items-center justify-between hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path d={bookDealsSvg.pa587e80} fill="#CCF200" />
                </svg>
                <span className="text-[#ccf200] text-[13px] font-bold uppercase tracking-[0.7px]">COMPARE PACKAGE DETAILS</span>
              </div>
              <svg width="7.4" height="12" viewBox="0 0 7.4 12" fill="none">
                <path d={bookDealsSvg.p28c84800} fill="#CCF200" />
              </svg>
            </button>

            {/* Custom request card */}
            <div className="bg-[#0e0f11] border border-white/10 border-dashed rounded-[12px] py-8 px-6 flex flex-col items-center gap-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d={bookDealsSvg.p3c300f00} fill="#565E74" />
              </svg>
              <div className="text-center">
                <p className="text-[#dde3ed] font-bold text-base mb-1">Need something else?</p>
                <p className="text-[#565e74] text-sm">Custom tournaments, team-building, or monthly memberships.</p>
              </div>
              <button className="border-2 border-[#ccf200] text-[#ccf200] font-['Bebas_Neue',sans-serif] text-sm tracking-[1.2px] uppercase px-8 py-3 rounded-[8px] hover:bg-[#ccf200]/10 transition-colors">
                REQUEST CUSTOM PACKAGE
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export { ClubDashboardPage, ClubCoachesPage, FiltersPage, CoachProfilePage, ShortlistedCoachesPage, SessionsPage, BookCoachPage, PaymentPage, ManageSquadsPage, PackageDealsPage };

import { useEffect, useRef } from "react";

// Faithful render of design-kit/landing/valur-homepage.html (Knattspyrna Akademian
// homepage). Markup + CSS are reproduced verbatim from the design kit; image assets
// are served from public/landing-assets/. CTAs route into the app via onEnter.

const CSS = `:root {
  /* ── Brand / accent (electric lime) ───────────────────────────────────────
     Three closely-related limes are used deliberately:
       primary  #c8f000  — brand mark, icons, key numerals, focus ring
       action   #ccf200  — filled buttons & active controls (most-used)
       bright   #d7ff00  — hover state, headings, "live"/accent text
  */
  --valur-lime-primary: #c8f000;
  --valur-lime-action:  #ccf200;
  --valur-lime-bright:  #d7ff00;
  --valur-lime-alt:     #d4ff00;

  /* Text that sits ON lime (dark olives, never pure black for warmth) */
  --valur-on-lime:        #0d0d0d;
  --valur-on-lime-olive:  #181e00;
  --valur-on-lime-ink:    #0e141b;
  --valur-on-lime-deep:   #2b3400;

  /* Lime tints (selected backgrounds, glows, soft fills) */
  --valur-lime-08:  rgba(204, 242, 0, 0.08);
  --valur-lime-10:  rgba(200, 240, 0, 0.10);
  --valur-lime-20:  rgba(204, 242, 0, 0.20);
  --valur-lime-30:  rgba(204, 242, 0, 0.30);
  --valur-lime-50:  rgba(204, 242, 0, 0.50);

  /* ── Surfaces (dark to darkest) ───────────────────────────────────────────
       canvas    #050505  — app background
       sidebar   #0a0a0a  — rails, nav, deep panels
       card      #0e0f11  — default card / input field
       raised    #111111  — hover / raised surface
       sunken    #1a1a1a  — inset inputs, switches
       popover   #161616  — menus, tooltips
  */
  --valur-canvas:  #050505;
  --valur-sidebar: #0a0a0a;
  --valur-card:    #0e0f11;
  --valur-raised:  #111111;
  --valur-sunken:  #1a1a1a;
  --valur-popover: #161616;
  --valur-inset:   #0b0c0e;

  /* Glass surfaces (for sticky headers/footers + backdrop-blur) */
  --valur-glass-header: rgba(5, 5, 5, 0.95);
  --valur-glass-panel:  rgba(17, 19, 21, 0.80);

  /* ── Text ─────────────────────────────────────────────────────────────────
       primary   #ffffff   — headings, key copy
       secondary #dde3ed   — body on dark
       muted     #888888   — labels, metadata
       faint     #555555   — inactive nav, captions
       fainter   #444444   — disabled
  */
  --valur-text:           #ffffff;
  --valur-text-secondary: #dde3ed;
  --valur-text-muted:     #888888;
  --valur-text-faint:     #555555;
  --valur-text-fainter:   #444444;
  --valur-text-sand:      #c5c9ac; /* warm off-white used on imagery */

  /* ── Borders ──────────────────────────────────────────────────────────────*/
  --valur-border:        #2a2a2a;       /* default card / divider */
  --valur-border-subtle: #1e1e1e;       /* quiet divider */
  --valur-border-strong: #262626;
  --valur-border-hair:   rgba(255, 255, 255, 0.10);
  --valur-border-lime:   var(--valur-lime-primary);

  /* ── Secondary accents (status / categories) ──────────────────────────────*/
  --valur-blue:        #60a5fa;
  --valur-blue-bg:     #13203d;
  --valur-blue-strong: #3b6bf2;
  --valur-amber:       #fbbf24;
  --valur-destructive: #d4183d;
  --valur-success:     #22c55e;

  /* ── Typography ───────────────────────────────────────────────────────────*/
  --valur-font-display: 'Bebas Neue', sans-serif; /* uppercase, condensed, tracked */
  --valur-font-body:    'Inter', sans-serif;
  --valur-fw-normal: 400;
  --valur-fw-medium: 500;
  --valur-fw-semibold: 600;
  --valur-fw-bold: 700;

  /* Type scale (px) — the project leans on these tightly */
  --valur-text-2xs: 9px;
  --valur-text-xs:  10px;   /* labels / tags — the workhorse small size */
  --valur-text-sm:  12px;
  --valur-text-md:  14px;
  --valur-text-base: 16px;
  --valur-text-lg:  18px;
  --valur-text-xl:  20px;
  --valur-text-2xl: 24px;
  --valur-text-3xl: 30px;
  --valur-text-4xl: 36px;
  --valur-text-5xl: 48px;
  --valur-display:  80px;

  /* Display tracking (Bebas Neue wants positive letter-spacing) */
  --valur-track-tight: -1px;
  --valur-track-wide:  0.6px;
  --valur-track-wider: 1px;
  --valur-track-widest: 2.4px;

  /* ── Radii ────────────────────────────────────────────────────────────────
     The signature radius is 14px (rounded-[14px]); xl/2xl dominate cards. */
  --valur-radius-sm:  7px;
  --valur-radius-md:  10px;   /* --radius base */
  --valur-radius-lg:  12px;   /* rounded-xl */
  --valur-radius-xl:  14px;   /* signature */
  --valur-radius-2xl: 16px;
  --valur-radius-full: 9999px;

  /* ── Spacing (4px base grid) ──────────────────────────────────────────────*/
  --valur-space-1: 4px;
  --valur-space-2: 8px;
  --valur-space-3: 12px;
  --valur-space-4: 16px;
  --valur-space-5: 20px;
  --valur-space-6: 24px;
  --valur-space-8: 32px;

  /* ── Elevation / glow ─────────────────────────────────────────────────────
     Valur barely uses neutral drop-shadows — depth comes from lime *glow*. */
  --valur-glow-sm:  0 0 8px rgba(204, 242, 0, 0.50);
  --valur-glow-md:  0 4px 20px rgba(204, 242, 0, 0.30);
  --valur-glow-lg:  0 8px 40px rgba(215, 255, 0, 0.40);
  --valur-glow-ring: 0 0 0 1px var(--valur-lime-primary), 0 0 8px rgba(204, 242, 0, 0.45);

  /* ── Motion ───────────────────────────────────────────────────────────────*/
  --valur-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --valur-dur-fast: 150ms;
  --valur-dur: 300ms;
  --valur-dur-slow: 500ms;
}

*{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:var(--valur-canvas);color:var(--valur-text);font-family:var(--valur-font-body);-webkit-font-smoothing:antialiased;overflow-x:hidden}
  img{display:block;max-width:100%}
  a{color:inherit;text-decoration:none}
  .disp{font-family:var(--valur-font-display);text-transform:uppercase;line-height:.9;letter-spacing:.5px}
  .lime{color:var(--valur-lime-bright)}
  .wrap{max-width:1200px;margin:0 auto;padding:0 32px}
  section{position:relative}

  /* ── buttons ── */
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:var(--valur-font-display);font-size:18px;letter-spacing:1px;text-transform:uppercase;border:none;cursor:pointer;border-radius:var(--valur-radius-lg);padding:14px 26px;transition:all .3s var(--valur-ease)}
  .btn-primary{background:var(--valur-lime-action);color:var(--valur-on-lime-olive);box-shadow:var(--valur-glow-md)}
  .btn-primary:hover{background:var(--valur-lime-bright);transform:translateY(-2px)}
  .btn-primary.btn-glow{box-shadow:0 0 40px rgba(204,242,0,.5)}
  .btn-outline{background:rgba(14,15,17,.6);color:#fff;border:1px solid var(--valur-border-hair)}
  .btn-outline:hover{border-color:var(--valur-lime-bright);color:var(--valur-lime-bright)}
  .btn-sm{font-size:13px;font-family:var(--valur-font-body);font-weight:700;letter-spacing:1.2px;padding:11px 18px;border-radius:999px}
  .link-arrow{display:inline-flex;align-items:center;gap:8px;font-family:var(--valur-font-display);font-size:16px;letter-spacing:1px;text-transform:uppercase;color:var(--valur-lime-bright);border:1px solid var(--valur-lime-30);border-radius:999px;padding:10px 18px;transition:all .3s}
  .link-arrow:hover{background:var(--valur-lime-10);border-color:var(--valur-lime-primary)}

  .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;color:var(--valur-lime-bright);margin-bottom:18px}
  .eyebrow::before{content:"";width:22px;height:1px;background:var(--valur-lime-primary)}

  /* ── nav ── */
  nav{position:fixed;top:0;left:0;right:0;z-index:60;display:flex;align-items:center;justify-content:space-between;padding:18px 32px;background:linear-gradient(to bottom,rgba(5,5,5,.8),transparent);transition:background .3s}
  nav.solid{background:var(--valur-glass-header);backdrop-filter:blur(14px);border-bottom:1px solid var(--valur-border-subtle)}
  .brand{display:flex;align-items:center;gap:11px}
  .brand .mk{width:38px;height:38px;border-radius:50%;border:1.6px solid var(--valur-lime-primary);overflow:hidden;background:linear-gradient(135deg,#243b1a,#0e0f11);display:grid;place-items:center}
  .brand .mk img{width:100%;height:100%;object-fit:cover}
  .brand b{font-family:var(--valur-font-display);font-size:22px;letter-spacing:1px;color:#fff;white-space:nowrap;line-height:1}
  @media(max-width:520px){.brand b{font-size:18px}}
  .nav-r{display:flex;align-items:center;gap:22px}
  .nav-r .login{font-size:14px;color:var(--valur-text-secondary)}
  .nav-r .login:hover{color:#fff}

  /* ── hero ── */
  .hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:140px 24px 180px;position:relative;overflow:hidden}
  .hero .bg{position:absolute;inset:0;background:#0a0a0a url('/landing-assets/hp_hero_a.png') center/cover no-repeat}
  .hero .scrim{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(5,5,5,.78) 0%,rgba(5,5,5,.45) 38%,rgba(5,5,5,.6) 72%,var(--valur-canvas) 100%)}
  .hero .inner{position:relative;z-index:2;max-width:900px}
  .hero h1{font-family:var(--valur-font-display);text-transform:uppercase;font-size:clamp(56px,9.5vw,128px);line-height:.86;letter-spacing:-1px;color:#fff}
  .hero p{margin:26px auto 0;max-width:560px;font-size:clamp(15px,1.5vw,18px);color:var(--valur-text-secondary);line-height:1.6}
  .hero .cta{display:flex;gap:14px;justify-content:center;margin-top:38px;flex-wrap:wrap}

  /* ── stats bar ── */
  .statsbar{position:relative;z-index:5;margin-top:-90px}
  .statsbar .box{display:grid;grid-template-columns:repeat(3,1fr);background:rgba(14,15,17,.85);backdrop-filter:blur(14px);border:1px solid var(--valur-lime-30);border-radius:var(--valur-radius-xl);overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.6)}
  .statsbar .cell{padding:30px 24px;text-align:center;border-right:1px solid var(--valur-border)}
  .statsbar .cell:last-child{border-right:none}
  .statsbar .n{font-family:var(--valur-font-display);font-size:clamp(40px,5vw,60px);line-height:.9;color:var(--valur-lime-bright)}
  .statsbar .l{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:var(--valur-text-muted);margin-top:8px}
  @media(max-width:680px){.statsbar .box{grid-template-columns:1fr}.statsbar .cell{border-right:none;border-bottom:1px solid var(--valur-border)}}

  /* ── section heads ── */
  .sec{padding:110px 0}
  .head-row{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;flex-wrap:wrap;margin-bottom:44px}
  .head-row h2{font-family:var(--valur-font-display);text-transform:uppercase;font-size:clamp(40px,5.5vw,76px);line-height:.9;letter-spacing:-.5px}
  .head-row .desc{color:var(--valur-text-muted);font-size:15px;max-width:440px;margin-top:14px}

  /* ── coach cards ── */
  .coaches{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .ccard{background:var(--valur-card);border:1px solid var(--valur-border);border-radius:var(--valur-radius-xl);overflow:hidden;transition:all .3s;cursor:pointer}
  .ccard:hover{border-color:var(--valur-lime-30);transform:translateY(-5px)}
  .ccard .pic{position:relative;aspect-ratio:4/5;overflow:hidden;background:#0a0a0a}
  .ccard .pic img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
  .ccard:hover .pic img{transform:scale(1.06)}
  .ccard .pic .sc{position:absolute;inset:0;background:linear-gradient(to top,var(--valur-card) 4%,transparent 55%)}
  .ccard .tier{position:absolute;top:12px;left:12px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;background:var(--valur-lime-action);color:var(--valur-on-lime-olive);padding:4px 9px;border-radius:6px}
  .ccard .tier.muted{background:rgba(14,15,17,.85);color:var(--valur-text-secondary);border:1px solid var(--valur-border-hair)}
  .ccard .nm{position:absolute;left:14px;right:14px;bottom:12px;z-index:2}
  .ccard .nm b{display:block;font-family:var(--valur-font-display);font-size:22px;letter-spacing:.5px;line-height:1}
  .ccard .nm span{font-size:12px;color:var(--valur-text-muted)}
  .ccard .foot{display:flex;align-items:center;justify-content:space-between;padding:14px 16px}
  .ccard .rate{display:flex;align-items:center;gap:5px;font-size:13px;font-weight:700;color:var(--valur-lime-bright)}
  .ccard .book{font-size:13px;font-weight:600;color:var(--valur-text-secondary);display:inline-flex;gap:5px;align-items:center}
  .ccard:hover .book{color:var(--valur-lime-bright)}
  @media(max-width:900px){.coaches{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:480px){.coaches{grid-template-columns:1fr}}

  /* ── for coaches ── */
  .twocol{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center}
  .visual{position:relative;border:1px solid var(--valur-border);border-radius:var(--valur-radius-2xl);overflow:hidden;aspect-ratio:4/5;background:#080808}
  .visual img{width:100%;height:100%;object-fit:cover}
  .feat2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px}
  .fcard{background:var(--valur-card);border:1px solid var(--valur-border);border-radius:var(--valur-radius-lg);padding:20px;transition:border-color .3s}
  .fcard:hover{border-color:var(--valur-lime-30)}
  .fcard .ic{width:38px;height:38px;border-radius:10px;background:var(--valur-lime-10);display:grid;place-items:center;margin-bottom:14px}
  .fcard .ic svg{width:20px;height:20px;stroke:var(--valur-lime-bright);fill:none;stroke-width:1.7}
  .fcard b{display:block;font-size:15px;margin-bottom:6px}
  .fcard p{font-size:12.5px;color:var(--valur-text-muted);line-height:1.55}
  .coach-cta{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}
  @media(max-width:880px){.twocol{grid-template-columns:1fr;gap:36px}.visual{aspect-ratio:16/10}}
  @media(max-width:480px){.feat2{grid-template-columns:1fr}}

  /* ── testimonial ── */
  .quote{text-align:center;padding:120px 24px;position:relative;overflow:hidden;border-top:1px solid var(--valur-border-subtle);border-bottom:1px solid var(--valur-border-subtle)}
  .quote .qbg{position:absolute;inset:0;background:#070707 url('/landing-assets/hp_testimonial_bg.png') center/cover no-repeat;opacity:.5}
  .quote .qbg::after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,var(--valur-canvas),rgba(5,5,5,.55) 50%,var(--valur-canvas))}
  .quote .glow{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:70%;height:120%;background:radial-gradient(circle,rgba(204,242,0,.10),transparent 65%);pointer-events:none}
  .quote .stars{color:var(--valur-lime-bright);letter-spacing:6px;font-size:16px;margin-bottom:26px;position:relative}
  .quote blockquote{font-family:var(--valur-font-display);text-transform:uppercase;font-size:clamp(30px,4.6vw,62px);line-height:1;max-width:900px;margin:0 auto;position:relative}
  .quote .who{display:inline-flex;align-items:center;gap:12px;margin-top:34px;position:relative}
  .quote .who .av{width:40px;height:40px;border-radius:50%;border:2px solid var(--valur-lime-primary);overflow:hidden;background:linear-gradient(135deg,#243b1a,#0e0f11)}
  .quote .who .av img{width:100%;height:100%;object-fit:cover}
  .quote .who b{font-size:14px}
  .quote .who span{font-size:12px;color:var(--valur-text-muted)}

  /* ── for clubs ── */
  .clubcol{display:grid;grid-template-columns:1fr 1.05fr;gap:56px;align-items:center}
  .avatars{display:flex;align-items:center;margin:8px 0 22px}
  .avatars .a{width:42px;height:42px;border-radius:50%;border:2px solid var(--valur-canvas);overflow:hidden;background:linear-gradient(135deg,#243b1a,#0e0f11);margin-left:-10px}
  .avatars .a:first-child{margin-left:0}
  .avatars .a img{width:100%;height:100%;object-fit:cover}
  .avatars .more{margin-left:12px;font-size:13px;color:var(--valur-lime-bright);font-weight:700}
  .bullets{list-style:none;display:flex;flex-direction:column;gap:14px;margin:24px 0 30px}
  .bullets li{display:flex;align-items:center;gap:12px;font-size:14.5px;color:var(--valur-text-secondary)}
  .bullets li .d{width:7px;height:7px;border-radius:50%;background:var(--valur-lime-primary);box-shadow:var(--valur-glow-sm);flex-shrink:0}
  .clubstats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
  .cstat{background:var(--valur-card);border:1px solid var(--valur-border);border-radius:var(--valur-radius-lg);padding:22px}
  .cstat .n{font-family:var(--valur-font-display);font-size:44px;line-height:.85;color:var(--valur-lime-bright)}
  .cstat b{display:block;font-size:14px;margin:10px 0 4px}
  .cstat span{font-size:12px;color:var(--valur-text-muted)}
  /* dashboard mock */
  .dashmock{border:1px solid var(--valur-border);border-radius:var(--valur-radius-xl);overflow:hidden;background:linear-gradient(180deg,#0c0d0f,#0a0a0a);margin-bottom:14px}
  .dashmock .bar{display:flex;gap:6px;padding:11px 14px;border-bottom:1px solid var(--valur-border-subtle)}
  .dashmock .bar i{width:9px;height:9px;border-radius:50%;background:#2a2a2a}
  .dashmock .bd{padding:16px;display:grid;grid-template-columns:1.3fr 1fr;gap:12px}
  .dashmock .panel{background:var(--valur-canvas);border:1px solid var(--valur-border-subtle);border-radius:10px;padding:12px}
  .dashmock .lbl{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--valur-text-muted);margin-bottom:10px}
  .dashmock .chart{display:flex;align-items:flex-end;gap:5px;height:60px}
  .dashmock .chart i{flex:1;border-radius:3px 3px 0 0;background:#242424}
  .dashmock .chart i.on{background:var(--valur-lime-primary)}
  .dashmock .rowm{display:flex;align-items:center;gap:8px;margin-bottom:9px}
  .dashmock .rowm .av{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#243b1a,#0e0f11);flex-shrink:0}
  .dashmock .rowm .ln{height:6px;border-radius:3px;background:#242424;flex:1}
  .dashmock .rowm .pct{font-size:10px;color:var(--valur-lime-bright);font-weight:700}
  .dashimg{border:1px solid var(--valur-border);border-radius:var(--valur-radius-xl);overflow:hidden;margin-bottom:14px;background:#080808;aspect-ratio:3/2;position:relative}
  .dashimg img{width:100%;height:100%;object-fit:cover}
  .dashimg .tag{position:absolute;top:12px;left:12px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--valur-lime-bright);background:rgba(0,0,0,.5);border:1px solid var(--valur-lime-30);padding:5px 10px;border-radius:6px}
  @media(max-width:880px){.clubcol{grid-template-columns:1fr;gap:36px}}
  @media(max-width:480px){.clubstats{grid-template-columns:1fr}}

  /* ── final cta ── */
  .final{text-align:center;padding:140px 24px;position:relative;overflow:hidden}
  .final .fbg{position:absolute;inset:0;background:#070707 url('/landing-assets/hp_cta_bg.png') center/cover no-repeat;opacity:.55}
  .final .fbg::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 45%,rgba(5,5,5,.35),var(--valur-canvas) 72%)}
  .final .glow{position:absolute;left:50%;top:45%;transform:translate(-50%,-50%);width:90%;height:90%;background:radial-gradient(circle,rgba(204,242,0,.14),transparent 60%);pointer-events:none}
  .final h2{font-family:var(--valur-font-display);text-transform:uppercase;font-size:clamp(54px,11vw,150px);line-height:.84;letter-spacing:-1px;position:relative}
  .final p{position:relative;color:var(--valur-text-secondary);max-width:480px;margin:22px auto 36px;font-size:16px;line-height:1.6}
  .final .cta{position:relative;display:flex;gap:14px;justify-content:center;flex-wrap:wrap}

  /* ── footer ── */
  footer{border-top:1px solid var(--valur-border-subtle);padding:64px 0 32px}
  .fgrid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:32px}
  .fbrand .brand{margin-bottom:16px}
  .fbrand p{color:var(--valur-text-muted);font-size:13px;max-width:230px;line-height:1.6}
  .fcol h4{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#fff;margin-bottom:18px}
  .fcol a{display:block;font-size:14px;color:var(--valur-text-muted);margin-bottom:12px}
  .fcol a:hover{color:var(--valur-lime-bright)}
  .fbottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-top:48px;padding-top:24px;border-top:1px solid var(--valur-border-subtle);font-size:12px;color:var(--valur-text-faint)}
  @media(max-width:760px){.fgrid{grid-template-columns:1fr 1fr}.fbrand{grid-column:1 / -1}}`;

const BODY_HTML = `<!-- NAV -->
<nav id="nav">
  <div class="brand"><b>Knattspyrna Akademian</b></div>
  <div class="nav-r"><a class="login" href="#">Login</a><a class="btn btn-primary btn-sm" href="#start">Get Started</a></div>
</nav>

<!-- HERO -->
<header class="hero">
  <div class="bg"></div>
  <div class="scrim"></div>
  <div class="inner">
    <div class="eyebrow" style="justify-content:center">The Performance Platform for Football</div>
    <h1>Footballers, <span class="lime">Coaches,</span><br>and <span class="lime">Clubs.</span></h1>
    <p>One platform. Elite coaching. Real results. Connect with verified performance coaches, track every session, and build the squad you deserve.</p>
    <div class="cta">
      <a class="btn btn-primary" href="#start">Get Started as a Coach</a>
      <a class="btn btn-outline" href="#athletes">Find My Coach</a>
    </div>
  </div>
</header>

<!-- STATS BAR -->
<div class="statsbar wrap">
  <div class="box">
    <div class="cell"><div class="n">2,400+</div><div class="l">Sessions Coached</div></div>
    <div class="cell"><div class="n">180+</div><div class="l">Verified Coaches</div></div>
    <div class="cell"><div class="n">94%</div><div class="l">Athlete Satisfaction</div></div>
  </div>
</div>

<!-- FOR ATHLETES -->
<section class="sec wrap" id="athletes">
  <div class="head-row">
    <div>
      <div class="eyebrow">For Athletes</div>
      <h2>Find Your Coach.</h2>
      <p class="desc">Browse verified performance coaches matched to your sport, level, and goals. From local F2F sessions to world-class remote programs.</p>
    </div>
    <a class="link-arrow" href="#">Browse All →</a>
  </div>
  <div class="coaches">
    <div class="ccard">
      <div class="pic"><img src="/landing-assets/coach_brazell.jpg" alt="Chris Brazell"><div class="sc"></div><span class="tier">Marquee</span><div class="nm"><b>Chris Brazell</b><span>UEFA Pro · Performance</span></div></div>
      <div class="foot"><span class="rate">★ 4.9</span><span class="book">Book →</span></div>
    </div>
    <div class="ccard">
      <div class="pic"><img src="/landing-assets/coach_eirikur.jpg" alt="Eiríkur Raphael"><div class="sc"></div><span class="tier">Pro</span><div class="nm"><b>Eiríkur Raphael</b><span>UEFA A · Match Analysis</span></div></div>
      <div class="foot"><span class="rate">★ 4.8</span><span class="book">Book →</span></div>
    </div>
    <div class="ccard">
      <div class="pic"><img src="/landing-assets/coach_silja.jpg" alt="Silja Úlfars"><div class="sc"></div><span class="tier muted">Local</span><div class="nm"><b>Silja Úlfars</b><span>Running &amp; Sprint</span></div></div>
      <div class="foot"><span class="rate">★ 4.9</span><span class="book">Book →</span></div>
    </div>
    <div class="ccard">
      <div class="pic"><img src="/landing-assets/coach_heimir.jpg" alt="Heimir Hallgrímsson"><div class="sc"></div><span class="tier">Marquee</span><div class="nm"><b>Heimir Hallgrímsson</b><span>Defensive Tactics</span></div></div>
      <div class="foot"><span class="rate">★ 5.0</span><span class="book">Book →</span></div>
    </div>
  </div>
</section>

<!-- FOR COACHES -->
<section class="sec wrap" id="coaches">
  <div class="twocol">
    <div class="visual"><img src="/landing-assets/hp_coaches_visual.png" alt="Coach reviewing performance analytics"></div>
    <div>
      <div class="eyebrow">For Coaches</div>
      <h2>Scale Your Expertise<br>with <span class="lime">Knattspyrna Akademian Logic.</span></h2>
      <p class="desc" style="max-width:460px">Build your performance brand, deliver hybrid and remote programs, and reach athletes globally — from one dashboard.</p>
      <div class="feat2">
        <div class="fcard">
          <div class="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="var(--valur-lime-bright)"/></svg></div>
          <b>Precision Matching</b><p>AI-powered pairing connects athletes with coaches that fit their exact training needs.</p>
        </div>
        <div class="fcard">
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M5 19V5M5 19h14M9 15l3-4 3 2 4-6"/></svg></div>
          <b>Live Performance Analytics</b><p>Track every session metric, progression curve, and KPI in real time.</p>
        </div>
        <div class="fcard">
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M4 7h7v10H4zM13 7h7v10h-7zM11 12h2"/></svg></div>
          <b>Hybrid Coaching</b><p>Combine remote strategy with on-ground execution. Your vision, a local coach's hands.</p>
        </div>
        <div class="fcard">
          <div class="ic"><svg viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <b>Tier-Verified Coaches</b><p>Every coach is credentialed, rated, and placed in a tier — Grassroots to Marquee.</p>
        </div>
      </div>
      <div class="coach-cta">
        <a class="btn btn-primary" href="#start">Join as Coach</a>
        <a class="btn btn-outline" href="#">See How It Works</a>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIAL -->
<section class="quote">
  <div class="qbg"></div>
  <div class="glow"></div>
  <div class="stars">★★★★★</div>
  <blockquote>“Knattspyrna Akademian didn't just find me a coach;<br>it changed how I <span class="lime">understand the game.”</span></blockquote>
  <div class="who"><div class="av"><img src="/landing-assets/hp_coach_agility.png" alt=""></div><div style="text-align:left"><b>Marcus Rashford</b><br><span>Elite Prospect</span></div></div>
</section>

<!-- FOR CLUBS -->
<section class="sec wrap" id="clubs">
  <div class="clubcol">
    <div>
      <div class="eyebrow">For Clubs &amp; Academies</div>
      <h2>Modernise<br>Your Squad.</h2>
      <p class="desc">Give your entire coaching staff access to Knattspyrna Akademian. Performance tracking, coach matching, analytics — built for modern football clubs.</p>
      <div class="avatars">
        <div class="a"><img src="/landing-assets/coach_brazell.jpg" alt="Chris Brazell"></div>
        <div class="a"><img src="/landing-assets/coach_eirikur.jpg" alt="Eiríkur Raphael"></div>
        <div class="a"><img src="/landing-assets/coach_silja.jpg" alt="Silja Úlfars"></div>
        <div class="a"><img src="/landing-assets/coach_heimir.jpg" alt="Heimir Hallgrímsson"></div>
        <span class="more">+24</span>
      </div>
      <ul class="bullets">
        <li><span class="d"></span> Centralised athlete performance tracking</li>
        <li><span class="d"></span> Verified coach hiring through Knattspyrna Akademian Tiers</li>
        <li><span class="d"></span> Hybrid coaching for travelling squads</li>
        <li><span class="d"></span> Analytics dashboard for all coaches &amp; players</li>
      </ul>
      <a class="btn btn-primary" href="#start">Enquire for Clubs →</a>
    </div>
    <div>
      <div class="dashimg">
        <img src="/landing-assets/hp_clubs_dash.png" alt="Knattspyrna Akademian club analytics dashboard">
        <span class="tag">● Live analytics</span>
      </div>
      <div class="clubstats">
        <div class="cstat"><div class="n">32</div><b>Partner Clubs</b><span>Premier League to grassroots</span></div>
        <div class="cstat"><div class="n">94%</div><b>Retention Rate</b><span>Coaches re-subscribing annually</span></div>
        <div class="cstat"><div class="n">3.2×</div><b>Performance Gain</b><span>Measured in 12-week cycles</span></div>
        <div class="cstat"><div class="n">48H</div><b>Coach Match Time</b><span>From signup to first session</span></div>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final" id="start">
  <div class="fbg"></div>
  <div class="glow"></div>
  <div class="eyebrow" style="justify-content:center">Start Today</div>
  <h2>Begin Your<br><span class="lime">Journey.</span></h2>
  <p>Join 2,400+ athletes and coaches already on Knattspyrna Akademian. Your performance transformation starts with a single session.</p>
  <div class="cta">
    <a class="btn btn-primary btn-glow" href="#">Get Started Free</a>
  </div>
</section>

<!-- FOOTER -->
<footer class="wrap">
  <div class="fgrid">
    <div class="fbrand">
      <div class="brand"><b>Knattspyrna Akademian</b></div>
      <p>The performance platform for footballers, coaches, and clubs.</p>
    </div>
    <div class="fcol"><h4>Platform</h4><a href="#athletes">For Athletes</a><a href="#coaches">For Coaches</a><a href="#clubs">For Clubs</a></div>
    <div class="fcol"><h4>Company</h4><a href="#">About</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Press</a></div>
    <div class="fcol"><h4>Legal</h4><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
  </div>
  <div class="fbottom">
    <span>© 2026 Knattspyrna Akademian. All rights reserved.</span>
    <span>Built for the beautiful game.</span>
  </div>
</footer>`;

export function ValurHomepage({ onEnter }: { onEnter: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    // Sticky nav: add .solid once scrolled (mirrors the design-kit script)
    const nav = root.querySelector("nav");
    const onScroll = () => nav && nav.classList.toggle("solid", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // CTAs / coach cards enter the app; in-page section anchors scroll normally
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a.btn, a.login, .ccard, .link-arrow")) {
        e.preventDefault();
        onEnter();
      }
    };
    root.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      root.removeEventListener("click", onClick);
    };
  }, [onEnter]);

  return (
    <div ref={ref} className="valur-home">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}

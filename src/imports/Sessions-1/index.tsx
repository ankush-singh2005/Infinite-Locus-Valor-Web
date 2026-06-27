import svgPaths from "./svg-s1rsm035op";
import imgCoach from "./cd49dc555811a690c3e467d40aa5f748ad72f7f4.png";
import imgTactics from "./391d32cca024e7602053df22cd5478c881f7fde5.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[36px] tracking-[1.8px] uppercase whitespace-nowrap">
        <p className="leading-[36px]">sessions</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Heading />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[16px] py-[24px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[12px] bg-black content-stretch flex flex-col h-[72px] items-start justify-center pb-px relative shrink-0 w-[390px] z-[1]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 top-[54px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">THIS WEEK</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <Heading1 />
    </div>
  );
}

function Coach() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Coach">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[0.44%] max-w-none top-[-0.05%] w-[100.05%]" src={imgCoach} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[118.66px] z-[2]" data-name="Container">
      <Coach />
      <div className="absolute inset-[-604px_-150.5px_604px_150.5px]" data-name="Gradient">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.66 176">
          <path d="M0 0H118.66V176H0V0Z" fill="url(#paint0_linear_106_442)" id="Gradient" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_106_442" x1="-150.5" x2="-31.84" y1="692" y2="692">
              <stop offset="0.3" stopColor="#0E141B" stopOpacity="0.95" />
              <stop offset="1" stopColor="#0E141B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">F2F</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[28px]">ELITE STRIKER CLINIC</p>
        </div>
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[24px]">Coach Marcus Thorne</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">TODAY</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">18:30</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(34,197,94,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">CONFIRMED</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[16px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-full relative shrink-0 w-[237.33px] z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container6 />
        <Overlay />
        <Button />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[176px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function SessionCard1ImminentF2F() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Session Card 1 (Imminent F2F)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Tactics() {
  return (
    <div className="h-[196px] relative w-full" data-name="Tactics">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTactics} />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[118.66px] z-[2]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none rotate-180 w-full">
          <Tactics />
        </div>
      </div>
      <div className="absolute inset-[-681.5px_110.66px_681.5px_-110.66px]" data-name="Gradient">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118.66 160">
          <path d="M0 0H118.66V160H0V0Z" fill="url(#paint0_linear_106_437)" id="Gradient" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_106_437" x1="110.66" x2="229.32" y1="761.5" y2="761.5">
              <stop offset="0.3" stopColor="#0E141B" stopOpacity="0.95" />
              <stop offset="1" stopColor="#0E141B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1f2c47] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[10px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[24px]">ONLINE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[28px]">TACTICAL ANALYSIS</p>
      </div>
      <Background />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[24px]">Analyst Sarah Chen</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.3333">
        <g id="Container">
          <path d={svgPaths.p270cf300} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">THU, 14 OCT</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
        <g id="Container">
          <path d={svgPaths.p8e10ae0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">20:00</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container26 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(245,158,11,0.2)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PENDING</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-px py-[11px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[16px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">VIEW DETAILS</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-full relative shrink-0 w-[237.33px] z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[6px] items-start p-[16px] relative size-full">
        <Container19 />
        <Overlay1 />
        <Button1 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-start relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function SessionCard2Online() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[179px] relative rounded-[12px] shrink-0 w-full" data-name="Session Card 2 (Online)">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container16 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[373px] items-start relative shrink-0 w-full" data-name="Container">
      <SessionCard1ImminentF2F />
      <SessionCard2Online />
    </div>
  );
}

function ThisWeekGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[405px] items-start relative shrink-0 w-full" data-name="This Week Group">
      <Header />
      <Container2 />
    </div>
  );
}

function SectionSessionsContent() {
  return (
    <div className="absolute content-stretch flex flex-col h-[680px] items-start left-[16px] top-[447px] w-[358px]" data-name="Section - Sessions Content">
      <ThisWeekGroup />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">UPCOMING</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
        <Container29 />
        <div className="absolute bg-[#ccf200] bottom-0 h-[2px] left-0 right-0" data-name="Horizontal Divider" />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PAST</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function NavSubTabs() {
  return (
    <div className="bg-black content-stretch flex items-start justify-center pb-px relative shrink-0 w-full" data-name="Nav - Sub Tabs">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function NavSubTabsMargin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Nav - Sub Tabs:margin">
      <NavSubTabs />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#d7ff00] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">ALL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0e1011] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">U-14</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#0e1011] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">U-18</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#0e1011] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">SESSIONS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">SESSION TYPE</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">F2F</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1f2c47] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[13px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">ONLINE</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="bg-[#0e1011] relative rounded-[12px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">Both</p>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[243px]" data-name="Container">
      <BackgroundBorder1 />
      <Background1 />
      <Border />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[361px]">
      <Container31 />
    </div>
  );
}

function SectionSessionTypeSegmented() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[342px]" data-name="Section - Session Type (Segmented)">
      <Heading2 />
      <Frame1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">Period</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="bg-[#d7ff00] relative rounded-[12px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
          <p className="leading-[16px]">THIS WEEK</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="bg-[#0e1011] relative rounded-[12px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">NEXT WEEK</p>
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="bg-[#0e1011] relative rounded-[12px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[13px] py-[5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">MONTH</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[26px] items-start relative shrink-0 w-[243px]" data-name="Container">
      <Border1 />
      <Border2 />
      <Border3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[361px]">
      <Container32 />
    </div>
  );
}

function SectionSessionTypeSegmented1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[342px]" data-name="Section - Session Type (Segmented)">
      <Heading3 />
      <Frame2 />
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[24px] items-start left-[16px] overflow-auto top-[126px] w-[358px]" data-name="Filter Tabs">
      <NavSubTabsMargin />
      <Frame />
      <SectionSessionTypeSegmented />
      <SectionSessionTypeSegmented1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">DASHBOARD</p>
      </div>
    </div>
  );
}

function LinkDashboardActive() {
  return (
    <div className="relative shrink-0" data-name="Link - Dashboard (Active)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container33 />
        <Margin />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
        <g id="Container">
          <path d={svgPaths.p5df3d80} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function LinkSquadsAsPlayers() {
  return (
    <div className="relative shrink-0" data-name="Link - Squads (as 'Players')">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container34 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p11161b00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">COACHES</p>
      </div>
    </div>
  );
}

function LinkCoaches() {
  return (
    <div className="relative shrink-0" data-name="Link - Coaches">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container35 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">SESSIONS</p>
      </div>
    </div>
  );
}

function LinkBookingsAsSessions() {
  return (
    <div className="relative shrink-0" data-name="Link - Bookings (as 'Sessions')">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container36 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PROFILE</p>
      </div>
    </div>
  );
}

function LinkSettingsAsProfile() {
  return (
    <div className="relative shrink-0" data-name="Link - Settings (as 'Profile')">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container37 />
        <Margin4 />
      </div>
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(5,5,5,0.9)] bottom-0 content-stretch flex gap-[22.7px] h-[91px] items-center left-0 pb-[12px] pl-[27.34px] pr-[27.36px] pt-[13px] w-[390px]" data-name="Bottom Navigation">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <LinkDashboardActive />
      <LinkSquadsAsPlayers />
      <LinkCoaches />
      <LinkBookingsAsSessions />
      <LinkSettingsAsProfile />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_15px_rgba(215,255,0,0.15)] flex h-[48px] items-center justify-center left-[16px] py-[24px] right-[16px] rounded-[12px] top-[941px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[28px]">REQUEST SESSION</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[22px] relative shrink-0 w-[109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] left-0 not-italic text-[17px] text-white top-[0.5px] whitespace-nowrap">9:41</p>
      </div>
    </div>
  );
}

function Container39() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_58_625)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p198d0700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_58_625">
            <rect fill="white" height="12.2969" width="19.1953" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[17.094px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0938 12.2969">
        <g clipPath="url(#clip0_58_619)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p127ece80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_58_619">
            <rect fill="white" height="12.2969" width="17.0938" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.297px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2969 13">
        <g clipPath="url(#clip0_86_684)" id="Icon">
          <path d={svgPaths.p2ecc2040} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p1e782900} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p263696c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_86_684">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-[109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center justify-end relative size-full">
        <Icon />
        <Icon1 />
        <Icon2 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container39 />
      <Container40 />
    </div>
  );
}

export default function Sessions() {
  return (
    <div className="bg-black relative size-full" data-name="SESSIONS">
      <HtmlBody />
      <SectionSessionsContent />
      <FilterTabs />
      <BottomNavigation />
      <Button8 />
      <Container38 />
    </div>
  );
}
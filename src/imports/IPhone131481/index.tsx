import svgPaths from "./svg-4gfpglcetd";
import imgCinematicBackground from "./7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgCoachPath from "./f3204f6d6a925d8486c9347e863e616d771db6a0.png";
import imgPlayerPath from "./d31700a31bd0f699783da43b640821d39441601d.png";
import imgClubPath from "./fbf8693cb3f77e255e6376038de9f1309e354a19.png";

function CinematicBackground() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Cinematic background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-5.31%] max-w-none top-0 w-[110.62%]" src={imgCinematicBackground} />
      </div>
    </div>
  );
}

function BackgroundLayer() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center overflow-clip" data-name="Background Layer">
      <CinematicBackground />
      <div className="absolute bg-gradient-to-t from-[#0e141b] inset-0 to-[rgba(14,20,27,0.4)] via-1/2 via-[rgba(14,20,27,0.8)]" data-name="Gradient" />
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute backdrop-blur-[4px] bg-[rgba(0,0,0,0)] content-stretch flex flex-col h-[54px] items-start left-0 pt-[12px] px-[24px] top-0 w-[390px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11px]" data-name="Heading 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
        <g id="Heading 1">
          <path d={svgPaths.pced3100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(14,20,27,0.16)] content-stretch flex h-[58px] items-center justify-between pl-[16px] pr-[156.51px] relative shrink-0 w-[390px]" data-name="Header - TopAppBar">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[145px] justify-center leading-[0] not-italic relative shrink-0 text-[#d4ff00] text-[64px] tracking-[-1.2px] uppercase w-full">
        <p className="leading-[60px] mb-0">CHOOSE YOUR</p>
        <p className="leading-[60px]">PATH</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[63px] items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[24px]">Select your entry point to the elite football ecosystem.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Heading1 />
      <Container />
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div className="content-stretch flex flex-col h-[196px] items-start pb-[24px] relative shrink-0 w-full" data-name="Header Section:margin">
      <HeaderSection />
    </div>
  );
}

function Frame4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-1/2 top-0">
      <HeaderTopAppBar />
      <HeaderSectionMargin />
    </div>
  );
}

function CoachPath() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Coach Path">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCoachPath} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <CoachPath />
        <div className="absolute bg-gradient-to-b from-[rgba(5,5,5,0.4)] inset-0 rounded-[12px] to-[rgba(5,5,5,0.9)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">COACH</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] opacity-0 relative shrink-0 w-[24.02px]" data-name="Container">
      <div className="absolute flex h-[28px] items-center justify-center left-0 top-[-2px] w-[24.02px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[28px] relative w-[24.02px]" data-name="Component 1">
            <div className="absolute inset-[15.28%_9.52%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4444 19.4444">
                <path d={svgPaths.p9a26580} fill="var(--fill-0, #CCF200)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[232.73px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[255px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Margin />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-[263px]">
        <p className="leading-[20px]">Analyze performance, manage sessions, and lead your team to victory.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[240px] relative shrink-0 w-[240px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="Component 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function PlayerPath() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Player Path">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPlayerPath} />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <PlayerPath />
        <div className="absolute bg-gradient-to-b from-[rgba(5,5,5,0.4)] inset-0 rounded-[12px] to-[rgba(5,5,5,0.9)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container10() {
  return <div className="h-[28px] relative shrink-0 w-[58px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="h-[24px] opacity-0 relative shrink-0 w-[24.02px]" data-name="Container">
      <div className="absolute flex h-[28px] items-center justify-center left-0 top-[-2px] w-[24.02px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[28px] relative w-[24.02px]" data-name="Component 1">
            <div className="absolute inset-[15.28%_9.52%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4444 19.4444">
                <path d={svgPaths.p9a26580} fill="var(--fill-0, #CCF200)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[225.68px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">PLAYER</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-[min-content]">
        <p className="leading-[20px]">Track stats, access training plans, and elevate your game to the pro level.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[76px] items-start max-w-[240px] relative shrink-0 w-[240px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Margin1 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="Component 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ClubPath() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Club Path">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClubPath} />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute inset-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <ClubPath />
        <div className="absolute bg-gradient-to-b from-[rgba(5,5,5,0.4)] inset-0 rounded-[12px] to-[rgba(5,5,5,0.9)]" data-name="Gradient" />
      </div>
    </div>
  );
}

function Container16() {
  return <div className="h-[28px] relative shrink-0 w-[39px]" data-name="Container" />;
}

function Container17() {
  return (
    <div className="h-[24px] opacity-0 relative shrink-0 w-[24.02px]" data-name="Container">
      <div className="absolute flex h-[28px] items-center justify-center left-0 top-[-2px] w-[24.02px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[28px] relative w-[24.02px]" data-name="Component 1">
            <div className="absolute inset-[15.28%_9.52%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4444 19.4444">
                <path d={svgPaths.p9a26580} fill="var(--fill-0, #CCF200)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">CLUB</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-[min-content]">
        <p className="leading-[20px]">Manage rosters, coordinate logistics, and build a lasting football legacy.</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[76px] items-start max-w-[240px] relative shrink-0 w-[240px]" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end p-[24px] relative size-full">
          <Margin2 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="Component 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container13 />
        <Container14 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function RoleOptionsGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[16px] right-[16px] top-[254px]" data-name="Role Options Grid">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p8cbad20} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[0px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[12px]">
          <span className="leading-[24px] text-white">Already have an account?</span>
          <span className="leading-[24px] text-[#c5c9ac]">{` `}</span>
          <span className="leading-[24px] text-[#ccf200]">Sign In</span>
        </p>
      </div>
    </div>
  );
}

function FooterAction() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer Action">
      <div className="bg-[#d7ff00] content-stretch flex h-[48px] items-center justify-center py-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Button/Variant3">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CONTINUE</p>
        </div>
        <Container19 />
      </div>
      <Container20 />
    </div>
  );
}

function FooterActionMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] pb-[24px] pt-[48px] right-[16px] top-[719px]" data-name="Footer Action:margin">
      <FooterAction />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[1078px] left-0 right-0 top-[54px]" data-name="Main">
      <Frame4 />
      <RoleOptionsGrid />
      <FooterActionMargin />
    </div>
  );
}

function StickyBottomCta() {
  return <div className="absolute bottom-0 h-[96px] left-0 right-0" data-name="Sticky Bottom CTA" />;
}

function HtmlBody() {
  return (
    <div className="absolute h-[1132px] left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(14, 20, 27) 0%, rgb(14, 20, 27) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <BackgroundLayer />
      <StatusBarIPhone />
      <Main />
      <StickyBottomCta />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 13 & 14 - 81">
      <HtmlBody />
    </div>
  );
}
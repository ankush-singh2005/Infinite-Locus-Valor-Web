import svgPaths from "./svg-bqdv8516oo";
import imgCinematicBackground from "./7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgGrassrootsCoaching from "./ec4d385c9140280e89272fb4a6187fc66a84eb83.png";
import imgLocalCoaching from "./cebde80a090439f562e4eaa6adfb4c16bb584b3c.png";
import imgProCoaching from "./eefcd4a79dbd109148d3e5de52012d56e8ba4ae4.png";

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

function Container1() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_58_320)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1464d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_58_320">
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
        <g clipPath="url(#clip0_58_323)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.pa4c0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_58_323">
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
        <g clipPath="url(#clip0_58_315)" id="Icon">
          <path d={svgPaths.p225fba80} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p27de000} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p24c92a80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_58_315">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
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

function Container() {
  return (
    <div className="content-stretch flex h-[54px] items-start pt-[12px] px-[24px] relative shrink-0" data-name="Container">
      <Text />
      <Container1 />
      <Container2 />
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
    <div className="backdrop-blur-[6px] bg-[rgba(14,20,27,0.16)] content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-[374px]" data-name="Header - TopAppBar">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[368px]" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[135px] justify-center leading-[0] not-italic relative shrink-0 text-[#d4ff00] text-[64px] tracking-[-2px] uppercase w-[358px] whitespace-pre-wrap">
        <p className="leading-[60px] mb-0">{`SELECT YOUR `}</p>
        <p className="leading-[60px]">TIER</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Heading1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[13px] text-white tracking-[1px] uppercase w-[min-content]">
        <p className="leading-[16px]">{`COACH SETUP `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[63px] items-start opacity-80 pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[24px]">Choose the level of tools that fits your coaching impact.</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Header Section">
      <Frame1 />
      <Container4 />
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header Section:margin">
      <HeaderSection />
    </div>
  );
}

function GrassrootsCoaching() {
  return (
    <div className="absolute inset-[2px]" data-name="Grassroots Coaching">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[183.09%] left-[-0.02%] max-w-none top-[0.32%] w-full" src={imgGrassrootsCoaching} />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">GRASSROOTS</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16.25px] mb-0">Ideal for starting your coaching</p>
        <p className="leading-[16.25px]">journey.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[192px]" data-name="Container">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function GrassrootsLabel() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Grassroots → Label">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <GrassrootsCoaching />
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.9)] inset-[2px] to-[rgba(0,0,0,0.4)]" data-name="Gradient" />
        <Container5 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_20px_0px_rgba(204,242,0,0.2)]" />
    </div>
  );
}

function LocalCoaching() {
  return (
    <div className="absolute inset-px" data-name="Local Coaching">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[180.78%] left-0 max-w-none top-[-40.39%] w-full" src={imgLocalCoaching} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">LOCAL</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16.25px] mb-0">Professional tools for</p>
        <p className="leading-[16.25px]">community leaders.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[16px] top-1/2 w-[130px]" data-name="Container">
      <Heading3 />
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function LocalLabel() {
  return (
    <div className="h-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Local → Label">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <LocalCoaching />
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.9)] inset-px to-[rgba(0,0,0,0.4)]" data-name="Gradient" />
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(69,73,50,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ProCoaching() {
  return (
    <div className="absolute inset-px" data-name="Pro Coaching">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[180.78%] left-0 max-w-none top-[-18.98%] w-full" src={imgProCoaching} />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">PRO</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[2px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[9px] tracking-[0.45px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px]">RECOMMENDED</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Background />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full" data-name="Margin">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16.25px] mb-0">Advanced analytics and team</p>
        <p className="leading-[16.25px]">management.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181px]" data-name="Container">
      <Margin />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function ProLabel() {
  return (
    <div className="h-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Pro → Label">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ProCoaching />
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.9)] inset-px to-[rgba(0,0,0,0.4)]" data-name="Gradient" />
        <Container11 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(69,73,50,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function MarqueeCoaching() {
  return (
    <div className="absolute inset-px" data-name="Marquee Coaching">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[702.13%] left-0 max-w-none top-[-301.06%] w-full" src={imgCinematicBackground} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">MARQUEE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[200px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16.25px] mb-0">Elite features for global</p>
        <p className="leading-[16.25px]">performance.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142px]" data-name="Container">
      <Heading5 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function MarqueeLabel() {
  return (
    <div className="h-[112px] relative rounded-[12px] shrink-0 w-full" data-name="Marquee → Label">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <MarqueeCoaching />
        <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.9)] inset-px to-[rgba(0,0,0,0.4)]" data-name="Gradient" />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(69,73,50,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TierSelectionList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Tier Selection List">
      <GrassrootsLabel />
      <LocalLabel />
      <ProLabel />
      <MarqueeLabel />
    </div>
  );
}

function FooterSupportText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Footer Support Text">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[24px]">Not sure? Pick Grassroots and update later.</p>
      </div>
    </div>
  );
}

function FooterSupportTextMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] pt-[24px] relative shrink-0 w-full" data-name="Footer Support Text:margin">
      <FooterSupportText />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[936px] max-w-[512px] min-h-[936px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] min-h-[inherit] pb-[144px] px-[16px] relative size-full">
        <HeaderTopAppBar />
        <HeaderSectionMargin />
        <TierSelectionList />
        <FooterSupportTextMargin />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col h-[1076px] items-start pb-[1026px] relative shrink-0 w-[390px]">
      <Main />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[1130px] items-start left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <BackgroundLayer />
      <Container />
      <Frame />
    </div>
  );
}

function Container18() {
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

function Container19() {
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
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[23px] top-[911px] w-[358px]" data-name="Footer Action">
      <div className="bg-[#d7ff00] content-stretch flex h-[48px] items-center justify-center py-[24px] relative rounded-[12px] shrink-0 w-full" data-name="Button/Variant3">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">CONTINUE</p>
        </div>
        <Container18 />
      </div>
      <Container19 />
    </div>
  );
}

export default function SelectYourTier() {
  return (
    <div className="bg-black relative size-full" data-name="select your tier">
      <HtmlBody />
      <FooterAction />
    </div>
  );
}
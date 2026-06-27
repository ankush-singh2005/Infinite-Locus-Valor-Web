import svgPaths from "./svg-7c1uce5wx1";
import imgAthletePortrait from "./ce35f373a61cc8c5f852f46edb9a595de7d3d1f4.png";
import imgMapLocation from "./4e5488901a33858b923a894f47a979abc69ff217.png";

function Text() {
  return (
    <div className="flex-[109_0_0] h-[22px] min-w-px relative" data-name="Text">
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
        <g clipPath="url(#clip0_5_266)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1464d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_266">
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
        <g clipPath="url(#clip0_5_269)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.pa4c0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_269">
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
        <g clipPath="url(#clip0_5_278)" id="Icon">
          <path d={svgPaths.p2ecc2040} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p1e782900} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p263696c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_5_278">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[109_0_0] min-w-px relative" data-name="Container">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">Session details</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function AthletePortrait() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Athlete portrait">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[139.06%] left-[-0.05%] max-w-none top-[-0.04%] w-full" src={imgAthletePortrait} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1fe7b600} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFloatingMessageIcon() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[48px] top-[16px]" data-name="Button - Floating Message Icon">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[36px]">Marcus Rashford</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="h-[9px] relative shrink-0 w-[8px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
          <path d={svgPaths.p2b058880} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="leading-[15px]">ELITE</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <Frame1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Background />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Sessions together: 12</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Last session: 4 days ago</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[16px] items-start opacity-70 relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function PlayerIdentity() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex flex-col gap-[4px] items-start left-[16px] w-[304px]" data-name="Player Identity">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[256px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <AthletePortrait />
        <div className="absolute bg-gradient-to-t from-[#050505] inset-0 to-[rgba(5,5,5,0)] via-1/2 via-[rgba(5,5,5,0)]" data-name="Gradient" />
        <ButtonFloatingMessageIcon />
        <PlayerIdentity />
      </div>
    </div>
  );
}

function HeroSectionPlayerCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Hero Section: Player Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">WED 18 OCT • 09:00 AM — 10:00 AM</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#d7ff00] h-[24px] relative rounded-[12px] shrink-0 w-[50px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[13px] not-italic text-[13px] text-black top-[11.5px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">F2F</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">60 MIN • ELITE STRIKER TRAINING • £150</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[360px]" data-name="Container">
      <Heading2 />
      <Container12 />
    </div>
  );
}

function SectionSessionInfoBlock() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Section - Session Info Block">
      <Container11 />
    </div>
  );
}

function MapLocation() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Map location">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[222.5%] left-0 max-w-none top-[-61.25%] w-full" src={imgMapLocation} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[160px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <MapLocation />
        <div className="absolute bg-[rgba(14,20,27,0.3)] inset-0" data-name="Overlay" />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[201px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Carrington Training Complex</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[18px]">Manchester, M31 4BH</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[21.67px] pr-[21.69px] py-[9px] relative rounded-[8px] shrink-0 w-[134px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container20 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container16 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function SectionLocationCardF2FCondition() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Location Card (F2F Condition)">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container14 />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">COACH NOTES</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] w-full">
          <p className="leading-[20px]">Focus on explosive first touch and finishing under pressure.</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#0a0a0a] h-[96px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[13px] relative size-full">
          <Container22 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CoachNotesInput() {
  return (
    <div className="backdrop-blur-[10px] content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-px relative rounded-[12px] shrink-0 w-full" data-name="Coach Notes Input">
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Margin />
      <Textarea />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">PAST INSIGHTS</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
          <p className="leading-[16.5px]">14 OCT SESSION</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[294px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] w-full">
          <p className="leading-[19.25px] mb-0">{`"Noticed slight fatigue in the 2nd quadrant.`}</p>
          <p className="leading-[19.25px]">{`Lateral movement sharp but recovery breath work needs focus."`}</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative shrink-0" data-name="VerticalBorder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function PastInsightsCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[#0a0a0a] h-[113px] relative rounded-[12px] shrink-0 w-full" data-name="Past Insights Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <VerticalBorder />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[358px]">
      <Heading4 />
      <PastInsightsCard />
    </div>
  );
}

function SectionBentoGridNotesInsights() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Bento Grid: Notes & Insights">
      <CoachNotesInput />
      <Frame />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[672px] min-h-[1281px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[18px] items-start max-w-[inherit] min-h-[inherit] pb-[180px] px-[16px] relative size-full">
        <HeroSectionPlayerCard />
        <SectionSessionInfoBlock />
        <SectionLocationCardF2FCondition />
        <SectionBentoGridNotesInsights />
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p5ff8500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] h-[48px] items-center justify-center min-w-px px-px py-[17px] relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <X />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">CANCEL</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Check">
          <path d={svgPaths.p27b90280} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ccf200] content-stretch drop-shadow-[0px_0px_10px_rgba(204,242,0,0.2)] flex flex-[1_0_0] gap-[4px] h-[48px] items-center justify-center min-w-px py-[16px] relative rounded-[12px]" data-name="Button">
      <Check />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[16px]">ACCEPT</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CalendarBlank">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CalendarBlank">
          <path d={svgPaths.p332478f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-px py-[17px] relative size-full">
        <CalendarBlank />
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
          <p className="leading-[16px]">RESCHEDULE</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] flex-[1_0_0] max-w-[672px] min-w-px relative rounded-[16px] self-stretch" data-name="Overlay+Border+OverlayBlur">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center max-w-[inherit] py-[12px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
          <Frame2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function StickyBottomConfirmationBar() {
  return (
    <div className="absolute bottom-[224px] content-stretch flex h-[128px] items-start justify-center left-0 px-[16px] right-0" data-name="Sticky Bottom Confirmation Bar">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute bottom-[-109px] content-stretch flex flex-col h-[1438px] items-start right-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Container />
      <Container3 />
      <Main />
      <StickyBottomConfirmationBar />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Sessions</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.975px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.975 20">
        <g id="Container">
          <path d={svgPaths.p2114d300} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Offer</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p378800} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Learn</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container25() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function BottomNavigationActiveSharedComponentMockup() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black bottom-0 content-stretch flex flex-col items-start left-0 pb-[33px] pt-[17px] px-[17px] right-0" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

export default function Sessions() {
  return (
    <div className="bg-white relative size-full" data-name="SESSIONS">
      <HtmlBody />
      <BottomNavigationActiveSharedComponentMockup />
    </div>
  );
}
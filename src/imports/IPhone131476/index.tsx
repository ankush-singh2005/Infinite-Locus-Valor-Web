import svgPaths from "./svg-fivdpg3end";
import imgAthleticPerformanceCoachPortrait from "./48d6bae6542cecb646cc87140625fae1cef12189.png";
import imgFemaleStrengthAndConditioningCoach from "./931d1b55e47b0162c8fe22a0039f24dd5ce4fcf0.png";
import imgContainer from "./51e6127a161e043d1eaa8155ff1c106e8699e402.png";
import imgPersonalTrainerInAGym from "./f0f43417a27bb9153d7e508805e838b6d5b36920.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[36px] tracking-[1.8px] uppercase whitespace-nowrap">
        <p className="leading-[36px]">COACHES</p>
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
    <div className="backdrop-blur-[12px] bg-black content-stretch flex flex-col h-[72px] items-start justify-center pb-px relative shrink-0 w-[390px] z-[3]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search coach or specialty</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#1a1a1a] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[17px] py-[15.5px] relative size-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[31.25%] content-stretch flex flex-col items-start left-[12px] top-[37.5%]" data-name="Container">
      <div className="relative shrink-0 size-[14.57px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5703 14.5703">
          <path d={svgPaths.p326c200} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Input />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7660280} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p737f060} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container8 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Button />
      <Button1 />
    </div>
  );
}

function Button2() {
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

function Button3() {
  return (
    <div className="bg-[#0e1011] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">f2f</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0e1011] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">online</p>
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
          <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
            <p className="leading-[16px]">both</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-auto py-[16px] relative shrink-0 w-full" data-name="Filter Tabs">
      <Frame4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
          <p className="leading-[15px]">All</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[8.148px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.14844 8.14844">
        <g id="Container">
          <path d={svgPaths.p1b67a800} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[#0e1011] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
          <p className="leading-[15px]">ONLINE</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[8.148px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.14844 8.14844">
        <g id="Container">
          <path d={svgPaths.p1b67a800} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[#0e1011] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
          <p>
            <span className="leading-[15px]">{`PRICE < `}</span>
            <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">£</span>
            <span className="leading-[15px]">500</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[8.148px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.14844 8.14844">
        <g id="Container">
          <path d={svgPaths.p1b67a800} fill="var(--fill-0, #F1F5F9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[#0e1011] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
          <p className="leading-[15px]">4.5+ ★</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[8.148px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.14844 8.14844">
        <g id="Container">
          <path d={svgPaths.p1b67a800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[#0e1011] content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[10px] text-center uppercase whitespace-nowrap">
        <p className="leading-[15px]">CLEAR ALL</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-auto relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
      <OverlayBorder2 />
      <OverlayBorder3 />
      <ButtonMargin />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FilterTabs />
      <Container9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[12px] relative size-full">
        <Container3 />
        <Frame5 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.95)] content-stretch flex flex-col items-start pb-px relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">24 RESULTS FOUND</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Margin />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[9px] relative shrink-0 w-[9.269px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.26941 8.99997">
        <g id="Group 5">
          <path d={svgPaths.p121f9900} fill="var(--fill-0, black)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3493a580} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
          <path d={svgPaths.p182a1880} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] h-[7px] items-center relative shrink-0 w-[56px]">
      <Group />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">
        <p className="leading-[15px]">MARQUEE</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#fbbf24] content-stretch flex flex-col h-[18px] items-start left-[17px] pb-[6px] pl-[8px] pr-[15px] pt-[5px] rounded-[12px] top-[19px] w-[79px]">
      <Frame />
    </div>
  );
}

function AthleticPerformanceCoachPortrait() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Athletic performance coach portrait">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAthleticPerformanceCoachPortrait} />
      <Frame3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18.328px] relative shrink-0 w-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 18.3281">
        <g id="Container">
          <path d={svgPaths.p399fbb00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container21 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[11.074px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 11.0742">
        <g id="Container">
          <path d={svgPaths.pee52d80} fill="var(--fill-0, #CCFF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">4.9 (124 REVIEWS)</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white uppercase whitespace-nowrap">
        <p className="leading-[30px]">Bjarni Mark</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[145.838px]" data-name="Container">
      <Container24 />
      <Heading1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-right uppercase whitespace-nowrap">
        <p className="leading-[15px]">STARTING FROM</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-end relative shrink-0" data-name="Container">
      <Container28 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[24px]">100,000 ISK</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AthleticPerformanceCoachPortrait />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Button7 />
        <Container22 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.pb30900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0e141b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PRO</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col items-start left-0 px-[6px] py-[2px] rounded-[12px] top-1/2" data-name="Background">
      <Frame1 />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="absolute bg-[rgba(37,99,235,0.2)] content-stretch flex flex-col items-start left-[55px] px-[12px] py-[4px] rounded-[12px] top-px" data-name="Overlay+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">ONLINE</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[27px] relative shrink-0 w-[128px]">
      <Background />
      <OverlayBorder4 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[9.984px] relative shrink-0 w-[6.984px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.98438 9.98438">
        <g id="Container">
          <path d={svgPaths.p77b6100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <Container31 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px]">2.3 KM AWAY</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Frame6 />
      <Overlay />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p26b3e2c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container30 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container20 />
        <Container29 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function FemaleStrengthAndConditioningCoach() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Female strength and conditioning coach">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[139.06%] left-0 max-w-none top-[-19.53%] w-full" src={imgFemaleStrengthAndConditioningCoach} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[18.328px] relative shrink-0 w-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 18.3281">
        <g id="Container">
          <path d={svgPaths.p399fbb00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container34 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[11.074px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 11.0742">
        <g id="Container">
          <path d={svgPaths.pee52d80} fill="var(--fill-0, #CCFF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">4.8 (89 REVIEWS)</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white uppercase whitespace-nowrap">
        <p className="leading-[30px]">Silja Úlfarsdóttir</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[184px]" data-name="Container">
      <Container37 />
      <Heading2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-right uppercase whitespace-nowrap">
        <p className="leading-[15px]">STARTING FROM</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-end relative shrink-0" data-name="Container">
      <Container41 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[24px]">200,000 ISK</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container36 />
      <Container40 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <FemaleStrengthAndConditioningCoach />
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
        <Button8 />
        <Container35 />
      </div>
    </div>
  );
}

function Frame2() {
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

function Background1() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Background">
      <Frame2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p26b3e2c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Background1 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container33 />
        <Container42 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function PersonalTrainerInAGym() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Personal trainer in a gym">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[139.06%] left-0 max-w-none top-[-19.53%] w-full" src={imgPersonalTrainerInAGym} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.2)] inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18.328px] relative shrink-0 w-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 18.3281">
        <g id="Container">
          <path d={svgPaths.p399fbb00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container45 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[11.074px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 11.0742">
        <g id="Container">
          <path d={svgPaths.pee52d80} fill="var(--fill-0, #CCFF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">4.5 (42 REVIEWS)</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white uppercase whitespace-nowrap">
        <p className="leading-[30px]">Kirian Alvira Costa</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[190px]" data-name="Container">
      <Container48 />
      <Heading3 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] text-right uppercase whitespace-nowrap">
        <p className="leading-[15px]">STARTING FROM</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-end relative shrink-0" data-name="Container">
      <Container52 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[24px]">200,000 ISK</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container47 />
      <Container51 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <PersonalTrainerInAGym />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Button9 />
        <Container46 />
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

function Container55() {
  return (
    <div className="h-[9.984px] relative shrink-0 w-[6.984px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.98438 9.98438">
        <g id="Container">
          <path d={svgPaths.p77b6100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <Container55 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px]">0.8 KM AWAY</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Overlay1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 size-[16.031px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 16.0312">
        <g id="Container">
          <path d={svgPaths.p26b3e2c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container54 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container44 />
        <Container53 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1080px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[80px] pt-[16px] px-[16px] relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 top-[54px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
      <Header />
      <Main />
    </div>
  );
}

function Container57() {
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

function Margin1() {
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
        <Container57 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container58() {
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

function Margin2() {
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
        <Container58 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p11161b00} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">COACHES</p>
      </div>
    </div>
  );
}

function LinkCoaches() {
  return (
    <div className="relative shrink-0" data-name="Link - Coaches">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container59 />
        <Margin3 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">SESSIONS</p>
      </div>
    </div>
  );
}

function LinkBookingsAsSessions() {
  return (
    <div className="relative shrink-0" data-name="Link - Bookings (as 'Sessions')">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container60 />
        <Margin4 />
      </div>
    </div>
  );
}

function Container61() {
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

function Margin5() {
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
        <Container61 />
        <Margin5 />
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

function Text() {
  return (
    <div className="flex-[109_0_0] h-[22px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] left-0 not-italic text-[17px] text-white top-[0.5px] whitespace-nowrap">9:41</p>
      </div>
    </div>
  );
}

function Container63() {
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

function Container64() {
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

function Container62() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container63 />
      <Container64 />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-black relative size-full" data-name="iPhone 13 & 14 - 76">
      <HtmlBody />
      <BottomNavigation />
      <Container62 />
    </div>
  );
}
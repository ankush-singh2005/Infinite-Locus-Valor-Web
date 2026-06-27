import svgPaths from "./svg-2cmjke31gf";
import imgHero from "./f91fc7a594971450625823468fac193885fa23aa.png";
import imgPhoto from "./4fa2aeea2ef50804d0c675ba1b5da335d37b8176.png";

function Frame() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_38_514)" id="Frame">
          <path d={svgPaths.p3d442b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p263cd400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p24db2900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p11c519c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_38_514">
            <rect fill="white" height="12" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[26px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 12">
        <g id="Frame">
          <path d={svgPaths.p3089400} id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.4" />
          <path d={svgPaths.p15be6000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1bfed980} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0" data-name="icons">
      <Frame />
      <Frame1 />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="StatusBar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pt-[18px] px-[26px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">9:41</p>
          <Icons />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d="M14 4L7 11L14 18" id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="l">
      <Frame2 />
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.5px] whitespace-nowrap">LECTURE DETAIL</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.pa40f800} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.8" />
          <path d={svgPaths.p35ec4a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.8" />
          <path d={svgPaths.paa87380} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="1.8" />
          <g id="Vector_4">
            <path d="M7 10L15 6ZM7 12L15 16Z" fill="var(--fill-0, black)" />
            <path d="M7 10L15 6M7 12L15 16" stroke="var(--stroke-0, white)" strokeWidth="1.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Header - Top AppBar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] pt-[8px] px-[20px] relative size-full">
          <L />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Hero1() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[300px] left-0 opacity-50 top-0 w-[390px]" data-name="Hero" />;
}

function Tag() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch flex items-start left-[22px] overflow-clip px-[12px] py-[7px] rounded-[6px] top-[216px]" data-name="tag">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-black tracking-[0.5px] whitespace-nowrap">{`NUTRITION & POWER`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame">
          <path d={svgPaths.p2f9adf80} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.5" />
          <g id="Vector_2">
            <path d={svgPaths.p2690d400} fill="var(--fill-0, black)" />
            <path d={svgPaths.p42a6520} stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Cal() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="cal">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px] whitespace-nowrap">OCT 24, 2023</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_38_710)" id="Frame">
          <path d={svgPaths.p160b9340} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.5" />
          <g id="Vector_2">
            <path d="M7.5 4V7.5L10 9.5" fill="var(--fill-0, black)" />
            <path d="M7.5 4V7.5L10 9.5" stroke="var(--stroke-0, #D7FF00)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_38_710">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Clk() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="clk">
      <Frame5 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white tracking-[0.3px] whitespace-nowrap">10:00 AM - 11:30 AM</p>
    </div>
  );
}

function Meta() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[22px] overflow-clip top-[257px]" data-name="meta">
      <Cal />
      <Clk />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip top-0 w-[390px]" data-name="Hero">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero} />
      <Hero1 />
      <Tag />
      <div className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[0] left-[22px] not-italic right-[22px] text-[48px] text-white top-[34px]">
        <p className="leading-[42px] mb-0">Optimizing Performance</p>
        <p className="leading-[42px] mb-0">Nutrition for</p>
        <p className="leading-[42px]">Peak Power</p>
      </div>
      <Meta />
    </div>
  );
}

function SecAboutTheSeminar() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="sec-ABOUT THE SEMINAR">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">ABOUT THE SEMINAR</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 overflow-clip pb-[8px] pt-[28px] px-[22px] right-0 top-[300px]" data-name="About">
      <SecAboutTheSeminar />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#94999e] text-[14px] w-[min-content]">Deep dive into the science of fueling athletes. This seminar covers pre-match loading, recovery metabolism, and hydration protocols for high-intensity play. Learn how to transform nutritional strategy into a competitive advantage on the field.</p>
    </div>
  );
}

function Photo() {
  return (
    <div className="h-[200px] relative shrink-0 w-full" data-name="photo">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto} />
    </div>
  );
}

function Speaker() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-name="Speaker">
      <Photo />
    </div>
  );
}

function SpeakerWrap() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[8px] pt-[24px] px-[22px] right-0 top-[490px]" data-name="SpeakerWrap">
      <Speaker />
    </div>
  );
}

function SecAgenda() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="sec-AGENDA">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">AGENDA</p>
      </div>
    </div>
  );
}

function Ag() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[14px] shrink-0 w-full" data-name="ag">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between not-italic p-[18px] relative size-full">
          <p className="leading-[18px] relative shrink-0 text-[#d7ff00] text-[13px] whitespace-nowrap">{`10:00 - 10:30 AM `}</p>
          <p className="leading-[21px] relative shrink-0 text-[16px] text-white w-[180px]">Macronutrient Loading</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Ag1() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[14px] shrink-0 w-full" data-name="ag">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Inter:Bold',sans-serif] font-bold items-center justify-between not-italic p-[18px] relative size-full">
          <p className="leading-[18px] relative shrink-0 text-[#d7ff00] text-[13px] whitespace-nowrap">10:30 - 11:00 AM</p>
          <p className="leading-[21px] relative shrink-0 text-[16px] text-white w-[180px]">{`Hydration & Electrolyte Balance`}</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Ag2() {
  return (
    <div className="bg-[#0e0f11] h-[57px] relative rounded-[14px] shrink-0 w-full" data-name="ag">
      <div className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold not-italic overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute leading-[18px] left-[18px] text-[#d7ff00] text-[13px] top-[19.5px] whitespace-nowrap">11:00 - 11:30 AM</p>
        <p className="absolute leading-[21px] left-[148px] text-[16px] text-white top-[18px] w-[180px]">{`Q&A Session`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Agenda() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 overflow-clip pb-[8px] pt-[28px] px-[22px] right-0 top-[722px]" data-name="Agenda">
      <SecAgenda />
      <Ag />
      <Ag1 />
      <Ag2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p18299b00} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.6" />
          <path d={svgPaths.p14196080} id="Vector_2" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Pin() {
  return (
    <div className="bg-[#17211a] content-stretch flex items-start overflow-clip p-[10px] relative rounded-[10px] shrink-0" data-name="pin">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">
          <path d="M11 9V1H3M11 1L4 8" id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Vm() {
  return (
    <div className="content-stretch flex gap-[5px] items-center overflow-clip pt-[2px] relative shrink-0" data-name="vm">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d7ff00] text-[13px] whitespace-nowrap">View Map</p>
      <Frame7 />
    </div>
  );
}

function FmtTxt() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative self-stretch" data-name="fmtTxt">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#94999e] text-[11px] tracking-[0.8px] whitespace-nowrap">FORMAT</p>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">In-person</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94999e] text-[13px] whitespace-nowrap">123 Stadium Way, Reykjavik</p>
      <Vm />
    </div>
  );
}

function Fmt() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="fmt">
      <Pin />
      <FmtTxt />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#292e33] h-px relative shrink-0 w-full" data-name="divider" />;
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.pc173880} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.5" />
          <path d={svgPaths.p24661380} id="Vector_2" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.5" />
          <path d={svgPaths.p38d072c0} id="Vector_3" stroke="var(--stroke-0, #D7FF00)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Grp() {
  return (
    <div className="bg-[#17211a] content-stretch flex items-start overflow-clip p-[10px] relative rounded-[10px] shrink-0" data-name="grp">
      <Frame8 />
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#1a1f24] relative rounded-[20px] shrink-0" data-name="chip">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ccd1d6] text-[13px] whitespace-nowrap">PLAYERS</p>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#1a1f24] relative rounded-[20px] shrink-0" data-name="chip">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ccd1d6] text-[13px] whitespace-nowrap">COACHES</p>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#1a1f24] relative rounded-[20px] shrink-0" data-name="chip">
      <div className="content-stretch flex items-start overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ccd1d6] text-[13px] whitespace-nowrap">PARENTS</p>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Chips() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="chips">
      <Chip />
      <Chip1 />
      <Chip2 />
    </div>
  );
}

function WhoTxt() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-w-px overflow-clip relative self-stretch" data-name="whoTxt">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#94999e] text-[11px] tracking-[0.8px] whitespace-nowrap">{`WHO IT'S FOR`}</p>
      <Chips />
    </div>
  );
}

function Who() {
  return (
    <div className="content-stretch flex gap-[14px] items-start overflow-clip relative shrink-0 w-full" data-name="who">
      <Grp />
      <WhoTxt />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[18px] shrink-0 w-full" data-name="InfoCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start p-[20px] relative size-full">
          <Fmt />
          <Divider />
          <Who />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#292e33] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function InfoWrap() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[8px] pt-[12px] px-[22px] right-0 top-[1026px]" data-name="InfoWrap">
      <InfoCard />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[28px]">SESSION PACKAGES</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[30px] left-0 right-[125px] top-[-0.5px]" data-name="Heading 4">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[20px] text-white top-[15px] whitespace-nowrap">
        <p className="leading-[30px]">{`NUTRITION & POWER`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[30px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[226px]">
        <p className="leading-[24px] mb-0">Optimizing</p>
        <p className="leading-[24px]">Performance</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-y-1/2 absolute h-[78px] left-[16px] top-1/2 w-[226px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] h-[42px] leading-[0] left-0 not-italic right-0 text-[#ccf200] text-right top-0 whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[18.02px] text-[28px] top-[20.5px]">
        <p className="leading-[42px]">100,000 ISK</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center right-[1.41px] text-[14px] top-[24.5px]">
        <p className="leading-[20px]">/HR</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[16px] py-[6px] rounded-[9999px] top-[46px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[transparent] text-center whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-y-1/2 absolute h-[73px] left-[278px] top-1/2 w-[62px]" data-name="Container">
      <Paragraph />
      <Button />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border border-[rgba(255,255,255,0.1)] border-solid h-[112px] left-0 right-0 rounded-[12px] top-0" data-name="Overlay+Border+OverlayBlur">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[137px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function SectionPackages() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[181px] items-start left-0 px-[16px] top-[1313px] w-[390px]" data-name="Section - Packages">
      <Heading />
      <Container />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d="M3 10H16M11 15L16 10L11 5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_15px_rgba(215,255,0,0.3)] flex gap-[6px] h-[48px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0e141b] text-[24px] text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">BUY NOW</p>
      </div>
      <Frame9 />
    </div>
  );
}

function StickyCta() {
  return (
    <div className="absolute bg-black bottom-0 left-0 w-[390px]" data-name="Sticky CTA">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-[28px] pt-[16px] px-[16px] relative rounded-[inherit] size-full">
        <Button1 />
      </div>
      <div aria-hidden className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Body() {
  return (
    <div className="h-[1615px] relative shrink-0 w-full" data-name="Body">
      <Hero />
      <About />
      <SpeakerWrap />
      <Agenda />
      <InfoWrap />
      <SectionPackages />
      <StickyCta />
    </div>
  );
}

export default function LectureDetail() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="LECTURE DETAIL">
      <StatusBar />
      <HeaderTopAppBar />
      <Body />
    </div>
  );
}
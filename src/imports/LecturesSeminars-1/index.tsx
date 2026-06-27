import svgPaths from "./svg-htmnorii41";
import imgAthleticPerformanceCoachPortrait from "./47bcc4279ea1eed527bd140f101034d3edf3e3cd.png";
import img3 from "./b0e2a095e49d4224b9b6ff81794384c867155619.png";
import imgAthleticPerformanceCoachPortrait1 from "./8113ad3537bdd4c60f0345b4b14bd37fdd1fa84f.png";
import img1 from "./eb2aa3983147930c8729e8f7f0810d792bb9da12.png";
import imgAthleticPerformanceCoachPortrait2 from "./9bb8f1c9d2e95d18f1d9ca80ae8a5702ee2026ca.png";
import img2 from "./10693231349170d72cabd383c55bacf254b0f8bd.png";

function Frame() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g clipPath="url(#clip0_116_665)" id="Frame">
          <path d={svgPaths.p3d442b00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p263cd400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p24db2900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p11c519c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_116_665">
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
    <div className="absolute content-stretch flex h-[54px] items-center justify-between left-0 overflow-clip pt-[18px] px-[26px] right-0 top-0" data-name="StatusBar">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">9:41</p>
      <Icons />
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

function Hleft() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="hleft">
      <Frame2 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[32px]">{`LECTURES & SEMINARS`}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p257a2c00} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="1.8" />
          <g id="Vector_2">
            <path d={svgPaths.p3b8d4500} fill="var(--fill-0, black)" />
            <path d="M2 8H20M7 1.5V4.5M15 1.5V4.5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-between left-0 overflow-clip pb-[14px] pt-[10px] px-[20px] right-0 top-[54px]" data-name="Header">
      <Hleft />
      <Frame3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ccf200] flex-[1_0_0] h-full min-w-px relative rounded-[7px]" data-name="Button3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[calc(50%-0.83px)] not-italic text-[#0e141b] text-[16px] text-center top-[calc(50%-9px)] tracking-[0.1px] whitespace-nowrap">All</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[7px]" data-name="Button4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[calc(50%+0.17px)] not-italic text-[16px] text-[rgba(197,201,172,0.65)] text-center top-[calc(50%-9px)] tracking-[0.1px] whitespace-nowrap">Online</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[7px]" data-name="Button4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[calc(50%+0.17px)] not-italic text-[16px] text-[rgba(197,201,172,0.65)] text-center top-[calc(50%-9px)] tracking-[0.1px] whitespace-nowrap">In-Person</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[6px] items-start p-[4px] relative size-full">
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#0e141b] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Container9">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SegWrap() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[14px] pt-[8px] px-[16px] right-0 top-[118px]" data-name="SegWrap">
      <Container9 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">All Topics</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e5] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">Nutrition</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e5] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">Sports Psychology</p>
      </div>
    </div>
  );
}

function FilterChips() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[60px] items-start left-0 overflow-auto pb-[16px] pt-[8px] px-[16px] right-0 top-[188px]" data-name="Filter Chips">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">UPCOMING SESSIONS</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#cf0] text-[13px] tracking-[0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">VIEW ALL</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container2 />
          <Link />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#db4545] content-stretch flex items-start left-[16px] overflow-clip px-[11px] py-[5px] rounded-[7px] top-[22px]" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] whitespace-nowrap">NEW</p>
    </div>
  );
}

function AthleticPerformanceCoachPortrait() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Athletic performance coach portrait">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAthleticPerformanceCoachPortrait} />
      <Badge />
    </div>
  );
}

function Container4() {
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

function Button6() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white uppercase w-[340px]">
        <p className="leading-[26px]">Optimizing Performance Nutrition for Peak Power</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AthleticPerformanceCoachPortrait />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Button6 />
        <Container5 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3} />
      </div>
    </div>
  );
}

function DivW() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component2 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="div.w-9:margin">
      <DivW />
    </div>
  );
}

function Nm() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="nm">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white">Dr. Sarah Jenkins</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94999e] text-[13px]">Performance Nutritionist</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DivW9Margin />
      <Nm />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[12.852px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 12.8516">
        <g id="Container">
          <path d={svgPaths.pb0d4120} fill="var(--fill-0, #A3A3A3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 24, 2023 • 10:00 AM - 11:30 AM</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame">
          <path d={svgPaths.p3d4ca6a0} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.4" />
          <path d={svgPaths.p2eb47400} id="Vector_2" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Meta() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="meta">
      <Frame4 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d7ff00] text-[14px] whitespace-nowrap">In-person</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container8 />
      <Meta />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[322px]">
      <Frame11 />
      <Frame8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#0e0f11] h-[384px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container3 />
        <Container7 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#3b6bf2] content-stretch flex items-start left-[16px] overflow-clip px-[11px] py-[5px] rounded-[7px] top-[22px]" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-white tracking-[0.5px] whitespace-nowrap">TRENDING</p>
    </div>
  );
}

function AthleticPerformanceCoachPortrait1() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Athletic performance coach portrait">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAthleticPerformanceCoachPortrait1} />
      <Badge1 />
    </div>
  );
}

function Container13() {
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
      <Container13 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white uppercase w-[340px]">
        <p className="leading-[26px]">Advanced Defensive Patterns in Modern Play</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]" data-name="Container">
      <Heading2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AthleticPerformanceCoachPortrait1 />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Button7 />
        <Container14 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="aspect-[34/34] relative shrink-0 w-full" data-name="1">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
      </div>
    </div>
  );
}

function DivW1() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Nm1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] h-full items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="nm">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white">Marcus Thorne</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94999e] text-[13px]">Lead Tactical Analyst</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DivW1 />
      <div className="flex flex-row items-center self-stretch">
        <Nm1 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[12.852px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 12.8516">
        <g id="Container">
          <path d={svgPaths.pb0d4120} fill="var(--fill-0, #A3A3A3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-[392px]">
        <p className="leading-[20px]">Thu, Oct 24 • 2:00 PM - 4:00 PM</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[14px] relative shrink-0 w-[16px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14">
        <g id="Frame">
          <path d={svgPaths.p3eb33200} id="Vector" stroke="var(--stroke-0, #5B7CFF)" strokeWidth="1.5" />
          <path d="M11 6L15 3.5V10.5L11 8V6Z" id="Vector_2" stroke="var(--stroke-0, #5B7CFF)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Meta1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="meta">
      <Frame5 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#3b6bf2] text-[14px] whitespace-nowrap">Online</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container17 />
      <Meta1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[322px]">
      <Frame15 />
      <Frame9 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#0e0f11] h-[384px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container12 />
        <Container16 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch flex items-start left-[16px] overflow-clip px-[11px] py-[5px] rounded-[7px] top-[22px]" data-name="badge">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[10px] text-black tracking-[0.5px] whitespace-nowrap">POPULAR</p>
    </div>
  );
}

function AthleticPerformanceCoachPortrait2() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="Athletic performance coach portrait">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAthleticPerformanceCoachPortrait2} />
      <Badge2 />
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

function Button8() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.3)] content-stretch flex items-center justify-center p-px right-[16px] rounded-[9999px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container21 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white uppercase w-full">
        <p className="leading-[26px]">Mental Resilience: Handling High-Stakes Pressure</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[313px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-[16px] content-stretch flex items-end justify-between left-[16px] right-[16px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[256px] relative shrink-0 w-full z-[2]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <AthleticPerformanceCoachPortrait2 />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Gradient" />
        <Button8 />
        <Container22 />
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="2">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
      </div>
    </div>
  );
}

function DivW2() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="div.w-9:margin">
      <DivW2 />
    </div>
  );
}

function Nm2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] h-full items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="nm">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] text-white">Marcus Thorne</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94999e] text-[13px]">Lead Tactical Analyst</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <DivW9Margin1 />
      <div className="flex flex-row items-center self-stretch">
        <Nm2 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[12.852px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 12.8516">
        <g id="Container">
          <path d={svgPaths.pb0d4120} fill="var(--fill-0, #A3A3A3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] w-[392px]">
        <p className="leading-[20px]">Mon, Oct 28 • 1:00 PM - 2:30 PM</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame">
          <path d={svgPaths.p3d4ca6a0} id="Vector" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.4" />
          <path d={svgPaths.p2eb47400} id="Vector_2" stroke="var(--stroke-0, #D7FF00)" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Meta2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center overflow-clip relative shrink-0" data-name="meta">
      <Frame6 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#d7ff00] text-[14px] whitespace-nowrap">In-person</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container25 />
      <Meta2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[322px]">
      <Frame17 />
      <Frame10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-[#0e0f11] h-[384px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container20 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[358px]">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-0 pt-[16px] top-[248px] w-[390px]">
      <Container1 />
      <Frame13 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[10.94%_12.5%_14.06%_12.5%] items-start" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p191dcc80} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function House() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="House">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">DASHBOARD</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <House />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
        <g id="Container">
          <path d={svgPaths.p5df3d80} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Compass() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Compass">
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Compass />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-[calc(50%-0.75px)] w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p11161b00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="CalendarBlank">
      <Container33 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">COACHES</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <CalendarBlank />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[14.58%_12.5%_2.08%_12.5%] items-start" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function BookOpenText() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="BookOpenText">
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">SESSIONS</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <BookOpenText />
      <Container36 />
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

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PROFILE</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container28() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function BottomNavigationActiveSharedComponentMockup() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black content-stretch flex flex-col items-start left-0 pb-[33px] pt-[17px] px-[17px] top-[1595px] w-[390px]" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

export default function LecturesSeminars() {
  return (
    <div className="bg-black relative size-full" data-name="LECTURES & SEMINARS">
      <StatusBar />
      <Header />
      <SegWrap />
      <FilterChips />
      <Frame7 />
      <BottomNavigationActiveSharedComponentMockup />
    </div>
  );
}
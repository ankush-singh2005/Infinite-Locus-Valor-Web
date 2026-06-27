import svgPaths from "./svg-v53e8cunnj";

function Button() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">THIS MONTH</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f1012] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">LAST MONTH</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f1012] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">CUSTOM</p>
      </div>
    </div>
  );
}

function PeriodSelector() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-auto py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Period Selector">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">TOTAL EARNINGS</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[60px]">114,250 ISK</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">+12% vs last month</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(204,242,0,0.1)] content-stretch flex gap-[3.99px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <Container1 />
      <Container2 />
    </div>
  );
}

function SectionHeroMetric() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-center left-1/2 py-[16px] top-1/2 w-[358px]" data-name="Section - Hero Metric">
      <Container />
      <Heading1 />
      <Overlay />
    </div>
  );
}

function SectionPayoutCard() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] h-[162px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Section - Payout Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <SectionHeroMetric />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute h-[34px] left-[24px] top-[24px] w-[35px]" data-name="Background">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 34">
        <g id="Background">
          <path d={svgPaths.p2de9e100} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[13px] text-white top-[8px] whitespace-nowrap">
        <p className="leading-[16px]">AVAILABLE BALANCE</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-[44px] not-italic text-[24px] text-white top-[14px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">114,250 ISK</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[194px] top-[24px] w-[177px]" data-name="Container">
      <Container4 />
      <Heading2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#ccf200] content-stretch flex flex-col h-[48px] items-center justify-center left-[24px] py-[16px] right-[24px] rounded-[12px] top-[88px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[16px]">WITHDRAW</p>
      </div>
    </div>
  );
}

function SectionPayoutCard1() {
  return (
    <div className="absolute bg-[rgba(17,19,21,0.8)] border border-[rgba(255,255,255,0.1)] border-solid h-[162px] left-0 right-0 rounded-[12px] top-0" data-name="Section - Payout Card">
      <Background />
      <Container3 />
      <Button3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Bebas_Neue:Regular',sans-serif] gap-[98px] h-[16px] items-start leading-[0] left-0 not-italic right-0 text-[#d7ff00] text-[24px] top-[202px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">BY PACKAGE</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[16px]">SESSION TYPE</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[218px] relative shrink-0 w-full">
      <SectionPayoutCard1 />
      <Frame4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px]">ELITE STRIKER</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ccf200] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px]">TACTICAL 1:1</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#c6c6c9] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[17px] right-[17px] top-[161px]" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function SvgDonutRepresentation() {
  return (
    <div className="h-full overflow-clip relative w-[96px]" data-name="SVG Donut Representation">
      <div className="absolute inset-[5.79%]" data-name="Vector">
        <div className="absolute inset-[-4.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.8827 92.8827">
            <path d={svgPaths.p1a54f680} id="Vector" stroke="var(--stroke-0, #2F353D)" strokeDasharray="266.67 266.67" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.79%]" data-name="Vector">
        <div className="absolute inset-[-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5493 95.5493">
            <path d={svgPaths.p394454f0} id="Vector" stroke="var(--stroke-0, #CCF200)" strokeDasharray="160 266.67" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[5.79%]" data-name="Vector">
        <div className="absolute inset-[-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95.5493 95.5493">
            <path d={svgPaths.p1ae21d80} id="Vector" stroke="var(--stroke-0, #C6C6C9)" strokeDasharray="66.67 266.67" strokeWidth="10.6667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[30.25px] top-[36px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[24px]">60%</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[96px]" data-name="Container">
      <div className="flex flex-[1_0_0] h-[96px] items-center justify-center min-w-px relative" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <SvgDonutRepresentation />
        </div>
      </div>
      <Container11 />
    </div>
  );
}

function Margin() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[96px] items-center left-1/2 px-[21.5px] top-[49px] w-[139px]" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[129.661px] left-0 top-[-5px] w-[117.883px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.882 129.661">
        <g id="Group 1">
          <circle cx="52.3856" cy="65.6022" fill="var(--fill-0, #0E0F11)" id="Ellipse 1" r="48.3856" stroke="var(--stroke-0, #2F353D)" strokeWidth="8" />
          <path d={svgPaths.p2a7c3a00} id="Ellipse 2" stroke="var(--stroke-0, #D7FF00)" strokeWidth="10" />
          <path d={svgPaths.pf506200} id="Ellipse 3" stroke="var(--stroke-0, #C6C6C9)" strokeWidth="10" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[34px] top-[53.66px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[24px]">60%</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[158px] left-[33px] top-[33px] w-[140px]">
      <Group />
      <Container12 />
    </div>
  );
}

function DonutChartWidget() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 h-[212px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Donut Chart Widget">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container5 />
      <Margin />
      <Frame />
    </div>
  );
}

function Heading3() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 4" />;
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[64px] isolate items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="bg-[#c6c6c9] h-[16px] relative shrink-0 w-full z-[2]" data-name="Background" />
      <div className="bg-[#ccf200] h-[48px] relative shrink-0 w-full z-[1]" data-name="Background" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px]">F2F</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col h-[64px] isolate items-start overflow-clip relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="bg-[#c6c6c9] flex-[1_0_0] min-h-px relative w-full z-[2]" data-name="Background" />
      <div className="bg-[#60a5fa] flex-[1_0_0] min-h-px relative w-full z-[1]" data-name="Background" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px]">ONLINE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center min-w-px relative" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-end justify-center px-[8px] relative size-full">
          <Container14 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px]">500,000 ISK F2F</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ccf200] relative shrink-0 size-[8px]" data-name="Background" />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[15px] whitespace-pre">{`300,000 ISK  ONLINE`}</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#60a5fa] relative shrink-0 size-[8px]" data-name="Background" />
      <Container24 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container21 />
        <Container23 />
      </div>
    </div>
  );
}

function BarChartWidget() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Bar Chart Widget">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Heading3 />
        <Container13 />
        <Container20 />
      </div>
    </div>
  );
}

function SectionRevenueBreakdownBento() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_212px] relative shrink-0 w-full" data-name="Section - Revenue Breakdown Bento">
      <DonutChartWidget />
      <BarChartWidget />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">TOP PACKAGES</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3dccaf80} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-0 rounded-[4px] size-[40px] top-1/2" data-name="Background">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] w-[220px]">
        <p className="leading-[16px]">ELITE STRIKER MASTERCLASS</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">24 Bookings</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.pc98bac0} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[9.5px] items-start relative shrink-0" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[99px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Rating: 4</p>
      </div>
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Frame1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[52px] top-1/2 w-[211px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[17px] top-1/2 w-[274px]" data-name="Container">
      <Background1 />
      <Container28 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[0px] text-right tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[13px] mb-0 text-[16px]">120,000</p>
        <p className="leading-[13px] text-[13px]">ISK</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[303px] top-1/2" data-name="Container">
      <Container39 />
    </div>
  );
}

function PackageItem() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[74px] relative rounded-[8px] shrink-0 w-full" data-name="Package Item">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container26 />
      <Container38 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p273ff00} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-0 rounded-[4px] size-[40px] top-1/2" data-name="Background">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">TACTICAL 1:1 SESSIONS</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">12 Bookings</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[9.5px] items-start relative shrink-0" data-name="Container">
      <Container47 />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[99px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">{`Rating: 5 `}</p>
      </div>
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Frame2 />
    </div>
  );
}

function Container42() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[52px] top-1/2 w-[186px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[17px] top-1/2 w-[238px]" data-name="Container">
      <Background2 />
      <Container42 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[0px] text-right tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[13px] mb-0 text-[16px]">420,000</p>
        <p className="leading-[13px] text-[13px]">ISK</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="-translate-y-1/2 absolute h-[27px] left-[301px] top-1/2 w-[46px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function PackageItem1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[74px] relative rounded-[8px] shrink-0 w-full" data-name="Package Item">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container40 />
      <Container52 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <PackageItem />
      <PackageItem1 />
    </div>
  );
}

function SectionTopPerformingPackages() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[259px] items-start relative shrink-0 w-full" data-name="Section - Top Performing Packages">
      <Heading4 />
      <Container25 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <SectionRevenueBreakdownBento />
      <SectionTopPerformingPackages />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p3dfc3600} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-0 rounded-[4px] size-[40px] top-1/2" data-name="Background">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">ONLINE FOOTWORK CLINIC</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">8 Bookings</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
          <path d={svgPaths.p197ced20} fill="var(--fill-0, #CCF200)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[9.5px] items-start relative shrink-0" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[99px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">{`Rating: 5 `}</p>
      </div>
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Frame3 />
    </div>
  );
}

function Container56() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[52px] top-1/2 w-[196px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container54() {
  return (
    <div className="-translate-y-1/2 absolute h-[40px] left-[17px] top-1/2 w-[248px]" data-name="Container">
      <Background3 />
      <Container56 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-0 top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[0px] text-right tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[13px] mb-0 text-[16px]">220,000</p>
        <p className="leading-[13px] text-[13px]">ISK</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="-translate-y-1/2 absolute h-[27px] left-[303px] top-1/2 w-[46px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function PackageItem2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[74px] relative rounded-[8px] shrink-0 w-full" data-name="Package Item">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container54 />
      <Container66 />
    </div>
  );
}

function Heading5() {
  return <div className="h-[16px] relative shrink-0 w-[127px]" data-name="Heading 4" />;
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">SEE ALL</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Button4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 top-[-83px] w-[358px]">
      <PackageItem2 />
      <Container68 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Jun 12, 2024</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Reference: VAL-098234</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-[150px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">120,000 ISK</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(204,242,0,0.2)] content-stretch flex items-start justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">PROCESSED</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container74 />
        <Overlay1 />
      </div>
    </div>
  );
}

function PayoutItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Payout Item">
      <div aria-hidden className="absolute border-[rgba(69,73,50,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pl-[12px] pr-[11.99px] pt-[12px] relative size-full">
          <Container70 />
          <Container73 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Jun 05, 2024</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Reference: VAL-098112</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-[146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">120,000 ISK</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(204,242,0,0.2)] content-stretch flex items-start justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">PROCESSED</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container79 />
        <Overlay2 />
      </div>
    </div>
  );
}

function PayoutItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Payout Item">
      <div aria-hidden className="absolute border-[rgba(69,73,50,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[13px] pl-[12px] pr-[11.99px] pt-[12px] relative size-full">
          <Container75 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[24px]">May 28, 2024</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Reference: VAL-097905</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[149px]" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">120,000 ISK</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[rgba(251,191,36,0.2)] content-stretch flex items-start justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[10px] text-right whitespace-nowrap">
        <p className="leading-[15px]">PENDING</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <Container84 />
      <Background4 />
    </div>
  );
}

function PayoutItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Payout Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <Container80 />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <PayoutItem />
      <PayoutItem1 />
      <PayoutItem2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[31px] w-[358px]">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] w-full">
        <p className="leading-[16px]">PAYOUT HISTORY</p>
      </div>
      <Container69 />
    </div>
  );
}

function SectionPayoutHistory() {
  return (
    <div className="h-[247px] relative shrink-0 w-full" data-name="Section - Payout History">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[24px] items-start left-[16px] right-[16px] top-[64px]" data-name="Main">
      <PeriodSelector />
      <SectionPayoutCard />
      <Frame5 />
      <Frame6 />
      <SectionPayoutHistory />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[127px]" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[32px]">FINANCIALS</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-black content-stretch flex gap-[8px] h-[60px] items-center left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-[rgba(69,73,50,0)] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container85 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute h-[1445px] left-0 top-[60px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <HeaderTopAppBar />
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

function Container87() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_38_313)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1464d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_38_313">
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
        <g clipPath="url(#clip0_38_310)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.pa4c0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_38_310">
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
        <g clipPath="url(#clip0_38_305)" id="Icon">
          <path d={svgPaths.p2ecc2040} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p1e782900} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p263696c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_38_305">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container88() {
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

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container87 />
      <Container88 />
    </div>
  );
}

export default function EarningsAnalytics() {
  return (
    <div className="bg-black relative size-full" data-name="earnings analytics">
      <HtmlBody />
      <Container86 />
    </div>
  );
}
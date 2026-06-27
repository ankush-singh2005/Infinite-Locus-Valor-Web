import svgPaths from "./svg-l5vg3pz6sj";

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16px]">STEP 5 OF 6</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Container1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">AVAILABILITY</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-0 top-0 w-[342px]" data-name="Container">
      <Group1 />
      <Container2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[342px]">
      <Container />
    </div>
  );
}

function ProgressBarOverlay() {
  return (
    <div className="bg-[#2f353d] col-1 h-[4px] ml-0 mt-0 overflow-clip relative rounded-[9999px] row-1 w-[347px]" data-name="Progress Bar Overlay">
      <div className="absolute bg-[#ccf200] inset-[0_17.84%_0_0] shadow-[0px_0px_10px_0px_rgba(204,242,0,0.5)]" data-name="div.h-full" />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <ProgressBarOverlay />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] items-start left-0 pl-[16px] top-[80px]">
      <Frame3 />
      <Group2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #DDE3ED)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">CURRENT SELECTION</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[28px]">THIS WEEK (MAY 12 - 18)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[161px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #DDE3ED)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function WeekNavigation() {
  return (
    <div className="backdrop-blur-[10px] bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Week Navigation">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Button />
          <Container4 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">WEEKLY PERFORMANCE GRID</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16px]">Tap or drag to toggle</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[18px] relative shrink-0 w-[68.352px]" data-name="Paragraph" />;
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="Container6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Container13() {
  return <div className="absolute border border-[rgba(255,255,255,0.08)] border-solid left-0 rounded-[17px] size-[34px] top-0" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
          <g id="Icon">
            <path d={svgPaths.p1ee5a100} id="Vector" stroke="var(--stroke-0, #C5C9AC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[9px]" data-name="Icon4">
      <Icon />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[17px] shrink-0 size-[34px]" data-name="Button1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container13 />
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[39px] left-0 top-[-0.5px] w-[95.344px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[39px] left-0 not-italic text-[#d7ff00] text-[26px] top-[-0.5px] tracking-[1.3px] whitespace-nowrap">MAY 2026</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[39px] relative shrink-0 w-[95.344px]" data-name="Text1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container14() {
  return <div className="absolute border border-[rgba(255,255,255,0.08)] border-solid left-0 rounded-[17px] size-[34px] top-0" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
      <div className="absolute inset-[-8.33%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
          <g id="Icon">
            <path d={svgPaths.p2c5f4580} id="Vector" stroke="var(--stroke-0, #C5C9AC)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Icon">
      <Icon3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[9px]" data-name="Icon5">
      <Icon2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[17px] shrink-0 size-[34px]" data-name="Button2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
        <Icon5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[53px] relative shrink-0 w-[358px]" data-name="Container7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[14px] relative size-full">
        <Button2 />
        <Text1 />
        <Button3 />
      </div>
    </div>
  );
}

function Container17() {
  return <div className="absolute border border-[rgba(255,255,255,0.06)] border-solid h-[36px] left-0 rounded-[10px] top-0 w-[178.859px]" data-name="Container" />;
}

function Button4() {
  return (
    <div className="bg-[#ccf200] h-[28px] relative rounded-[7px] shrink-0 w-[64.406px]" data-name="Button3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[32.7px] not-italic text-[#0e141b] text-[13px] text-center top-[5.75px] tracking-[0.1px] uppercase whitespace-nowrap">Month</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] relative rounded-[7px] shrink-0 w-[58.188px]" data-name="Button4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[29.66px] not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-center top-[5.75px] tracking-[0.1px] uppercase whitespace-nowrap">Week</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[13.5px] top-[5.5px] w-[22px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[10.93px] not-italic text-[13px] text-[rgba(255,255,255,0.6)] text-center top-[0.25px] tracking-[0.1px] uppercase whitespace-nowrap">Day</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] relative rounded-[7px] shrink-0 w-[48.266px]" data-name="Button5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 p-[4px] top-0 w-[178.859px]" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#0f1012] h-[36px] relative rounded-[10px] shrink-0 w-[178.859px]" data-name="Container9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container19() {
  return <div className="absolute border border-[rgba(204,242,0,0.22)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[65.031px]" data-name="Container" />;
}

function Button7() {
  return (
    <div className="bg-[rgba(204,242,0,0.08)] h-[32px] relative rounded-[8px] shrink-0 w-[65.031px]" data-name="Button6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[33.55px] not-italic text-[#ccf200] text-[13px] text-center top-[7.75px] tracking-[0.3px] uppercase whitespace-nowrap">Today</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[358px]" data-name="Container8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Container16 />
        <Button7 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[17px] left-[20.23px] top-[3.75px] w-[10px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[4.76px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[0.25px] tracking-[0.5px] whitespace-nowrap">M</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[342px]" data-name="Container10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[76.95px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">T</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[128.19px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">W</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[179.23px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">T</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[230.18px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">F</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[281.62px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">S</p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[332.76px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[4px] tracking-[0.5px] whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="ContainerMargin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[14px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.5px] left-[21.21px] top-[17.25px] w-[6.039px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">1</p>
    </div>
  );
}

function Container23() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[19.5px] left-[71.59px] top-[17.25px] w-[7.867px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">2</p>
    </div>
  );
}

function Container25() {
  return <div className="absolute h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.5px] left-[19.59px] top-[16px] w-[8.273px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-px whitespace-nowrap">3</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container15" />;
}

function Container24() {
  return (
    <div className="absolute h-[52px] left-[103.41px] rounded-[9px] top-0 w-[47.719px]" data-name="Container14">
      <Container25 />
      <Paragraph6 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="absolute h-[19.5px] left-[174.79px] top-[17.25px] w-[8.352px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">4</p>
    </div>
  );
}

function Container29() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[13.75px] w-[7.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">5</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container18" />;
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[206.84px] rounded-[9px] top-0 w-[47.719px]" data-name="Container17">
      <Container29 />
      <Paragraph8 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.5px] left-[278.38px] top-[17.25px] w-[8.109px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">6</p>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#ccf200] border-solid h-[52px] left-0 rounded-[9px] shadow-[0px_0px_14px_0px_rgba(204,242,0,0.18)] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="absolute h-[19.5px] left-[20.08px] top-[13.25px] w-[7.734px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#ccf200] text-[13px] top-px whitespace-nowrap">7</p>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container21" />;
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.08)] h-[52px] left-[310.27px] rounded-[9px] top-0 w-[47.719px]" data-name="Container20">
      <Container33 />
      <Paragraph10 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[19.5px] left-[19.83px] top-[73.25px] w-[8.016px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">8</p>
    </div>
  );
}

function Container37() {
  return <div className="absolute border-[#60a5fa] border-[1.5px] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="absolute h-[19.5px] left-[19.82px] top-[13.25px] w-[8.109px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">9</p>
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-[#60a5fa] left-[21.35px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container24" />;
}

function Container36() {
  return (
    <div className="absolute bg-[#13203d] h-[52px] left-[51.7px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container23">
      <Container37 />
      <Paragraph12 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="absolute h-[19.5px] left-[17.12px] top-[13.75px] w-[14.164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">10</p>
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container26" />;
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[103.41px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container25">
      <Container40 />
      <Paragraph13 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="absolute h-[19.5px] left-[173.7px] top-[73.25px] w-[12.078px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">11</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute border-[1.5px] border-[rgba(215,255,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph15() {
  return (
    <div className="absolute h-[19.5px] left-[17.25px] top-[13.25px] w-[13.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">12</p>
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-[#d7ff00] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container29" />;
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[206.84px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container28">
      <Container44 />
      <Paragraph15 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="absolute h-[19.5px] left-[275.76px] top-[73.25px] w-[14.313px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">13</p>
    </div>
  );
}

function Container48() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph17() {
  return (
    <div className="absolute h-[19.5px] left-[17.02px] top-[13.25px] w-[14.391px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">14</p>
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container32" />;
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container31">
      <Container48 />
      <Paragraph17 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph18() {
  return (
    <div className="absolute h-[19.5px] left-[17.35px] top-[13.75px] w-[13.945px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">15</p>
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.85px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container34" />;
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-0 rounded-[9px] top-[112px] w-[47.711px]" data-name="Container33">
      <Container51 />
      <Paragraph18 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container" />;
}

function Paragraph19() {
  return (
    <div className="absolute h-[19.5px] left-[68.88px] top-[129.25px] w-[14.148px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">16</p>
    </div>
  );
}

function Container55() {
  return <div className="absolute border-[1.5px] border-[rgba(204,242,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="absolute h-[19.5px] left-[17.54px] top-[13.25px] w-[13.469px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">17</p>
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[#ccf200] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container37" />;
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[103.41px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container36">
      <Container55 />
      <Paragraph20 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container" />;
}

function Paragraph21() {
  return (
    <div className="absolute h-[19.5px] left-[172.32px] top-[129.25px] w-[14.055px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">18</p>
    </div>
  );
}

function Container59() {
  return <div className="absolute h-[52px] left-[-1px] rounded-[9px] top-[-1px] w-[47.719px]" data-name="Container" />;
}

function Paragraph22() {
  return (
    <div className="absolute h-[19.5px] left-[16.18px] top-[12.25px] w-[14.148px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">19</p>
    </div>
  );
}

function Container60() {
  return <div className="absolute bg-[#fbbf24] left-[20.36px] rounded-[2.5px] size-[5px] top-[33.75px]" data-name="Container40" />;
}

function Container58() {
  return (
    <div className="absolute bg-[rgba(251,191,36,0.1)] border border-[#fbbf24] border-solid h-[52px] left-[206.84px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container39">
      <Container59 />
      <Paragraph22 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph23() {
  return (
    <div className="absolute h-[19.5px] left-[15.79px] top-[13.75px] w-[15.992px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">20</p>
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.85px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container42" />;
}

function Container61() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[258.56px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container41">
      <Container62 />
      <Paragraph23 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph24() {
  return (
    <div className="absolute h-[19.5px] left-[17.25px] top-[13.25px] w-[13.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">21</p>
    </div>
  );
}

function Container66() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container44" />;
}

function Container64() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container43">
      <Container65 />
      <Paragraph24 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph25() {
  return (
    <div className="absolute h-[19.5px] left-[15.93px] top-[185.25px] w-[15.734px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">22</p>
    </div>
  );
}

function Container68() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="absolute h-[19.5px] left-[67.58px] top-[185.25px] w-[16.141px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">23</p>
    </div>
  );
}

function Container70() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.5px] left-[15.8px] top-[13.75px] w-[16.016px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">24</p>
    </div>
  );
}

function Container71() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container48" />;
}

function Container69() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[103.41px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container47">
      <Container70 />
      <Paragraph27 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return <div className="absolute border-[1.5px] border-[rgba(204,242,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph28() {
  return (
    <div className="absolute h-[19.5px] left-[16.03px] top-[13.25px] w-[15.773px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">25</p>
    </div>
  );
}

function Container74() {
  return <div className="absolute bg-[#ccf200] left-[21.35px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container50" />;
}

function Container72() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[155.13px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container49">
      <Container73 />
      <Paragraph28 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[206.84px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container" />;
}

function Paragraph29() {
  return (
    <div className="absolute h-[19.5px] left-[222.71px] top-[185.25px] w-[15.977px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">26</p>
    </div>
  );
}

function Container76() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="absolute h-[19.5px] left-[274.77px] top-[185.25px] w-[15.297px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">27</p>
    </div>
  );
}

function Container78() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.5px] left-[15.87px] top-[13.25px] w-[15.883px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">28</p>
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container54" />;
}

function Container77() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container53">
      <Container78 />
      <Paragraph31 />
      <Container79 />
    </div>
  );
}

function Container80() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[224px] w-[47.711px]" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="absolute h-[19.5px] left-[15.86px] top-[241.25px] w-[15.977px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">29</p>
    </div>
  );
}

function Container81() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[224px] w-[47.711px]" data-name="Container" />;
}

function Paragraph33() {
  return (
    <div className="absolute h-[19.5px] left-[67.45px] top-[241.25px] w-[16.398px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">30</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[276px] relative shrink-0 w-[342px]" data-name="Container11">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
        <Paragraph4 />
        <Container23 />
        <Paragraph5 />
        <Container24 />
        <Container27 />
        <Paragraph7 />
        <Container28 />
        <Container31 />
        <Paragraph9 />
        <Container32 />
        <Container35 />
        <Paragraph11 />
        <Container36 />
        <Container39 />
        <Container42 />
        <Paragraph14 />
        <Container43 />
        <Container46 />
        <Paragraph16 />
        <Container47 />
        <Container50 />
        <Container53 />
        <Paragraph19 />
        <Container54 />
        <Container57 />
        <Paragraph21 />
        <Container58 />
        <Container61 />
        <Container64 />
        <Container67 />
        <Paragraph25 />
        <Container68 />
        <Paragraph26 />
        <Container69 />
        <Container72 />
        <Container75 />
        <Paragraph29 />
        <Container76 />
        <Paragraph30 />
        <Container77 />
        <Container80 />
        <Paragraph32 />
        <Container81 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="ContainerMargin1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col h-[448px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Container12 />
      <Container15 />
      <ContainerMargin />
      <ContainerMargin1 />
    </div>
  );
}

function SectionTimeGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Time Grid">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-w-[672px] px-[16px] right-0 top-[130px]" data-name="Main">
      <WeekNavigation />
      <SectionTimeGrid />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] w-[258px]">
        <p className="leading-[28px]">SET YOUR AVAILABILITY</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Button">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
        <Button8 />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-black content-stretch flex gap-[10px] h-[64px] items-center left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container82 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute h-[752px] left-0 top-[60px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Frame1 />
      <Main />
      <HeaderTopAppBar />
    </div>
  );
}

function Container84() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t h-[36px] left-0 top-0 w-[342px]" data-name="Container" />;
}

function Container86() {
  return (
    <div className="bg-[rgba(204,242,0,0.5)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#ccf200] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[15px] left-0 top-[0.5px] w-[17.859px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(197,201,172,0.55)] top-[0.5px] whitespace-nowrap">F2F</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.945px]" data-name="Text32">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[70.18px] top-[11px] w-[30.945px]" data-name="Container58">
      <Container86 />
      <Text2 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#13203d] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#60a5fa] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[15px] left-0 top-[0.5px] w-[30.484px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(197,201,172,0.55)] top-[0.5px] whitespace-nowrap">Online</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[30.602px]" data-name="Text33">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[113.13px] top-[11px] w-[43.602px]" data-name="Container60">
      <Container88 />
      <Text3 />
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[rgba(251,191,36,0.2)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#fbbf24] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[15px] left-0 top-[0.5px] w-[22.422px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(197,201,172,0.55)] top-[0.5px] whitespace-nowrap">Hybrid</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22.031px]" data-name="Text34">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[168.73px] top-[11px] w-[35.031px]" data-name="Container62">
      <Container90 />
      <Text4 />
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[rgba(197,201,172,0.05)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(197,201,172,0.18)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[15px] left-0 top-[0.5px] w-[42.805px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(197,201,172,0.55)] top-[0.5px] whitespace-nowrap">Available</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[43.063px]" data-name="Text35">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[215.76px] top-[11px] w-[56.063px]" data-name="Container64">
      <Container92 />
      <Text5 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[36px] relative shrink-0 w-[342px]" data-name="Container57">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container84 />
        <Container85 />
        <Container87 />
        <Container89 />
        <Container91 />
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[50px] items-center left-1/2 pt-[14px] top-[812px] w-[342px]" data-name="ContainerMargin2">
      <Container83 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] w-full">
        <p className="leading-[28px]">{`BUFFERS & BREAKS`}</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
          <p className="leading-[16px]">BUFFER BETWEEN SESSIONS</p>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative rounded-[9999px] shrink-0 w-[105.33px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[24px]">0 MIN</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center py-[8px] relative rounded-[9999px] shrink-0 w-[105.34px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[24px]">15 MIN</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[8px] relative rounded-[999px] shrink-0 w-[105.33px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[24px]">30 MIN</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start justify-center p-[4px] relative size-full">
          <Button9 />
          <Button10 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function BufferCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Buffer Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Container94 />
        <Background />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16px]">DAILY BREAK SLOTS</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0 size-[8.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
        <g id="Container">
          <path d={svgPaths.p10ad69c0} fill="var(--fill-0, #2B3400)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#ccf200] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Button">
      <Container97 />
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container96 />
        <Button12 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Container">
          <path d={svgPaths.p23cfd7c0} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Lunch Break</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] whitespace-nowrap">
          <p className="leading-[24px]">12:30pm - 13:30pm</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container98 />
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function BreaksCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Breaks Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Container95 />
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__110px_120px] relative shrink-0 w-full" data-name="Container">
      <BufferCard />
      <BreaksCard />
    </div>
  );
}

function SectionBufferBreaks() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] right-[16px] top-[886px]" data-name="Section - Buffer & Breaks">
      <Heading2 />
      <Container93 />
    </div>
  );
}

function Button13() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-0 px-px py-[17px] right-[242.67px] rounded-[12px] top-1/2" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">SAVE DRAFT</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">NEXT STEP</p>
      </div>
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #181E00)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Button14() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ccf200] content-stretch drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] flex h-[48px] items-center justify-center left-[131px] py-[16px] right-[17px] rounded-[12px] top-1/2" data-name="Button">
      <Container103 />
    </div>
  );
}

function Container102() {
  return (
    <a className="absolute block cursor-pointer h-[50px] left-0 right-[-17px] top-0" data-name="Container">
      <Button13 />
      <Button14 />
    </a>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-[-17px] top-[74px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Changes are saved automatically to your draft.</p>
      </div>
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute h-[94px] right-[25px] top-[1216px] w-[341px]" data-name="CTA Action">
      <Container102 />
      <Container104 />
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

function Container106() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon6() {
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

function Icon7() {
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

function Icon8() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.297px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.2969 13">
        <g clipPath="url(#clip0_16_2232)" id="Icon">
          <path d={svgPaths.p225fba80} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p814b800} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p1802fd00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_16_2232">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="flex-[109_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center justify-end relative size-full">
        <Icon6 />
        <Icon7 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container106 />
      <Container107 />
    </div>
  );
}

export default function Availability() {
  return (
    <div className="bg-black relative size-full" data-name="availability">
      <HtmlBody />
      <ContainerMargin2 />
      <SectionBufferBreaks />
      <CtaAction />
      <Container105 />
    </div>
  );
}
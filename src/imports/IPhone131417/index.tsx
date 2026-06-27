import svgPaths from "./svg-14zgogqoy4";

function Icon2() {
  return (
    <div className="absolute inset-[20.83%]" data-name="Icon">
      <div className="absolute inset-[-8.93%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
          <g id="Icon">
            <path d="M1.25 8.25H15.25" id="Vector" stroke="var(--stroke-0, #0E141B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            <path d="M8.25 1.25V15.25" id="Vector_2" stroke="var(--stroke-0, #0E141B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 overflow-clip size-[24px] top-0" data-name="Icon">
      <Icon2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ccf200] content-stretch drop-shadow-[0px_4px_10px_rgba(204,242,0,0.4),0px_0px_20px_rgba(204,242,0,0.12)] flex items-center justify-center left-[321px] rounded-[26px] size-[52px] top-[756px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[844px] left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(rgb(0, 0, 0) 99.99%, rgb(0, 0, 0) 99.991%, rgb(0, 0, 1) 99.993%, rgb(1, 1, 2) 99.994%, rgb(2, 3, 5) 99.995%, rgb(4, 6, 9) 99.996%, rgb(6, 10, 15) 99.998%, rgb(10, 15, 21) 99.999%, rgb(14, 20, 27) 100%)" }} data-name="Container">
      <Button />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-black border-[rgba(255,255,255,0.04)] border-b border-solid h-[87px] left-0 top-0 w-[390px]" data-name="Container" />;
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

function Container3() {
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
    <div className="backdrop-blur-[6px] bg-black h-[60px] relative shrink-0 w-full" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pb-px relative size-full">
        <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
          </svg>
        </div>
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="absolute border border-[rgba(255,255,255,0.08)] border-solid left-0 rounded-[17px] size-[34px] top-0" data-name="Container" />;
}

function Icon5() {
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

function Icon3() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Icon">
      <Icon5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[9px]" data-name="Icon4">
      <Icon3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[17px] shrink-0 size-[34px]" data-name="Button1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Icon4 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[39px] left-0 top-[-0.5px] w-[95.344px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Bebas_Neue:Regular',sans-serif] leading-[39px] left-0 not-italic text-[#d7ff00] text-[26px] top-[-0.5px] tracking-[1.3px] whitespace-nowrap">JUNE 2026</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[39px] relative shrink-0 w-[95.344px]" data-name="Text1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="absolute border border-[rgba(255,255,255,0.08)] border-solid left-0 rounded-[17px] size-[34px] top-0" data-name="Container" />;
}

function Icon8() {
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

function Icon7() {
  return (
    <div className="absolute left-0 overflow-clip size-[16px] top-0" data-name="Icon">
      <Icon8 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[9px]" data-name="Icon5">
      <Icon7 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] relative rounded-[17px] shrink-0 size-[34px]" data-name="Button2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[53px] relative shrink-0 w-[358px]" data-name="Container7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[14px] relative size-full">
        <Button1 />
        <Text1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container10() {
  return <div className="absolute border border-[rgba(255,255,255,0.06)] border-solid h-[36px] left-0 rounded-[10px] top-0 w-[178.859px]" data-name="Container" />;
}

function Button3() {
  return (
    <div className="bg-[#ccf200] h-[28px] relative rounded-[7px] shrink-0 w-[64.406px]" data-name="Button3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-[32.7px] not-italic text-[#0e141b] text-[12px] text-center top-[5.75px] tracking-[0.1px] whitespace-nowrap">Month</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[28px] relative rounded-[7px] shrink-0 w-[58.188px]" data-name="Button4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[29.16px] not-italic text-[12px] text-[rgba(197,201,172,0.65)] text-center top-[5.75px] tracking-[0.1px] whitespace-nowrap">Week</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-[13.5px] top-[5.5px] w-[22px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[11.43px] not-italic text-[12px] text-[rgba(197,201,172,0.65)] text-center top-[0.25px] tracking-[0.1px] whitespace-nowrap">Day</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[28px] relative rounded-[7px] shrink-0 w-[48.266px]" data-name="Button5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 p-[4px] top-0 w-[178.859px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[36px] relative rounded-[10px] shrink-0 w-[178.859px]" data-name="Container9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute border border-[rgba(204,242,0,0.22)] border-solid h-[32px] left-0 rounded-[8px] top-0 w-[65.031px]" data-name="Container" />;
}

function Button6() {
  return (
    <div className="bg-[rgba(204,242,0,0.08)] h-[32px] relative rounded-[8px] shrink-0 w-[65.031px]" data-name="Button6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[33.55px] not-italic text-[#ccf200] text-[12px] text-center top-[7.75px] tracking-[0.3px] whitespace-nowrap">Today</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[358px]" data-name="Container8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
        <Container9 />
        <Button6 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[17px] left-[20.23px] top-[3.75px] w-[10px]" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[4.76px] not-italic text-[11px] text-[rgba(197,201,172,0.45)] text-center top-[0.25px] tracking-[0.5px] whitespace-nowrap">M</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[342px]" data-name="Container10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
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
        <Container13 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="absolute h-[19.5px] left-[21.21px] top-[17.25px] w-[6.039px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">1</p>
    </div>
  );
}

function Container16() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="absolute h-[19.5px] left-[71.59px] top-[17.25px] w-[7.867px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">2</p>
    </div>
  );
}

function Container18() {
  return <div className="absolute h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[19.5px] left-[19.59px] top-[16px] w-[8.273px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.5)] top-px whitespace-nowrap">3</p>
    </div>
  );
}

function Container19() {
  return <div className="absolute left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container15" />;
}

function Container17() {
  return (
    <div className="absolute h-[52px] left-[103.41px] rounded-[9px] top-0 w-[47.719px]" data-name="Container14">
      <Container18 />
      <Paragraph5 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="absolute h-[19.5px] left-[174.79px] top-[17.25px] w-[8.352px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">4</p>
    </div>
  );
}

function Container22() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="absolute h-[19.5px] left-[20px] top-[13.75px] w-[7.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">5</p>
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container18" />;
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[206.84px] rounded-[9px] top-0 w-[47.719px]" data-name="Container17">
      <Container22 />
      <Paragraph7 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="absolute h-[19.5px] left-[278.38px] top-[17.25px] w-[8.109px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">6</p>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-2 border-[#ccf200] border-solid h-[52px] left-0 rounded-[9px] shadow-[0px_0px_14px_0px_rgba(204,242,0,0.18)] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="absolute h-[19.5px] left-[20.08px] top-[13.25px] w-[7.734px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[19.5px] left-0 not-italic text-[#ccf200] text-[13px] top-px whitespace-nowrap">7</p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container21" />;
}

function Container25() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.08)] h-[52px] left-[310.27px] rounded-[9px] top-0 w-[47.719px]" data-name="Container20">
      <Container26 />
      <Paragraph9 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="absolute h-[19.5px] left-[19.83px] top-[73.25px] w-[8.016px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">8</p>
    </div>
  );
}

function Container30() {
  return <div className="absolute border-[#60a5fa] border-[1.5px] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="absolute h-[19.5px] left-[19.82px] top-[13.25px] w-[8.109px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">9</p>
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#60a5fa] left-[21.35px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container24" />;
}

function Container29() {
  return (
    <div className="absolute bg-[#13203d] h-[52px] left-[51.7px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container23">
      <Container30 />
      <Paragraph11 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="absolute h-[19.5px] left-[17.12px] top-[13.75px] w-[14.164px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">10</p>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container26" />;
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[103.41px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container25">
      <Container33 />
      <Paragraph12 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="absolute h-[19.5px] left-[173.7px] top-[73.25px] w-[12.078px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">11</p>
    </div>
  );
}

function Container37() {
  return <div className="absolute border-[1.5px] border-[rgba(215,255,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph14() {
  return (
    <div className="absolute h-[19.5px] left-[17.25px] top-[13.25px] w-[13.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">12</p>
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-[#d7ff00] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container29" />;
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[206.84px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container28">
      <Container37 />
      <Paragraph14 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-[56px] w-[47.711px]" data-name="Container" />;
}

function Paragraph15() {
  return (
    <div className="absolute h-[19.5px] left-[275.76px] top-[73.25px] w-[14.313px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">13</p>
    </div>
  );
}

function Container41() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph16() {
  return (
    <div className="absolute h-[19.5px] left-[17.02px] top-[13.25px] w-[14.391px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">14</p>
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container32" />;
}

function Container40() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[56px] w-[47.719px]" data-name="Container31">
      <Container41 />
      <Paragraph16 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph17() {
  return (
    <div className="absolute h-[19.5px] left-[17.35px] top-[13.75px] w-[13.945px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">15</p>
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.85px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container34" />;
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-0 rounded-[9px] top-[112px] w-[47.711px]" data-name="Container33">
      <Container44 />
      <Paragraph17 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container" />;
}

function Paragraph18() {
  return (
    <div className="absolute h-[19.5px] left-[68.88px] top-[129.25px] w-[14.148px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">16</p>
    </div>
  );
}

function Container48() {
  return <div className="absolute border-[1.5px] border-[rgba(204,242,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph19() {
  return (
    <div className="absolute h-[19.5px] left-[17.54px] top-[13.25px] w-[13.469px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">17</p>
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-[#ccf200] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container37" />;
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[103.41px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container36">
      <Container48 />
      <Paragraph19 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[155.13px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container" />;
}

function Paragraph20() {
  return (
    <div className="absolute h-[19.5px] left-[172.32px] top-[129.25px] w-[14.055px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">18</p>
    </div>
  );
}

function Container52() {
  return <div className="absolute h-[52px] left-[-1px] rounded-[9px] top-[-1px] w-[47.719px]" data-name="Container" />;
}

function Paragraph21() {
  return (
    <div className="absolute h-[19.5px] left-[16.18px] top-[12.25px] w-[14.148px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">19</p>
    </div>
  );
}

function Container53() {
  return <div className="absolute bg-[#fbbf24] left-[20.36px] rounded-[2.5px] size-[5px] top-[33.75px]" data-name="Container40" />;
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(251,191,36,0.1)] border border-[#fbbf24] border-solid h-[52px] left-[206.84px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container39">
      <Container52 />
      <Paragraph21 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph22() {
  return (
    <div className="absolute h-[19.5px] left-[15.79px] top-[13.75px] w-[15.992px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">20</p>
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.85px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container42" />;
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[258.56px] rounded-[9px] top-[112px] w-[47.711px]" data-name="Container41">
      <Container55 />
      <Paragraph22 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph23() {
  return (
    <div className="absolute h-[19.5px] left-[17.25px] top-[13.25px] w-[13.906px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">21</p>
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container44" />;
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[112px] w-[47.719px]" data-name="Container43">
      <Container58 />
      <Paragraph23 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph24() {
  return (
    <div className="absolute h-[19.5px] left-[15.93px] top-[185.25px] w-[15.734px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">22</p>
    </div>
  );
}

function Container61() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph25() {
  return (
    <div className="absolute h-[19.5px] left-[67.58px] top-[185.25px] w-[16.141px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">23</p>
    </div>
  );
}

function Container63() {
  return <div className="absolute border border-[rgba(197,201,172,0.12)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph26() {
  return (
    <div className="absolute h-[19.5px] left-[15.8px] top-[13.75px] w-[16.016px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(197,201,172,0.55)] top-px whitespace-nowrap">24</p>
    </div>
  );
}

function Container64() {
  return <div className="absolute bg-[rgba(197,201,172,0.3)] left-[21.86px] rounded-[2px] size-[4px] top-[35.25px]" data-name="Container48" />;
}

function Container62() {
  return (
    <div className="absolute bg-[rgba(197,201,172,0.04)] h-[52px] left-[103.41px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container47">
      <Container63 />
      <Paragraph26 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return <div className="absolute border-[1.5px] border-[rgba(204,242,0,0.35)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.711px]" data-name="Container" />;
}

function Paragraph27() {
  return (
    <div className="absolute h-[19.5px] left-[16.03px] top-[13.25px] w-[15.773px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">25</p>
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-[#ccf200] left-[21.35px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container50" />;
}

function Container65() {
  return (
    <div className="absolute bg-[rgba(204,242,0,0.1)] h-[52px] left-[155.13px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container49">
      <Container66 />
      <Paragraph27 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[206.84px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container" />;
}

function Paragraph28() {
  return (
    <div className="absolute h-[19.5px] left-[222.71px] top-[185.25px] w-[15.977px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">26</p>
    </div>
  );
}

function Container69() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[258.56px] rounded-[9px] top-[168px] w-[47.711px]" data-name="Container" />;
}

function Paragraph29() {
  return (
    <div className="absolute h-[19.5px] left-[274.77px] top-[185.25px] w-[15.297px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">27</p>
    </div>
  );
}

function Container71() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.2)] border-solid h-[52px] left-0 rounded-[9px] top-0 w-[47.719px]" data-name="Container" />;
}

function Paragraph30() {
  return (
    <div className="absolute h-[19.5px] left-[15.87px] top-[13.25px] w-[15.883px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-white top-px whitespace-nowrap">28</p>
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[rgba(255,255,255,0.7)] left-[21.36px] rounded-[2.5px] size-[5px] top-[34.75px]" data-name="Container54" />;
}

function Container70() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] h-[52px] left-[310.27px] rounded-[9px] top-[168px] w-[47.719px]" data-name="Container53">
      <Container71 />
      <Paragraph30 />
      <Container72 />
    </div>
  );
}

function Container73() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-0 rounded-[9px] top-[224px] w-[47.711px]" data-name="Container" />;
}

function Paragraph31() {
  return (
    <div className="absolute h-[19.5px] left-[15.86px] top-[241.25px] w-[15.977px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">29</p>
    </div>
  );
}

function Container74() {
  return <div className="absolute border border-[rgba(255,255,255,0.03)] border-solid h-[52px] left-[51.7px] rounded-[9px] top-[224px] w-[47.711px]" data-name="Container" />;
}

function Paragraph32() {
  return (
    <div className="absolute h-[19.5px] left-[67.45px] top-[241.25px] w-[16.398px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[13px] text-[rgba(255,255,255,0.28)] top-px whitespace-nowrap">30</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[276px] relative shrink-0 w-[342px]" data-name="Container11">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container15 />
        <Paragraph3 />
        <Container16 />
        <Paragraph4 />
        <Container17 />
        <Container20 />
        <Paragraph6 />
        <Container21 />
        <Container24 />
        <Paragraph8 />
        <Container25 />
        <Container28 />
        <Paragraph10 />
        <Container29 />
        <Container32 />
        <Container35 />
        <Paragraph13 />
        <Container36 />
        <Container39 />
        <Paragraph15 />
        <Container40 />
        <Container43 />
        <Container46 />
        <Paragraph18 />
        <Container47 />
        <Container50 />
        <Paragraph20 />
        <Container51 />
        <Container54 />
        <Container57 />
        <Container60 />
        <Paragraph24 />
        <Container61 />
        <Paragraph25 />
        <Container62 />
        <Container65 />
        <Container68 />
        <Paragraph28 />
        <Container69 />
        <Paragraph29 />
        <Container70 />
        <Container73 />
        <Paragraph31 />
        <Container74 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-[342px]" data-name="ContainerMargin1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <HeaderTopAppBar />
        <Container7 />
        <Container8 />
        <ContainerMargin />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Container76() {
  return <div className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t h-[36px] left-0 top-0 w-[342px]" data-name="Container" />;
}

function Container78() {
  return (
    <div className="bg-[rgba(204,242,0,0.5)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#ccf200] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph33() {
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
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[70.18px] top-[11px] w-[30.945px]" data-name="Container58">
      <Container78 />
      <Text2 />
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[#13203d] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#60a5fa] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph34() {
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
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[113.13px] top-[11px] w-[43.602px]" data-name="Container60">
      <Container80 />
      <Text3 />
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(251,191,36,0.2)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border-[#fbbf24] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[15px] left-0 top-[0.5px] w-[22.422px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-[rgba(197,201,172,0.55)] top-[0.5px] whitespace-nowrap">Both</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[15px] relative shrink-0 w-[22.031px]" data-name="Text34">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[168.73px] top-[11px] w-[35.031px]" data-name="Container62">
      <Container82 />
      <Text4 />
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[rgba(197,201,172,0.05)] relative rounded-[2px] shrink-0 size-[9px]" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(197,201,172,0.18)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Paragraph36() {
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
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[15px] items-center left-[215.76px] top-[11px] w-[56.063px]" data-name="Container64">
      <Container84 />
      <Text5 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[36px] relative shrink-0 w-[342px]" data-name="Container57">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container76 />
        <Container77 />
        <Container79 />
        <Container81 />
        <Container83 />
      </div>
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="h-[50px] relative shrink-0 w-[342px]" data-name="ContainerMargin2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[14px] relative size-full">
        <Container75 />
      </div>
    </div>
  );
}

function Container87() {
  return <div className="absolute border-[1.5px] border-[rgba(255,255,255,0.12)] border-solid h-[61px] left-0 rounded-[12px] top-0 w-[358px]" data-name="Container" />;
}

function Paragraph38() {
  return (
    <div className="h-[19px] relative shrink-0 w-[95.266px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[0.5px] not-italic text-[11px] text-white top-[2.5px] tracking-[1px] uppercase whitespace-nowrap">JUNE 7</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[19px] relative shrink-0 w-[96.883px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph38 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[17px] relative shrink-0 w-[95.828px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[11px] text-[rgba(197,201,172,0.75)] top-0 whitespace-nowrap">2:00 PM · Sarah K.</p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[17px] relative shrink-0 w-[96.883px]" data-name="Paragraph1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[36px] relative shrink-0 w-[96.883px]" data-name="Container71">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph37 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-[14.5px] top-[12.5px] w-[109.883px]" data-name="Container69">
      <Container89 />
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[7px] top-[4px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] not-italic relative shrink-0 text-[#60a5fa] text-[13px] uppercase whitespace-nowrap">Online</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute h-[21px] left-[269px] rounded-[12px] top-[19.5px] w-[63px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(19, 32, 61) 0%, rgb(19, 32, 61) 100%), linear-gradient(90deg, rgb(96, 165, 250) 0%, rgb(96, 165, 250) 100%)" }} data-name="Container72">
      <Paragraph41 />
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] h-[61px] relative rounded-[12px] shrink-0 w-[358px]" data-name="Container68">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container87 />
        <Container88 />
        <Container90 />
      </div>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="h-[70px] relative shrink-0 w-[358px]" data-name="ContainerMargin3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[9px] relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[19px] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">Tactical Review</p>
        <Container86 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[49px] relative shrink-0 w-[358px]" data-name="Container66">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col h-[688px] items-start left-0 overflow-clip pb-[24px] px-[16px] top-[60px] w-[390px]" data-name="Container5">
      <Container2 />
      <ContainerMargin2 />
      <Container85 />
    </div>
  );
}

function CalendarView() {
  return (
    <div className="absolute bg-black h-[904px] left-0 overflow-clip top-0 w-[390px]" data-name="CalendarView">
      <Container />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Sessions</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container94 />
      <Container95 />
    </div>
  );
}

function Container96() {
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

function Container97() {
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
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container98() {
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

function Container99() {
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
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container100() {
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

function Container101() {
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
      <Container100 />
      <Container101 />
    </div>
  );
}

function Container91() {
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
    <div className="absolute backdrop-blur-[12px] bg-black bottom-0 content-stretch flex flex-col items-start left-0 pb-[33px] pt-[13px] px-[17px] w-[390px]" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container91 />
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

function Container103() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon9() {
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

function Icon10() {
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

function Icon11() {
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

function Container104() {
  return (
    <div className="flex-[109_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center justify-end relative size-full">
        <Icon9 />
        <Icon10 />
        <Icon11 />
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container103 />
      <Container104 />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-black relative size-full" data-name="iPhone 13 & 14 - 17">
      <CalendarView />
      <BottomNavigationActiveSharedComponentMockup />
      <Container102 />
    </div>
  );
}
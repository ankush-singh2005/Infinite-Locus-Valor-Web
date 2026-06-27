import svgPaths from "./svg-0ssxlejc3c";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-[97px]">
        <p className="leading-[16px]">STEP 4 OF 6</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] uppercase w-[68px]">
        <p className="leading-[16px]">FORMAT</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#ccf200] inset-[0_40%_0_0]" data-name="Background" />
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[33px]" data-name="Progress Indicator">
      <Container />
      <Overlay />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">FORMAT</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[24px]">How do you want to sell your coaching?</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 right-0 top-[85px]">
      <Heading />
      <Container3 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.96px] w-[183px]">
        <p className="leading-[26px]">Billing Structure</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[64.38px] pr-[64.39px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[13px] text-center uppercase w-[63px]">
            <p className="leading-[16px]">PACKAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="col-1 justify-self-start relative rounded-[8px] row-1 self-start shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[58.48px] pr-[58.49px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase w-[79px]">
          <p className="leading-[16px]">HOURLY</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0f1012] h-[50px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_40px] p-[5px] relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function FormatToggleSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 right-0 top-[169px]" data-name="Format Toggle Section">
      <Label />
      <BackgroundBorder />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.96px] w-[234px]">
        <p className="leading-[26px]">Duration Per Session</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">60 MIN</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[146px] items-center relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(255,255,255,0.08)] h-[6px] left-0 rounded-[3px] top-[19px] w-[308px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-gradient-to-r from-[#b8e000] h-[6px] left-0 rounded-[3px] shadow-[0px_0px_12px_0px_rgba(215,255,0,0.45)] to-[#d7ff00] top-[19px] w-[165px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[rgba(14,20,27,0.6)] h-[10px] left-[75.5px] rounded-[2px] top-[17px] w-[3px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[rgba(14,20,27,0.6)] h-[10px] left-[152.5px] rounded-[2px] top-[17px] w-[3px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute bg-[rgba(255,255,255,0.15)] h-[10px] left-[229.5px] rounded-[2px] top-[17px] w-[3px]" data-name="Container" />;
}

function Container14() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container15() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container16() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.5px] items-start relative size-full">
        <Container14 />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_8px_rgba(215,255,0,0.45)] flex items-center justify-center left-[140px] rounded-[14px] size-[28px] top-[8px]" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container7 />
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[15px]">30 M</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">in</span>
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[15px]">{`45 `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">Min</span>
        </p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[15px]">{`60 `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">Min</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[15px]">{`90 `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">Min</span>
        </p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p>
          <span className="leading-[15px]">{`120 `}</span>
          <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic">Min</span>
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between px-[4px] relative size-full">
          <Container18 />
          <Container19 />
          <Container20 />
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <Container6 />
        <Container17 />
      </div>
    </div>
  );
}

function SectionDurationSelection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 pt-[8px] right-0 top-[281px]" data-name="Section - Duration Selection">
      <Container4 />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.96px] w-[199px]">
        <p className="leading-[26px]">Training Capacity</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[28px] relative w-[24.02px]" data-name="Component 1">
            <div className="absolute inset-[29.17%_1.43%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 11.6667">
                <path d={svgPaths.pd58fc80} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Group Size</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[62px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="mr-[-24px] relative shrink-0 w-[197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay1 />
        <Container26 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[2px] relative shrink-0 w-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
        <g id="Container">
          <path d="M0 2V0H14V2H0V2" fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(107,124,104,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[48px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[26px]">6</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button2 />
        <Container30 />
        <Button3 />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] opacity-60 relative rounded-[12px] shrink-0 w-full" data-name="Component 2">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[17px] relative size-full">
          <Container24 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function SectionCapacitySettings() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 pt-[8px] right-0 top-[478px]" data-name="Section - Capacity Settings">
      <Label2 />
      <Container23 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[598px] left-[16px] right-[16px] top-[96px]">
      <ProgressIndicator />
      <Frame2 />
      <FormatToggleSection />
      <SectionDurationSelection />
      <SectionCapacitySettings />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] w-[258px]">
        <p className="leading-[28px]">SET YOUR format</p>
      </div>
    </div>
  );
}

function Button4() {
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

function Container32() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading1 />
        <Button4 />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-black content-stretch flex gap-[10px] h-[64px] items-center left-0 pb-px px-[16px] top-[56px] w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container32 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[694px] left-0 right-0 top-0" data-name="Main">
      <Frame3 />
      <HeaderTopAppBar />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Margin">
          <path d={svgPaths.pdb34080} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[14px] tracking-[-0.7px] uppercase w-full">
        <p className="leading-[14px]">HYBRID CAPACITY</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.875px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Group size reflects the on-the-ground</p>
        <p className="leading-[22.75px] mb-0">players supervised by the local coach.</p>
        <p className="leading-[22.75px] mb-0">You lead the entire group via remote</p>
        <p className="leading-[22.75px]">video.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.125px] items-start relative size-full">
        <Heading2 />
        <Container34 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_10px_0px_rgba(0,255,102,0.2)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[18px] relative size-full">
        <Margin />
        <Container33 />
      </div>
    </div>
  );
}

function AtmosphericEffect() {
  return (
    <div className="h-[128px] opacity-20 relative rounded-[12px] shrink-0 w-full" data-name="Atmospheric effect">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function SectionHybridCapacityNote() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[145px] items-start left-[16px] overflow-clip top-[718px] w-[358px]" data-name="Section - Hybrid Capacity Note">
      <BackgroundBorderShadow />
      <AtmosphericEffect />
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-px py-[17px] relative rounded-[12px] shrink-0 w-[115.33px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">SAVE DRAFT</p>
      </div>
    </div>
  );
}

function Frame() {
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

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ccf200] content-stretch drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] flex h-[48px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-[226.67px]" data-name="Button">
      <Container36 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center max-w-[672px] right-0 top-[16px] w-[358px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Changes are saved automatically to your draft.</p>
      </div>
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute h-[108px] left-[16px] top-[883px] w-[358px]" data-name="CTA Action">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Component390WLight() {
  return (
    <div className="absolute h-[1023px] left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="390w light">
      <Main />
      <SectionHybridCapacityNote />
      <CtaAction />
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

function Container39() {
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

function Container40() {
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

function Container38() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[12px] px-[24px] relative size-full">
        <Text />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-0 top-0 w-[390px]">
      <Container38 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-black relative size-full" data-name="STEP 20">
      <Component390WLight />
      <Frame1 />
    </div>
  );
}
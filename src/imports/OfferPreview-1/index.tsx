import svgPaths from "./svg-mn583ptp3u";
import imgOverlay from "./74a3f5737f7f8866baef21c4b86463e5d7024985.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] w-full">
        <p className="leading-[32px]">uPLOAD CONTENT</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Manage your high-performance drills, tactical guides, and athlete insights.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <div className="absolute inset-[-3.13%_-2.27%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
          <g id="Container">
            <g id="Icon">
              <path d={svgPaths.p3eb3e880} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3eb3e880} stroke="var(--stroke-0, #CCF200)" strokeLinejoin="bevel" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] content-stretch drop-shadow-[0px_0px_10px_rgba(204,242,0,0.2)] flex gap-[4px] h-[46px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Container2 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Upload Content</p>
      </div>
    </div>
  );
}

function SectionLeftColumnHeaderInstructions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Left Column: Header & Instructions">
      <Container />
      <Button />
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between leading-[0] not-italic relative size-full text-[13px] whitespace-nowrap">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#888] uppercase">
          <p className="leading-[14.67px]">content STATS SUMMARY</p>
        </div>
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#c8f000]">
          <p className="leading-[14.67px]">↑ +12.4%</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[15px]">Total Views</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">42.8k</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
          <p className="leading-[15px]">Downloads</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">8,192</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Border">
      <div aria-hidden className="absolute border-[rgba(69,73,50,0.2)] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-px relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[15px]">Revenue</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">120 ,450 ISK</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(69,73,50,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_47px] pt-[17px] relative size-full">
        <Container3 />
        <Border />
        <Container9 />
      </div>
    </div>
  );
}

function DivRoundedXl() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[12px] shrink-0 w-full" data-name="div.rounded-xl">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start p-[21px] relative size-full">
          <div className="absolute bottom-[-48px] h-[140px] right-[-24.33px] w-[133.333px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.333 140">
              <path d={svgPaths.p10cd000} fill="var(--fill-0, #CCF200)" id="Icon" opacity="0.02" />
            </svg>
          </div>
          <Div />
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
            <p className="leading-[28px]">Monthly Performance</p>
          </div>
          <HorizontalBorder />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="content-stretch flex flex-col items-start px-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] w-full">
          <p className="leading-[28px]">LIBRARY SETTINGS</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Public Visibility</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[96px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(215,255,0,0.2)] content-stretch flex flex-col h-[24px] items-end p-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay">
      <div className="bg-[#d7ff00] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container13 />
          <Overlay />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-[550] justify-center leading-[0] not-italic relative shrink-0 text-[#f1f5f9] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Enable Monetization</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(215,255,0,0.2)] content-stretch flex flex-col h-[24px] items-end p-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Overlay">
      <div className="bg-[#d7ff00] relative rounded-[9999px] shrink-0 size-[16px]" data-name="Background" />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[16px] relative size-full">
          <Container16 />
          <Overlay1 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container12 />
        <Container15 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[#454932] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[48px] py-[13px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">View Wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <OverlayBorder />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">ALL</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e5] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">Videos</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0b0c0e] content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e5] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[20px]">PDFs</p>
      </div>
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start overflow-auto pb-[8px] relative shrink-0 w-full" data-name="Filter Chips">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p19e3b6c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0 size-[60px]" data-name="Overlay">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-[rgba(204,242,0,0.1)] inset-0 rounded-[8px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgOverlay} />
      </div>
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] w-full">
        <p className="leading-[normal] mb-0">High-Intensity Interval</p>
        <p className="leading-[normal]">Drills</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">VIDEO • 12:40 • MP4</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay2 />
        <Container20 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal]">12.5k</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">VIEWS</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[36px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Button">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative size-full">
        <Container24 />
        <Button5 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(36,42,50,0.9)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[17px] relative size-full">
          <div className="absolute bg-[#0a0a0a] inset-0 rounded-[12px]" data-name="Overlay+Shadow">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
          </div>
          <Container18 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Overlay">
          <rect fill="var(--fill-0, #CCF200)" fillOpacity="0.1" height="60" rx="8" width="60" />
          <path d={svgPaths.p10548e00} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] w-full">
        <p className="leading-[normal] mb-0">Advanced Defensive</p>
        <p className="leading-[normal]">Structures 2024</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">PDF • 42 PAGES • 4.5MB</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay3 />
        <Container28 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal]">856</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">SALES</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[33px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Button">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative size-full">
        <Container32 />
        <Button6 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(36,42,50,0.9)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[17px] relative size-full">
          <div className="absolute bg-[#0a0a0a] inset-0 rounded-[12px]" data-name="Overlay+Shadow">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
          </div>
          <Container27 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Overlay">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Overlay">
          <rect fill="var(--fill-0, #2563EB)" fillOpacity="0.2" height="60" rx="8" width="60" />
          <path d={svgPaths.p308a1660} fill="var(--fill-0, #60A5FA)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] w-full">
        <p className="leading-[normal]">Elite Prospect Scouting Database</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">CSV/XLS • 150 RECORDS</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Overlay4 />
        <Container36 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[normal]">2,480</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic opacity-30 relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">VIEWS</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[36px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Button">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[15.99px] items-center relative size-full">
        <Container40 />
        <Button7 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(36,42,50,0.9)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[17px] relative size-full">
          <div className="absolute bg-[#0a0a0a] inset-0 rounded-[12px]" data-name="Overlay+Shadow">
            <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
          </div>
          <Container35 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function ListBuilder() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List Builder">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">Active Assets</p>
      </div>
      <FilterChips />
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 max-w-[1152px] pb-[136px] pt-[70px] px-[16px] right-0 top-[60px]" data-name="Main">
      <SectionLeftColumnHeaderInstructions />
      <DivRoundedXl />
      <Section />
      <ListBuilder />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[32px]">Content HUB</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-black content-stretch flex gap-[12px] h-[64px] items-center left-0 pb-px px-[16px] top-[60px] w-[390px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Heading />
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

function Container44() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_29_297)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1464d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_297">
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
        <g clipPath="url(#clip0_29_354)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.pa4c0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_354">
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
        <g clipPath="url(#clip0_29_334)" id="Icon">
          <path d={svgPaths.p225fba80} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p814b800} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p24c92a80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_29_334">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container45() {
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

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container44 />
      <Container45 />
    </div>
  );
}

export default function OfferPreview() {
  return (
    <div className="bg-black relative size-full" data-name="offer preview">
      <Main />
      <HeaderTopAppBar />
      <Container43 />
    </div>
  );
}
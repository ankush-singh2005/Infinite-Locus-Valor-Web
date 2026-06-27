import svgPaths from "./svg-skxco9q6r4";

function DecorativeElements() {
  return (
    <div className="absolute right-[9px] size-[100px] top-[9px]" data-name="Decorative Elements">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Decorative Elements" opacity="0.1">
          <path d={svgPaths.p26a56480} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(204,242,0,0.6)] text-center tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">CURRENT STATUS</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[80px] text-center whitespace-nowrap">
        <p className="leading-[80px]">PRO</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #050505)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[10px] text-center whitespace-nowrap">
        <p className="leading-[15px]">VERIFIED ELITE</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ccf200] content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-70 relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">SINCE OCTOBER 2023</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function AtmosphericShaderBackground() {
  return (
    <div className="relative shrink-0" data-name="Atmospheric Shader Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Margin />
        <Margin1 />
        <Background />
        <Margin2 />
      </div>
    </div>
  );
}

function SectionCurrentTierHeroCard() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Current Tier Hero Card">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[25px] relative size-full">
          <DecorativeElements />
          <AtmosphericShaderBackground />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.72px] w-full">
        <p className="leading-[28px]">PERFORMANCE HIERARCHY</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] bg-clip-text flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[transparent] tracking-[0.72px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(119.604deg, rgb(255, 215, 0) 0%, rgb(255, 165, 0) 100%)" }}>
        <p className="leading-[28px]">elite</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">NEXT GOAL</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[27px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Exp:</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[121px] top-0 w-[65.02px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">10+ YRS</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[24px] left-px right-px top-px" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[59px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Sessions:</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[252.81px] top-0 w-[57.72px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">2,500+</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 absolute h-[24px] left-[calc(50%+3.26px)] top-[33.25px] w-[310.53px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[43px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Rating:</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[287.31px] top-0 w-[36.69px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">
        <p className="leading-[24px]">4.9+</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[24px] left-px right-px top-[65px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[90px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container8 />
      <Container11 />
      <Container14 />
    </div>
  );
}

function MarqueeTierElite() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start opacity-40 relative shrink-0 w-full" data-name="Marquee Tier (Elite)">
      <Container6 />
      <div className="absolute bg-[#1a2028] left-[-25px] rounded-[9999px] size-[16px] top-[4px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-2 border-[#454932] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fbbf24] text-[24px] tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">marquee</p>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(204,242,0,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">ACTIVE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <OverlayBorder />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[27px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">Exp:</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-end left-[254px] top-[0.25px] w-[62px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">5+ YRS</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[59px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">Sessions:</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[257px] top-[0.25px] w-[65px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] text-right w-[59px]">
        <p className="leading-[24px]">1,000+</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[43px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">Rating:</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[288.61px] top-0 w-[35.39px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] lowercase not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">4.7+</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container18 />
        <Container21 />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ProTierCurrent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Pro Tier (Current)">
      <Container17 />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[24px] tracking-[0.72px] w-full">
        <p className="leading-[28px]">LOCAL</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[27px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Exp:</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[24px] left-[11px] right-[-9px] top-[0.25px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[59px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Sessions:</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[24px] left-[11px] right-[-9px] top-[33.25px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[10px] top-[0.25px] w-[43px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Rating:</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[24px] left-px right-px top-[65px]" data-name="Container">
      <Container32 />
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[90px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container27 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function LocalTier() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start opacity-60 relative shrink-0 w-full" data-name="Local Tier">
      <Heading4 />
      <div className="absolute bg-[#ccf200] left-[-25px] rounded-[9999px] size-[16px] top-[4px]" data-name="Background" />
      <div className="absolute bg-[#2f353d] left-[-28px] rounded-[9999px] size-[20px] top-[1.25px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-4 border-[#0e141b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[24px] tracking-[0.72px] w-full">
        <p className="leading-[28px]">GRASSROOTS</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[27px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Exp:</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[24px] left-[12px] right-[-10px] top-[0.25px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bottom-[-0.25px] content-stretch flex flex-col items-start left-[11px] top-[0.25px] w-[74px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">Credentials:</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[24px] left-px right-px top-[33px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[58px] relative rounded-[8px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container33 />
      <Container35 />
    </div>
  );
}

function GrassrootsTier() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start opacity-40 relative shrink-0 w-full" data-name="Grassroots Tier">
      <div className="absolute bg-[#ccf200] left-[-25px] rounded-[9999px] size-[16px] top-[4px]" data-name="Background" />
      <div className="absolute bg-[#2f353d] left-[-27px] rounded-[9999px] size-[20px] top-[2.25px]" data-name="Background+Border">
        <div aria-hidden className="absolute border-4 border-[#0e141b] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <Heading5 />
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pl-[32px] relative size-full">
        <MarqueeTierElite />
        <ProTierCurrent />
        <LocalTier />
        <GrassrootsTier />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container5 />
    </div>
  );
}

function TierLadderSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tier Ladder Section">
      <Heading1 />
      <Margin3 />
    </div>
  );
}

function Heading6() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 4" />;
}

function Container40() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(204,242,0,0.1)] content-stretch flex flex-col items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container40 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Overlay />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">You are 142 sessions and 1.2 years</p>
        <p className="leading-[20px] mb-0">away from being eligible for Elite</p>
        <p className="leading-[20px]">status.</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[270px]" data-name="Container">
      <Heading6 />
      <Container39 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Container38 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-[8px] relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1a2028] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#ccf200] inset-[0_35%_0_0]" data-name="Background" />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[15px]">65% PROGRESS</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[15px]">ELIGIBILITY: OCT 2025</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function SectionUpgradePathCard() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Section - Upgrade Path Card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[25px] pt-[2px] px-[25px] relative size-full">
        <Container37 />
        <Background1 />
        <Container41 />
      </div>
    </div>
  );
}

function SectionUpgradePathCardMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Section - Upgrade Path Card:margin">
      <SectionUpgradePathCard />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative size-full">
        <SectionCurrentTierHeroCard />
        <TierLadderSection />
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
          <p className="leading-[16px]">PATH TO ELITE</p>
        </div>
        <SectionUpgradePathCardMargin />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] tracking-[1px] whitespace-nowrap">
          <p className="leading-[36px]">COACH TIER</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(5,5,5,0.9)] content-stretch flex gap-[12px] h-[64px] items-center left-0 px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Heading />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[14.5px] pt-[13.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#050505] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
          <p className="leading-[28px]">APPLY FOR TIER UPGRADE</p>
        </div>
      </div>
    </div>
  );
}

function BottomVerificationCta() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(5,5,5,0.8)] bottom-[79.75px] content-stretch flex flex-col items-start left-0 pb-[76px] pt-[17px] px-[16px] w-[390px]" data-name="Bottom Verification CTA">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function CoachTypeBadge() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[208px] pt-[80px] top-[60px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Coach Type Badge">
      <Main />
      <HeaderTopAppBar />
      <BottomVerificationCta />
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

function Container45() {
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

function Container46() {
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

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container45 />
      <Container46 />
    </div>
  );
}

export default function CoachType() {
  return (
    <div className="bg-black relative size-full" data-name="coach type">
      <CoachTypeBadge />
      <div className="absolute bg-[#ccf200] border-4 border-[#0e141b] border-solid left-[20px] rounded-[9999px] shadow-[0px_0px_12px_0px_rgba(204,242,0,0.6)] size-[20px] top-[590px]" data-name="Background+Border+Shadow" />
      <Container44 />
      <div className="absolute flex h-[133px] items-center justify-center left-[30px] top-[455px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[133px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 1">
                <line id="Line 4" stroke="var(--stroke-0, #1F2017)" x2="133" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[139px] items-center justify-center left-[30px] top-[753px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[139px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 1">
                <line id="Line 6" stroke="var(--stroke-0, #1F2017)" x2="139" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[125px] items-center justify-center left-[30px] top-[611px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[125px]">
            <div className="absolute inset-[-1px_-3.2%_-8px_-3.2%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 9">
                <g filter="url(#filter0_d_29_1064)" id="Line 5">
                  <line stroke="var(--stroke-0, #CCF200)" x1="4" x2="129" y1="0.5" y2="0.5" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9" id="filter0_d_29_1064" width="133" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.8 0 0 0 0 0.94902 0 0 0 0 0 0 0 0 1 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_29_1064" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_29_1064" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
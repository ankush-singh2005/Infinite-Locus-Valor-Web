import svgPaths from "./svg-0uulbedxnv";
import imgCoachAvatar from "./64d47ccd288b46bf9dd467b6e91778f2ebbfcdd4.png";
import imgCoachAvatar1 from "./257d04f3b2fdd1bfdbc53390c6d4ac9ddb510a69.png";
import imgCoachAvatar2 from "./fdd1ecca109be1f0b74e3cd99555b845303169ab.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">U-14 ELITE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">UNDER 14S • ACADEMY LEVEL</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container2 />
        <Button />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Container">
      <Margin />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">NEXT SESSION</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
        <p className="leading-[20px]">FRI, 14:30</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[61.5px]" data-name="Container">
      <Margin1 />
      <Container10 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container5 />
        <div className="bg-[rgba(255,255,255,0.1)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
        <Container8 />
      </div>
    </div>
  );
}

function CoachAvatar() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[28px]" data-name="Coach Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgCoachAvatar} />
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Coach M. Reynolds</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <CoachAvatar />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[6.504px] relative shrink-0 w-[3.821px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82083 6.50417">
        <g id="Container">
          <path d={svgPaths.p19bb3500} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[13px] relative size-full">
        <Container11 />
        <Container13 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(17,19,21,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container1 />
        <Container4 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">U-16 PREMIER</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">UNDER 16S • REGIONAL</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container15 />
        <Button1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[20px]">22</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[202px]" data-name="Container">
      <Margin2 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">NEXT SESSION</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
        <p className="leading-[20px]">SAT, 09:00</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[63.03px]" data-name="Container">
      <Margin3 />
      <Container23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container18 />
        <div className="bg-[rgba(255,255,255,0.1)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
        <Container21 />
      </div>
    </div>
  );
}

function CoachAvatar1() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[28px]" data-name="Coach Avatar">
      <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
        <img alt="" className="absolute h-full left-[0.39%] max-w-none top-[1.76%] w-[139.06%]" src={imgCoachAvatar1} />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Coach D. Sterling</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <CoachAvatar1 />
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[6.504px] relative shrink-0 w-[3.821px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82083 6.50417">
        <g id="Container">
          <path d={svgPaths.p19bb3500} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[13px] relative size-full">
        <Container24 />
        <Container26 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(17,19,21,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container14 />
        <Container17 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">U-12 DEVELOPMENT</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">UNDER 12S • FOUNDATION</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container28 />
        <Button2 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[20px]">14</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Container">
      <Margin4 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">NEXT SESSION</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
        <p className="leading-[20px]">TUE, 17:00</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[65.41px]" data-name="Container">
      <Margin5 />
      <Container36 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container31 />
        <div className="bg-[rgba(255,255,255,0.1)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
        <Container34 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[8px] relative shrink-0 w-[11px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
        <g id="Container">
          <path d={svgPaths.p278fac00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[28px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">No coach assigned</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <OverlayBorder />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[6.504px] relative shrink-0 w-[3.821px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82083 6.50417">
        <g id="Container">
          <path d={svgPaths.p19bb3500} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[13px] relative size-full">
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(17,19,21,0.8)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container27 />
        <Container30 />
        <HorizontalBorder2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">RESERVE A</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SENIOR • SECOND TEAM</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[16px] relative shrink-0 w-[4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 16">
        <g id="Container">
          <path d={svgPaths.p3caf0c80} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container42 />
        <Button3 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[20px]">20</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Container">
      <Margin6 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] uppercase w-full">
        <p className="leading-[15px]">NEXT SESSION</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
        <p className="leading-[20px]">MON, 19:30</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[70.03px]" data-name="Container">
      <Margin7 />
      <Container50 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container45 />
        <div className="bg-[rgba(255,255,255,0.1)] h-[32px] relative shrink-0 w-px" data-name="Vertical Divider" />
        <Container48 />
      </div>
    </div>
  );
}

function CoachAvatar2() {
  return (
    <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[28px]" data-name="Coach Avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgCoachAvatar2} />
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 rounded-[9999px]" />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">
        <p className="leading-[16px]">Coach S. Wu</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <CoachAvatar2 />
        <Container52 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[6.504px] relative shrink-0 w-[3.821px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82083 6.50417">
        <g id="Container">
          <path d={svgPaths.p19bb3500} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[13px] relative size-full">
        <Container51 />
        <Container53 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(17,19,21,0.8)] opacity-80 relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container41 />
        <Container44 />
        <HorizontalBorder3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[13px] top-[194px] w-[358px]" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] h-[28px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Heading 2">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[24px] text-white">
        <p className="leading-[36px]">ACTIVE SQUADS</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#d7ff00] text-[13px]">
        <p className="leading-[24px]">(08)</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[148px]" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[10px] top-[4px]">
      <div className="relative shrink-0 size-[14px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, #181E00)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[12px] text-center w-[76px]">
        <p className="leading-[16px]">ADD SQUAD</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ccf200] h-[23px] relative rounded-[12px] shrink-0 w-[114px]" data-name="Button">
      <Frame1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="absolute content-stretch flex h-[71px] items-end justify-between left-[21px] right-[20px] top-[95px]" data-name="Header Section">
      <Container54 />
      <Button4 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[36px] left-0 max-w-[512px] top-[85px] w-[390px]" data-name="Main">
      <div className="max-w-[inherit] relative size-full" />
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

function Container56() {
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

function Container57() {
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

function Container55() {
  return (
    <div className="bg-black h-[54px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[12px] px-[24px] relative size-full">
        <Text />
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[17px] relative w-[11px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
              <path d={svgPaths.p3e1a4b00} fill="var(--fill-0, #D7FF00)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">SQUAD MANAGEMENT</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[191.835px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black content-stretch flex h-[36px] items-center justify-between left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start pb-[10px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-0 top-0 w-[390px]">
      <Container55 />
      <HtmlBody />
    </div>
  );
}

export default function ManageSquads() {
  return (
    <div className="bg-black relative size-full" data-name="MANAGE SQUADS">
      <Container />
      <HeaderSection />
      <Main />
      <Frame3 />
    </div>
  );
}
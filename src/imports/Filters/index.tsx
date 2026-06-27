import svgPaths from "./svg-t65pxhih7x";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">SESSION TYPE</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-center justify-center pb-[9.5px] pt-[8.5px] px-[24px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">ALL</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0e1011] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">f2f</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0e1011] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">online</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#0e1011] content-stretch flex flex-col items-center justify-center px-[25px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[16px]">both</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[361px]">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function SectionSessionTypeSegmented() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Session Type (Segmented)">
      <Heading1 />
      <Frame4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.72px] uppercase w-full">
        <p className="leading-[28px]">LOCATION</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[normal]">London, United Kingdom</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[10px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function InputMargin() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[12px] relative size-full">
        <Input />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0b0c0e] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-[13px] relative size-full">
          <Container />
          <InputMargin />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(198,198,201,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[16px]">RADIUS</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] whitespace-nowrap">
        <p className="leading-[24px]">10 KM</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container10() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container11() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.5px] items-start relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_8px_rgba(215,255,0,0.45)] flex items-center justify-center left-[26px] rounded-[14px] size-[28px] top-[-2px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-0 right-0 top-[calc(50%-2px)]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#1a2028] h-[6px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Container3 />
        <Input1 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <BackgroundBorder />
        <Container2 />
      </div>
    </div>
  );
}

function SectionLocationConditional() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Location (Conditional)">
      <Heading2 />
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">PRICE PER SESSION</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap">
          <p className="leading-[15px]">MIN</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
          <p className="leading-[28px]">50,000 isk</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#0b0c0e] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap">
          <p className="leading-[15px]">MAX</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
          <p className="leading-[28px]">200,000 isk</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#0b0c0e] flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[9px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <BackgroundBorder1 />
        <div className="bg-[rgba(255,255,255,0.1)] h-px relative shrink-0 w-[16px]" data-name="Horizontal Divider" />
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Container19() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container20() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container21() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.5px] items-start relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_8px_rgba(215,255,0,0.45)] flex h-[28px] items-center justify-center left-[18.54%] right-[72.37%] rounded-[14px] top-1/2" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container25() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container26() {
  return <div className="bg-[rgba(14,20,27,0.55)] h-[10px] relative rounded-[1px] shrink-0 w-[2px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.5px] items-start relative size-full">
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_8px_rgba(215,255,0,0.45)] flex h-[28px] items-center justify-center left-[62.37%] right-[28.54%] rounded-[14px] top-1/2" data-name="Container">
      <Container23 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#1a2028] h-[6px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-gradient-to-r from-[#b8e000] inset-[0_29.99%_0_20%] rounded-[3px] shadow-[0px_0px_12px_0px_rgba(215,255,0,0.45)] to-[#d7ff00]" data-name="Background" />
        <Container17 />
        <Container22 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container12 />
        <Background />
      </div>
    </div>
  );
}

function SectionPriceRange() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Price Range">
      <Heading3 />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">MINIMUM RATING</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.25">
        <g id="Container">
          <path d={svgPaths.p389def00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[24px]">4.0+</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[34px] items-center px-[17px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container28 />
      <Margin />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.25">
        <g id="Container">
          <path d={svgPaths.p389def00} fill="var(--fill-0, #2B3400)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">4.5+</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ccf200] content-stretch flex items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container30 />
      <Margin1 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative rounded-[12px] shrink-0" data-name="Button:margin">
      <Button5 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[14.25px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.25">
        <g id="Container">
          <path d={svgPaths.p389def00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[24px]">5.0</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[4px] relative size-full">
        <Container33 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex h-[34px] items-center px-[17px] py-[9px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container32 />
      <Margin2 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[34px] items-start pl-[12px] relative shrink-0" data-name="Button:margin">
      <Button6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start overflow-auto py-[4px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <ButtonMargin />
      <ButtonMargin1 />
    </div>
  );
}

function SectionRating() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Rating">
      <Heading4 />
      <Container27 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">COACH TIER</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Grassroots</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Local</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Pro</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[17px] relative shrink-0 w-[58.73px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.14px)] not-italic text-[#dde3ed] text-[14px] text-center top-[8.5px] whitespace-nowrap">
          <p className="leading-[20px]">Marquee</p>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[17px] py-[9px] relative rounded-[inherit] size-full">
        <div className="absolute bg-gradient-to-r from-[#fbbf24] inset-px opacity-0 to-[#f59e0b] via-1/2 via-[#fef08a]" data-name="Gradient" />
        <Container35 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function SectionCoachTier() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section - Coach Tier">
      <Heading5 />
      <Container34 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">SPECIALTY</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px]">MULTI-SELECT</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container37 />
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Forward</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fitness</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Tactics</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[42px]">
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#ccf200] content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Goalkeeper</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Defender</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Midfielder</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Forward</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Fitness</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[292px]">
      <Frame1 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Container">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function SectionSpecialtyPosition() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[158px] items-start relative shrink-0 w-full" data-name="Section - Specialty / Position">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">AVAILABLE THIS WEEK</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#ccf200] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">M</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">W</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">T</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[rgba(204,242,0,0.1)] content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">F</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[12.5px] pt-[11.5px] px-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">S</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-auto relative shrink-0 w-full" data-name="Container">
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">FAST TRACK DISCOVERY</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-[110px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container41 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="bg-[#ccf200] h-[24px] relative rounded-[9999px] shrink-0 w-[44px]" data-name="Background" />
        <div className="absolute bg-white left-[22px] rounded-[9999px] size-[20px] top-[2px]" data-name="Background" />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container40 />
          <Label />
        </div>
      </div>
    </div>
  );
}

function SectionAvailability() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Availability">
      <Container39 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[128px] pt-[68px] px-[24px] relative size-full">
        <SectionSessionTypeSegmented />
        <SectionLocationConditional />
        <SectionPriceRange />
        <SectionRating />
        <SectionCoachTier />
        <SectionSpecialtyPosition />
        <Heading7 />
        <SectionAvailability />
      </div>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Button - Close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Button - Close">
          <path d={svgPaths.p15494480} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">FILTERS</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[191.835px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ButtonClose />
        <Heading />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">RESET</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black content-stretch flex h-[36px] items-center justify-between left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <Button26 />
    </div>
  );
}

function Button27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative shrink-0 w-[114px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[20px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">RESET FILTERS</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2b3400] text-[20px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">SHOW 42 COACHES</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[6px] pt-[7px] relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(145.653901deg, rgb(204, 242, 0) 0%, rgb(166, 197, 0) 100%)" }} data-name="Button">
      <Container43 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start pl-[16px] relative shrink-0 w-[244px]" data-name="Button:margin">
      <Button28 />
    </div>
  );
}

function Container42() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center max-w-[inherit] relative size-full">
        <Button27 />
        <ButtonMargin2 />
      </div>
    </div>
  );
}

function FooterStickyCtAs() {
  return (
    <div className="absolute backdrop-blur-[20px] bg-black bottom-0 content-stretch flex flex-col items-start left-0 pb-[16px] pt-[17px] px-[16px] w-[390px]" data-name="Footer - Sticky CTAs">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[10px] top-[64px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <HeaderTopAppBar />
      <FooterStickyCtAs />
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

export default function Filters() {
  return (
    <div className="bg-black relative size-full" data-name="FILTERS">
      <HtmlBody />
      <Container44 />
    </div>
  );
}
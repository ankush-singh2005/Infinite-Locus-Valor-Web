import svgPaths from "./svg-wt5no4pkrm";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">SQUAD ASSIGNMENT</p>
      </div>
    </div>
  );
}

function SectionSessionTypeSegmented() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section - Session Type (Segmented)">
      <Heading1 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[128px] pt-[68px] px-[16px] relative size-full">
        <SectionSessionTypeSegmented />
      </div>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11px]" data-name="Button - Close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
        <g id="Button - Close">
          <path d={svgPaths.p3068a900} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">BOOK COACH</p>
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
    <div className="absolute content-stretch flex flex-col h-[258px] items-start left-0 pb-[10px] top-[64px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <HeaderTopAppBar />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD A</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
          <p className="leading-[20px]">12 Players</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start left-0 px-[17px] py-[13px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_15px_0px_rgba(215,255,0,0.2)]" />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD B</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
          <p className="leading-[20px]">10 Players</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start left-[114.22px] px-[17px] py-[13px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">YOUTH ELITE</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
          <p className="leading-[20px]">8 Players</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start left-[228px] px-[17px] py-[13px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[70px] left-[16px] top-[176px] w-[504px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 12">
          <path d={svgPaths.p21e50b00} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Select specific players from roster</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #CCF200)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[0px] whitespace-nowrap">
          <p className="text-[13px]">
            <span className="leading-[20px] text-[rgba(255,255,255,0.6)]">Package allows up to</span>
            <span className="leading-[20px]">{` `}</span>
            <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic text-[#ccf200]">12 players</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0e0f11] content-stretch flex gap-[12px] items-center p-[13px] relative rounded-[12px] shrink-0 w-[252px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[16px] relative size-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[5px] top-[277px] w-[268px]">
      <Frame1 />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">SELECT DATE</p>
      </div>
    </div>
  );
}

function Margin() {
  return <div className="h-[21px] relative shrink-0 w-[106px]" data-name="Margin" />;
}

function Container10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Margin />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">MON</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[36px]">14</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] min-w-[80px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-w-[inherit] px-[27.89px] py-[13px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[10px] whitespace-nowrap">
          <p className="leading-[15px]">TUE</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c6c6c9] text-[24px] whitespace-nowrap">
          <p className="leading-[36px]">15</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] min-w-[80px] opacity-40 relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-w-[inherit] pl-[30.03px] pr-[30.05px] py-[13px] relative size-full">
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
          <p className="leading-[15px]">WED</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[36px]">16</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] min-w-[80px] relative rounded-[8px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-w-[inherit] pl-[28.45px] pr-[28.46px] py-[13px] relative size-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
          <p className="leading-[15px]">THU</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
          <p className="leading-[36px]">17</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] min-w-[80px] relative rounded-[12px] self-stretch shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-w-[inherit] pl-[29.33px] pr-[29.34px] py-[13px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[85px] items-start overflow-auto pb-[8px] relative shrink-0 w-[374px]" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function SectionAvailabilityStrip() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 px-[16px] right-0 top-[388px]" data-name="Section - Availability Strip">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">TIME SLOT</p>
      </div>
    </div>
  );
}

function Margin1() {
  return <div className="h-[21px] relative shrink-0 w-[106px]" data-name="Margin" />;
}

function Container20() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Margin1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(204,242,0,0.1)] col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[22.55px] pr-[22.54px] py-[13px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">09:00 AM</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[25.84px] pr-[25.86px] py-[13px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">10:30 AM</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-3 content-stretch flex flex-col items-center justify-center justify-self-start pl-[24.7px] pr-[24.71px] py-[13px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">02:00 PM</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 content-stretch flex flex-col items-center justify-center justify-self-start opacity-30 pl-[24.73px] pr-[24.74px] py-[13px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">03:30 PM</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-3 content-stretch flex flex-col items-center justify-center justify-self-start opacity-30 pl-[24.73px] pr-[24.74px] py-[13px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">06:30 PM</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-2 content-stretch flex flex-col items-center justify-center justify-self-start px-[24.81px] py-[13px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[20px]">05:00 PM</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__46px_46px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function SectionAvailabilityStrip1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 px-[16px] right-0 top-[544px]" data-name="Section - Availability Strip">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">LOCATION</p>
      </div>
    </div>
  );
}

function Margin2() {
  return <div className="h-[21px] relative shrink-0 w-[106px]" data-name="Margin" />;
}

function Container22() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[16px] right-[16px] top-[715px]" data-name="Container">
      <Heading4 />
      <Margin2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">{`COACH'S PIN`}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="h-[20px] relative shrink-0 w-[14px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p321d0880} fill="var(--fill-0, white)" id="Icon" />
          </svg>
        </div>
        <Container24 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex h-[50px] items-center pl-[13px] pr-[20.4px] py-[25px] relative rounded-[12px] shrink-0 w-[168px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-center pr-[20.12px] relative shrink-0 w-[154px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[24px]">USE OUR GROUND</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22de3980} fill="var(--fill-0, #CCF200)" id="Icon" />
          </svg>
        </div>
        <Container25 />
      </div>
    </div>
  );
}

function Container26() {
  return <div className="relative shrink-0 size-[20px]" data-name="Container" />;
}

function Button10() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(204,242,0,0.1)] content-stretch flex gap-[12px] items-center p-[13px] relative rounded-[12px] shrink-0 w-[168.98px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame4 />
      <Container26 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="col-1 content-stretch flex gap-[12px] items-center relative row-1 self-start shrink-0 w-[353.98px]">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_74px] left-[16px] top-[757px] w-[358px]" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[13px] overflow-auto right-[100px] top-[5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] w-full">
        <p className="leading-[24px]">Elite Training Center, Pitch 4</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0e0f11] h-[34px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container29 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[12px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[13px] py-[5px] relative size-full">
          <Container31 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Floodlights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p1d9bcc00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[12px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.99px] items-center px-[13px] py-[5px] relative size-full">
          <Container32 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
            <p className="leading-[24px]">Changing Rooms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[34px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[822px] w-[358px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">SESSION FOCUS</p>
      </div>
    </div>
  );
}

function Margin3() {
  return <div className="h-[21px] relative shrink-0 w-[106px]" data-name="Margin" />;
}

function Container33() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[25px] right-[7px] top-[933px]" data-name="Container">
      <Heading5 />
      <Margin3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] w-full whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">{`Goals for the squad, specific focus areas `}</p>
          <p className="leading-[24px]">for Coach Marcus...</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute bg-[#0e0f11] h-[81px] left-[21px] rounded-[12px] top-[975px] w-[353px]" data-name="Textarea">
      <div className="content-stretch flex items-start justify-center overflow-auto pl-[17px] pr-px py-[13px] relative rounded-[inherit] size-full">
        <Container34 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[20px]">{`Squad & Count`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Squad A • 12 Players</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[20px]">{`Date & Time`}</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Oct 18 • 09:00 AM</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[20px]">Type</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">F2F • 1 Session</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[8px] relative size-full">
        <Container36 />
        <Container39 />
        <Container42 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Total Amount</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[30px] whitespace-nowrap">
          <p className="leading-[36px]">200,000 ISK</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[17px] relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function SectionSummaryBlock() {
  return (
    <div className="absolute backdrop-blur-[10px] content-stretch flex flex-col gap-[16px] items-start left-[21px] pl-[21px] pr-[17px] py-[21px] right-[16px] rounded-[16px] top-[1123px]" data-name="Section - Summary Block">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container35 />
      <HorizontalBorder />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[20px] top-[1081px]" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">BOOKING SUMMARY</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#d7ff00] content-stretch drop-shadow-[0px_0px_15px_rgba(215,255,0,0.3)] flex h-[48px] items-center justify-center left-[17px] py-[16px] right-[15px] rounded-[12px] top-[1384px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center uppercase whitespace-nowrap">
        <p className="leading-[28px]">CONTINUE TO PAYMENT</p>
      </div>
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

function Container48() {
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

function Container49() {
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

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container48 />
      <Container49 />
    </div>
  );
}

export default function BookCoach() {
  return (
    <div className="bg-black relative size-full" data-name="BOOK COACH">
      <HtmlBody />
      <Container />
      <Frame3 />
      <SectionAvailabilityStrip />
      <SectionAvailabilityStrip1 />
      <Container22 />
      <Container23 />
      <Container27 />
      <Container33 />
      <Textarea />
      <SectionSummaryBlock />
      <Paragraph />
      <Button11 />
      <Container47 />
    </div>
  );
}
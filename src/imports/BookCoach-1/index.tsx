import svgPaths from "./svg-u03dujh4na";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">SELECT SQUAD SIZE</p>
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
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[36px]">Package Deals</p>
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

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.982px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9815 20">
        <g id="Container">
          <path d={svgPaths.pb5c2400} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-black content-stretch flex h-[36px] items-center justify-between left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Frame />
      <Button />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col h-[182px] items-start left-0 pb-[10px] top-[64px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <HeaderTopAppBar />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD C</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
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

function Button1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start left-[228px] px-[17px] py-[13px] rounded-[12px] top-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD A</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap">
          <p className="leading-[20px]">4 Players</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start px-[17px] py-[13px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD B</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
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

function Button3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start px-[17px] py-[13px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_15px_0px_rgba(215,255,0,0.2)]" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD C</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
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

function Button4() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start px-[17px] py-[13px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[24px]">SQUAD C</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
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

function Button5() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start px-[17px] py-[13px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[19px] items-center left-0 top-0">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[70px] left-[16px] top-[176px] w-[504px]" data-name="Container">
      <Button1 />
      <Frame1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[21px] right-[20px] top-[1081px]" data-name="Paragraph">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">BOOKING SUMMARY</p>
      </div>
      <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path d={svgPaths.p396ca1c0} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[30px]">Basic Package</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[226px]">
        <p className="leading-[24px] mb-0">Fundamentals for your</p>
        <p className="leading-[24px]">team</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] top-[calc(50%-69px)] w-[226px]" data-name="Container">
      <Heading3 />
      <Container13 />
    </div>
  );
}

function Paragraph1() {
  return <div className="absolute h-[42px] left-[279px] right-[17px] top-[19.5px]" data-name="Paragraph" />;
}

function Button6() {
  return (
    <div className="absolute bg-[#b3d400] content-stretch drop-shadow-[0px_0px_10px_rgba(179,212,0,0.4)] flex h-[48px] items-center justify-center left-[25px] py-[16px] rounded-[12px] top-[185px] w-[308px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">select basic</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] not-italic right-[20px] text-[#ccf200] text-right top-[17px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center right-[20px] text-[28px] top-[38px]">
        <p className="leading-[42px]">100,000 ISK</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center right-[21px] text-[14px] top-[59px] tracking-[0.7px]">
        <p className="leading-[14px]">/SESSION</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Standard Court Access</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">{`Water & Hydration Station`}</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[17px] right-[40px] top-[107px]" data-name="Container">
      <Container15 />
      <Container18 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[250px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container12 />
      <Paragraph1 />
      <Button6 />
      <Group />
      <Container14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[30px]">PRO Package</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[226px]">
        <p className="leading-[24px] mb-0">Elite performance</p>
        <p className="leading-[24px]">tools</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] top-[calc(50%-85.5px)] w-[226px]" data-name="Container">
      <Heading4 />
      <Container22 />
    </div>
  );
}

function Paragraph2() {
  return <div className="absolute h-[42px] left-[279px] right-[17px] top-[19.5px]" data-name="Paragraph" />;
}

function Button7() {
  return (
    <div className="absolute bg-[#b3d400] content-stretch drop-shadow-[0px_0px_10px_rgba(179,212,0,0.4)] flex h-[48px] items-center justify-center left-[25px] py-[16px] rounded-[12px] top-[218px] w-[308px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">BOOK PRO</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] not-italic right-[20px] text-[#ccf200] text-right top-[17px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center right-[20px] text-[28px] top-[38px]">
        <p className="leading-[42px]">200,000 ISK</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center right-[21px] text-[14px] top-[59px] tracking-[0.7px]">
        <p className="leading-[14px]">/SESSION</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Premium Indoor Courts</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Dedicated Pro Coach (1hr)</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">High-End Equipment Rental</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[17px] right-[40px] top-[107px]" data-name="Container">
      <Container24 />
      <Container27 />
      <Container30 />
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[283px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container21 />
      <Paragraph2 />
      <Button7 />
      <Group1 />
      <Container23 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[148px]">
        <p>
          <span className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[30px] not-italic">Elite</span>
          <span className="leading-[30px]">{` Package`}</span>
        </p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[226px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`The complete VIP `}</p>
        <p className="leading-[24px]">stadium experience</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] top-[calc(50%-85.5px)] w-[226px]" data-name="Container">
      <Heading5 />
      <Container34 />
    </div>
  );
}

function Paragraph3() {
  return <div className="absolute h-[42px] left-[279px] right-[17px] top-[19.5px]" data-name="Paragraph" />;
}

function Button8() {
  return (
    <div className="absolute bg-[#b3d400] content-stretch drop-shadow-[0px_0px_10px_rgba(179,212,0,0.4)] flex h-[48px] items-center justify-center left-[25px] py-[16px] rounded-[12px] top-[218px] w-[308px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[24px] text-center tracking-[0.72px] whitespace-nowrap">
        <p className="leading-[28px]">{`sELECT ELITE `}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[word-break:break-word] absolute contents leading-[0] not-italic right-[20px] text-[#ccf200] text-right top-[17px] whitespace-nowrap">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center right-[20px] text-[28px] top-[38px]">
        <p className="leading-[42px]">400,000 ISK</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center right-[21px] text-[14px] top-[59px] tracking-[0.7px]">
        <p className="leading-[14px]">/SESSION</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Full Stadium Access</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">{`Full Catering & Recovery Lounge`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[15.75px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15.75">
        <g id="Container">
          <path d={svgPaths.p26ccbe40} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[21px]">Private Locker Rooms</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[17px] right-[40px] top-[107px]" data-name="Container">
      <Container36 />
      <Container39 />
      <Container42 />
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[283px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container33 />
      <Paragraph3 />
      <Button8 />
      <Group2 />
      <Container35 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[278px] w-[358px]">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.pa587e80} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">COMPARE PACKAGE DETAILS</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function CompareStrip() {
  return (
    <div className="absolute bg-[#0e0f11] content-stretch flex items-center justify-between left-[16px] p-[16px] rounded-[8px] top-[1166px] w-[358px]" data-name="Compare Strip">
      <Container45 />
      <Container48 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[26px]">Need something else?</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#565e74] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Custom tournaments, team-building, or</p>
        <p className="leading-[24px]">monthly memberships.</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[4px] items-start left-1/2 top-[72px] w-[260px]" data-name="Container">
      <Heading2 />
      <Container50 />
    </div>
  );
}

function Button9() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] px-[2px] py-[18px] rounded-[8px] top-[166px] w-[229px]" data-name="Button">
      <div aria-hidden className="absolute border-2 border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[14px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">REQUEST CUSTOM PACKAGE</p>
      </div>
    </div>
  );
}

function CustomRequestCard() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-[#0e0f11] border border-[rgba(255,255,255,0.1)] border-dashed h-[234px] left-1/2 rounded-[12px] top-[1246px] w-[358px]" data-name="Custom Request Card">
      <div className="-translate-x-1/2 absolute left-1/2 size-[40px] top-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <path d={svgPaths.p3c300f00} fill="var(--fill-0, #565E74)" id="Icon" />
        </svg>
      </div>
      <Container49 />
      <Button9 />
    </div>
  );
}

function Container52() {
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
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">DASHBOARD</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <House />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bottom-1/4 content-stretch flex flex-col items-start left-0 right-0 top-1/4" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 12">
          <path d={svgPaths.p5df3d80} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Compass() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Compass">
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PLAYERS</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Compass />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[21.88%_8.33%_28.13%_8.33%] items-start" data-name="Container">
      <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
          <path d={svgPaths.p11161b00} fill="var(--fill-0, #C6C6C9)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="CalendarBlank">
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">COACHES</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <CalendarBlank />
      <Container57 />
    </div>
  );
}

function Container58() {
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
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">SESSIONS</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <BookOpenText />
      <Container59 />
    </div>
  );
}

function Container60() {
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

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PROFILE</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container51() {
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
    <div className="absolute backdrop-blur-[12px] bg-black bottom-0 content-stretch flex flex-col items-start left-0 pb-[33px] pt-[17px] px-[17px] w-[390px]" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container51 />
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

function Container63() {
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

function Container64() {
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

function Container62() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container63 />
      <Container64 />
    </div>
  );
}

export default function BookCoach() {
  return (
    <div className="bg-black relative size-full" data-name="BOOK COACH">
      <HtmlBody />
      <Container1 />
      <Paragraph />
      <Frame2 />
      <CompareStrip />
      <CustomRequestCard />
      <BottomNavigationActiveSharedComponentMockup />
      <Container62 />
    </div>
  );
}
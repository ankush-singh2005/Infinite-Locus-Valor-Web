import svgPaths from "./svg-24k0kuvqp7";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16px]">STEP 2 OF 6</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">session type</p>
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

function Background() {
  return (
    <div className="bg-[#1a2028] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#ccf200] inset-[0_60%_0_0]" data-name="Background" />
    </div>
  );
}

function ProgressHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Progress Header">
      <Container />
      <Background />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">session type</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[24px] mb-0 whitespace-pre">{`How will you deliver your performance sessions? Choose `}</p>
        <p className="leading-[24px] whitespace-pre">your primary delivery method.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Heading />
      <Container3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[26.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.4 26.4">
          <path d={svgPaths.p2d11f400} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#d7ff00] text-[24px]">
        <p className="leading-[28px]">F2F (Face-to-Face)</p>
      </div>
    </div>
  );
}

function Margin() {
  return <div className="absolute h-[30.4px] left-[16px] top-[9px] w-[42.4px]" data-name="Margin" />;
}

function Heading2() {
  return <div className="flex-[1_0_0] h-[28px] min-w-px relative" data-name="Heading 3" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-[279px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px not-italic relative text-[13px] text-white w-[337px]">
        <p className="leading-[24px]">{`In-person elite training at your preferred facility or client's location. Best for tactical drills and hands-on coaching.`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[119px] items-start left-[9px] right-[68px] top-[9px]" data-name="Container">
      <Heading2 />
      <Container5 />
    </div>
  );
}

function RadioOptionF2FLabel() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border border-[rgba(255,255,255,0.1)] border-solid h-[97px] left-0 right-0 rounded-[12px] top-0" data-name="Radio Option: F2F → Label">
      <Margin />
      <Container4 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-[42.667px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.6667 25.3333">
        <g id="Margin">
          <path d={svgPaths.p24d83f80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] w-full">
        <p className="leading-[28px]">Online</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Margin1 />
      <Heading3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px not-italic relative text-[13px] text-white w-full">
        <p className="leading-[24px]">Remote coaching sessions via high-fidelity video calls. Integrated links for Zoom, Google Meet, or Teams.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[11px] right-[10px] top-[7px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute h-[20px] left-[303px] top-[69px] w-[32px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20">
        <g id="Margin">
          <path d={svgPaths.p28beb680} fill="var(--fill-0, #CCF200)" id="Icon" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function RadioOptionOnlineLabel() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[97px] relative rounded-[12px] shrink-0 w-full" data-name="Radio Option: Online → Label">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container6 />
      <Margin2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 top-[118px] w-[363px]">
      <Frame4 />
      <RadioOptionOnlineLabel />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] w-full">
        <p className="leading-[28px]">Hybrid</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[21px] items-end relative shrink-0 w-full">
      <div className="relative shrink-0 size-[21.333px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
          <path d={svgPaths.p116f06c0} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Heading4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[274px] w-[358px]">
      <Frame6 />
    </div>
  );
}

function Margin3() {
  return <div className="absolute h-[25.333px] left-[16px] top-[12px] w-[37.333px]" data-name="Margin" />;
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[0.02px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-[332px]">
        <p className="leading-[24px]">As a remote expert, you provide the technical guidance via video while a local coach co-runs the physical session on-site with the players.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[72px] left-[16px] right-[7px] top-[9px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute h-[20px] left-[303.98px] top-[68px] w-[32px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20">
        <g id="Margin">
          <path d={svgPaths.p28beb680} fill="var(--fill-0, #CCF200)" id="Icon" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function RadioOptionBothLabel() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border border-[#d7ff00] border-solid h-[97px] left-0 right-[11px] rounded-[12px] top-0" data-name="Radio Option: Both → Label">
      <Margin3 />
      <Container8 />
      <Margin4 />
    </div>
  );
}

function Button() {
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

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ccf200] content-stretch drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] flex h-[48px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-[226.67px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Changes are saved automatically to your draft.</p>
      </div>
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[5px] right-[5px] top-[133px]" data-name="CTA Action">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[97px] left-0 top-[314px] w-[368px]">
      <RadioOptionBothLabel />
      <CtaAction />
    </div>
  );
}

function Form() {
  return (
    <div className="h-[423px] relative shrink-0 w-full" data-name="Form">
      <RadioOptionF2FLabel />
      <Frame5 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Form />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[891px] items-start max-w-[512px] pt-[96px] px-[16px] relative shrink-0 w-[390px]" data-name="Main">
      <ProgressHeader />
      <Section />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] w-[258px]">
        <p className="leading-[28px]">SET YOUR session type</p>
      </div>
    </div>
  );
}

function Button2() {
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

function Container13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading1 />
        <Button2 />
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
      <Container13 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col h-[891px] items-start left-0 top-[60px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <HeaderTopAppBar />
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

function Container15() {
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

function Container16() {
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

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container15 />
      <Container16 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-black relative size-full" data-name="STEP 19">
      <HtmlBody />
      <Container14 />
    </div>
  );
}
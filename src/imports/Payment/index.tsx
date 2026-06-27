import svgPaths from "./svg-lx5kpz79n9";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[36px]">PAYMENT</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-[220.9px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
            <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
          </svg>
        </div>
        <Heading />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,10,10,0.95)] h-[36px] relative shrink-0 w-full z-[3]" data-name="Header">
      <div aria-hidden className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[17px] pl-[16px] pr-[153.1px] pt-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center whitespace-nowrap">
        <p className="leading-[32px]">PAY120,000 ISK</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #181E00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d4ff00] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[16px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[8.016px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.01562 10.5">
        <g id="Container">
          <path d={svgPaths.p36c5c880} fill="var(--fill-0, #737373)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[15px]">{`SAFE & SECURE 256-BIT ENCRYPTION`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(10,10,10,0.9)] bottom-[-0.5px] content-stretch flex flex-col gap-[12px] items-start left-0 max-w-[448px] pb-[16px] pt-[17px] px-[16px] w-[390px] z-[2]" data-name="Footer">
      <div aria-hidden className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
      <Button />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] w-full">
        <p className="leading-[28px]">ORDER SUMMARY</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">COACH</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Marcus Vane</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[115px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PACKAGE</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white w-[155px]">
        <p className="leading-[24px]">Elite Finishing (F2F)</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[155px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container7 />
        <Container10 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[12.852px] relative shrink-0 w-[11.648px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6484 12.8516">
        <g id="Container">
          <path d={svgPaths.pb0d4120} fill="var(--fill-0, #A3A3A3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Wed, Oct 18 • 09:00 AM</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Session Price</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">100,000 ISK</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Platform Fee</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">20,000 ISK</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Bebas_Neue:Regular',sans-serif] items-baseline justify-between leading-[0] not-italic pt-[8px] relative size-full whitespace-nowrap">
        <div className="flex flex-col justify-center relative shrink-0 text-[14px] text-white tracking-[1px]">
          <p className="leading-[28px]">TOTAL</p>
        </div>
        <div className="flex flex-col justify-center relative shrink-0 text-[#d4ff00] text-[30px] tracking-[1.5px]">
          <p className="leading-[36px]">120,000 ISK</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#262626] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pt-[17px] relative size-full">
        <Container16 />
        <Container19 />
        <Paragraph />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[17px] relative size-full">
        <Container6 />
        <Container13 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <BackgroundBorder />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] w-full">
        <p className="leading-[28px]">APPLY COUPON</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[1.4px] uppercase w-full">
          <p className="leading-[normal]">ENTER CODE</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0f1012] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[17px] relative size-full">
          <Container23 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f1012] content-stretch flex flex-col items-center justify-center pb-[11.5px] pt-[10.5px] px-[25px] relative rounded-[12px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.8px] whitespace-nowrap">
        <p className="leading-[24px]">APPLY</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Button1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d4ff00] text-[10px] uppercase w-full">
        <p className="leading-[15px]">SPECIAL OFFER</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.9px] w-full">
        <p className="leading-[18px] mb-0">SAVE 10% ON FIRST</p>
        <p className="leading-[18px]">SESSION</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(212,255,0,0.7)] w-full">
        <p className="leading-[15px]">CODE: FIRSTVALUR</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="absolute bg-[rgba(212,255,0,0.1)] bottom-[8px] content-stretch flex flex-col items-start justify-between left-0 min-w-[200px] p-[13px] rounded-[12px] top-0 w-[200px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(212,255,0,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container25 />
      <Margin />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] uppercase w-full">
        <p className="leading-[15px]">LOYALTY REWARD</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[0.9px] w-full">
        <p className="leading-[18px] mb-0">BUNDLE DISCOUNT - €15</p>
        <p className="leading-[18px]">OFF</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737373] text-[10px] w-full">
        <p className="leading-[15px]">CODE: BUNDLEUP</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="absolute bg-[#0f1012] bottom-[8px] content-stretch flex flex-col items-start justify-between left-[212px] min-w-[200px] p-[13px] rounded-[12px] top-0 w-[200px]" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container29 />
      <Margin1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[112px] overflow-auto relative shrink-0 w-[373px]" data-name="Container">
      <OverlayBorder />
      <OverlayBorder1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] w-full">
        <p className="leading-[28px]">PAYMENT METHOD</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[16.031px] relative shrink-0 w-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 16.0312">
        <g id="Container">
          <path d={svgPaths.p31170e00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#262626] content-stretch flex h-[32px] items-center justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.5px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Credit/Debit Card</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(212,255,0,0.2)] content-stretch flex flex-col items-start px-[4px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d4ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[16px]">SAVED</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Visa **** 4421</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136.48px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background />
        <Container36 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.p16781800} fill="var(--fill-0, #D4FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border-2 border-[#d4ff00] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[18px] relative size-full">
          <Container34 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pdcb9920} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-black content-stretch flex h-[32px] items-center justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Svg />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Apple Pay</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background1 />
        <Container41 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.pd99300} fill="var(--fill-0, #525252)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[17px] relative size-full">
          <Container40 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1d661240} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p197ca980} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p20603340} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p17a7fc80} fill="var(--fill-0, #EA4335)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1e1e1e] content-stretch flex h-[32px] items-center justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Svg1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Google Pay</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background2 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.pd99300} fill="var(--fill-0, #525252)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[17px] relative size-full">
          <Container43 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[15.82px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8203 15">
        <g id="Container">
          <path d={svgPaths.pb4cdb00} fill="var(--fill-0, #D4FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#262626] content-stretch flex h-[32px] items-center justify-center relative rounded-[12px] shrink-0 w-[48px]" data-name="Background">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Valur Wallet</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Balance: £25.00</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93.92px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Background3 />
        <Container48 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 size-[19.969px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9688 19.9688">
        <g id="Container">
          <path d={svgPaths.pd99300} fill="var(--fill-0, #525252)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#0f1012] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[17px] relative size-full">
          <Container46 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <Container33 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1px] w-full">
        <p className="leading-[28px]">BILLING DETAILS</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#e2e2e5] text-[16px] w-full">
        <p className="leading-[24px]">07AABCM1234F1Z5</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return <div className="relative shrink-0 size-[11.667px]" data-name="Container" />;
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex items-center left-0 p-[17px] right-0 rounded-[12px] top-[28px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input1 />
      <Container55 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[102px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[8px] not-italic text-[13px] text-white top-[12px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">GST NUMBER</p>
      </div>
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
        <p className="leading-[normal]">finance@elitesquad.pro</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center px-[12px] py-[10px] relative size-full">
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col items-start left-0 p-[17px] right-0 rounded-[12px] top-[28px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input2 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[102px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[8px] not-italic text-[13px] text-white top-[12px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">TAX INVOICE RECIPIENT</p>
      </div>
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">GENERATE PROFORMA INVOICE</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container56 />
      <Container58 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading4 />
      <Container52 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[16px] py-[24px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col isolate items-start max-w-[448px] min-h-[1184px] pb-[128px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Footer />
      <Main />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[64px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <div className="absolute bg-[rgba(212,255,0,0.05)] blur-[50px] right-0 rounded-[9999px] size-[256px] top-0" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(212,255,0,0.05)] blur-[50px] bottom-[-0.5px] left-0 rounded-[9999px] size-[256px]" data-name="Overlay+Blur" />
      <Container />
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

function Container60() {
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

function Container61() {
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

function Container59() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container60 />
      <Container61 />
    </div>
  );
}

export default function Payment() {
  return (
    <div className="bg-black relative size-full" data-name="payment">
      <HtmlBody />
      <Container59 />
    </div>
  );
}
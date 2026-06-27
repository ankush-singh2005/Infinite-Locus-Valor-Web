import svgPaths from "./svg-bjpa2xo1px";

function SpanFontLabelCaps() {
  return <div className="absolute h-[16px] left-[26px] top-[496px] w-[241px]" data-name="span.font-label-caps" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
          <p className="leading-[26px]">GROSS PACKAGE PRICE</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#d7ff00] relative rounded-[6px] shrink-0 w-[293px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">Per Package</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return <div className="flex-[1_0_0] h-[30px] min-w-px relative" data-name="Button" />;
}

function Toggle() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Toggle">
      <div aria-hidden className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[5px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return <div className="h-[14px] relative shrink-0 w-full" data-name="Label" />;
}

function Container4() {
  return (
    <div className="h-[52.8px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#ccf200] text-[48px] top-[calc(50%-0.4px)] tracking-[0.96px] w-[260px]">
        <p className="leading-[48px]">2,000,000 ISK</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container4 />
    </div>
  );
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container3 />
        <div className="flex flex-row items-center self-stretch">
          <RectangleAlignStretch />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[26px] py-[18px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
    </div>
  );
}

function Container5() {
  return <div className="h-[20px] relative shrink-0 w-full" data-name="Container" />;
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <Label />
      <Container1 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[151px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Toggle />
        <InputField />
      </div>
    </div>
  );
}

function Section4PayoutSplit() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[#0e0f11] content-stretch flex flex-col gap-[16px] h-[228px] items-start left-[24px] p-[17px] right-[25px] rounded-[12px] top-[200px]" data-name="Section 4: PAYOUT SPLIT">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading1 />
      <Container />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Container">
          <path d={svgPaths.p102d5dbe} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 right-0 top-0" data-name="Heading 3">
      <Container7 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.7px] uppercase w-[209px]">
        <p className="leading-[14px]">HYBRID PAYOUT PREVIEW</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Gross Package Price</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
          <p className="leading-[26px]">123,200 ISK</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(51,51,51,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff4d4d] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">Platform Fee (20%)</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff4d4d] text-[20px] whitespace-nowrap">
          <p className="leading-[26px]">240.00 ISK</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(51,51,51,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">DISTRIBUTABLE NET</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[20px] whitespace-nowrap">
        <p className="leading-[26px]">960,000 ISK</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[4px] shrink-0 w-full" data-name="Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[16px] relative size-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-0 right-0 top-[40px]" data-name="Container">
      <HorizontalBorder />
      <HorizontalBorder1 />
      <Overlay />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16.5px] top-[16px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.7px] uppercase w-full">
        <p className="leading-[14px]">YOUR SHARE (70%)</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#d7ff00] h-[108px] left-0 rounded-[8px] top-[232px] w-[151px]" data-name="Background">
      <Container15 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[63px] justify-center leading-[0] left-[16px] not-italic text-[0px] text-black top-[69.5px] w-[119px]">
        <p className="leading-[24px] mb-0 text-[40px]">960,000</p>
        <p className="leading-[24px] text-[24px]">ISK</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[15px] right-[15.5px] top-[15px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[14px]">LOCAL SHARE (30%)</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[rgba(215,255,0,0.1)] border border-[#d7ff00] border-solid h-[108px] left-[158px] rounded-[8px] top-[232px] w-[151px]" data-name="Background">
      <Container16 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[63px] justify-center leading-[0] left-[15px] not-italic text-[#d7ff00] text-[0px] top-[68.5px] w-[119px]">
        <p className="leading-[24px] mb-0 text-[40px]">60,000</p>
        <p className="leading-[24px] text-[24px]">ISK</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[340px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading2 />
        <Container8 />
        <Background />
        <Background1 />
      </div>
    </div>
  );
}

function SectionLivePreviewCalculation() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[384px] left-[calc(50%-0.5px)] rounded-[12px] top-[780px] w-[341px]" data-name="Section - Live Preview Calculation">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[17px] relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
          <p className="leading-[26px]">PAYOUT SPLIT CONFIG</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#d7ff00] flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">PERCENTAGE (%)</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-center tracking-[0.7px] uppercase whitespace-nowrap">
          <p className="leading-[14px]">{`FIXED PRICE `}</p>
        </div>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Toggle">
      <div aria-hidden className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[5px] relative size-full">
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold_Italic',sans-serif] font-bold italic justify-center leading-[0] relative shrink-0 text-[#a0a0a0] text-[14px] tracking-[0.7px] uppercase w-full">
        <p className="leading-[14px]">LOCAL COACH SHARE</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[52.8px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#d7ff00] text-[48px] top-[26.5px] tracking-[-0.96px] w-[147px]">
        <p className="leading-[52.8px]">{`30 `}</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container21 />
    </div>
  );
}

function RectangleAlignStretch1() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container20 />
        <div className="flex flex-row items-center self-stretch">
          <RectangleAlignStretch1 />
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-black relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[26px] py-[18px] relative size-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden className="absolute border-2 border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bottom-[28.39%] content-stretch flex flex-col items-start right-[23.99px] top-[27.25%]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-[rgba(215,255,0,0.5)] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[38.4px]">%</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#a0a0a0] text-[13px] w-[316px]">
        <p className="leading-[20px]">Standard industry split is 30-40% for local execution.</p>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <Label1 />
      <Container18 />
      <Container23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Toggle1 />
        <InputField1 />
      </div>
    </div>
  );
}

function Section4PayoutSplit1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-col gap-[16px] h-[296px] items-start left-[24px] p-[17px] right-[25px] rounded-[12px] top-[452px]" data-name="Section 4: PAYOUT SPLIT">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[16px]">STEP 5 OF 6</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">PRICING</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[15px] top-[50px] w-[342px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function DynamicVisualBackground() {
  return (
    <div className="absolute inset-[24px_0_-356px_0] overflow-clip" data-name="Dynamic Visual Background">
      <SpanFontLabelCaps />
      <Section4PayoutSplit />
      <SectionLivePreviewCalculation />
      <Section4PayoutSplit1 />
      <Container24 />
    </div>
  );
}

function ProgressBarOverlay() {
  return (
    <div className="absolute bg-[#2f353d] h-[4px] left-[24px] overflow-clip right-[19px] rounded-[9999px] top-[96px]" data-name="Progress Bar Overlay">
      <div className="absolute bg-[#ccf200] inset-[0_17.84%_0_0] shadow-[0px_0px_10px_0px_rgba(204,242,0,0.5)]" data-name="div.h-full" />
    </div>
  );
}

function H2FontHeadlineMd() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.font-headline-md">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">Set Your Value</p>
      </div>
    </div>
  );
}

function PFontBodySm() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.font-body-sm">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[24px]">{`Define your pricing structure for the 'Elite Performance' package. Transparent calculations for elite results.`}</p>
      </div>
    </div>
  );
}

function SectionSpaceYXs() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-[124px]" data-name="section.space-y-xs">
      <H2FontHeadlineMd />
      <PFontBodySm />
    </div>
  );
}

function MainPt() {
  return (
    <div className="absolute h-[993px] left-0 right-0 top-[58px]" data-name="main.pt-24">
      <DynamicVisualBackground />
      <ProgressBarOverlay />
      <SectionSpaceYXs />
    </div>
  );
}

function Margin() {
  return <div className="absolute h-[25.333px] left-[15px] top-[15px] w-[37.333px]" data-name="Margin" />;
}

function Margin1() {
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

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[299px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[278px]">
        <p className="leading-[20px] mb-0">Players see a single total price. The</p>
        <p className="leading-[20px] mb-0">payout split is managed automatically</p>
        <p className="leading-[20px] mb-0">on the backend to ensure local</p>
        <p className="leading-[20px]">coaches are compensated instantly.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[46px] top-[15px] w-[302px]" data-name="Container">
      <Container28 />
    </div>
  );
}

function RadioOptionBothLabel() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border border-[rgba(255,255,255,0.1)] border-solid h-[110px] left-[24px] right-[25px] rounded-[12px] top-[1270px]" data-name="Radio Option: Both → Label">
      <Margin />
      <Margin1 />
      <div className="absolute left-[15px] size-[20px] top-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container27 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] text-left w-[258px]">
        <p className="leading-[28px]">{`pricing & split`}</p>
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

function Container31() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
        <Button4 />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <a className="absolute backdrop-blur-[6px] bg-black content-stretch cursor-pointer flex gap-[10px] h-[64px] items-center left-0 pb-px px-[16px] top-[60px] w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container31 />
    </a>
  );
}

function Button5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-0 px-px py-[17px] right-[242.67px] rounded-[12px] top-1/2" data-name="Button">
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

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Button6() {
  return (
    <a className="-translate-y-1/2 absolute bg-[#ccf200] content-stretch cursor-pointer drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] flex h-[48px] items-center justify-center left-[131px] py-[16px] right-[17px] rounded-[12px] top-1/2" data-name="Button">
      <Container33 />
    </a>
  );
}

function Container32() {
  return (
    <div className="absolute h-[50px] left-0 right-[-17px] top-0" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-[-17px] top-[74px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Changes are saved automatically to your draft.</p>
      </div>
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute h-[94px] right-[25px] top-[1429px] w-[341px]" data-name="CTA Action">
      <Container32 />
      <Container34 />
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

function Container36() {
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
        <g clipPath="url(#clip0_16_2264)" id="Icon">
          <path d={svgPaths.p2ecc2040} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p814b800} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p263696c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_16_2264">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container37() {
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

function Container35() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container36 />
      <Container37 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-black relative size-full" data-name="STEP 22">
      <MainPt />
      <RadioOptionBothLabel />
      <HeaderTopAppBar />
      <CtaAction />
      <Container35 />
    </div>
  );
}
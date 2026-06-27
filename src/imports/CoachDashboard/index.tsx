import svgPaths from "./svg-6vhxku49fj";
import img0 from "./3fdee62d81f68130daeb6252b1a63281fadf2430.png";
import img1 from "./eb2aa3983147930c8729e8f7f0810d792bb9da12.png";
import img2 from "./10693231349170d72cabd383c55bacf254b0f8bd.png";
import img3 from "./b0e2a095e49d4224b9b6ff81794384c867155619.png";
import img674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg from "./c31c5f5a0b3d05af3bb2530e33e1bf1f7660749d.png";

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[6px] relative size-full">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] relative shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[50px] items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function Component() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="0">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img0} />
      </div>
    </div>
  );
}

function DivW2() {
  return (
    <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="div.w-10">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Component />
      </div>
      <div aria-hidden className="absolute border-2 border-[#c8f000] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function DivTextPrimary() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="div.text-primary">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c8f000] text-[24px] tracking-[0.375px] uppercase whitespace-nowrap">
        <p className="leading-[22.5px]">Good Morning, Coach</p>
      </div>
    </div>
  );
}

function DivTextMutedForeground() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[22.5px]" data-name="div.text-muted-foreground">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">Pro Performance Tier</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[37.16px] relative shrink-0 w-[192.61px]" data-name="div">
      <DivTextPrimary />
      <DivTextMutedForeground />
    </div>
  );
}

function DivFlex1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[20px] top-[calc(50%+8px)]" data-name="div.flex">
      <DivW2 />
      <Div />
    </div>
  );
}

function Button1() {
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

function Container() {
  return <div className="absolute right-[8px] size-[10px] top-[8px]" data-name="Container" />;
}

function Button() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[337px] rounded-[9999px] size-[40px] top-[24px]" data-name="Button">
      <Button1 />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-start right-[8px] size-[10px] top-[8px]" data-name="Container">
      <div className="absolute bg-[#d7ff00] left-0 opacity-75 rounded-[9999px] size-[10px] top-0" data-name="Background" />
      <div className="bg-[#d7ff00] relative rounded-[9999px] shrink-0 size-[10px]" data-name="Background" />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[293px] rounded-[9999px] size-[40px] top-[24px]" data-name="Button">
      <Container1 />
      <Container2 />
    </div>
  );
}

function DivFlex() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="div.flex">
      <DivFlex1 />
      <Button />
      <Button2 />
    </div>
  );
}

function DivTextXs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.text-xs">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.24px] uppercase w-full">
        <p className="leading-[14.67px]">Your Overview</p>
      </div>
    </div>
  );
}

function DivTextXs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.text-xs">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">{`Week's Sessions`}</p>
      </div>
    </div>
  );
}

function DivText4Xl() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.text-4xl">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white whitespace-nowrap">
        <p className="leading-[48px]">12</p>
      </div>
    </div>
  );
}

function SpanTextPrimary() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-primary">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c8f000] text-[13px] whitespace-nowrap">
        <p className="leading-[14.67px]">↑ 14%</p>
      </div>
    </div>
  );
}

function SpanTextMutedForeground() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span.text-muted-foreground">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[13px] whitespace-nowrap">
        <p className="leading-[14.67px]">vs last week</p>
      </div>
    </div>
  );
}

function DivFlex2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="div.flex">
      <SpanTextPrimary />
      <SpanTextMutedForeground />
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-[122px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <DivTextXs1 />
        <DivText4Xl />
        <DivFlex2 />
      </div>
    </div>
  );
}

function DivFlex3() {
  return (
    <div className="bg-[#0e0f11] col-1 content-stretch flex gap-[4px] h-[52px] items-end ml-[1.58px] mt-0 relative row-1" data-name="div.flex">
      <div className="bg-[#1e1e1e] h-[15.59px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#1e1e1e] h-[26px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#1e1e1e] h-[20.8px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#1e1e1e] h-[33.8px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#1e1e1e] h-[28.59px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#1e1e1e] h-[41.59px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
      <div className="bg-[#c8f000] h-[52px] relative rounded-[12px] shrink-0 w-[12px]" data-name="div.w-3" />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <DivFlex3 />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-0 mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">M</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[16px] mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">T</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[32px] mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">W</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[48px] mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">T</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[64px] mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">F</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[80px] mt-[50px] not-italic relative row-1 text-[#888] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">S</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center ml-[96px] mt-[50px] not-italic relative row-1 text-[#d7ff00] text-[6px] text-center uppercase w-[14px]">
        <p className="leading-[14.67px]">S</p>
      </div>
    </div>
  );
}

function DivRoundedXl() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[12px] shrink-0 w-full" data-name="div.rounded-xl">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[67.58px] items-center p-[21px] relative size-full">
          <Div1 />
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function DivTextXs2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[15.33px]" data-name="div.text-xs">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] uppercase w-full">
        <p className="leading-[14.67px] mb-0">{`Month's`}</p>
        <p className="leading-[14.67px]">Earnings</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center justify-center leading-[0] not-italic relative shrink-0 w-[84px]">
      <div className="flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[28px] whitespace-pre">{`700,000 ISK  `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[17px] justify-center relative shrink-0 text-[#c8f000] text-[11px] w-[35px]">
        <p className="leading-[14.67px]">↑ 15%</p>
      </div>
    </div>
  );
}

function SpanTextPrimary1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[44px] right-[-12px] top-[53.33px]" data-name="span.text-primary">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[63px]">
      <div className="h-[11px] relative shrink-0 w-[9px]" data-name="Icon">
        <div className="absolute inset-[0_0_9.09%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.pff5fa00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">May</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function SpanTextMutedForeground1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start left-0 top-[calc(50%-0.33px)] w-[38px]" data-name="span.text-muted-foreground">
      <Frame1 />
    </div>
  );
}

function DivFlex6() {
  return (
    <div className="absolute h-[15px] left-[16px] right-[48px] top-[89.33px]" data-name="div.flex">
      <SpanTextMutedForeground1 />
    </div>
  );
}

function DivFlex5() {
  return (
    <div className="absolute bg-[#0e0f11] border border-[#2a2a2a] border-solid inset-0 rounded-[12px]" data-name="div.flex-1">
      <DivTextXs2 />
      <SpanTextPrimary1 />
      <DivFlex6 />
    </div>
  );
}

function DivFlex4() {
  return (
    <div className="h-[122.33px] relative shrink-0 w-[170px]" data-name="div.flex">
      <DivFlex5 />
    </div>
  );
}

function DivTextXs3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[16.33px]" data-name="div.text-xs">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.4)] uppercase w-full">
        <p className="leading-[14.67px] mb-0">Pending</p>
        <p className="leading-[14.67px]">Request’s</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[84px]">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[28px]">05</p>
      </div>
    </div>
  );
}

function SpanTextPrimary2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="span.text-primary">
      <Frame4 />
    </div>
  );
}

function DivText2Xl() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[54.33px]" data-name="div.text-2xl">
      <SpanTextPrimary2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="aspect-[34/34] relative shrink-0 w-full" data-name="1">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
      </div>
    </div>
  );
}

function DivW1() {
  return (
    <div className="mr-[-8px] relative rounded-[33554400px] shrink-0 size-[18px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component1 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="2">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
      </div>
    </div>
  );
}

function DivW3() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[18px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component2 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[18px]" data-name="div.w-9:margin">
      <DivW3 />
    </div>
  );
}

function Component3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3} />
      </div>
    </div>
  );
}

function DivW4() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[18px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component3 />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="div.w-9:margin">
      <DivW4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <DivW1 />
      <DivW9Margin />
      <DivW9Margin1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[2px] items-center left-[17px] top-[90px]">
      <Frame6 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14.67px]">+2</p>
      </div>
    </div>
  );
}

function DivFlex8() {
  return (
    <div className="bg-[#0e0f11] flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="div.flex-1">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <DivTextXs3 />
      <DivText2Xl />
      <Frame7 />
    </div>
  );
}

function DivFlex7() {
  return (
    <div className="content-stretch flex h-[122px] items-start justify-center relative shrink-0 w-[170px]" data-name="div.flex">
      <DivFlex8 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <DivFlex4 />
      <DivFlex7 />
    </div>
  );
}

function DivPx() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-5">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[4px] pt-[28px] px-[16px] relative size-full">
        <DivTextXs />
        <DivRoundedXl />
        <Frame8 />
      </div>
    </div>
  );
}

function DivFontHeadings() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[129.92px]" data-name="div.font-headings">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[#d7ff00] text-[24px] top-[10.5px] tracking-[0.24px] uppercase w-[128.109px]">
        <p className="leading-[22.5px]">{`Today's Lineup`}</p>
      </div>
    </div>
  );
}

function ATextPrimary() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="a.text-primary">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c8f000] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">View Calendar</p>
      </div>
    </div>
  );
}

function DivPx1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-5">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[109.25px] items-center pb-[8px] pt-[20px] px-[20px] relative size-full">
          <DivFontHeadings />
          <ATextPrimary />
        </div>
      </div>
    </div>
  );
}

function Component674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg() {
  return (
    <div className="aspect-[218/128] flex-[1_0_0] min-h-px relative" data-name="674dfb03-b61d-4e77-a9fc-130b9a49fb27.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[113.54%] left-0 max-w-none top-[-6.77%] w-full" src={img674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg} />
      </div>
    </div>
  );
}

function DivAbsolute() {
  return (
    <div className="absolute bg-[#c8f000] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[128px] rounded-[12px] top-[7.66px]" data-name="div.absolute">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">09:00 AM</p>
      </div>
    </div>
  );
}

function DivRelative() {
  return (
    <div className="h-[128px] relative shrink-0 z-[2]" data-name="div.relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Component674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg />
        <DivAbsolute />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="1">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
      </div>
    </div>
  );
}

function DivW() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="div.w-8">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component4 />
      </div>
      <div aria-hidden className="absolute border border-[#c8f000] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivFontHeadings1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.font-headings">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[13px]">Marcus Rashford</p>
      </div>
    </div>
  );
}

function DivTextMutedForeground1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.text-muted-foreground">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[10px] whitespace-nowrap">
        <p className="leading-[14.67px]">{`Speed & Agility`}</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[108px]" data-name="div">
      <DivFontHeadings1 />
      <DivTextMutedForeground1 />
    </div>
  );
}

function DivFlex10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.flex">
      <DivW />
      <Div2 />
    </div>
  );
}

function SpanTextXs() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[12px] shrink-0" data-name="span.text-xs">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">F2F</p>
      </div>
    </div>
  );
}

function SpanTextXs1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[12px] shrink-0" data-name="span.text-xs">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">Elite Unit</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-6.92%_-8.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1667 12.3332">
          <g id="Group">
            <path d={svgPaths.p38831380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p3af0ec00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpanMlAuto() {
  return (
    <div className="bg-[#c8f000] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[28px]" data-name="span.ml-auto">
      <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Component 1">
        <Group />
      </div>
    </div>
  );
}

function SpanMlAutoMargin() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-[28px] relative" data-name="span.ml-auto:margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[34.828px] relative size-full">
          <SpanMlAuto />
        </div>
      </div>
    </div>
  );
}

function DivFlex11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.flex">
      <SpanTextXs />
      <SpanTextXs1 />
      <SpanMlAutoMargin />
    </div>
  );
}

function DivP() {
  return (
    <div className="bg-[#0e0f11] min-w-[218px] relative shrink-0 w-[218px] z-[1]" data-name="div.p-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative size-full">
        <DivFlex10 />
        <DivFlex11 />
      </div>
    </div>
  );
}

function DivRoundedXl1() {
  return (
    <div className="absolute bg-[#161616] bottom-[17.49px] left-[15px] min-w-[220px] rounded-[12px] top-[-1.49px]" data-name="div.rounded-xl">
      <div className="content-stretch flex flex-col isolate items-start min-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <DivRelative />
        <DivP />
      </div>
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DivAbsolute1() {
  return (
    <div className="absolute bg-[#c8f000] content-stretch flex flex-col items-start px-[8px] py-[4px] right-[128px] rounded-[12px] top-[7.17px]" data-name="div.absolute">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">10:00 AM</p>
      </div>
    </div>
  );
}

function Component674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg1() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="674dfb03-b61d-4e77-a9fc-130b9a49fb27.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[113.54%] left-0 max-w-none top-[-6.77%] w-full" src={img674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg} />
      </div>
      <DivAbsolute1 />
    </div>
  );
}

function DivRelative1() {
  return (
    <div className="h-[128px] relative shrink-0 w-[218px] z-[2]" data-name="div.relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Component674Dfb03B61D4E77A9Fc130B9A49Fb27Jpg1 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="2">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
      </div>
    </div>
  );
}

function DivW5() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[32px]" data-name="div.w-8">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Component5 />
      </div>
      <div aria-hidden className="absolute border border-[#c8f000] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivFontHeadings2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.font-headings">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[13px]">Buka Dembélé</p>
      </div>
    </div>
  );
}

function DivTextMutedForeground2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.text-muted-foreground">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[10px] whitespace-nowrap">
        <p className="leading-[14.67px]">Load Training</p>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[92px]" data-name="div">
      <DivFontHeadings2 />
      <DivTextMutedForeground2 />
    </div>
  );
}

function DivFlex12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.flex">
      <DivW5 />
      <Div3 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[#13203d] h-[21px] relative rounded-[12px] shrink-0 w-[65px]" data-name="Overlay+Border">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[32.5px] not-italic text-[#60a5fa] text-[13px] text-center top-[10.51px] uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">online</p>
      </div>
    </div>
  );
}

function SpanTextXs2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[12px] shrink-0" data-name="span.text-xs">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="leading-[14.67px]">Pro</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-9.23%_-11.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 12.8332">
          <g id="Group">
            <path d={svgPaths.p13028480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p1e342380} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpanMlAuto1() {
  return (
    <div className="bg-[#c8f000] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[28px]" data-name="span.ml-auto">
      <div className="overflow-clip relative shrink-0 size-[13px]" data-name="Component 1">
        <Group1 />
      </div>
    </div>
  );
}

function SpanMlAutoMargin1() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-w-[28px] relative" data-name="span.ml-auto:margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[50.172px] relative size-full">
          <SpanMlAuto1 />
        </div>
      </div>
    </div>
  );
}

function DivFlex13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="div.flex">
      <OverlayBorder />
      <SpanTextXs2 />
      <SpanMlAutoMargin1 />
    </div>
  );
}

function DivP1() {
  return (
    <div className="bg-[#0e0f11] min-w-[218px] relative shrink-0 w-[218px] z-[1]" data-name="div.p-3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start min-w-[inherit] p-[12px] relative size-full">
        <DivFlex12 />
        <DivFlex13 />
      </div>
    </div>
  );
}

function DivRoundedXl2() {
  return (
    <div className="absolute bg-[#161616] bottom-[16px] left-[252px] min-w-[220px] rounded-[12px] top-0" data-name="div.rounded-xl">
      <div className="content-stretch flex flex-col isolate items-start min-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <DivRelative1 />
        <DivP1 />
      </div>
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function DivFlex9() {
  return (
    <div className="h-[238px] overflow-clip relative shrink-0 w-full" data-name="div.flex">
      <DivRoundedXl1 />
      <DivRoundedXl2 />
    </div>
  );
}

function DivFontHeadings3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.font-headings">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase w-full">
        <p className="leading-[22.5px]">Pending Requests</p>
      </div>
    </div>
  );
}

function DivTextMutedForeground3() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-start relative shrink-0 w-full" data-name="div.text-muted-foreground">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#888] text-[13px] w-full">
        <p className="leading-[18.57px]">5 players waiting for your confirmation</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <DivFontHeadings3 />
        <DivTextMutedForeground3 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="1">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img1} />
      </div>
    </div>
  );
}

function DivW6() {
  return (
    <div className="mr-[-8px] relative rounded-[33554400px] shrink-0 size-[36px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Component6 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="2">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img2} />
      </div>
    </div>
  );
}

function DivW7() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[36px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Component7 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[36px]" data-name="div.w-9:margin">
      <DivW7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="3">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img3} />
      </div>
    </div>
  );
}

function DivW8() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[36px]" data-name="div.w-9">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Component8 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
    </div>
  );
}

function DivW9Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[36px]" data-name="div.w-9:margin">
      <DivW8 />
    </div>
  );
}

function DivW9() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[8.83px] pt-[8.17px] relative rounded-[33554400px] shrink-0 size-[36px]" data-name="div.w-9">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-center text-white whitespace-nowrap">
        <p className="leading-[14.67px]">+2</p>
      </div>
    </div>
  );
}

function DivW9Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[36px]" data-name="div.w-9:margin">
      <DivW9 />
    </div>
  );
}

function DivFlex15() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="div.flex">
      <DivW6 />
      <DivW9Margin2 />
      <DivW9Margin3 />
      <DivW9Margin4 />
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[13px] text-center uppercase whitespace-nowrap">
        <p className="leading-[18.57px]">View All</p>
      </div>
    </div>
  );
}

function ButtonBgPrimary() {
  return (
    <div className="absolute bg-[#c8f000] content-stretch flex flex-col items-center justify-center left-[196.17px] px-[20px] py-[8px] rounded-[12px] top-[0.5px]" data-name="button.bg-primary">
      <Span />
    </div>
  );
}

function DivFlex14() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="div.flex">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <DivFlex15 />
        <ButtonBgPrimary />
      </div>
    </div>
  );
}

function DivMx() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[12px] shrink-0 w-full" data-name="div.mx-5">
      <div aria-hidden className="absolute border border-[#c8f000] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[17px] pt-[16px] px-[17px] relative size-full">
        <Div4 />
        <DivFlex14 />
      </div>
    </div>
  );
}

function DivMx5Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.mx-5:margin">
      <div className="content-stretch flex flex-col items-start pl-[16px] pr-[20px] relative size-full">
        <DivMx />
      </div>
    </div>
  );
}

function DivFontHeadings4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.font-headings">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.24px] uppercase w-full">
        <p className="leading-[22.5px]">Quick Actions</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-6.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 18.5">
          <g id="Group">
            <path d={svgPaths.p277d4ab0} fill="var(--fill-0, #1E1E1E)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pff32a40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpanTextXs3() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] text-center uppercase whitespace-nowrap">
          <p className="leading-[14.67px]">New Package</p>
        </div>
      </div>
    </div>
  );
}

function ButtonFlex() {
  return (
    <div className="bg-[#0e0f11] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[80px] items-center justify-center min-w-px px-px py-[17px] relative rounded-[12px]" data-name="button.flex-1">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[22px]" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <Group2 />
        </div>
      </div>
      <SpanTextXs3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.45%_-6.06%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 20.3333">
          <g id="Group">
            <path d={svgPaths.p23078180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p4a55300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p30eba080} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpanTextXs4() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] text-center uppercase whitespace-nowrap">
          <p className="leading-[14.67px]">Availability</p>
        </div>
      </div>
    </div>
  );
}

function ButtonFlex1() {
  return (
    <div className="bg-[#0e0f11] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[80px] items-center justify-center min-w-px px-px py-[17px] relative rounded-[12px]" data-name="button.flex-1">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[22px]" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <Group4 />
        </div>
      </div>
      <SpanTextXs4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.35%_8.35%_12.5%_12.5%]" data-name="Group">
      <div className="absolute inset-[-5.74%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4133 19.4133">
          <g id="Group">
            <path d={svgPaths.p6e31d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pd6ebd00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SpanTextXs5() {
  return (
    <div className="relative shrink-0" data-name="span.text-xs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] text-center uppercase whitespace-nowrap">
          <p className="leading-[14.67px]">Edit Profile</p>
        </div>
      </div>
    </div>
  );
}

function ButtonFlex2() {
  return (
    <div className="bg-[#0e0f11] content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[80px] items-center justify-center min-w-px px-px py-[17px] relative rounded-[12px]" data-name="button.flex-1">
      <div aria-hidden className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[22px]" data-name="Component 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <Group5 />
        </div>
      </div>
      <SpanTextXs5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-center min-w-px relative">
      <ButtonFlex />
      <ButtonFlex1 />
      <ButtonFlex2 />
    </div>
  );
}

function DivFlex16() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="div.flex">
      <Frame5 />
    </div>
  );
}

function DivPx2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.px-5">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[8px] pl-[20px] pr-[18px] pt-[19px] relative size-full">
        <DivFontHeadings4 />
        <DivFlex16 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Sessions</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19.975px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.975 20">
        <g id="Container">
          <path d={svgPaths.p2114d300} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Offer</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p378800} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Learn</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container3() {
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
    <div className="backdrop-blur-[12px] bg-black content-stretch flex flex-col items-start pb-[33px] pt-[13px] px-[17px] relative shrink-0 w-[390px]" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

export default function CoachDashboard() {
  return (
    <div className="bg-[#050505] content-stretch flex flex-col items-start relative size-full" data-name="coach dashboard">
      <Frame />
      <DivFlex />
      <DivPx />
      <DivPx1 />
      <DivFlex9 />
      <DivMx5Margin />
      <DivPx2 />
      <BottomNavigationActiveSharedComponentMockup />
    </div>
  );
}
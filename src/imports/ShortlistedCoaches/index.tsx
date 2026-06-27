import svgPaths from "./svg-alm61ltw4x";
import imgAb6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs from "./fdd1ecca109be1f0b74e3cd99555b845303169ab.png";
import imgAb6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs1 from "./257d04f3b2fdd1bfdbc53390c6d4ac9ddb510a69.png";

function Heading() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Heading 1">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="h-[17px] relative w-[11px]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
              <path d={svgPaths.p3e1a4b00} fill="var(--fill-0, #D7FF00)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[36px]">SHORTLISTED COACHES</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] p-[16px] relative size-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[12px] bg-black content-stretch flex flex-col h-[36px] items-start justify-center pb-px relative shrink-0 w-[390px] z-[1]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col isolate items-start left-0 top-[66px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ccf200] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[64.38px] pr-[64.39px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[13px] text-center uppercase w-[72px]">
            <p className="leading-[16px]">BY SQUAD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="col-2 justify-self-start relative rounded-[8px] row-1 self-start shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pl-[58.48px] pr-[58.49px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white uppercase w-[79px]">
          <p className="leading-[16px]">FLAT LIST</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-[#0f1012] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_40px] h-[50px] left-[8px] p-[5px] right-[24px] rounded-[12px] top-[118px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[212px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">U-14 ELITE</p>
      </div>
    </div>
  );
}

function Ab6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[64px]" data-name="AB6AXuBY7iFyTBSX_uxzbgipz1LXWBKch3iv-MIGlawhwgb2NPourr_DD5M5HtjfWFZ48WWBXsWjZsoZnBveukvg2tnDB6hs8jDS4N-8Ok9K901WUhZdUl26j3ahDgDaDyEdQU3TajwBwSu2DLCYZGRusYNmxmZbkJhy6QTp8gyXzGbcfaJxyhNXFfkTmfanClNJmHbZlGCyfDbzwIXfdbcM_xjNLx71rcDF_LxJ7pnz-mqRoRygOpbZ9bAs">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[1.25%] max-w-none top-0 w-[97.5%]" src={imgAb6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Ab6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">4.9</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Gylfi Sig</p>
      </div>
      <Container6 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#d7ff00] content-stretch flex flex-col items-start px-[13px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">F2F</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Elite Coach</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[0px] w-full">
        <p className="text-[13px]">
          <span className="leading-[16px]">{`From `}</span>
          <span className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic">120,000 ISK</span>
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px relative" data-name="Container">
      <Container5 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[74px] items-start left-[17px] right-[17px] top-[17px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] pl-[14px] right-[17px] top-[107px]" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(204,242,0,0.3)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`"Excellent striker drills for high-intensity`}</p>
        <p className="leading-[20px]">{`training."`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ccf200] h-[48px] left-[calc(50%-6.5px)] rounded-[12px] top-[163px] w-[267px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-[133px] not-italic text-[#2b3400] text-[20px] text-center top-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">BOOK FOR SQUAD</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-black h-[224px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[#d7ff00] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container2 />
      <VerticalBorder />
      <Button2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p2780bd80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SwipeBackgroundMockup() {
  return (
    <div className="absolute bg-[#93000a] content-stretch flex inset-0 items-center justify-end px-[24px] rounded-[12px]" data-name="Swipe Background (Mockup)">
      <Container12 />
    </div>
  );
}

function Ab6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[64px]" data-name="AB6AXuBY7iFyTBSX_uxzbgipz1LXWBKch3iv-MIGlawhwgb2NPourr_DD5M5HtjfWFZ48WWBXsWjZsoZnBveukvg2tnDB6hs8jDS4N-8Ok9K901WUhZdUl26j3ahDgDaDyEdQU3TajwBwSu2DLCYZGRusYNmxmZbkJhy6QTp8gyXzGbcfaJxyhNXFfkTmfanClNJmHbZlGCyfDbzwIXfdbcM_xjNLx71rcDF_LxJ7pnz-mqRoRygOpbZ9bAs">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-full left-[-0.18%] max-w-none top-0 w-[139.06%]" src={imgAb6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs1} />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <Ab6AXuBy7IFyTbsxUxzbgipz1LxwbKch3IvMiGlawhwgb2NPourrDd5M5HtjfWfz48WwbXsWjZsoZnBveukvg2TnDb6Hs8JDs4N8Ok9K901WUhZdUl26J3AhDgDaDyEdQu3TajwBwSu2DlcyzgRusYNmxmZbkJhy6QTp8GyXzGbcfaJxyhNxFfkTmfanClNJmHbZlGCyfDbzwIXfdbcMXjNLx71RcDfLxJ7PnzMqRoRygOpbZ9BAs1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[12.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 12.6667">
        <g id="Container">
          <path d={svgPaths.p265d2480} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[16px]">4.9</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Silja Úlfarsdóttir</p>
      </div>
      <Container17 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(37,99,235,0.2)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Overlay+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#60a5fa] text-[13px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">ONLINE</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Elite Coach</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorder />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[0px] w-full">
        <p className="text-[13px]">
          <span className="leading-[16px]">{`From `}</span>
          <span className="leading-[16px]">20,000 ISK</span>
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start min-w-px relative" data-name="Container">
      <Container16 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[74px] items-start left-[17px] right-[17px] top-[17px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] pl-[14px] right-[17px] top-[107px]" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[rgba(204,242,0,0.3)] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
        <p className="leading-[20px] mb-0">{`"Excellent striker drills for high-intensity`}</p>
        <p className="leading-[20px]">{`training."`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ccf200] h-[48px] left-[calc(50%-6.5px)] rounded-[12px] top-[163px] w-[267px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-[133px] not-italic text-[#2b3400] text-[20px] text-center top-[24px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">BOOK FOR SQUAD</p>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-black h-[224px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container13 />
      <VerticalBorder1 />
      <Button3 />
    </div>
  );
}

function CoachCard1MarcusRashford() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Coach Card 1: Marcus Rashford">
      <SwipeBackgroundMockup />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function SectionSquadGroupU14Elite() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] right-[16px] top-[184px]" data-name="Section - Squad Group: U-14 ELITE">
      <Container1 />
      <OverlayBorderOverlayBlur />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">U-18 PRO</p>
      </div>
      <CoachCard1MarcusRashford />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">0 Selected</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[16px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Compare</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffb4ab] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Remove</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex items-center justify-between left-[16px] p-[13px] right-[16px] rounded-[16px] top-[790px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <Container23 />
      <Container25 />
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

function Container27() {
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

function Container28() {
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

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container27 />
      <Container28 />
    </div>
  );
}

export default function ShortlistedCoaches() {
  return (
    <div className="bg-black relative size-full" data-name="shortlisted coaches">
      <HtmlBody />
      <BackgroundBorder />
      <SectionSquadGroupU14Elite />
      <OverlayBorderOverlayBlur2 />
      <Container26 />
    </div>
  );
}
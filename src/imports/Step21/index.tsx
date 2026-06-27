import svgPaths from "./svg-avaoq5bj4f";
import imgAp1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi from "./804fa5518c14084f48808575db759b0de788632e.png";

function Container1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-[97px]">
        <p className="leading-[16px]">STEP 3 OF 6</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col h-[16px] items-end justify-center left-[197px] w-[161px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-right uppercase w-[164px]">
        <p className="leading-[16px]">hybrid intergration</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[16px] left-0 right-0 top-0" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[4px] left-0 overflow-clip right-0 rounded-[9999px] top-[24px]" data-name="Overlay">
      <div className="absolute bg-[#ccf200] inset-[0_40%_0_0]" data-name="Background" />
    </div>
  );
}

function ProgressIndicator() {
  return (
    <div className="absolute h-[28px] left-[16px] right-[16px] top-[129px]" data-name="Progress Indicator">
      <Container />
      <Overlay />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] uppercase w-full">
        <p className="leading-[28px]">PAIR A LOCAL COACH</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[24px]">Browse coaches who opted in as local partners for on-ground execution.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] right-[16px] top-[181px]">
      <Heading />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] w-[258px]">
        <p className="leading-[28px]">HYBRID PAIRING</p>
      </div>
    </div>
  );
}

function Button() {
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

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading1 />
        <Button />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-black content-stretch flex gap-[10px] h-[64px] items-center left-0 pb-px px-[16px] top-[56px] w-[390px]" data-name="Header - Top App Bar">
      <div aria-hidden className="absolute border-b border-black border-solid inset-0 pointer-events-none" />
      <a className="block cursor-pointer h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p1cc3a100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </a>
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
          <p className="leading-[normal]">Search coach name or area</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#1a1a1a] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[41px] pr-[17px] py-[15.5px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[31.25%] content-stretch flex flex-col items-start left-[12px] top-[37.5%]" data-name="Container">
      <div className="relative shrink-0 size-[14.57px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5703 14.5703">
          <path d={svgPaths.p326c200} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[293px]" data-name="Container">
      <Input />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7660280} fill="var(--fill-0, #CBD5E1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.5)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[281px] w-[390px]" data-name="Container">
      <Container6 />
      <Button1 />
    </div>
  );
}

function Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AP1WRLtFc67C7HWsPZdwBqDs14aawsSUM72uR0_ENWrNNRxBEB8DHZxYSE9eo8v_g3B3jRpbkubUgh0JmhFVvFSgPk1dT_6gx2NM3C8MsiDZ590ns4X7nNY95jd7pWetZ0O0V35RSeKVOZ-cGlY_DJfkuVMVQW6JVl-HqQ4lsuPt5Hmb2MZIwb6ISUMUSSlkgpLNpJ8_QErMJtwfTdPoSR7DzT1uyy6kiSwUBcrwOcrsj0MZ6WBZn-UBY51AwNWi">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAp1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi />
      </div>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.pb30900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0e141b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PRO</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white bottom-[-5px] content-stretch flex flex-col items-start px-[6px] py-[2px] right-[8px] rounded-[12px]" data-name="Background">
      <Frame3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Border />
      <Background />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">JAMES K.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">{`Speed & Agility Masterclass`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <Heading2 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">4.9</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[rgba(215,255,0,0.1)] content-stretch flex gap-[3.99px] items-center left-[267.65px] px-[8px] py-[4px] rounded-[4px] top-[6px]" data-name="Overlay">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[56px] left-[17px] right-[17px] top-[17px]" data-name="Container">
      <Container11 />
      <Overlay1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1f2ddf80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px]">{`F2F Sessions: `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[20px]">123</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[89px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ccf200] col-1 drop-shadow-[0px_0px_10px_rgba(204,242,0,0.2)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Invite to pair</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_46px] h-[46px] left-[17px] right-[17px] top-[125px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function Card2BukayoSaka() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[188px] relative rounded-[20px] shrink-0 w-full" data-name="Card 2: Bukayo Saka">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
        <Container17 />
        <Container21 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AP1WRLtFc67C7HWsPZdwBqDs14aawsSUM72uR0_ENWrNNRxBEB8DHZxYSE9eo8v_g3B3jRpbkubUgh0JmhFVvFSgPk1dT_6gx2NM3C8MsiDZ590ns4X7nNY95jd7pWetZ0O0V35RSeKVOZ-cGlY_DJfkuVMVQW6JVl-HqQ4lsuPt5Hmb2MZIwb6ISUMUSSlkgpLNpJ8_QErMJtwfTdPoSR7DzT1uyy6kiSwUBcrwOcrsj0MZ6WBZn-UBY51AwNWi">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAp1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi} />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi1 />
      </div>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.pb30900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0e141b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PRO</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white bottom-[-5px] content-stretch flex flex-col items-start px-[6px] py-[2px] right-[8px] rounded-[12px]" data-name="Background">
      <Frame4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Border1 />
      <Background1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">JAMES K.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">{`Speed & Agility Masterclass`}</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <Heading3 />
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">4.9</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[rgba(215,255,0,0.1)] content-stretch flex gap-[3.99px] items-center left-[267.65px] px-[8px] py-[4px] rounded-[4px] top-[6px]" data-name="Overlay">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[56px] left-[17px] right-[17px] top-[17px]" data-name="Container">
      <Container23 />
      <Overlay2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1f2ddf80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px]">{`F2F Sessions: `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[20px]">123</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[89px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ccf200] col-1 drop-shadow-[0px_0px_10px_rgba(204,242,0,0.2)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Invite to pair</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_46px] h-[46px] left-[17px] right-[17px] top-[125px]" data-name="Container">
      <Button3 />
    </div>
  );
}

function Card2BukayoSaka1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[188px] relative rounded-[20px] shrink-0 w-full" data-name="Card 2: Bukayo Saka">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container22 />
        <Container29 />
        <Container33 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AP1WRLtFc67C7HWsPZdwBqDs14aawsSUM72uR0_ENWrNNRxBEB8DHZxYSE9eo8v_g3B3jRpbkubUgh0JmhFVvFSgPk1dT_6gx2NM3C8MsiDZ590ns4X7nNY95jd7pWetZ0O0V35RSeKVOZ-cGlY_DJfkuVMVQW6JVl-HqQ4lsuPt5Hmb2MZIwb6ISUMUSSlkgpLNpJ8_QErMJtwfTdPoSR7DzT1uyy6kiSwUBcrwOcrsj0MZ6WBZn-UBY51AwNWi">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAp1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi} />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ap1WrLtFc67C7HWsPZdwBqDs14AawsSum72UR0EnWrNnRxBeb8DhZxYse9Eo8VG3B3JRpbkubUgh0JmhFVvFSgPk1DT6Gx2Nm3C8MsiDz590Ns4X7NNy95Jd7PWetZ0O0V35RSeKvozCGlYDJfkuVmvqw6JVlHqQ4LsuPt5Hmb2MzIwb6IsumusSlkgpLNpJ8QErMJtwfTdPoSr7DzT1Uyy6KiSwUBcrwOcrsj0Mz6WbZnUby51AwNWi2 />
      </div>
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <path d={svgPaths.pb30900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0e141b] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">PRO</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white bottom-[-5px] content-stretch flex flex-col items-start px-[6px] py-[2px] right-[8px] rounded-[12px]" data-name="Background">
      <Frame5 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Border2 />
      <Background2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
        <p className="leading-[24px]">JAMES K.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">{`Speed & Agility Masterclass`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[186px]" data-name="Container">
      <Heading4 />
      <Container38 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-0 top-0" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[11.083px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.0833">
        <g id="Container">
          <path d={svgPaths.p21398000} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[14px] tracking-[0.7px] whitespace-nowrap">
        <p className="leading-[14px]">4.9</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[rgba(215,255,0,0.1)] content-stretch flex gap-[3.99px] items-center left-[267.65px] px-[8px] py-[4px] rounded-[4px] top-[6px]" data-name="Overlay">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[56px] left-[17px] right-[17px] top-[17px]" data-name="Container">
      <Container35 />
      <Overlay3 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1f2ddf80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px]">{`F2F Sessions: `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0">
        <p className="leading-[20px]">123</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[17px] right-[17px] top-[89px]" data-name="Container">
      <Container42 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ccf200] col-1 drop-shadow-[0px_0px_10px_rgba(204,242,0,0.2)] justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Invite to pair</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[_46px] h-[46px] left-[17px] right-[17px] top-[125px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Card2BukayoSaka2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[188px] relative rounded-[20px] shrink-0 w-full" data-name="Card 2: Bukayo Saka">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container34 />
        <Container41 />
        <Container45 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[345px] w-[358px]">
      <Card2BukayoSaka />
      <Card2BukayoSaka1 />
      <Card2BukayoSaka2 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[941px] left-0 right-0 top-0" data-name="Main">
      <ProgressIndicator />
      <Frame2 />
      <HeaderTopAppBar />
      <Container5 />
      <Frame7 />
    </div>
  );
}

function Button5() {
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ccf200] content-stretch drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] flex h-[48px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-[226.67px]" data-name="Button">
      <Container47 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center max-w-[672px] right-0 top-[16px] w-[358px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 right-0 top-[88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">Changes are saved automatically to your draft.</p>
      </div>
    </div>
  );
}

function CtaAction() {
  return (
    <div className="absolute h-[108px] left-[16px] right-[16px] top-[1190px]" data-name="CTA Action">
      <Container46 />
      <Container48 />
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

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold_Italic',sans-serif] font-bold italic justify-center leading-[0] relative shrink-0 text-[#d7ff00] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">{`ROLES & RESPONSIBILITIES`}</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[14px]">Online COACH (YOU)</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[299px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] w-full">
        <p className="leading-[20px] mb-0">Lead programmer, handles digital</p>
        <p className="leading-[20px]">assessments, nutrition, and weekly checkins.</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[14px]">{`F2F COACH `}</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] w-[291px]">
        <p className="leading-[20px]">Executes in-person technical sessions, safety monitoring, and local facility access.</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container54 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[46px] top-[18px] w-[302px]" data-name="Container">
      <Heading5 />
      <Container50 />
    </div>
  );
}

function RadioOptionBothLabel() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] border border-[rgba(255,255,255,0.1)] border-solid h-[201px] left-0 right-0 rounded-[12px] top-0" data-name="Radio Option: Both → Label">
      <Margin />
      <Margin1 />
      <div className="absolute left-[15px] size-[20px] top-[15px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p6c8ea80} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Container49 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute h-[201px] left-1/2 top-[965px] w-[358px]">
      <RadioOptionBothLabel />
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

function Container58() {
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

function Container59() {
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

function Container57() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pt-[12px] px-[24px] relative size-full">
        <Text />
        <Container58 />
        <Container59 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-0 top-0 w-[390px]">
      <Container57 />
    </div>
  );
}

export default function Step() {
  return (
    <div className="bg-black relative size-full" data-name="STEP 21">
      <Main />
      <CtaAction />
      <Frame6 />
      <Frame1 />
    </div>
  );
}
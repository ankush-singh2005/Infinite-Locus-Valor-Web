import svgPaths from "./svg-e2df7ph8c8";
import imgCinematicSportsAction1 from "./0c38fe6dfc1da69ecb5985c13c6ba378ea15db9f.png";

function StatusBarIPhone() {
  return <div className="absolute backdrop-blur-[4px] bg-[rgba(0,0,0,0)] h-[68px] left-0 top-0 w-[390px]" data-name="Status Bar - iPhone" />;
}

function Heading() {
  return (
    <div className="h-[17px] relative shrink-0 w-[11px]" data-name="Heading 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 17">
        <g id="Heading 1">
          <path d={svgPaths.pced3100} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(14,20,27,0.16)] content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-[374px]" data-name="Header - TopAppBar">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d4ff00] text-[64px] text-shadow-[0px_4px_12px_rgba(0,0,0,0.5)] tracking-[-2px] w-full">
        <p className="leading-[60px] mb-0">SELECT</p>
        <p className="leading-[60px]">LANGUAGE</p>
      </div>
    </div>
  );
}

function SectionDynamicTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section - Dynamic Title">
      <HeaderTopAppBar />
      <Heading1 />
      <div className="bg-[#ccf200] h-[4px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Background" />
    </div>
  );
}

function SectionDynamicTitleMargin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[867px] items-start left-[24px] pb-[32px] right-[15px] top-[59px]" data-name="Section - Dynamic Title:margin">
      <SectionDynamicTitle />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">ENGLISH</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">GLOBAL</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[9.019px] relative shrink-0 w-[12.225px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.225 9.01875">
        <g id="Container">
          <path d={svgPaths.p17545d00} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function LanguageItemEnglishActive() {
  return (
    <div className="backdrop-blur-[10px] bg-[#111315] relative rounded-[12px] shrink-0 w-full" data-name="Language Item: English (Active)">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container />
          <Border />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">Icelandic</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">ICELAND</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function LanguageItemEspanol() {
  return (
    <div className="backdrop-blur-[10px] bg-[#111315] relative rounded-[12px] shrink-0 w-full" data-name="Language Item: Español">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container4 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">DEUTSCH</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">DUTCH REGION</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[103px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function LanguageItemDeutsch() {
  return (
    <div className="backdrop-blur-[10px] bg-[#111315] relative rounded-[12px] shrink-0 w-full" data-name="Language Item: Deutsch">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container7 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">FRANÇAIS</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">{`EUROPE & AFRICA`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[121.17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function LanguageItemFrancais() {
  return (
    <div className="backdrop-blur-[10px] bg-[#111315] relative rounded-[12px] shrink-0 w-full" data-name="Language Item: Français">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container10 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[28px]">PORTUGUÊS</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[12px] tracking-[0.96px] whitespace-nowrap">
        <p className="leading-[16px]">{`BRASIL & PORTUGAL`}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[138.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function LanguageItemPortugues() {
  return (
    <div className="backdrop-blur-[10px] bg-[#111315] relative rounded-[12px] shrink-0 w-full" data-name="Language Item: Português">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[25px] relative size-full">
          <Container13 />
          <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
            <div aria-hidden className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLanguageListGlassmorphicBentoPattern() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] inset-[287px_20px_172px_19px] items-start py-[8px]" data-name="Section - Language List (Glassmorphic Bento Pattern)">
      <LanguageItemEnglishActive />
      <LanguageItemEspanol />
      <LanguageItemDeutsch />
      <LanguageItemFrancais />
      <LanguageItemPortugues />
    </div>
  );
}

function Container16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-[calc(50%+36.5px)] top-[calc(50%-0.5px)] w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #181E00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FooterActionButton() {
  return (
    <div className="bg-[#d7ff00] drop-shadow-[0px_8px_12px_rgba(204,242,0,0.2)] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Footer Action → Button">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-7.7px)] not-italic text-[#181e00] text-[20px] text-center top-[calc(50%-0.5px)] tracking-[0.72px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">CONTINUE</p>
      </div>
      <Container16 />
    </div>
  );
}

function PrivacyPolicyInfo() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Privacy Policy Info">
      <div className="flex flex-col items-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function BottomFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[16.5px] items-center pb-[16px] relative shrink-0 w-[358px]" data-name="Bottom Footer">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[0px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="text-[13px]">
          <span className="leading-[16px] text-white">{`ALREADY HAVE AN ACCOUNT? `}</span>
          <span className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic text-[#ccf200]">SIGN IN</span>
        </p>
      </div>
      <PrivacyPolicyInfo />
    </div>
  );
}

function FooterActionMargin() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[36px] items-start left-[19px] pt-[40px] right-[20px] top-[799px]" data-name="Footer Action:margin">
      <FooterActionButton />
      <BottomFooter />
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

function Container18() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_47_1293)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p198d0700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_47_1293">
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
        <g clipPath="url(#clip0_47_1290)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p127ece80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_47_1290">
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
        <g clipPath="url(#clip0_47_1285)" id="Icon">
          <path d={svgPaths.p225fba80} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p27de000} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p1802fd00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_47_1285">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19() {
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

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container18 />
      <Container19 />
    </div>
  );
}

export default function Language() {
  return (
    <div className="bg-black relative size-full" data-name="LANGUAGE">
      <StatusBarIPhone />
      <div className="absolute h-[741px] left-0 top-[68px] w-[390px]" data-name="Cinematic sports action 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[106.63%] left-0 max-w-none top-[-0.05%] w-full" src={imgCinematicSportsAction1} />
        </div>
      </div>
      <SectionDynamicTitleMargin />
      <SectionLanguageListGlassmorphicBentoPattern />
      <FooterActionMargin />
      <Container17 />
    </div>
  );
}
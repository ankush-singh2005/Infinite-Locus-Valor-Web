import svgPaths from "./svg-31u5nkxm9u";
import imgCoachContext from "./dc1530f0bd4d568fae5cbfa534e16a7d936f8ecb.png";
import imgBackgroundBorder from "./2faa41d5af613eb4f04e195bc06f0754cfcbfebe.png";
import imgBackgroundBorder1 from "./389a931547711e987d7199d574f6fa4f37bcbb13.png";
import imgBackgroundBorder2 from "./bc9e11382531ee742b19bb07f9ced2239dcd149e.png";

function CoachContext() {
  return (
    <div className="flex-[1_0_0] min-h-px opacity-60 relative w-full" data-name="Coach Context">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[225.32%] left-0 max-w-none top-[-62.66%] w-full" src={imgCoachContext} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[12px] relative w-[7.4px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Frame 2147231548">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#fbbf24] content-stretch drop-shadow-[0px_0px_7.5px_rgba(204,242,0,0.3)] flex gap-[8px] items-center px-[9px] py-[3px] relative rounded-[12px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#fbbf24] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">{`MARQUEE `}</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-[17px] left-[17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] whitespace-nowrap">
          <p className="leading-[24px]">Coach Profile Engine</p>
        </div>
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function SectionHeroContext() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] h-[160px] relative rounded-[12px] shrink-0 w-full" data-name="Section - Hero Context">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <CoachContext />
        <div className="absolute bg-gradient-to-t from-[#0e141b] inset-px to-[rgba(14,20,27,0)]" data-name="Gradient" />
        <Container />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p2e828280} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[24px]">PROFILE STATUS</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] tracking-[1.1px] uppercase whitespace-nowrap">
          <p className="leading-[16.5px]">VERIFIED</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(204,242,0,0.2)] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden className="absolute border border-[rgba(204,242,0,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-[5px] relative size-full">
        <div className="bg-[#ccf200] relative rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
        <Container4 />
      </div>
    </div>
  );
}

function SectionVerificationStatusPill() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[8px] shrink-0 w-full" data-name="Section - Verification Status Pill">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[13px] relative size-full">
          <Container1 />
          <OverlayBorder />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Bio Block</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p2cbc1080} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[3.99px] items-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">EDIT</p>
      </div>
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] w-full">
          <p className="leading-[16px]">Headline</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
          <p className="leading-[20px]">Ex-pro forward turned elite youth tactician.</p>
        </div>
      </div>
    </div>
  );
}

function HeadlineField() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[20px] shrink-0 w-full" data-name="Headline Field">
      <div aria-hidden className="absolute border border-[#ccf200] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[13px] relative size-full">
        <Label />
        <Container8 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[0.96px] uppercase w-full">
          <p className="leading-[16px]">PROFESSIONAL SUMMARY</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b4b5b7] text-[13px] whitespace-nowrap">
          <p className="leading-[26px] mb-0 whitespace-pre">{`Dedicated to developing the next generation of elite `}</p>
          <p className="leading-[26px] mb-0 whitespace-pre">{`talent. Over 15 years of experience spanning `}</p>
          <p className="leading-[26px] mb-0 whitespace-pre">{`professional playing career in the Premier League to `}</p>
          <p className="leading-[26px] mb-0 whitespace-pre">managing UEFA-certified youth academies. Focused</p>
          <p className="leading-[26px] mb-0 whitespace-pre">{`on data-driven tactical analysis and psychological `}</p>
          <p className="leading-[26px] whitespace-pre">performance optimization.</p>
        </div>
      </div>
    </div>
  );
}

function RichTextBio() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Rich Text Bio">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[13px] relative size-full">
        <Label1 />
        <Container9 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <RichTextBio />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <HeadlineField />
      <Frame />
    </div>
  );
}

function SectionBioBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[350px] items-start relative shrink-0 w-full" data-name="Section - Bio Block">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p25c18f80} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#242a32] content-stretch flex gap-[8px] h-[34px] items-center pb-[7.5px] pt-[6.5px] px-[13px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container11 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">English (Native)</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.575px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.575 15">
        <g id="Container">
          <path d={svgPaths.p2cad85c0} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#242a32] content-stretch flex gap-[8px] h-[34px] items-center pb-[7.5px] pt-[6.5px] px-[13px] relative rounded-[9999px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container12 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dde3ed] text-[13px] whitespace-nowrap">
        <p className="leading-[20px]">Spanish (Fluent)</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
        <g id="Container">
          <path d={svgPaths.p38ac19c0} fill="var(--fill-0, #DDE3ED)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#242a32] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-start left-[calc(50%-2.71px)] top-[24px]" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <Button1 />
    </div>
  );
}

function LanguagesSelector() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Languages Selector">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] left-[4px] not-italic text-[#d7ff00] text-[24px] top-[7.5px] tracking-[0.96px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">LANGUAGES SPOKEN</p>
      </div>
      <Container10 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Credentials List</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="h-full relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#ccf200] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[13px] whitespace-nowrap">
          <p className="leading-[15px]">ALL</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
          <p className="leading-[15px]">CERTIFIED</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[16px] h-[26px] items-start pb-[5px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b border-solid inset-0 pointer-events-none" />
      <HorizontalBorder1 />
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <HorizontalBorder />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">CERTIFICATIONS</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading3 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[40px]" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgBackgroundBorder} />
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">UEFA Pro License</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b5b7] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">The FA • 2021</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[135.98px]" data-name="Container">
      <Heading4 />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <BackgroundBorder2 />
        <Container20 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start justify-between p-[13px] relative size-full">
        <Container19 />
        <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
            <path d={svgPaths.p3801d860} fill="var(--fill-0, #CCF200)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="relative shrink-0 size-[18px]" data-name="Container" />;
}

function BackgroundBorder3() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[40px]" data-name="Background+Border">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgBackgroundBorder1} />
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container23 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Elite Performance Analysis</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b5b7] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Loughborough Uni • 2019</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[210.64px]" data-name="Container">
      <Heading5 />
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <BackgroundBorder3 />
        <Container24 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start justify-between p-[13px] relative size-full">
        <Container22 />
        <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
            <path d={svgPaths.p3801d860} fill="var(--fill-0, #CCF200)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function CertificationsCategory() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Certifications Category">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">COACHING HISTORY</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Heading6 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="absolute inset-0 overflow-hidden rounded-[8px]">
        <img alt="" className="absolute h-[116.1%] left-[-56.5%] max-w-none top-[-8.05%] w-[213%]" src={imgBackgroundBorder2} />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Head of Academy Tactics</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#b4b5b7] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Manchester City FC • 2020 - Present</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[231px]" data-name="Container">
      <Heading7 />
      <Container29 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <BackgroundBorder4 />
        <Container28 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex items-start justify-between p-[13px] relative size-full">
        <Container27 />
        <div className="h-[21px] relative shrink-0 w-[22px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
            <path d={svgPaths.p3801d860} fill="var(--fill-0, #CCF200)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CoachingHistory() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Coaching History">
      <Container26 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <CertificationsCategory />
      <CoachingHistory />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Container">
          <path d={svgPaths.p2bb32400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center justify-center px-px py-[17px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">ADD CREDENTIAL</p>
      </div>
    </div>
  );
}

function SectionCredentialsList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] relative shrink-0 w-full" data-name="Section - Credentials List">
      <Container14 />
      <Container16 />
      <Button2 />
    </div>
  );
}

function ContentCanvas() {
  return (
    <div className="absolute bg-black content-stretch flex flex-col gap-[24px] inset-[64px_0_139px_0] items-start pb-[128px] px-[16px]" data-name="Content Canvas">
      <SectionHeroContext />
      <SectionVerificationStatusPill />
      <SectionBioBlock />
      <LanguagesSelector />
      <SectionCredentialsList />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ccf200] text-[24px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[28px]">{`CREDENTIALS & BIO`}</p>
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute bg-black content-stretch flex gap-[12px] h-[64px] items-center left-0 pb-px px-[16px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0)] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
          <path d={svgPaths.p3ed0080} fill="var(--fill-0, #D7FF00)" id="Icon" />
        </svg>
      </div>
      <Heading />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p1820480} fill="var(--fill-0, #C5C9AC)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#c5c9ac] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container34() {
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

function Container35() {
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
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
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

function Container37() {
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
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
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

function Container39() {
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
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p85bff00} fill="var(--fill-0, #CCF200)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[10px] whitespace-nowrap">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Link">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container31() {
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
    <div className="absolute backdrop-blur-[12px] bg-black bottom-[50px] content-stretch flex flex-col items-start left-0 pb-[33px] pt-[17px] px-[17px] w-[390px]" data-name="Bottom Navigation (Active Shared Component Mockup)">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#080f16] h-[1409px] overflow-clip relative shrink-0 w-[390px]" data-name="Main">
      <ContentCanvas />
      <HeaderTopAppBar />
      <BottomNavigationActiveSharedComponentMockup />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex h-[1358px] items-start justify-center left-0 top-[60px] w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(14, 20, 27) 0%, rgb(14, 20, 27) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
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

function Container43() {
  return <div className="h-0 relative shrink-0 w-[124px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[12.297px] relative shrink-0 w-[19.195px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1953 12.2969">
        <g clipPath="url(#clip0_29_297)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1464d000} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_297">
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
        <g clipPath="url(#clip0_29_354)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.pa4c0800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_354">
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
        <g clipPath="url(#clip0_29_334)" id="Icon">
          <path d={svgPaths.p225fba80} id="Vector" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="0.998862" />
          <path d={svgPaths.p814b800} fill="var(--fill-0, white)" id="Vector_2" opacity="0.4" />
          <path d={svgPaths.p24c92a80} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_29_334">
            <rect fill="white" height="13" width="27.2969" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
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

function Container42() {
  return (
    <div className="absolute content-stretch flex h-[54px] items-start left-0 pt-[12px] px-[24px] top-0" data-name="Container">
      <Text />
      <Container43 />
      <Container44 />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-black relative size-full" data-name="iPhone 13 & 14 - 31">
      <HtmlBody />
      <Container42 />
    </div>
  );
}
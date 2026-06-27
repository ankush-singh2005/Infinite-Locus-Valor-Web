import svgPaths from "./svg-7eqw8ruehn";
import imgImageCoach from "./3fdee62d81f68130daeb6252b1a63281fadf2430.png";
import imgImageMarcusRashford from "./ce35f373a61cc8c5f852f46edb9a595de7d3d1f4.png";
import imgImageLocationMap from "./4e5488901a33858b923a894f47a979abc69ff217.png";

function ImageCoach() {
  return (
    <div className="h-[33.25px] relative shrink-0 w-full" data-name="Image (Coach)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoach} />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.372px] relative rounded-[inherit] size-full">
        <ImageCoach />
      </div>
      <div aria-hidden className="absolute border-[#c8f000] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c8f000] text-[18px] tracking-[0.45px] whitespace-nowrap">VALUR</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#555] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Platform</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[61.561px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[171.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[32px] px-[24px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9952 19.9952">
        <g clipPath="url(#clip0_13_1480)" id="Icon">
          <path d={svgPaths.p1773480} fill="var(--fill-0, #555555)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1480">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#555] text-[14px] whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-[195.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Icon />
        <Text />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9952 19.9952">
        <g clipPath="url(#clip0_13_1471)" id="Icon">
          <path d={svgPaths.p3a80800} fill="var(--fill-0, #D7FF00)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1471">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#d7ff00] text-[14px] whitespace-nowrap">Sessions</p>
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-[#c8f000] relative rounded-[23011500px] shrink-0 size-[5.99px]" data-name="Container" />;
}

function ContainerAlign() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(200,240,0,0.1)] relative rounded-[14px] shrink-0 w-[195.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Icon1 />
        <Text1 />
        <ContainerAlign />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9952 19.9952">
        <g clipPath="url(#clip0_13_1483)" id="Icon">
          <path d={svgPaths.p281308f0} fill="var(--fill-0, #555555)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1483">
            <rect fill="white" height="19.9952" width="19.9952" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#555] text-[14px] whitespace-nowrap">Offer</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-[195.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[15.998px] relative shrink-0 w-[21.999px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9991 15.9983">
        <g clipPath="url(#clip0_13_1474)" id="Icon">
          <path d={svgPaths.p3bdef200} fill="var(--fill-0, #555555)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1474">
            <rect fill="white" height="15.9983" width="21.9991" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#555] text-[14px] whitespace-nowrap">Learn</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-[195.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Icon3 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 15.9983">
        <g clipPath="url(#clip0_13_1468)" id="Icon">
          <path d={svgPaths.p1f1b3480} fill="var(--fill-0, #555555)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1468">
            <rect fill="white" height="15.9983" width="15.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#555] text-[14px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-[195.323px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Icon4 />
        <Text4 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[699.384_0_0] min-h-px relative w-full" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[12px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function ImageCoach1() {
  return (
    <div className="h-[33.25px] relative shrink-0 w-full" data-name="Image (Coach)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoach} />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[23011500px] shrink-0 size-[35.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.372px] relative rounded-[inherit] size-full">
        <ImageCoach1 />
      </div>
      <div aria-hidden className="absolute border-[#c8f000] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[23011500px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Coach Profile</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[#888] text-[10px] tracking-[0.25px] uppercase whitespace-nowrap">Pro Performance</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[102.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[161.955px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(200,240,0,0.1)] content-stretch flex flex-col items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[161.955px]" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[#c8f000] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap">Pro Tier Active</p>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[14px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2a2a] border-[0.686px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16.686px] relative size-full">
        <Container7 />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] px-[12px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#0a0a0a] h-[932.683px] relative shrink-0 w-[219.991px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#1e1e1e] border-r-[0.686px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.686px] relative size-full">
        <Container />
        <Navigation />
        <Container5 />
      </div>
    </div>
  );
}

function PlaceholderForSessionDetailPage() {
  return <div className="h-[72.673px] relative shrink-0 w-full" data-name="Placeholder for SessionDetailPage" />;
}

function ImageMarcusRashford() {
  return (
    <div className="h-[287.992px] relative shrink-0 w-[722.829px]" data-name="Image (Marcus Rashford)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageMarcusRashford} />
    </div>
  );
}

function Container15() {
  return <div className="absolute h-[287.992px] left-0 top-0 w-[722.829px]" style={{ backgroundImage: "linear-gradient(0deg, rgb(5, 5, 5) 0%, rgba(5, 5, 5, 0.3) 50%, rgba(1, 1, 1, 0.15) 75%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[36px] text-white tracking-[0.9px] whitespace-nowrap">Marcus Rashford</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[7.994px] relative shrink-0 w-[6.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99727 7.99381">
        <g clipPath="url(#clip0_13_1465)" id="Icon">
          <path d={svgPaths.p2559300} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1465">
            <rect fill="white" height="7.99381" width="6.99727" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#d7ff00] relative rounded-[14px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative size-full">
        <Icon5 />
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[15px] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">ELITE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Heading1 />
        <Container18 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#dde3ed] text-[12px] whitespace-nowrap">Sessions together: 12</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#dde3ed] text-[12px] whitespace-nowrap">Last session: 4 days ago</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-[23.99px] top-[212px] w-[288.731px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container17 />
        <Container19 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[287.992px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageMarcusRashford />
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] h-[289.363px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.686px] relative rounded-[inherit] size-full">
        <Container14 />
      </div>
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-[674.845px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#d7ff00] text-[20px] tracking-[2px] whitespace-nowrap">WED 18 OCT • 09:00 AM — 10:00 AM</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#d7ff00] relative rounded-[14px] shrink-0" data-name="Text">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12.686px] py-[6.686px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-black uppercase whitespace-nowrap">F2F</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap">60 MIN • ELITE STRIKER TRAINING • £150</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[674.845px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[12px] relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#0e0f11] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#2a2a2a] border-[0.686px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24.686px] relative size-full">
        <Paragraph4 />
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function PlaceholderForSessionDetailPage1() {
  return <div className="h-[175.992px] relative shrink-0 w-full" data-name="Placeholder for SessionDetailPage" />;
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Carrington Training Complex</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[196.866px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Manchester, M31 4BH</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-[196.866px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.991px] relative shrink-0 w-[13.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9945 17.9914">
        <g clipPath="url(#clip0_13_1462)" id="Icon">
          <path d={svgPaths.p2e034100} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1462">
            <rect fill="white" height="17.9914" width="13.9945" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[20.686px] py-[10.686px] relative size-full">
        <Icon6 />
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">GET DIRECTIONS</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Container24 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function ImageLocationMap() {
  return (
    <div className="h-[175.992px] relative shrink-0 w-[722.829px]" data-name="Image (Location map)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLocationMap} />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[rgba(14,20,27,0.3)] h-[175.992px] left-0 top-0 w-[722.829px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute h-[175.992px] left-[0.69px] top-[0.69px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ImageLocationMap />
        <Container26 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] h-[266.721px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.686px] relative rounded-[inherit] size-full">
        <PlaceholderForSessionDetailPage1 />
        <Container23 />
        <Container25 />
      </div>
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[32px] top-[32px] w-[724.201px]" data-name="Container">
      <Container13 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[44px] relative shrink-0 w-[350.635px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#d7ff00] text-[20px] tracking-[2px] whitespace-nowrap">COACH NOTES</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[#050505] h-[113.392px] left-[-0.01px] rounded-[14px] top-0 w-[350.635px]" data-name="Text Area">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[16.686px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.2)] w-full">Add coaching notes for this session…</p>
      </div>
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[120.23px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextArea />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24.686px] relative size-full">
        <Paragraph7 />
        <Container29 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#d7ff00] text-[20px] tracking-[2px] whitespace-nowrap">PAST INSIGHTS</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-[358.629px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">14 OCT SESSION</p>
      </div>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#dde3ed] text-[14px] w-[359px]">{`"Noticed slight fatigue in the 2nd quadrant. Lateral movement sharp but recovery breath work needs focus."`}</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20.686px] relative size-full">
        <Paragraph9 />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-[358.629px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">07 OCT SESSION</p>
      </div>
    </div>
  );
}

function ParagraphMargin1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#dde3ed] text-[14px] w-[359px]">{`"First touch improving significantly. Pressing triggers need to be sharper in transition phases."`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20.686px] relative size-full">
        <Paragraph10 />
        <ParagraphMargin1 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-[358.629px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">30 SEP SESSION</p>
      </div>
    </div>
  );
}

function ParagraphMargin2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] not-italic relative shrink-0 text-[#dde3ed] text-[14px] w-[359px]">{`"Excellent finishing under pressure today. Stamina holding well through 60+ minutes."`}</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20.686px] relative size-full">
        <Paragraph11 />
        <ParagraphMargin2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[399.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[16px] relative size-full">
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph8 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[17.991px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9914 17.9914">
        <g id="Icon">
          <path d={svgPaths.p208e9200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[53.342px] items-center justify-center left-0 px-[0.686px] py-[12.686px] rounded-[14px] top-0 w-[173.314px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon7 />
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">CANCEL</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[17.991px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9914 17.9914">
        <g id="Icon">
          <path d={svgPaths.pc4b3000} fill="var(--fill-0, #181E00)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#ccf200] content-stretch drop-shadow-[0px_0px_8px_rgba(204,242,0,0.2)] flex gap-[8px] h-[53.342px] items-center justify-center left-[185.3px] py-[12px] rounded-[14px] top-0 w-[173.324px]" data-name="Button">
      <Icon8 />
      <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#181e00] text-[20px] text-center whitespace-nowrap">ACCEPT</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[53.342px] relative shrink-0 w-[358.629px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[19.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9952 19.9952">
        <g id="Icon">
          <path d={svgPaths.p120d1a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[14px] shrink-0 w-[358.629px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[0.686px] py-[12.686px] relative size-full">
        <Icon9 />
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">RESCHEDULE</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20.686px] relative size-full">
        <Container36 />
        <Button8 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[788.19px] top-[32px] w-[399.991px]" data-name="Container">
      <Container28 />
      <Container30 />
      <Container35 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[908.873px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container12 />
        <Container27 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[12.998px] relative shrink-0 w-[7.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99381 12.998">
        <g clipPath="url(#clip0_13_1477)" id="Icon">
          <path d={svgPaths.p30eabf00} fill="var(--fill-0, #D7FF00)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1477">
            <rect fill="white" height="12.998" width="7.99381" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bebas_Neue:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[2.4px] whitespace-nowrap">SESSION DETAILS</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button9 />
        <Heading />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[17.991px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9914 17.9914">
        <g clipPath="url(#clip0_13_1450)" id="Icon">
          <path d={svgPaths.p3885b100} fill="var(--fill-0, #CCF200)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_13_1450">
            <rect fill="white" height="17.9914" width="17.9914" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(17,19,21,0.8)] relative rounded-[23011500px] shrink-0 size-[39.99px]" data-name="Button">
      <div aria-hidden className="absolute border-[0.686px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[23011500px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.686px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function ImageCoach2() {
  return (
    <div className="h-[33.25px] relative shrink-0 w-full" data-name="Image (Coach)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCoach} />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[35.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.372px] relative rounded-[inherit] size-full">
        <ImageCoach2 />
      </div>
      <div aria-hidden className="absolute border-[#c8f000] border-[1.372px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button10 />
        <Container39 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(5,5,5,0.95)] left-0 top-0 w-[1220.182px]" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-b-[0.686px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[16.686px] pt-[16px] px-[32px] relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function SessionDetailPage() {
  return (
    <div className="bg-[#050505] flex-[1220.182_0_0] h-full min-w-px relative" data-name="SessionDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PlaceholderForSessionDetailPage />
        <Container11 />
        <Header />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#050505] h-[932.683px] relative shrink-0 w-[1440.172px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Sidebar />
        <SessionDetailPage />
      </div>
    </div>
  );
}

export default function ValurWebPlatform() {
  return (
    <div className="bg-[#050505] content-stretch flex flex-col items-start relative size-full" data-name="Valur Web Platform">
      <App />
    </div>
  );
}
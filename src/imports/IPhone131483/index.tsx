import svgPaths from "./svg-9mcd9v2fx2";
import imgCinematicBackground from "./7a94c6b77885230ac44b1d1b19416a6c4dd93b22.png";
import imgAb6AXuB13Pr4DcGo31OoC9KA0D9VukX0Lh3RWq9UBTwkRbBrutb7LpEjP1Es45Z3G404V3CDn3WAekC6CZws8I0YlfAg6VtJodRiBwYhpGbBPdsasOYe1AeOv0M6J3DBa1ZHqYljbtMrcXhwCnQa4Luc3QItiSDz5R3VmIaStIad1Z4YA0I3KN6Fts1Gy4GOdIjp9Pw20LKhSwHmMwU8OXileUgdoYnNxkGVa4GuuMhmycf3Kj8JrIzAvOxZnanwLsRjwtqRjrnuomMj from "./352e34c9207e3e50efffaa772adf00e85063ea60.png";
import imgAb6AXuCZoQEb2TehhjUw3P4R8DpWofwcNuntP6GlnJghxErn19BlDrwxXPxPqVxalfuCuHotfxuV2Rle3Gsb2VPx4XLnz0YbekRdbdEVbHkoeRoL4McSfUoEo6C4TyHtaIEyBfd274LffTk5PdiCl4FiD7FUn2XRprggad8FtfQGbuZ54YcduRHVqKJeDrs9VqUzovHblsfEj8XdlkQhVgcndPv84DMn7NnYgjOcswtdHeIfe5GDmP2UpgUxtRl2IuRw02Cbk4NyT from "./f1076af045ce2908158991cb9398bf2e413e40c7.png";
import imgAb6AXuBFj7PTl6K7Yv9Ir2MKkj82AO3LyfsM2BtBv0QnWrKaTt3XkImVOd5USuaJRfw86YbWbHIrKAica0TElKnJ3IgBpaJgJiTJl0EzQLokYSoS4YWv3Law5DH7Sbimhq8D1Ft7NuItjtCFie7PZ8YwSlKscSHaGbWDdnPkcDbu22ZC6AjAgRw8PQsZrouG69YKXtzPMa5SfRKo4DaYXofZMamuWR8QzCp6TU7RitlfpFYjTDRxLnZdlHg74SwF9ZdF7IC58 from "./8eb9a82921a1ca2d98ebe425e46b464da8b8e9fa.png";

function CinematicBackground() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Cinematic background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-5.31%] max-w-none top-0 w-[110.62%]" src={imgCinematicBackground} />
      </div>
    </div>
  );
}

function BackgroundLayer() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_-105px_0] items-start justify-center overflow-clip" data-name="Background Layer">
      <CinematicBackground />
      <div className="absolute bg-gradient-to-t from-[#0e141b] inset-0 to-[rgba(14,20,27,0.4)] via-1/2 via-[rgba(14,20,27,0.8)]" data-name="Gradient" />
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" data-name="Overlay" />
    </div>
  );
}

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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(0,0,0,0)] content-stretch flex flex-col h-[54px] items-start pt-[12px] px-[24px] relative shrink-0 w-[390px]" data-name="Status Bar - iPhone">
      <Frame />
    </div>
  );
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
    <div className="backdrop-blur-[6px] bg-[rgba(14,20,27,0.16)] content-stretch flex h-[60px] items-center justify-between px-[16px] relative shrink-0 w-[374px] z-[3]" data-name="Header - TopAppBar">
      <Heading />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col h-[130px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] h-[135px] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[64px] tracking-[-2px] uppercase w-[358px]">
        <p className="leading-[60px]">CHOOSE YOUR FOCUS</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white uppercase whitespace-nowrap">
        <p className="leading-[15px]">COACH SETUP</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[368px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start pl-[16px] relative shrink-0 w-[368px] z-[2]">
      <Heading1 />
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.24px] uppercase w-full">
        <p className="leading-[32px]">Who do you coach ?</p>
      </div>
    </div>
  );
}

function MainHeadline() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main Headline">
      <Heading2 />
    </div>
  );
}

function Ab6AXuB13Pr4DcGo31OoC9KA0D9VukX0Lh3RWq9UBTwkRbBrutb7LpEjP1Es45Z3G404V3CDn3WAekC6CZws8I0YlfAg6VtJodRiBwYhpGbBPdsasOYe1AeOv0M6J3DBa1ZHqYljbtMrcXhwCnQa4Luc3QItiSDz5R3VmIaStIad1Z4YA0I3KN6Fts1Gy4GOdIjp9Pw20LKhSwHmMwU8OXileUgdoYnNxkGVa4GuuMhmycf3Kj8JrIzAvOxZnanwLsRjwtqRjrnuomMj() {
  return (
    <div className="absolute inset-px opacity-40" data-name="AB6AXuB13PR-4dcGO31ooC9kA0D9vukX0lh3rWQ9uBTwkRbBRUTB7LpEjP1ES45z3G404-V3cDn3wAekC6cZWS8I0YlfAg6VtJodRiBWYhpGbBPdsasOYe1aeOV0m6j3dBA1zHqYljbtMrcXHWCnQA4Luc3QItiSDz5R3vmIaSTIad1z4Y-A0i3kN6Fts1Gy4gODIjp9PW20lKHSw-hmMwU8oXILEUgdoYnNxkGVa4guuMHMYCF3kj8JRIzAVOxZNANWLsRJWTQRjrnuomMJ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[282.54%] left-0 max-w-none top-[-91.27%] w-full" src={imgAb6AXuB13Pr4DcGo31OoC9KA0D9VukX0Lh3RWq9UBTwkRbBrutb7LpEjP1Es45Z3G404V3CDn3WAekC6CZws8I0YlfAg6VtJodRiBwYhpGbBPdsasOYe1AeOv0M6J3DBa1ZHqYljbtMrcXhwCnQa4Luc3QItiSDz5R3VmIaStIad1Z4YA0I3KN6Fts1Gy4GOdIjp9Pw20LKhSwHmMwU8OXileUgdoYnNxkGVa4GuuMhmycf3Kj8JrIzAvOxZnanwLsRjwtqRjrnuomMj} />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[28px]">{`PLAYERS & ATHLETES`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[16px]">{`1-on-1 growth & development`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start justify-end p-[16px] rounded-[12px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Option() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 h-[128px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Option 1">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuB13Pr4DcGo31OoC9KA0D9VukX0Lh3RWq9UBTwkRbBrutb7LpEjP1Es45Z3G404V3CDn3WAekC6CZws8I0YlfAg6VtJodRiBwYhpGbBPdsasOYe1AeOv0M6J3DBa1ZHqYljbtMrcXhwCnQa4Luc3QItiSDz5R3VmIaStIad1Z4YA0I3KN6Fts1Gy4GOdIjp9Pw20LKhSwHmMwU8OXileUgdoYnNxkGVa4GuuMhmycf3Kj8JrIzAvOxZnanwLsRjwtqRjrnuomMj />
        <div className="absolute bg-gradient-to-t border border-[#d7ff00] border-solid from-[#050505] inset-px rounded-[12px] to-[rgba(5,5,5,0)]" data-name="Gradient" />
        <Container3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Ab6AXuCZoQEb2TehhjUw3P4R8DpWofwcNuntP6GlnJghxErn19BlDrwxXPxPqVxalfuCuHotfxuV2Rle3Gsb2VPx4XLnz0YbekRdbdEVbHkoeRoL4McSfUoEo6C4TyHtaIEyBfd274LffTk5PdiCl4FiD7FUn2XRprggad8FtfQGbuZ54YcduRHVqKJeDrs9VqUzovHblsfEj8XdlkQhVgcndPv84DMn7NnYgjOcswtdHeIfe5GDmP2UpgUxtRl2IuRw02Cbk4NyT() {
  return (
    <div className="absolute inset-px opacity-40" data-name="AB6AXuCZoQEb2TEHHJUw3p4r8Dp_WofwcNuntP6GlnJGHX-ERN1_9BlDrwxXPxPqVXALFUCuHotfxuV2RLE3Gsb2vPx4xLNZ0YBEKRdbdEVbHKOERoL4mcSfUOEo6C4TYHtaIEyBfd274LffTK5PdiCl4FiD_7fUn2-xRprggad8ftfQGbu_Z54ycduR-HVqKJeDRS9VqUzovHblsfEj8xdlkQHVgcndPV84dMn7NnYGJOcswtdHeIfe5gDmP2UpgUxtRL2iuRW02cbk4nyT">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[282.54%] left-0 max-w-none top-[-91.27%] w-full" src={imgAb6AXuCZoQEb2TehhjUw3P4R8DpWofwcNuntP6GlnJghxErn19BlDrwxXPxPqVxalfuCuHotfxuV2Rle3Gsb2VPx4XLnz0YbekRdbdEVbHkoeRoL4McSfUoEo6C4TyHtaIEyBfd274LffTk5PdiCl4FiD7FUn2XRprggad8FtfQGbuZ54YcduRHVqKJeDrs9VqUzovHblsfEj8XdlkQhVgcndPv84DMn7NnYgjOcswtdHeIfe5GDmP2UpgUxtRl2IuRw02Cbk4NyT} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[28px]">OTHER COACHES</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[16px]">{`Mentorship & certifications`}</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start justify-end p-[16px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Option1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 h-[128px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Option 2">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuCZoQEb2TehhjUw3P4R8DpWofwcNuntP6GlnJghxErn19BlDrwxXPxPqVxalfuCuHotfxuV2Rle3Gsb2VPx4XLnz0YbekRdbdEVbHkoeRoL4McSfUoEo6C4TyHtaIEyBfd274LffTk5PdiCl4FiD7FUn2XRprggad8FtfQGbuZ54YcduRHVqKJeDrs9VqUzovHblsfEj8XdlkQhVgcndPv84DMn7NnYgjOcswtdHeIfe5GDmP2UpgUxtRl2IuRw02Cbk4NyT />
        <div className="absolute bg-gradient-to-t border border-[#d7ff00] border-solid from-[#050505] inset-px rounded-[12px] to-[rgba(5,5,5,0)]" data-name="Gradient" />
        <Container6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Ab6AXuBFj7PTl6K7Yv9Ir2MKkj82AO3LyfsM2BtBv0QnWrKaTt3XkImVOd5USuaJRfw86YbWbHIrKAica0TElKnJ3IgBpaJgJiTJl0EzQLokYSoS4YWv3Law5DH7Sbimhq8D1Ft7NuItjtCFie7PZ8YwSlKscSHaGbWDdnPkcDbu22ZC6AjAgRw8PQsZrouG69YKXtzPMa5SfRKo4DaYXofZMamuWR8QzCp6TU7RitlfpFYjTDRxLnZdlHg74SwF9ZdF7IC() {
  return (
    <div className="absolute inset-px opacity-40" data-name="AB6AXuB_fj7P-tl6k7Yv9ir2mKkj82aO3LyfsM2BtBv0qnWRKaTt3XKImVOd5uSuaJRfw86YbWbH-ir_KAica0tELKnJ3igBPAJgJiTJl0ezQLokYSoS4YWv3Law5dH7sbimhq8D1FT7NUItjtCFie7P-Z8Yw_SlKscSHaGbWDdnPkcDbu22zC6AJ_AgRw8pQS_zrouG69yKXtzPMa5SfRKo4daYXofZMamuW-r8qzCp6tU7RitlfpFYjT_dRXLnZdlHG-74swF9ZdF7iC58">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[282.54%] left-0 max-w-none top-[-91.27%] w-full" src={imgAb6AXuBFj7PTl6K7Yv9Ir2MKkj82AO3LyfsM2BtBv0QnWrKaTt3XkImVOd5USuaJRfw86YbWbHIrKAica0TElKnJ3IgBpaJgJiTJl0EzQLokYSoS4YWv3Law5DH7Sbimhq8D1Ft7NuItjtCFie7PZ8YwSlKscSHaGbWDdnPkcDbu22ZC6AjAgRw8PQsZrouG69YKXtzPMa5SfRKo4DaYXofZMamuWR8QzCp6TU7RitlfpFYjTDRxLnZdlHg74SwF9ZdF7IC58} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.6px] uppercase w-full">
        <p className="leading-[28px]">{`CLUBS & TEAMS`}</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white w-full">
        <p className="leading-[16px]">{`Squad packages & team tactics`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start justify-end p-[16px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Option2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] col-1 h-[128px] justify-self-stretch relative rounded-[12px] row-3 shrink-0" data-name="Option 3">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Ab6AXuBFj7PTl6K7Yv9Ir2MKkj82AO3LyfsM2BtBv0QnWrKaTt3XkImVOd5USuaJRfw86YbWbHIrKAica0TElKnJ3IgBpaJgJiTJl0EzQLokYSoS4YWv3Law5DH7Sbimhq8D1Ft7NuItjtCFie7PZ8YwSlKscSHaGbWDdnPkcDbu22ZC6AjAgRw8PQsZrouG69YKXtzPMa5SfRKo4DaYXofZMamuWR8QzCp6TU7RitlfpFYjTDRxLnZdlHg74SwF9ZdF7IC />
        <div className="absolute bg-gradient-to-t from-[#050505] inset-px rounded-[12px] to-[rgba(5,5,5,0)]" data-name="Gradient" />
        <Container9 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___128px_128px_128px] relative shrink-0 w-full" data-name="Container">
      <Option />
      <Option1 />
      <Option2 />
    </div>
  );
}

function Section1WhoDoYouCoach() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section 1: WHO DO YOU COACH">
      <Container2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d7ff00] text-[24px] tracking-[0.24px] uppercase w-full">
        <p className="leading-[24px]">AGE SPECIALIZATION</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-center justify-center min-w-[80px] pb-[16.5px] pt-[15.5px] px-px relative rounded-[9999px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">8</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[10px] bg-[#ccf200] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-center justify-center min-w-[80px] pb-[16.5px] pt-[15.5px] px-px relative rounded-[9999px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#181e00] text-[13px] text-center whitespace-nowrap">
        <p className="leading-[16px]">9-12</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-center justify-center min-w-[80px] pb-[16.5px] pt-[15.5px] px-px relative rounded-[9999px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">12-16</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,19,21,0.8)] content-stretch flex flex-[1_0_0] flex-col h-[38px] items-center justify-center min-w-[80px] pb-[16.5px] pt-[15.5px] px-px relative rounded-[9999px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">16+</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Section2AgeSpecialization() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] relative shrink-0 w-full" data-name="Section 2: AGE SPECIALIZATION">
      <Heading3 />
      <Container12 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[448px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] pt-[28px] px-[16px] relative size-full">
        <MainHeadline />
        <Section1WhoDoYouCoach />
        <Section2AgeSpecialization />
      </div>
    </div>
  );
}

function HtmlBody1() {
  return (
    <div className="content-stretch flex flex-col h-[883px] isolate items-start pb-[168px] relative shrink-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <HeaderTopAppBar />
      <Frame1 />
      <Main />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
        <g id="Container">
          <path d={svgPaths.p8cbad20} fill="var(--fill-0, black)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-[rgba(255,255,255,0.6)] text-center tracking-[1px] w-[280px]">
          <p className="text-[12px] tracking-[1.2px] uppercase">
            <span className="leading-[24px] text-white">Already have an account?</span>
            <span className="leading-[24px] text-[#c5c9ac]">{` `}</span>
            <span className="leading-[24px] text-[#ccf200]">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FooterBottomActionBar() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[16px] h-[165px] items-start pb-[32px] pt-[25px] px-[24px] relative shrink-0 w-[390px]" data-name="Footer - Bottom Action Bar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-[#d7ff00] h-[48px] relative rounded-[12px] shrink-0 w-[356px]" data-name="Button/Variant3">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[24px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Bebas_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">CONTINUE</p>
          </div>
          <Container13 />
        </div>
      </div>
      <Container14 />
    </div>
  );
}

function HtmlBody() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[1087px] items-start left-0 top-0 w-[390px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(14, 20, 27) 0%, rgb(14, 20, 27) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <BackgroundLayer />
      <StatusBarIPhone />
      <HtmlBody1 />
      <FooterBottomActionBar />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#d7ff00] relative size-full" data-name="iPhone 13 & 14 - 83">
      <HtmlBody />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic right-[113px] text-[#d7ff00] text-[13px] top-[320px] translate-x-full whitespace-nowrap">
        <p className="leading-[16px]">MULTI-SELECT</p>
      </div>
    </div>
  );
}
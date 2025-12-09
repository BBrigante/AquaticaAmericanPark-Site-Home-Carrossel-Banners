import svgPaths from "./svg-oojh7pikn9";
import svgFzPaths from "./svg-fzpdyuzax1"; // New SVG paths for first banner
import imgHeroImage from "figma:asset/9a6a807318a5ecc2f1864f2e891404ea4c75711b.png";
import imgRectangle from "figma:asset/c367cb6463895776ab841b468efb3ff1d1bff353.png";
import imgHeroImage1 from "figma:asset/d4a7179c0151e8bbd0a809cb42127fb31acb56ac.png";
import imgHeroImage2 from "figma:asset/beae7d9aabfece1f2e21cb9fa9055b1622d3856b.png";
import imgLogoBlack1 from "figma:asset/ce0e650f5a1aaaf8c76838112f88d66b5c682e32.png";
// Import banner images
import imgBannerMapaDesktop1 from "figma:asset/bd40971749a99b053a7efd1b60fecfd2ff3bbc35.png"; // Desktop
import imgBannerMapaNotebook1 from "figma:asset/dce7917a4502970b2c8b5f48fbd91ebfc29ff806.png"; // Notebook
import imgBannerMapaTablet from "figma:asset/a999a7dc3210d74fff18b2f2754d68522d76cb0a.png"; // Tablet
import imgBannerMapaMobile21 from "figma:asset/70a1e2c9a39f60a299db010a75f90da8030bbe0c.png"; // Mobile
// Import show banner images
import imgImage9 from "figma:asset/f4f17f5102ca71b31d4e7fb8baae7c1c45dc1a36.png"; // Desktop show banner
import imgHeroImage3 from "figma:asset/75ca89746da65581937f48878176f9fb14f02a7d.png"; // Background for show banner
import imgImage11 from "figma:asset/19b67d2676b0a645367c5c952a475dc1db9d9527.png"; // Mobile show banner

// First banner assets - new images
import imgBanner3 from "figma:asset/4e93d369dd28532ae433bea7fb45fcd6ac7d9485.png"; // Desktop banner
import imgBanner700X1100Px11 from "figma:asset/03a1fbf70ecd23fffd39249f168c8ab996ddf650.png"; // Tablet/Mobile banner
import imgImage14 from "figma:asset/cc0e02d51ab204de670fe001e4a88f709da0e269.png"; // Overlay image

// Black Friday banner assets (kept for reference)
import imgImage8 from "figma:asset/b3315aecb99604e18b7980c1d93574d7418d292b.png";
import imgBlackFridayBg from "figma:asset/e6d5fcffbc6dc402750f1b7e3a275037a7d6346b.png";
import img21 from "figma:asset/17592bcbe92f6372123f8e75272ec5aef3066f5e.png";
import imgRectangle33 from "figma:asset/75ca89746da65581937f48878176f9fb14f02a7d.png";
import img26 from "figma:asset/17592bcbe92f6372123f8e75272ec5aef3066f5e.png";
import img111 from "figma:asset/a408aedb28474c09b438895ac41120c375d3310f.png";
import imgDesignSemNome3 from "figma:asset/8ce34ad213eeb288824080c11780d958c65106c1.png";
import img214 from "figma:asset/8277185704c02cdf34cd3adf8db2e10944617f2d.png";

import { useActiveBreakpoint } from "figma:react";
import { useEffect, useState } from "react";
import { defineProperties } from "figma:react";

// Navigation Arrows
function NavigationArrows({ onPrevClick, onNextClick, isDesktop }) {
  // Reduced padding so the circular background is smaller while icon remains visible
  const baseArrowClass = "absolute top-1/2 transform -translate-y-1/2 z-[999] cursor-pointer bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 pointer-events-auto";
  
  return (
    <>
      <button 
        className={`${baseArrowClass} left-4 ${isDesktop ? "w-14 h-14" : "w-12 h-12"}`} 
        onClick={onPrevClick}
        aria-label="Previous banner"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button 
        className={`${baseArrowClass} right-4 ${isDesktop ? "w-14 h-14" : "w-12 h-12"}`} 
        onClick={onNextClick}
        aria-label="Next banner"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </>
  );
}

// NEW BANNER COMPONENTS (WATER PARK WITH HAPPY KID)
function WaterParkBackgroundVectorsDesktop() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-280.89%_-34.22%_-28382.9%_-29.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3152 288">
          <g id="Background Vectors">
            <path d={svgFzPaths.p1a5d8ac0} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1317_39235)" id="Vector 4" />
            <path d={svgFzPaths.p1cd00e00} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1317_39235_clip_path" transform="translate(-11.7918 10)">
              <path d={svgFzPaths.p1a5d8ac0} />
            </clipPath>
            <clipPath id="bgblur_1_1317_39235_clip_path" transform="translate(10 8.60459)">
              <path d={svgFzPaths.p1cd00e00} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1317_39235" x1="87.4785" x2="615.749" y1="159.459" y2="-972.261">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WaterParkDesktop() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col h-[956px] items-start mb-[-1px] p-0 relative shrink-0 w-full" data-name="Hero Section" href="https://loja.aquaticaamericanpark.com.br/" target="_blank" rel="noopener noreferrer">
      <div className="h-[955px] relative shrink-0 w-full" data-name="Hero Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner3} />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <WaterParkBackgroundVectorsDesktop />
        </div>
      </div>
      <div className="absolute h-[875px] left-[-99px] top-0 w-[1116px] z-10" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </a>
  );
}

function WaterParkBackgroundVectorsDesktop1() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-32.19%_-28784.8%_-30.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <path d={svgFzPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1317_39249)" id="Vector 4" />
            <path d={svgFzPaths.p3b85a400} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1317_39249_clip_path" transform="translate(10 -5.64027)">
              <path d={svgFzPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1317_39249_clip_path" transform="translate(-38.5139 10)">
              <path d={svgFzPaths.p3b85a400} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1317_39249" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WaterParkDesktop1() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col h-[800px] items-center mb-[-1px] p-0 relative shrink-0 w-full" data-name="Hero Section" href="https://loja.aquaticaamericanpark.com.br/" target="_blank" rel="noopener noreferrer">
      <div className="h-[799px] relative shrink-0 w-full" data-name="Hero Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner3} />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <WaterParkBackgroundVectorsDesktop1 />
        </div>
      </div>
      <div className="absolute h-[735px] left-[-175px] top-[15px] w-[937px] z-10" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </a>
  );
}

function WaterParkBackgroundVectorsTablet() {
  return (
    <div className="h-px relative w-[1400px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-81.29%_-28784.8%_-42.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <path d={svgFzPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1317_39245)" id="Vector 4" />
            <path d={svgFzPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1317_39245_clip_path" transform="translate(10 -5.64028)">
              <path d={svgFzPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1317_39245_clip_path" transform="translate(-38.5136 10)">
              <path d={svgFzPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1317_39245" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WaterParkTablet() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col h-[1100px] items-center mb-[-1px] p-0 relative shrink-0 w-full" data-name="Hero Section" href="https://loja.aquaticaamericanpark.com.br/" target="_blank" rel="noopener noreferrer">
      <div className="h-[1099px] relative shrink-0 w-full" data-name="Hero Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner700X1100Px11} />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <WaterParkBackgroundVectorsTablet />
        </div>
      </div>
      <div className="absolute h-[488px] left-1/2 -translate-x-1/2 top-[611px] w-[622px] z-10" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </a>
  );
}

function WaterParkBackgroundVectorsMobile() {
  return (
    <div className="h-px relative w-[1308px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-94.04%_-28784.8%_-45.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <path d={svgFzPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1317_39239)" id="Vector 4" />
            <path d={svgFzPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1317_39239_clip_path" transform="translate(10 -5.64028)">
              <path d={svgFzPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1317_39239_clip_path" transform="translate(-38.5136 10)">
              <path d={svgFzPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1317_39239" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WaterParkMobile() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col h-[791px] items-center mb-[-1px] p-0 relative shrink-0 w-full" data-name="Hero Section" href="https://loja.aquaticaamericanpark.com.br/" target="_blank" rel="noopener noreferrer">
      <div className="h-[790px] relative shrink-0 w-full" data-name="Hero Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBanner700X1100Px11} />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <WaterParkBackgroundVectorsMobile />
        </div>
      </div>
      <div className="absolute h-[346px] left-1/2 -translate-x-1/2 top-[413px] w-[441px] z-10" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
    </a>
  );
}

// TICKET BANNER COMPONENTS
function BackgroundVectorsDesktop() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-32.19%_-28784.9%_-30.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64027">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_834_28361_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_834_28361)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5139" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_834_28361_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3b85a400} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_834_28361_clip_path" transform="translate(10 -5.64027)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_834_28361_clip_path" transform="translate(-38.5139 10)">
              <path d={svgPaths.p3b85a400} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_834_28361" x1="-2.89596" x2="2949.08" y1="182.759" y2="-635.502">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IsolationModeDesktop() {
  return (
    <div className="h-[142.2px] relative shrink-0 w-[513px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 513 143">
        <g clipPath="url(#clip0_834_28122)" id="Isolation_Mode">
          <path d={svgPaths.p2bd7a100} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p18782880} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pde39b80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p453ea00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2b213400} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p380a6580} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pa117800} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p26fe57f0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p58d5b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.paaec900} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_834_28122">
            <rect fill="white" height="142.2" width="513" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group28Desktop() {
  return (
    <div className="h-[51.481px] relative shrink-0 w-[475.805px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 476 52">
        <g id="Group 28">
          <path d={svgPaths.pf40680} id="Vector" stroke="var(--stroke-0, #0896C5)" strokeWidth="0.864" />
          <path d={svgPaths.p7c48930} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2e810f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p35b23280} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1cc68b00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pc93c000} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2dbc2b00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1834e280} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p10d97300} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p105dcb80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2e3e1b0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1c02ca00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1a49f600} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p347b4880} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p35568000} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3f931880} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p32873470} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.pd8d2900} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p2cfb5680} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p20581600} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p36132c00} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p5cbaa80} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p2dd0900} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p139ebb00} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p39ca1300} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p2708cc80} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p346f377c} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p1c005d00} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p2a8b5580} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p39fc2280} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p53e8600} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p269b9c00} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p2faab7f0} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p1562e900} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.pa585d80} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p29434f00} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p112eab00} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p20068980} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p2ea47d80} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p2b467a80} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p288f7680} fill="var(--fill-0, #0068BA)" id="Vector_41" />
          <path d={svgPaths.p235c5c00} fill="var(--fill-0, #0068BA)" id="Vector_42" />
          <path d={svgPaths.p37c5200} fill="var(--fill-0, #F58410)" id="Vector_43" />
          <path d={svgPaths.p143491f0} fill="var(--fill-0, #F58410)" id="Vector_44" />
          <path d={svgPaths.pf1e0f00} fill="var(--fill-0, #F58410)" id="Vector_45" />
          <path d={svgPaths.p1ece7df0} fill="var(--fill-0, #F58410)" id="Vector_46" />
          <path d={svgPaths.p12240db2} fill="var(--fill-0, #F58410)" id="Vector_47" />
          <path d={svgPaths.pe4d7080} fill="var(--fill-0, #F58410)" id="Vector_48" />
          <path d={svgPaths.p164de000} fill="var(--fill-0, #F58410)" id="Vector_49" />
          <path d={svgPaths.p39b53af0} fill="var(--fill-0, #0FC4CF)" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Frame29Desktop() {
  return (
    <div className="bg-[rgba(71,32,96,0.5)] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[12px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-bold font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[0px] text-[20px] text-center text-white">
            <span>{`2º LOTE DISPONÍVEL - `}</span>
            <span className="text-[#e3a530] font-bold">GARANTA SEU INGRESSO</span>
            <span>{`, APROVEITE!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame29Desktop1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <IsolationModeDesktop />
      <Group28Desktop />
      <Frame29Desktop />
    </div>
  );
}

function IsolationModeDesktop1() {
  return (
    <div className="h-[349.568px] relative shrink-0 w-[207.504px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 350">
        <g clipPath="url(#clip0_834_28134)" id="Isolation_Mode">
          <path d={svgPaths.p1f07bd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pd39a980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c4f6c00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p11561080} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p26f27e00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p18927f00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1ac7a00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p14b1f000} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.pfc95500} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3f1f4900} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p17fc3180} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p29e3bf00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p5e5a180} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p19dfa880} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1846a800} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p17f2f900} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p2818780} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p35852a32} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p15814c00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.pc2aba00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.pdfe1300} fill="var(--fill-0, white)" id="Vector_21" />
          <g id="Group">
            <path d={svgPaths.p35772880} fill="var(--fill-0, #F58018)" id="Vector_22" />
            <g id="Vector_23"></g>
            <g id="Vector_24"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p23f4c480} fill="var(--fill-0, #0574B0)" id="Vector_25" />
            <path d={svgPaths.p2ac09580} fill="var(--fill-0, #0574B0)" id="Vector_26" />
            <path d={svgPaths.p27597480} fill="var(--fill-0, #0574B0)" id="Vector_27" />
            <path d={svgPaths.p3d611300} fill="var(--fill-0, #0574B0)" id="Vector_28" />
            <g id="Vector_29"></g>
            <g id="Vector_30"></g>
            <path d={svgPaths.p32754280} fill="var(--fill-0, #0574B0)" id="Vector_31" />
            <path d={svgPaths.pc112d00} fill="var(--fill-0, #0574B0)" id="Vector_32" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_834_28134">
            <rect fill="white" height="349.568" width="207.504" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29Desktop2() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start justify-center left-[60px] top-[240px] z-10">
      <Frame29Desktop1 />
      <IsolationModeDesktop1 />
    </div>
  );
}

function Banner1Desktop() {
  return (
    <a href="https://loja.aquaticaamericanpark.com.br/?ingToken=showanacastela&date=07%2F02%2F2026" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer overflow-clip">
      <div className="h-[955px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage} />
        </div>
      </div>
      <div className="absolute left-[1230px] size-[734px] top-[201px] z-10" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <BackgroundVectorsDesktop />
        </div>
      </div>
      <Frame29Desktop2 />
    </a>
  );
}

// ANA CASTELA BANNER COMPONENTS
function Banner2BackgroundVectorsDesktop() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-32.19%_-28784.8%_-30.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64027">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_1059_69324_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            {/* Vector filled by linear gradient */}
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1059_69324)" id="Vector 4" />
            {/* Vector filled by the background image pattern */}
            <path d={svgPaths.p3b85a400} opacity="0.4" fill="url(#heroPattern)" />
            <foreignObject height="249.344" width="3043.4" x="38.5139" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_1059_69324_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3b85a400} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1059_69324_clip_path" transform="translate(10 -5.64027)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1059_69324_clip_path" transform="translate(-38.5139 10)">
              <path d={svgPaths.p3b85a400} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1059_69324" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
            {/* Pattern that uses the imported hero image as the fill */}
            <pattern id="heroPattern" patternUnits="userSpaceOnUse" width="3130" height="304">
              <image href={imgHeroImage3} x="0" y="0" width="3130" height="304" preserveAspectRatio="xMidYMid slice" />
            </pattern>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Banner2Frame30Desktop() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-1/2 pl-[20.837px] pr-0 py-0 top-[calc(50%+0.08px)] translate-x-[-50%] translate-y-[-50%] z-10">
      <div className="h-[688.165px] relative shrink-0 w-[839.655px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Banner2Desktop() {
  return (
    <a href="https://aquaticaamericanpark.com.br/anacastela" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer overflow-clip">
      <div className="h-[955px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage3} />
          <div className="absolute bg-gradient-to-b from-[13.942%] from-[rgba(41,5,48,0.89)] inset-0 to-[74.038%] to-[rgba(41,5,48,0.89)] via-[46.635%] via-[rgba(158,30,181,0.506)]" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <Banner2BackgroundVectorsDesktop />
        </div>
      </div>
      <Banner2Frame30Desktop />
    </a>
  );
}

// DESKTOP1 COMPONENTS (1200-1920px breakpoint)
function BackgroundVectorsDesktop1() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-32.19%_-28784.9%_-30.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64027">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_834_28330_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_834_28330)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5139" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_834_28330_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3b85a400} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_834_28330_clip_path" transform="translate(10 -5.64027)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_834_28330_clip_path" transform="translate(-38.5139 10)">
              <path d={svgPaths.p3b85a400} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_834_28330" x1="-2.89596" x2="2949.08" y1="182.759" y2="-635.502">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IsolationModeDesktop2() {
  return (
    <div className="h-[99.54px] relative shrink-0 w-[359.1px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 100">
        <g clipPath="url(#clip0_834_28074)" id="Isolation_Mode">
          <path d={svgPaths.p3da11880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p22158900} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p20c64400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2664e600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p1e582600} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p22256300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.pc603580} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pcc910d8} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p968bc80} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p38bc9260} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_834_28074">
            <rect fill="white" height="99.54" width="359.1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group28Desktop1() {
  return (
    <div className="h-[36.036px] relative shrink-0 w-[333.063px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 334 37">
        <g id="Group 28">
          <path d={svgPaths.p314fed00} id="Vector" stroke="var(--stroke-0, #0896C5)" strokeWidth="0.6048" />
          <path d={svgPaths.p5296180} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3ef4d580} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2ceb3480} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p105dfd70} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pd4b5a00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3234aa00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p23d69780} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3408c500} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.pd45c800} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1e96dc0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p1073e200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p9d6be80} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p34485900} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p3b2bf400} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3d1e5700} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p35a51e80} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p12078300} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p692ab00} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p3798e00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p1b39af00} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p73fca00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p2d8c1600} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p85e7700} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p27bb9000} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p20f7b280} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p3d121600} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p24a20500} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p1be38380} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p2685e480} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p295e3f80} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p15697c80} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p31e29a00} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p13740000} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p6c3c8b0} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p2c642f00} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p3edd1e80} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.pc287a00} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p2dd4eb00} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p18ec3400} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p86292f0} fill="var(--fill-0, #0068BA)" id="Vector_41" />
          <path d={svgPaths.p1390c00} fill="var(--fill-0, #0068BA)" id="Vector_42" />
          <path d={svgPaths.p19ab5580} fill="var(--fill-0, #F58410)" id="Vector_43" />
          <path d={svgPaths.p6f37000} fill="var(--fill-0, #F58410)" id="Vector_44" />
          <path d={svgPaths.p19dbd610} fill="var(--fill-0, #F58410)" id="Vector_45" />
          <path d={svgPaths.p1535aef0} fill="var(--fill-0, #F58410)" id="Vector_46" />
          <path d={svgPaths.p5db7e80} fill="var(--fill-0, #F58410)" id="Vector_47" />
          <path d={svgPaths.p3ce11780} fill="var(--fill-0, #F58410)" id="Vector_48" />
          <path d={svgPaths.p3bca7d00} fill="var(--fill-0, #F58410)" id="Vector_49" />
          <path d={svgPaths.p136b00f0} fill="var(--fill-0, #0FC4CF)" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Frame29Desktop3() {
  return (
    <div className="bg-[rgba(71,32,96,0.5)] relative rounded-[7px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[8.4px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-bold font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[0px] text-[14px] text-center text-white">
            <span>{`2º LOTE DISPONÍVEL - `}</span>
            <span className="text-[#e3a530] font-bold">GARANTA SEU INGRESSO</span>
            <span>{`, APROVEITE!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame29Desktop4() {
  return (
    <div className="content-stretch flex flex-col gap-[16.8px] items-center relative shrink-0">
      <IsolationModeDesktop2 />
      <Group28Desktop1 />
      <Frame29Desktop3 />
    </div>
  );
}

function IsolationModeDesktop3() {
  return (
    <div className="h-[244.698px] relative shrink-0 w-[145.253px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 245">
        <g clipPath="url(#clip0_834_28086)" id="Isolation_Mode">
          <path d={svgPaths.p3b747a00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pda78f80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3557bf00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1e46c300} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2c216480} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2869000} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p7319900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p940ce00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3b545780} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1e206600} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p9128900} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p29b5e870} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p3f397480} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2469d00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p4b98200} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.pb079480} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1888b5c0} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p355b8b40} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p3dbef880} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p166f9980} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p3a7aac00} fill="var(--fill-0, white)" id="Vector_21" />
          <g id="Group">
            <path d={svgPaths.pea7d200} fill="var(--fill-0, #F58018)" id="Vector_22" />
            <g id="Vector_23"></g>
            <g id="Vector_24"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p18656800} fill="var(--fill-0, #0574B0)" id="Vector_25" />
            <path d={svgPaths.p19f71f00} fill="var(--fill-0, #0574B0)" id="Vector_26" />
            <path d={svgPaths.p3a128700} fill="var(--fill-0, #0574B0)" id="Vector_27" />
            <path d={svgPaths.p29c32c0} fill="var(--fill-0, #0574B0)" id="Vector_28" />
            <g id="Vector_29"></g>
            <g id="Vector_30"></g>
            <path d={svgPaths.p14651b00} fill="var(--fill-0, #0574B0)" id="Vector_31" />
            <path d={svgPaths.p2fc5e400} fill="var(--fill-0, #0574B0)" id="Vector_32" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_834_28086">
            <rect fill="white" height="244.698" width="145.253" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29Desktop5() {
  return (
    <div className="absolute content-stretch flex gap-[16.8px] items-start justify-center left-[100px] top-[240px] z-10">
      <Frame29Desktop4 />
      <IsolationModeDesktop3 />
    </div>
  );
}

function Banner1Desktop1() {
  return (
    <a href="https://loja.aquaticaamericanpark.com.br/?ingToken=showanacastela&date=07%2F02%2F2026" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer">
      <div className="h-[799px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage} />
        </div>
      </div>
      <div className="absolute bottom-0 right-[-60px] size-[620px] z-10" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <BackgroundVectorsDesktop1 />
        </div>
      </div>
      <Frame29Desktop5 />
    </a>
  );
}

function Banner2BackgroundVectorsDesktop1() {
  return (
    <div className="h-px relative w-[1920px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-32.19%_-28784.8%_-30.81%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64027">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_1059_69320_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1059_69320)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5139" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_1059_69320_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3b85a400} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1059_69320_clip_path" transform="translate(10 -5.64027)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1059_69320_clip_path" transform="translate(-38.5139 10)">
              <path d={svgPaths.p3b85a400} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1059_69320" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Banner2Frame30Desktop1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[calc(50%+13px)] pl-[22px] pr-0 py-0 top-[calc(50%+3px)] translate-x-[-50%] translate-y-[-50%] z-10">
      <div className="h-[538px] relative shrink-0 w-[657px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
    </div>
  );
}

function Banner2Desktop1() {
  return (
    <a href="https://aquaticaamericanpark.com.br/anacastela" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer overflow-clip">
      <div className="h-[799px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage3} />
          <div className="absolute bg-gradient-to-b from-[13.942%] from-[rgba(41,5,48,0.89)] inset-0 to-[74.038%] to-[rgba(41,5,48,0.89)] via-[46.635%] via-[rgba(158,30,181,0.506)]" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <Banner2BackgroundVectorsDesktop1 />
        </div>
      </div>
      <Banner2Frame30Desktop1 />
    </a>
  );
}

// TABLET COMPONENTS
function BackgroundVectorsTablet() {
  return (
    <div className="h-px relative w-[1400px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-81.29%_-28784.9%_-42.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64028">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_834_28372_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_834_28372)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5136" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_834_28372_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_834_28372_clip_path" transform="translate(10 -5.64028)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_834_28372_clip_path" transform="translate(-38.5136 10)">
              <path d={svgPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_834_28372" x1="-2.89596" x2="2949.08" y1="182.759" y2="-635.502">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IsolationModeTablet() {
  return (
    <div className="h-[93.852px] relative shrink-0 w-[338.58px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 339 94">
        <g clipPath="url(#clip0_834_28010)" id="Isolation_Mode">
          <path d={svgPaths.p35a08690} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p19ae8100} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2b508200} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p31bf6e00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p26297180} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pc360670} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2abbb300} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3a0b5200} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p21375080} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p2f65a900} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_834_28010">
            <rect fill="white" height="93.852" width="338.58" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group28Tablet() {
  return (
    <div className="h-[33.977px] relative shrink-0 w-[314.031px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 315 34">
        <g id="Group 28">
          <path d={svgPaths.p21fcd100} id="Vector" stroke="var(--stroke-0, #0896C5)" strokeWidth="0.57024" />
          <path d={svgPaths.p33a0a000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3524f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2784ba00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p329fe880} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p30e0cb80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2b17ea00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1fba0100} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3c90f900} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p18bd5a80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2590a800} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.pe727880} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p19a3700} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p7bf9780} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p12a5a880} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p6486100} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p2ed41000} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p3b096a80} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p18597e40} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p4909980} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p10a96b00} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p178e2970} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p1eea5980} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p95f2d80} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p383e0500} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p3e53ff80} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p27738d80} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p28e96500} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p2453bc00} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p311d4972} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p3373f580} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p389ed000} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p1a21bb80} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p1d88d500} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p6093280} fill="var(--fill-0, white)" id="Vector_35" />
          <path d={svgPaths.p3942c880} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.pfc5cf80} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p25e3d600} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p3aac3770} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p1bd28780} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p30c83b80} fill="var(--fill-0, #0068BA)" id="Vector_41" />
          <path d={svgPaths.p2ec93180} fill="var(--fill-0, #0068BA)" id="Vector_42" />
          <path d={svgPaths.p35ef2a00} fill="var(--fill-0, #F58410)" id="Vector_43" />
          <path d={svgPaths.p97f94f0} fill="var(--fill-0, #F58410)" id="Vector_44" />
          <path d={svgPaths.p37f11200} fill="var(--fill-0, #F58410)" id="Vector_45" />
          <path d={svgPaths.p28870600} fill="var(--fill-0, #F58410)" id="Vector_46" />
          <path d={svgPaths.p368cba00} fill="var(--fill-0, #F58410)" id="Vector_47" />
          <path d={svgPaths.p3fe06d00} fill="var(--fill-0, #F58410)" id="Vector_48" />
          <path d={svgPaths.p1b7c3520} fill="var(--fill-0, #F58410)" id="Vector_49" />
          <path d={svgPaths.p2c6a8400} fill="var(--fill-0, #0FC4CF)" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Frame29Tablet() {
  return (
    <div className="bg-[rgba(71,32,96,0.5)] relative rounded-[6.6px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[7.92px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-bold font-normal grow leading-[1.5] min-h-px min-w-px relative shrink-0 text-[0px] text-[13.2px] text-center text-white">
            <span>{`2º LOTE DISPONÍVEL - `}</span>
            <span className="text-[#e3a530] font-bold">GARANTA SEU INGRESSO</span>
            <span>{`, APROVEITE!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame29Tablet1() {
  return (
    <div className="content-stretch flex flex-col gap-[15.84px] items-center relative shrink-0">
      <IsolationModeTablet />
      <Group28Tablet />
      <Frame29Tablet />
    </div>
  );
}

function IsolationModeTablet1() {
  return (
    <div className="h-[230.715px] relative shrink-0 w-[136.953px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137 231">
        <g clipPath="url(#clip0_834_27974)" id="Isolation_Mode">
          <path d={svgPaths.p3186cb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14b2c200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p13116100} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2362bff0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p13d7d780} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3af79b00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p29e3eb00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p30662780} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p13089800} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p17d0fa80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p37960500} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.pd69d200} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1ddcc500} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2cc61000} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p2447c300} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p177356f0} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1d778380} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p30abfe00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p11d36780} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p1cb4e500} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p1283f100} fill="var(--fill-0, white)" id="Vector_21" />
          <g id="Group">
            <path d={svgPaths.p288ea900} fill="var(--fill-0, #F58018)" id="Vector_22" />
            <g id="Vector_23"></g>
            <g id="Vector_24"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p3293f700} fill="var(--fill-0, #0574B0)" id="Vector_25" />
            <path d={svgPaths.p759b300} fill="var(--fill-0, #0574B0)" id="Vector_26" />
            <path d={svgPaths.p25074700} fill="var(--fill-0, #0574B0)" id="Vector_27" />
            <path d={svgPaths.pcfec100} fill="var(--fill-0, #0574B0)" id="Vector_28" />
            <g id="Vector_29"></g>
            <g id="Vector_30"></g>
            <path d={svgPaths.pa4fc640} fill="var(--fill-0, #0574B0)" id="Vector_31" />
            <path d={svgPaths.p1776cb00} fill="var(--fill-0, #0574B0)" id="Vector_32" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_834_27974">
            <rect fill="white" height="230.715" width="136.953" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29Tablet2() {
  return (
    <div className="absolute content-stretch flex gap-[15.84px] items-start justify-center left-[calc(50%+0.351px)] top-[189.51px] translate-x-[-50%] z-10">
      <Frame29Tablet1 />
      <IsolationModeTablet1 />
    </div>
  );
}

function Banner1Tablet() {
  return (
    <a href="https://loja.aquaticaamericanpark.com.br/?ingToken=showanacastela&date=07%2F02%2F2026" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer">
      <div className="h-[1099px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage} />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 size-[644px] translate-x-[-50%] z-10" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <BackgroundVectorsTablet />
        </div>
      </div>
      <Frame29Tablet2 />
    </a>
  );
}

function Banner2BackgroundVectorsTablet() {
  return (
    <div className="h-px relative w-[1400px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-81.29%_-28784.8%_-42.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64028">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_1059_69328_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1059_69328)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5136" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_1059_69328_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1059_69328_clip_path" transform="translate(10 -5.64028)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1059_69328_clip_path" transform="translate(-38.5136 10)">
              <path d={svgPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1059_69328" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Banner2Tablet() {
  return (
    <a href="https://aquaticaamericanpark.com.br/anacastela" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer">
      <div className="h-[1099px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage3} />
          <div className="absolute bg-gradient-to-b from-[13.942%] from-[rgba(41,5,48,0.89)] inset-0 to-[74.038%] to-[rgba(41,5,48,0.89)] via-[46.635%] via-[rgba(158,30,181,0.506)]" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <Banner2BackgroundVectorsTablet />
        </div>
      </div>
      <div className="absolute h-[581px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[570px] z-10" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </a>
  );
}

// MOBILE COMPONENTS
function BackgroundVectorsMobile() {
  return (
    <div className="h-px relative w-[1308px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-94.04%_-28784.9%_-45.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64028">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_834_28326_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_834_28326)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5136" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_834_28326_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_834_28326_clip_path" transform="translate(10 -5.64028)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_834_28326_clip_path" transform="translate(-38.5136 10)">
              <path d={svgPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_834_28326" x1="-2.89596" x2="2949.08" y1="182.759" y2="-635.502">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IsolationModeMobile() {
  return (
    <div className="h-[68.256px] relative shrink-0 w-[246.24px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 69">
        <g clipPath="url(#clip0_834_27926)" id="Isolation_Mode">
          <path d={svgPaths.p19fdbb00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1429400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1bc77180} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p19518f00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p18aac100} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p760c100} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2c464180} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p361e2880} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1ec57000} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3cdebc80} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_834_27926">
            <rect fill="white" height="68.256" width="246.24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group28Mobile() {
  return (
    <div className="h-[24.71px] relative shrink-0 w-[228.386px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 229 25">
        <g id="Group 28">
          <path d={svgPaths.p37ee6900} id="Vector" stroke="var(--stroke-0, #0896C5)" strokeWidth="0.41472" />
          <path d={svgPaths.p275345c0} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p22296300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3f752000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2d9dbc80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p36e08e00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p1c5f4f00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p67e5a00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p27ed2900} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1b5e2900} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p13960f00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2a475c00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p76cc700} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2c0e6c00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p9264600} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p2a2d4c30} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p3496e4c0} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.pbd4cb00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p18343280} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p5ad7300} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p2907b00} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p3e21a900} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p1a2e6b00} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p38827180} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p733b600} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p1f19c680} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.pb387c80} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p30d29200} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p1a574b80} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p1dcef580} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p2a9b4d71} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p133babc0} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p3cfd90f0} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p1851b900} fill="var(--fill-0, white)" id="Vector_34" />
          <path d={svgPaths.p2ee07800} fill="var(--fill-0, white)"  id="Vector_35" />
          <path d={svgPaths.p3bb3b870} fill="var(--fill-0, white)" id="Vector_36" />
          <path d={svgPaths.p3f854280} fill="var(--fill-0, white)" id="Vector_37" />
          <path d={svgPaths.p2cca5f40} fill="var(--fill-0, white)" id="Vector_38" />
          <path d={svgPaths.p3d145580} fill="var(--fill-0, white)" id="Vector_39" />
          <path d={svgPaths.p1ee2d000} fill="var(--fill-0, white)" id="Vector_40" />
          <path d={svgPaths.p14127a80} fill="var(--fill-0, #0068BA)" id="Vector_41" />
          <path d={svgPaths.p3ef0d5f0} fill="var(--fill-0, #0068BA)" id="Vector_42" />
          <path d={svgPaths.pf0c7600} fill="var(--fill-0, #F58410)" id="Vector_43" />
          <path d={svgPaths.p3fb55700} fill="var(--fill-0, #F58410)" id="Vector_44" />
          <path d={svgPaths.p19c8ad00} fill="var(--fill-0, #F58410)" id="Vector_45" />
          <path d={svgPaths.p8354900} fill="var(--fill-0, #F58410)" id="Vector_46" />
          <path d={svgPaths.p10c1c00} fill="var(--fill-0, #F58410)" id="Vector_47" />
          <path d={svgPaths.p21a6fa70} fill="var(--fill-0, #F58410)" id="Vector_48" />
          <path d={svgPaths.p197f9500} fill="var(--fill-0, #F58410)" id="Vector_49" />
          <path d={svgPaths.p391b6b00} fill="var(--fill-0, #0FC4CF)" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Frame29Mobile() {
  return (
    <div className="bg-[rgba(71,32,96,0.5)] box-border content-stretch flex items-center justify-center p-[5.76px] relative rounded-[4.8px] shrink-0">
      <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center text-white w-[234.72px]">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[9.6px]">
          <span>{`2º LOTE DISPONÍVEL - `}</span>
          <span className="text-[#e3a530] font-bold">GARANTA SEU INGRESSO</span>
          <span>{`, APROVEITE!`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame29Mobile1() {
  return (
    <div className="content-stretch flex flex-col gap-[11.52px] items-center relative shrink-0">
      <IsolationModeMobile />
      <Group28Mobile />
      <Frame29Mobile />
    </div>
  );
}

function IsolationModeMobile1() {
  return (
    <div className="h-[167.793px] relative shrink-0 w-[99.602px]" data-name="Isolation_Mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 168">
        <g clipPath="url(#clip0_834_27938)" id="Isolation_Mode">
          <path d={svgPaths.p2e216f80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2af84e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p9f61d80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p304ef480} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3d3eae80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p32929000} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3bd46c00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.pbd5fe80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p22583400} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p36cbc00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p215f2c00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p311be880} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pbd69900} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p1cf71c80} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p31f1e480} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p3b6ccf00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p33f65300} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p189db930} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p145af280} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p399d2900} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p161fc200} fill="var(--fill-0, white)" id="Vector_21" />
          <g id="Group">
            <path d={svgPaths.p39a39f80} fill="var(--fill-0, #F58018)" id="Vector_22" />
            <g id="Vector_23"></g>
            <g id="Vector_24"></g>
          </g>
          <g id="Group_2">
            <path d={svgPaths.p104dc000} fill="var(--fill-0, #0574B0)" id="Vector_25" />
            <path d={svgPaths.p3d992000} fill="var(--fill-0, #0574B0)" id="Vector_26" />
            <path d={svgPaths.p2f327c00} fill="var(--fill-0, #0574B0)" id="Vector_27" />
            <path d={svgPaths.p153da200} fill="var(--fill-0, #0574B0)" id="Vector_28" />
            <g id="Vector_29"></g>
            <g id="Vector_30"></g>
            <path d={svgPaths.p127b30f0} fill="var(--fill-0, #0574B0)" id="Vector_31" />
            <path d={svgPaths.p67e4c00} fill="var(--fill-0, #0574B0)" id="Vector_32" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_834_27938">
            <rect fill="white" height="167.793" width="99.6019" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame29Mobile2() {
  return (
    <div className="absolute content-stretch flex gap-[11.52px] items-start justify-center left-[calc(50%-0.319px)] top-[120px] translate-x-[-50%] w-[357.362px] z-10">
      <Frame29Mobile1 />
      <IsolationModeMobile1 />
    </div>
  );
}

function Banner1Mobile() {
  return (
    <a href="https://loja.aquaticaamericanpark.com.br/?ingToken=showanacastela&date=07%2F02%2F2026" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer">
      <div className="h-[790px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage} />
        </div>
      </div>
      <div className="absolute bottom-[-60px] left-1/2 size-[552px] translate-x-[-50%] z-10" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <BackgroundVectorsMobile />
        </div>
      </div>
      <Frame29Mobile2 />
    </a>
  );
}

function Banner2BackgroundVectorsMobile() {
  return (
    <div className="h-px relative w-[1308px]" data-name="Background Vectors">
      <div className="absolute inset-[-1442.94%_-94.04%_-28784.8%_-45.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3130 304">
          <g id="Background Vectors">
            <foreignObject height="307.638" width="3149.57" x="-10" y="5.64028">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_0_1059_69316_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p3bbf2e00} data-figma-bg-blur-radius="10" fill="url(#paint0_linear_1059_69316)" id="Vector 4" />
            <foreignObject height="249.344" width="3043.4" x="38.5136" y="-10">
              <div style={{ backdropFilter: "blur(5px)", clipPath: "url(#bgblur_1_1059_69316_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path d={svgPaths.p11ef700} data-figma-bg-blur-radius="10" fill="var(--fill-0, #0065BA)" id="Vector 3" />
          </g>
          <defs>
            <clipPath id="bgblur_0_1059_69316_clip_path" transform="translate(10 -5.64028)">
              <path d={svgPaths.p3bbf2e00} />
            </clipPath>
            <clipPath id="bgblur_1_1059_69316_clip_path" transform="translate(-38.5136 10)">
              <path d={svgPaths.p11ef700} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1059_69316" x1="65.6867" x2="593.958" y1="175.099" y2="-956.621">
              <stop stopColor="#004882" />
              <stop offset="1" stopColor="#64BAFF" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Banner2Mobile() {
  return (
    <a href="https://aquaticaamericanpark.com.br/anacastela" target="_blank" rel="noopener noreferrer" className="block relative size-full cursor-pointer">
      <div className="h-[790px] relative shrink-0 w-full" data-name="Hero Image">
        <div className="absolute inset-0">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroImage3} />
          <div className="absolute bg-gradient-to-b from-[13.942%] from-[rgba(41,5,48,0.89)] inset-0 to-[74.038%] to-[rgba(41,5,48,0.89)] via-[46.635%] via-[rgba(158,30,181,0.506)]" />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%] z-30">
          <Banner2BackgroundVectorsMobile />
        </div>
      </div>
      <div className="absolute h-[374px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[367px] z-10" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
    </a>
  );
}

// MAIN COMPONENT
function HeroSection({rotationDuration = 5, showArrows = true}) {
  const { width } = useActiveBreakpoint();
  const [currentBanner, setCurrentBanner] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % totalBanners);
    }, rotationDuration * 1000);
    
    return () => clearInterval(interval);
  }, [rotationDuration]);
  
  const totalBanners = 3;

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentBanner((prev) => (prev - 1 + totalBanners) % totalBanners);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentBanner((prev) => (prev + 1) % totalBanners);
  };
  
  const isDesktop = width >= 1200;
  
  if (width < 700) {
    return (
      <div className="relative w-full h-[791px] min-h-[791px] overflow-hidden bg-[#0068BA]">
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <WaterParkMobile />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner1Mobile />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner2Mobile />
        </div>
        {showArrows && <NavigationArrows onPrevClick={handlePrev} onNextClick={handleNext} isDesktop={false} />}
      </div>
    );
  }
  
  if (width < 1200) {
    return (
      <div className="relative w-full h-[1100px] overflow-hidden bg-[#0068BA]">
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <WaterParkTablet />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner1Tablet />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner2Tablet />
        </div>
        {showArrows && <NavigationArrows onPrevClick={handlePrev} onNextClick={handleNext} isDesktop={false} />}
      </div>
    );
  }
  
  if (width < 1920) {
    return (
      <div className="relative w-full h-[800px] overflow-hidden bg-[#0068BA]">
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <WaterParkDesktop1 />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner1Desktop1 />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
          <Banner2Desktop1 />
        </div>
        {showArrows && <NavigationArrows onPrevClick={handlePrev} onNextClick={handleNext} isDesktop={true} />}
      </div>
    );
  }
  
  // For larger screens (>= 1920px)
  return (
    <div className="relative w-full h-[955px] overflow-hidden bg-[#0068BA]">
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 0 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
        <WaterParkDesktop />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 1 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
        <Banner1Desktop />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBanner === 2 ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}>
        <Banner2Desktop />
      </div>
      {showArrows && <NavigationArrows onPrevClick={handlePrev} onNextClick={handleNext} isDesktop={true} />}
    </div>
  );
}

// Export the component and define its properties
export default HeroSection;

defineProperties(HeroSection, {
  rotationDuration: {
    label: "Rotation Duration (seconds)",
    type: "number",
    defaultValue: 5
  },
  showArrows: {
    label: "Show Navigation Arrows",
    type: "boolean",
    defaultValue: true
  }
});

"use client";

import { useEffect, useState } from "react";
import AccordionGallery from "./AccordionGallery";
// import ReelShowcase from "./ReelShowcase";

const workItems = [
  { image: "/work Mercedes -Benz W116.jpg", label: "Mercedes -Benz W116", link: "https://www.facebook.com/media/set/?set=a.919113161044222&type=3" },
  { image: "/work Mitsubishi Mirage.jpg", label: "Mitsubishi Mirage", link: "https://www.facebook.com/media/set/?set=a.926187333670138&type=3" },
  { image: "/work Jaguar X-Type.jpg", label: "Jaguar X-Type", link: "https://www.facebook.com/media/set/?set=a.926178003671071&type=3" },
  { image: "/work Honda-Civic EG8 Vtech.jpg", label: "Honda-Civic EG8 Vtech", link: "https://www.facebook.com/media/set/?set=a.919124061043132&type=3" },
  { image: "/work vbj-automobiles.jpg", label: "Grand Opening - VBJ Automobiles", link: "https://www.facebook.com/media/set/?set=a.921003990855139&type=3" },
];

export default function Work() {
  // -------------------------------------------------------
  // MOBILE DETECTION
  // AccordionGallery's default configuration (hover-trigger,
  // horizontal orientation, 525px height) doesn't translate to
  // touch devices — there's no hover, and five side-by-side
  // expanding panels don't fit a narrow screen. Below the lg
  // breakpoint we swap it to a tap-to-expand, vertically
  // stacked layout with a shorter overall height instead.
  // -------------------------------------------------------
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="work"
      className="
        relative
        w-full
        scroll-mt-140px
        overflow-hidden
        bg-[#110c11]
        pt-[64px]
        text-white
        lg:pt-[90px]
      "
    >

      {/* =====================================================
          BACKGROUND PURPLE ATMOSPHERE
          NOTE: sized down on mobile so the glows don't blow out
          past the edges of a narrow viewport as strongly.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[10px]
          h-[240px]
          w-[240px]
          rounded-full
          opacity-25
          blur-[90px]
          lg:right-[-160px]
          lg:h-[340px]
          lg:w-[340px]
          lg:blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.42) 0%, rgba(76,3,93,0.18) 38%, transparent 72%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-130px]
          top-[120px]
          h-[260px]
          w-[260px]
          rounded-full
          opacity-20
          blur-[100px]
          lg:left-[-180px]
          lg:top-[160px]
          lg:h-[380px]
          lg:w-[380px]
          lg:blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.45) 0%, transparent 68%)",
        }}
      />


      {/* =====================================================
          TOP SUBTITLE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mb-[5px]
          text-center
          text-[10px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-white/55
          sm:mb-[6px]
          sm:text-[12px]
          sm:tracking-[0.18em]
        "
      >
        Our Work
      </div>


      {/* =====================================================
          MAIN TITLE
      ====================================================== */}

      <h2
        className="
          relative
          z-10
          mb-[30px]
          text-center
          font-serif
          text-[32px]
          italic
          leading-none
          tracking-[-0.03em]
          text-[#900a9c]
          sm:mb-[45px]
          sm:text-[42px]
          sm:tracking-[-0.035em]
          md:text-[48px]
          lg:text-[50px]
        "
        style={{
          textShadow: "0 0 22px rgba(144,10,156,0.35)",
        }}
      >
        Showcase
      </h2>


      {/* =====================================================
          PHOTOGRAPHY SHOWCASE
          NOTE: on mobile, switches to a shorter, vertically
          stacked, tap-to-expand layout instead of the desktop
          hover-driven horizontal strip.
      ====================================================== */}

      <div className="relative z-10 px-5 sm:px-8 lg:px-[50px] xl:px-[63px]">
        <div className="mx-auto w-full max-w-[1650px]">
          <p
            className="
              mb-[16px]
              text-center
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/45
              sm:mb-[20px]
            "
          >
            Photography
          </p>

          <AccordionGallery
            items={workItems}
            defaultIndex={0}
            expandRatio={isMobile ? 0.65 : 0.5}
            trigger={isMobile ? "click" : "hover"}
            accentColor="#c34fd1"
            overlayColor="#110c11"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={isMobile ? 0 : 0.5}
            tilt={isMobile ? 0 : 8}
            stagger={0.06}
            height={isMobile ? 380 : 525}
            gap={isMobile ? 10 : 18}
            radius={isMobile ? 18 : 28}
            orientation={isMobile ? "vertical" : "horizontal"}
          />
        </div>
      </div>


      {/* =====================================================
          SECTION DIVIDER (between Photography and Reels)
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-5
          mt-[56px]
          h-[1px]
          sm:mx-8
          sm:mt-[80px]
          lg:mx-[50px]
          xl:mx-[63px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.14) 15%, rgba(144,10,156,0.35) 50%, rgba(144,10,156,0.14) 85%, transparent 100%)",
        }}
      />


      {/* =====================================================
          REEL SHOWCASE
      ====================================================== */}

      <div className="relative z-10 px-5 sm:px-8 lg:px-[50px] xl:px-[63px]">
        <div className="mx-auto w-full max-w-[1650px]">
          <p
            className="
              mb-[16px]
              text-center
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/45
              sm:mb-[20px]
            "
          >
            Reels
          </p>

          {/* <ReelShowcase /> */}
        </div>
      </div>


      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-[48px]
          h-[1px]
          w-full
          sm:mt-[70px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.18) 15%, rgba(144,10,156,0.5) 50%, rgba(144,10,156,0.18) 85%, transparent 100%)",
          boxShadow: "0 0 20px rgba(144,10,156,0.15)",
        }}
      />
    </section>
  );
}
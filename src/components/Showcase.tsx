"use client";

import { useEffect, useState } from "react";
import AccordionGallery from "./AccordionGallery";

const workItems = [
  { image: "/work-musicalevent.jpg", label: "Live Concert", link: "#" },
  { image: "/work-sportsevent.jpg", label: "Sports Event", link: "#" },
  { image: "/work-wedding.jpg", label: "Wedding", link: "#" },
  { image: "/work-adventure.jpg", label: "Adventure", link: "#" },
  { image: "/work-concert2.jpg", label: "Concert", link: "#" },
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
          WORK ACCORDION GALLERY
          NOTE: on mobile, switches to a shorter, vertically
          stacked, tap-to-expand layout instead of the desktop
          hover-driven horizontal strip.
      ====================================================== */}

      <div className="relative z-10 px-5 sm:px-8 lg:px-[50px] xl:px-[63px]">
        <div className="mx-auto w-full max-w-[1650px]">
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
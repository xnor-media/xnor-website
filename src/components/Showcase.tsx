"use client";

import AccordionGallery from "./AccordionGallery";

const workItems = [
  { image: "/work-musicalevent.jpg", label: "Live Concert", link: "#" },
  { image: "/work-sportsevent.jpg", label: "Sports Event", link: "#" },
  { image: "/work-wedding.jpg", label: "Wedding", link: "#" },
  { image: "/work-adventure.jpg", label: "Adventure", link: "#" },
  { image: "/work-concert2.jpg", label: "Concert", link: "#" },
];

export default function Work() {
  return (
    <section
      id="work"
      className="
        relative
        w-full
        scroll-mt-140px
        overflow-hidden
        bg-[#110c11]
        pt-[90px]
        text-white
      "
    >

      {/* =====================================================
          BACKGROUND PURPLE ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-160px]
          top-[10px]
          h-[340px]
          w-[340px]
          rounded-full
          opacity-25
          blur-[120px]
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
          left-[-180px]
          top-[160px]
          h-[380px]
          w-[380px]
          rounded-full
          opacity-20
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.45) 0%, transparent 68%)",
        }}
      />


      {/* =====================================================
          TOP SUBTITLE
          NOTE: text and spacing scaled up ~1.25x
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mb-[6px]
          text-center
          text-[12px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white/55
        "
      >
        Our Work
      </div>


      {/* =====================================================
          MAIN TITLE
          NOTE: text sizes and margin scaled up ~1.25x
      ====================================================== */}

      <h2
        className="
          relative
          z-10
          mb-[45px]
          text-center
          font-serif
          text-[42px]
          italic
          leading-none
          tracking-[-0.035em]
          text-[#900a9c]
          sm:text-[48px]
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
          NOTE: container padding, max-width, and gallery
          dimensions (height/gap/radius) scaled up ~1.25x to
          match the Services section
      ====================================================== */}

      <div className="relative z-10 px-6 sm:px-10 lg:px-[50px] xl:px-[63px]">
        <div className="mx-auto w-full max-w-[1650px]">
          <AccordionGallery
            items={workItems}
            defaultIndex={0}
            expandRatio={0.5}
            trigger="hover"
            accentColor="#c34fd1"
            overlayColor="#110c11"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={525}
            gap={18}
            radius={28}
            orientation="horizontal"
          />
        </div>
      </div>


      {/* =====================================================
          DIVIDER
          NOTE: top margin scaled up ~1.25x
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-[70px]
          h-[1px]
          w-full
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
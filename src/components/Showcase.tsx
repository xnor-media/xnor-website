"use client";

import { ArrowUpRight } from "lucide-react";
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
        scroll-mt-[110px]
        overflow-hidden
        bg-[#110c11]
        pt-[72px]
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
          tracking-[0.18em]
          text-white/55
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
          mb-[36px]
          text-center
          font-serif
          text-[34px]
          italic
          leading-none
          tracking-[-0.035em]
          text-[#900a9c]
          sm:text-[38px]
          lg:text-[40px]
        "
        style={{
          textShadow: "0 0 22px rgba(144,10,156,0.35)",
        }}
      >
        Showcase
      </h2>


      {/* =====================================================
          WORK ACCORDION GALLERY
      ====================================================== */}

      <div className="relative z-10 px-5 sm:px-8 lg:px-10 xl:px-[50px]">
        <div className="mx-auto w-full max-w-[1410px]">
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
            height={420}
            gap={14}
            radius={22}
            orientation="horizontal"
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
          mt-[56px]
          h-[1px]
          w-full
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.18) 15%, rgba(144,10,156,0.5) 50%, rgba(144,10,156,0.18) 85%, transparent 100%)",
          boxShadow: "0 0 20px rgba(144,10,156,0.15)",
        }}
      />


      {/* =====================================================
          BOTTOM CTA STRIP
      ====================================================== */}

      <div
        className="
          relative
          flex
          w-full
          flex-col
          items-start
          justify-between
          gap-[22px]
          overflow-hidden
          px-5
          py-[34px]
          sm:flex-row
          sm:items-center
          sm:px-8
          lg:px-10
          xl:px-[50px]
        "
      >

        {/* Decorative diagonal purple streaks */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-full
            w-[220px]
            opacity-60
          "
          style={{
            background:
              "repeating-linear-gradient(115deg, rgba(144,10,156,0.35) 0px, rgba(144,10,156,0.35) 2px, transparent 2px, transparent 10px)",
            WebkitMaskImage:
              "radial-gradient(ellipse 220px 160px at 0% 100%, black 0%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 220px 160px at 0% 100%, black 0%, transparent 75%)",
          }}
        />

        <h3
          className="
            relative
            z-10
            text-[20px]
            font-semibold
            leading-[1.3]
            tracking-[-0.02em]
            text-white
            sm:text-[24px]
            lg:text-[26px]
          "
        >
          Let&apos;s Create Something
          <br />
          Extraordinary{" "}
          <span className="relative inline-block text-[#c34fd1]">
            Together.
            <svg
              viewBox="0 0 130 10"
              className="
                absolute
                -bottom-[6px]
                left-0
                h-[8px]
                w-full
              "
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 C 30 1, 60 9, 92 4 S 120 2, 128 6"
                fill="none"
                stroke="#c34fd1"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h3>

        <a
          href="#contact"
          className="
            group
            relative
            z-10
            flex
            h-[48px]
            w-[168px]
            flex-shrink-0
            items-center
            justify-between
            rounded-full
            border
            border-white/25
            px-[6px]
            pl-[22px]
            text-[13px]
            font-medium
            tracking-[-0.01em]
            text-white
            transition-all
            duration-300
            hover:border-[#900a9c]/70
            hover:shadow-[0_0_25px_rgba(144,10,156,0.30)]
          "
        >
          Let&apos;s Talk
          <span
            className="
              flex
              h-[36px]
              w-[36px]
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-all
              duration-300
              group-hover:bg-[#900a9c]/40
            "
          >
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </span>
        </a>
      </div>

    </section>
  );
}
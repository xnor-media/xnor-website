"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#110c11]
        text-white
        lg:min-h-screen
      "
    >
      {/* =====================================================
          AMBIENT PURPLE LIGHT
          Creates the subtle purple atmosphere behind the hero
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[3%]
          top-[8%]
          z-0
          h-700px
          w-700px
          rounded-full
          opacity-40
          blur-[150px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.24) 0%, rgba(76,3,93,0.10) 38%, transparent 70%)",
        }}
      />

      {/* =====================================================
          HERO MAIN CONTAINER
          NOTE: stacks as a column on mobile (text, then image,
          in normal document flow) and switches to the original
          absolute-positioned row layout at lg. Mobile no longer
          forces min-h-screen — it grows to fit its content
          instead of risking overlap inside a fixed viewport.
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1680px]
          flex-col
          px-6
          pb-[48px]
          pt-[92px]
          sm:px-8
          lg:min-h-screen
          lg:flex-row
          lg:items-stretch
          lg:pb-0
          lg:pt-[84px]
          lg:px-[56px]
        "
      >

        {/* ===================================================
            LEFT CONTENT
        ==================================================== */}

        <div
          className="
            relative
            z-30
            flex
            w-full
            flex-col
            justify-start
            lg:justify-between
            lg:w-[47%]
            lg:py-[18px]
          "
        >

          {/* =================================================
              MAIN HERO CONTENT
          ================================================== */}

          <div className="pt-[10px] lg:pt-[60px]">

            {/* -----------------------------------------------
                MAIN HEADING
            ------------------------------------------------ */}

            <h1
              className="
                max-w-[540px]
                text-[clamp(54px,11vw,94px)]
                font-black
                uppercase
                leading-[0.86]
                tracking-[-0.045em]
                sm:leading-[0.84]
                sm:tracking-[-0.055em]
              "
              style={{
                fontFamily:
                  '"Arial Narrow", "Roboto Condensed", "Space Grotesk", sans-serif',
              }}
            >

              <span className="block text-white">
                VISUALS
              </span>

              <span className="block text-white">
                THAT MAKE
              </span>

              <span className="block text-white">
                PEOPLE
              </span>

              <span
                className="
                  block
                  text-[#900a9c]
                "
                style={{
                  textShadow:
                    "0 0 30px rgba(144,10,156,0.18)",
                }}
              >
                LOOK TWICE.
              </span>

            </h1>


            {/* =================================================
                SERVICES
                NOTE: smaller text on mobile so the five items
                wrap cleanly without crowding narrow screens
            ================================================== */}

            <div
              className="
                mt-[20px]
                flex
                flex-wrap
                items-center
                gap-x-[9px]
                gap-y-[6px]
                text-[12px]
                font-medium
                uppercase
                tracking-[0.05em]
                sm:mt-[27px]
                sm:gap-x-[11px]
                sm:text-[15px]
                sm:tracking-[0.055em]
              "
            >

              <span className="text-white/90">
                Photography
              </span>

              <span className="text-[#900a9c]">
                /
              </span>              

              <span className="text-white/90">
                Videography
              </span>

              <span className="text-[#900a9c]">
                /
              </span>

              <span className="text-white/90">
                Digital marketting
              </span>

              <span className="text-[#900a9c]">
                /
              </span>

              <span className="text-white/90">
                Graphic design & creative 
              </span>

              <span className="text-[#900a9c]">
                /
              </span>

              <span className="text-white/90">
                Event Coverage
              </span>
            </div>


            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p
              className="
                mt-[22px]
                max-w-[460px]
                text-[14px]
                font-normal
                leading-[1.65]
                text-white/55
                sm:mt-[34px]
                sm:text-[15px]
                sm:leading-[1.7]
              "
            >
              XNOR is a multidisciplinary creative studio
              creating visual experiences for brands,
              businesses and people.
            </p>


            {/* =================================================
                BUTTONS
                NOTE: stacks vertically on very small screens so
                the two CTAs never fight for width; becomes a row
                from sm upward, matching the original layout.
            ================================================== */}

            <div
              className="
                mt-[26px]
                flex
                items-start
                gap-[38px]
                sm:mt-[31px]
                sm:flex-row
                sm:items-center
                sm:gap-[34px]
              "
            >

              {/* ---------------------------------------------
                  VIEW OUR WORK
              ---------------------------------------------- */}

              <Link
                href="#work"
                className="
                  group
                  relative
                  flex
                  h-[40px]
                  items-center
                  justify-center
                  gap-[18px]
                  border
                  border-[#900a9c]
                  px-[16px]
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.06em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#900a9c]/15
                  hover:shadow-[0_0_20px_rgba(144,10,156,0.22)]
                  sm:h-[42px]
                  sm:gap-[26px]
                  sm:px-[18px]
                  sm:text-[12px]
                "
              >

                <span>
                  View Our Work
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-[2px]
                    group-hover:-translate-y-[2px]
                  "
                />
              </Link>


              {/* ---------------------------------------------
                  PLAY SHOWREEL
              ---------------------------------------------- */}

              <Link
                href="#showreel"
                className="
                  group
                  flex
                  items-center
                  gap-[12px]
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.06em]
                  text-white/75
                  transition
                  hover:text-white
                  sm:text-[12px]
                "
              >

                <span>
                  Play Showreel
                </span>

                <span
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/45
                    transition-all
                    duration-300
                    group-hover:border-[#900a9c]
                    group-hover:bg-[#900a9c]/15
                  "
                >

                  <Play
                    size={11}
                    fill="currentColor"
                    strokeWidth={0}
                    className="ml-[1px]"
                  />

                </span>

              </Link>

            </div>

          </div>


          {/* =================================================
              SCROLL INDICATOR (desktop only)
          ================================================== */}

          <div
            className="
              absolute
              bottom-[0px]
              left-[-60px]
              hidden
              flex-col
              items-center
              lg:flex
            "
          >

            <span
              className="
                mb-[10px]
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/55
              "
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Scroll
            </span>

            <div
              className="
                relative
                h-[59px]
                w-[1px]
                bg-white/25
              "
            >

              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-[6px]
                  w-[6px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#900a9c]
                  shadow-[0_0_8px_rgba(144,10,156,0.8)]
                "
              />

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT HERO IMAGE (desktop only)
            NOTE: now explicitly hidden below lg — previously it
            had no responsive hide, so on mobile it rendered on
            top of the separate mobile image below, overlapping.
        ==================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-0
            top-[25px]
            z-10
            hidden
            w-[60%]
            overflow-hidden
            lg:block
          "
        >

          {/* =================================================
              MAIN IMAGE
          ================================================== */}

          <img
            src="/hero-main.avif"
            alt="XNOR creative studio visual"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />


          {/* =================================================
              LEFT EDGE FEATHER
              
              Strongest feather because the image transitions
              directly into the typography area.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-[18%]
            "
            style={{
              background:
                "linear-gradient(to right, #110c11 0%, rgba(17,12,17,0.92) 12%, rgba(17,12,17,0.60) 38%, rgba(17,12,17,0.20) 72%, transparent 100%)",
            }}
          />


          {/* =================================================
              TOP EDGE FEATHER
              
              Prevents a hard horizontal line where the image
              begins underneath the navbar.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-0
              z-10
              h-[18%]
            "
            style={{
              background:
                "linear-gradient(to bottom, #110c11 0%, rgba(17,12,17,0.88) 12%, rgba(17,12,17,0.45) 38%, rgba(17,12,17,0.12) 72%, transparent 100%)",
            }}
          />


          {/* =================================================
              RIGHT EDGE FEATHER
              
              More subtle than the left because the image
              should remain visually dominant.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-10
              w-[10%]
            "
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(17,12,17,0.10) 25%, rgba(17,12,17,0.48) 60%, #110c11 100%)",
            }}
          />


          {/* =================================================
              BOTTOM EDGE FEATHER
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              z-10
              h-[14%]
            "
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(17,12,17,0.10) 25%, rgba(17,12,17,0.48) 65%, #110c11 100%)",
            }}
          />


          {/* =================================================
              PURPLE ATMOSPHERIC BLEND
              
              Very subtle. This helps integrate the image into
              the #900a9c / #4c035d visual language.
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-20
            "
            style={{
              background:
                "radial-gradient(circle at 68% 45%, rgba(144,10,156,0.08), transparent 52%)",
            }}
          />

        </div>


        {/* ===================================================
            MOBILE HERO IMAGE
            NOTE: now flows in normal document flow (relative,
            not absolute) right after the text content, instead
            of being pinned to the bottom of a min-h-screen
            section — so it can never overlap the text above it,
            regardless of how tall the heading gets on a given
            phone.
        ==================================================== */}

        <div
          className="
            relative
            z-0
            mt-[6px]
            h-[44vh]
            w-full
            overflow-hidden
            rounded-[18px]
            lg:hidden
          "
        >

          <img
            src="/hero-main.avif"
            alt="XNOR creative studio visual"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />


          {/* Mobile top fade */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #110c11 0%,
                  rgba(17,12,17,0.55) 12%,
                  rgba(17,12,17,0.10) 35%,
                  transparent 60%
                )
              `,
            }}
          />

        </div>

      </div>


      {/* =====================================================
          GLOBAL BOTTOM FADE (desktop only)
          
          The mobile image now sits in normal flow with its own
          rounded corners, so this global fade — tuned for the
          absolute-positioned desktop image — is scoped to lg.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-30
          hidden
          h-[55px]
          lg:block
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(17,12,17,0.75))",
        }}
      />

    </section>
  );
}
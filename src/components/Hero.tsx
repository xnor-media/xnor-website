"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#110c11]
        text-white
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
          h-[700px]
          w-[700px]
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
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1440px]
          items-stretch
          px-6
          pt-[84px]
          sm:px-10
          lg:px-[74px]
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
            justify-between
            py-[20px]
            lg:w-[42%]
            lg:py-[18px]
          "
        >

          {/* =================================================
              MAIN HERO CONTENT
          ================================================== */}

          <div className="pt-[16px]">

            {/* -----------------------------------------------
                MAIN HEADING
            ------------------------------------------------ */}

            <h1
              className="
                max-w-[430px]
                text-[clamp(48px,5.4vw,76px)]
                font-black
                uppercase
                leading-[0.84]
                tracking-[-0.055em]
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
            ================================================== */}

            <div
              className="
                mt-[22px]
                flex
                flex-wrap
                items-center
                gap-x-[9px]
                gap-y-[5px]
                text-[12px]
                font-medium
                uppercase
                tracking-[0.055em]
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
                mt-[27px]
                max-w-[350px]
                text-[12px]
                font-normal
                leading-[1.7]
                text-white/55
              "
            >
              XNOR is a multidisciplinary creative studio
              creating visual experiences for brands,
              businesses and people.
            </p>


            {/* =================================================
                BUTTONS
            ================================================== */}

            <div
              className="
                mt-[25px]
                flex
                items-center
                gap-[27px]
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
                  h-[34px]
                  items-center
                  justify-center
                  gap-[22px]
                  border
                  border-[#900a9c]
                  px-[14px]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.06em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#900a9c]/15
                  hover:shadow-[0_0_20px_rgba(144,10,156,0.22)]
                "
              >

                <span>
                  View Our Work
                </span>

                <ArrowUpRight
                  size={12}
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
                  gap-[10px]
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.06em]
                  text-white/75
                  transition
                  hover:text-white
                "
              >

                <span>
                  Play Showreel
                </span>

                <span
                  className="
                    flex
                    h-[27px]
                    w-[27px]
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
                    size={9}
                    fill="currentColor"
                    strokeWidth={0}
                    className="ml-[1px]"
                  />

                </span>

              </Link>

            </div>

          </div>


          {/* =================================================
              SCROLL INDICATOR
          ================================================== */}

          <div
            className="
              absolute
              bottom-[0px]
              left-[-48px]
              hidden
              flex-col
              items-center
              lg:flex
            "
          >

            <span
              className="
                mb-[8px]
                text-[9px]
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
                h-[47px]
                w-[1px]
                bg-white/25
              "
            >

              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-[5px]
                  w-[5px]
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
            RIGHT HERO IMAGE
        ==================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-0
            top-[45px]
            z-10
            w-[61%]
            overflow-hidden
          "
        >

          {/* =================================================
              MAIN IMAGE
          ================================================== */}

          <img
            src="/hero-main.png"
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
        ==================================================== */}

        <div
          className="
            absolute
            bottom-0
            right-0
            z-0
            block
            h-[52vh]
            w-full
            overflow-hidden
            lg:hidden
          "
        >

          <img
            src="/hero-main.png"
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
                  rgba(17,12,17,0.92) 10%,
                  rgba(17,12,17,0.45) 35%,
                  rgba(17,12,17,0.15) 65%,
                  #110c11 100%
                )
              `,
            }}
          />

        </div>

      </div>


      {/* =====================================================
          GLOBAL BOTTOM FADE
          
          Kept subtle because the image already has its own
          bottom-edge feather.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-30
          h-[55px]
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(17,12,17,0.75))",
        }}
      />

    </section>
  );
}
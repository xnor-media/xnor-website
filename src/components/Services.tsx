"use client";

import {
  Camera,
  Video,
  Megaphone,
  Palette,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Photography",
    description: (
      <>
        Capturing moments
        <br />
        that tell your story
        <br />
        beautifully.
      </>
    ),
    icon: Camera,
  },
  {
    title: "Videography",
    description: (
      <>
        Cinematic visuals
        <br />
        that bring your ideas
        <br />
        to life.
      </>
    ),
    icon: Video,
  },
  {
    title: "Digital Marketing",
    description: (
      <>
        Strategies that
        <br />
        grow your brand
        <br />
        and reach.
      </>
    ),
    icon: Megaphone,
  },
  {
    title: "Graphic Designing",
    description: (
      <>
        Designs that
        <br />
        communicate,
        <br />
        inspire and stand out.
      </>
    ),
    icon: Palette,
  },
  {
    title: "Event Coverage",
    description: (
      <>
        Every event,
        <br />
        captured with
        <br />
        precision and style.
      </>
    ),
    icon: CalendarDays,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative
        w-full
        scroll-mt-10
        overflow-hidden
        bg-[#110c11]
        px-5
        py-[72px]
        text-white
        sm:px-8
        lg:px-10
        xl:px-[50px]
      "
    >

      {/* =====================================================
          BACKGROUND PURPLE ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[40px]
          h-[330px]
          w-[330px]
          rounded-full
          opacity-30
          blur-[110px]
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
          right-[-180px]
          top-[120px]
          h-[400px]
          w-[400px]
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
        What We Do
      </div>


      {/* =====================================================
          MAIN TITLE
      ====================================================== */}

      <h2
        className="
          relative
          z-10
          mb-[24px]
          text-center
          font-serif
          text-[34px]
          leading-none
          tracking-[-0.035em]
          text-white
          sm:text-[38px]
          lg:text-[40px]
        "
      >
        Creative{" "}
        <span
          className="
            italic
            text-[#900a9c]
          "
          style={{
            textShadow:
              "0 0 22px rgba(144,10,156,0.35)",
          }}
        >
          Services
        </span>
      </h2>


      {/* =====================================================
          SERVICES GRID
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1410px]
          grid-cols-1
          gap-[14px]
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
        "
      >

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="
                group
                relative
                min-h-[245px]
                overflow-hidden
                rounded-[22px]
                border
                border-white/20
                bg-white/[0.035]
                px-[19px]
                pb-[17px]
                pt-[18px]
                backdrop-blur-[18px]
                transition-all
                duration-500
                hover:-translate-y-[3px]
                hover:border-[#900a9c]/60
                hover:bg-white/[0.055]
                hover:shadow-[0_12px_45px_rgba(144,10,156,0.16)]
              "
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(144,10,156,0.08), 0 8px 35px rgba(0,0,0,0.22)",
              }}
            >

              {/* ===========================================
                  GLASS TOP REFLECTION
              ============================================ */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-0
                  h-[1px]
                  opacity-80
                "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.42), transparent)",
                }}
              />


              {/* ===========================================
                  PURPLE CARD GLOW
              ============================================ */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[35px]
                  -top-[35px]
                  h-[110px]
                  w-[110px]
                  rounded-full
                  opacity-20
                  blur-[35px]
                  transition-opacity
                  duration-500
                  group-hover:opacity-45
                "
                style={{
                  background:
                    "radial-gradient(circle, #900a9c 0%, #4c035d 42%, transparent 72%)",
                }}
              />


              {/* ===========================================
                  ICON
              ============================================ */}

              <div
                className="
                  relative
                  flex
                  h-[51px]
                  w-[51px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#900a9c]/50
                  bg-[#4c035d]/30
                  shadow-[0_0_22px_rgba(144,10,156,0.20),inset_0_1px_1px_rgba(255,255,255,0.18)]
                  transition-all
                  duration-500
                  group-hover:border-[#900a9c]
                  group-hover:bg-[#4c035d]/45
                  group-hover:shadow-[0_0_28px_rgba(144,10,156,0.35),inset_0_1px_1px_rgba(255,255,255,0.22)]
                "
              >

                {/* Icon inner glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[5px]
                    rounded-full
                    opacity-50
                    blur-[5px]
                  "
                  style={{
                    background:
                      "radial-gradient(circle, rgba(144,10,156,0.65), transparent 70%)",
                  }}
                />

                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="
                    relative
                    z-10
                    text-[#d99be0]
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                />

              </div>


              {/* ===========================================
                  SERVICE TITLE
              ============================================ */}

              <h3
                className="
                  relative
                  mt-[19px]
                  text-[16px]
                  font-normal
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-white
                "
                style={{
                  fontFamily:
                    'Georgia, "Times New Roman", serif',
                }}
              >
                {service.title}
              </h3>


              {/* ===========================================
                  DESCRIPTION
              ============================================ */}

              <p
                className="
                  relative
                  mt-[12px]
                  text-[12px]
                  font-normal
                  leading-[1.55]
                  tracking-[0.005em]
                  text-white/55
                "
              >
                {service.description}
              </p>


              {/* ===========================================
                  ARROW BUTTON
              ============================================ */}

              <button
                aria-label={`View ${service.title}`}
                className="
                  absolute
                  bottom-[15px]
                  right-[17px]
                  flex
                  h-[30px]
                  w-[43px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#900a9c]/45
                  bg-[#4c035d]/25
                  text-white/85
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.16),0_0_12px_rgba(144,10,156,0.12)]
                  transition-all
                  duration-300
                  hover:border-[#900a9c]
                  hover:bg-[#900a9c]/25
                  hover:text-white
                  hover:shadow-[0_0_20px_rgba(144,10,156,0.35)]
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-[1px]
                    group-hover:-translate-y-[1px]
                  "
                />
              </button>


              {/* ===========================================
                  BOTTOM GLASS REFLECTION
              ============================================ */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[10%]
                  right-[10%]
                  h-[1px]
                  opacity-40
                "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(144,10,156,0.7), transparent)",
                }}
              />

            </article>
          );
        })}

      </div>


      {/* =====================================================
          BOTTOM DECORATIVE DIVIDER
          
          This is the purple transition that leads into the
          "WE DON'T FOLLOW TRENDS..." section in your reference.
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-[-20px]
          mt-[64px]
          h-[1px]
          sm:mx-[-32px]
          lg:mx-[-40px]
          xl:mx-[-50px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.18) 15%, rgba(144,10,156,0.5) 50%, rgba(144,10,156,0.18) 85%, transparent 100%)",
          boxShadow:
            "0 0 20px rgba(144,10,156,0.15)",
        }}
      />

    </section>
  );
}
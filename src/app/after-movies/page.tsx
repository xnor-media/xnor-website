"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientWaves from "@/effects/GradientWaves";

import { afterMovies } from "@/lib/afterMoviesData";

export default function AfterMoviesPage() {
  const getVimeoSrc = (vimeoId: string) =>
    `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <Navbar />

      {/* =========================================================
          PAGE
      ========================================================== */}
      <main className="relative w-full overflow-hidden bg-[#110c11]">

  {/* =========================================================
      GRADIENT WAVES — FULL PAGE BACKGROUND
      ========================================================= */}
  {/* =========================================================
    FIXED GRADIENT WAVES BACKGROUND
    Stays stationary while page content scrolls
    ========================================================= */}
    <div
    className="
        pointer-events-none
        fixed
        left-0
        right-0
        top-0
        z-0
        h-screen
        overflow-hidden
    "
    >
    <GradientWaves
        horizonColor="#110c11"
        waveColor="#7a0085"
        crestColor="#f08aff"
        speed={0.35}
        amplitude={3.5}
        waveScale={0.6}
        waveRatio={0.9}
        swell={35}
        turbulence={20}
        tilt={1.11}
        zoom={1}
        height={5.5}
        fogDepth={15}
        detail="high"
        brightness={1.4}
        opacity={1}
        mouseInteraction
        parallaxStrength={0.5}
        grain
        grainIntensity={0.04}
        className="h-full w-full"
    />
    </div>

  {/* =========================================================
      LIGHT DARK OVERLAY
      ========================================================= */}
  <div
    className="
      pointer-events-none
      absolute
      inset-0
      z-[1]
      bg-[#110c11]/20
    "
  />

  {/* =========================================================
      PURPLE ATMOSPHERE
      ========================================================= */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[100px]
      z-[2]
      h-[500px]
      w-[800px]
      -translate-x-1/2
      rounded-full
      opacity-40
      blur-[150px]
    "
    style={{
      background:
        "radial-gradient(circle, rgba(144,10,156,0.20) 0%, rgba(76,3,93,0.10) 40%, transparent 72%)",
    }}
  />

  {/* =========================================================
      SECOND PURPLE GLOW
      ========================================================= */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[500px]
      z-[2]
      h-[500px]
      w-[900px]
      -translate-x-1/2
      rounded-full
      blur-[160px]
      opacity-30
    "
    style={{
      background:
        "radial-gradient(circle, rgba(195,79,209,0.28) 0%, rgba(144,10,156,0.12) 42%, transparent 75%)",
    }}
  />

  {/* =========================================================
      ALL PAGE CONTENT
      ========================================================= */}
  <div className="relative z-10">

    {/* =======================================================
        HERO
        ======================================================== */}
    <section className="relative px-5 pb-[45px] pt-[130px] text-center sm:pt-[150px]">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >

        {/* SUBTITLE */}
        <div
          className="
            mb-[8px]
            text-center
            text-[12px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#c34fd1]
          "
        >
          Our Work
        </div>

        {/* TITLE */}
        <h1
          className="
            mb-[15px]
            text-center
            font-serif
            text-[42px]
            italic
            leading-none
            tracking-[-0.035em]
            text-white
            sm:text-[48px]
            lg:text-[50px]
          "
          style={{
            textShadow:
              "0 0 22px rgba(144,10,156,0.35)",
          }}
        >
          After Movies
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            max-w-[560px]
            text-[13px]
            leading-[1.7]
            text-white/40
            sm:text-[14px]
          "
        >
          A collection of moments, stories and experiences
          captured through our lens.
        </p>

      </motion.div>
    </section>


    {/* =======================================================
        ALL AFTER MOVIES
        ======================================================== */}
    {afterMovies.length > 0 ? (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-[1350px]
          grid-cols-1
          gap-[22px]
          px-4
          pb-[100px]
          sm:px-8
          lg:grid-cols-2
          lg:gap-[24px]
        "
      >
        {afterMovies.map((movie, index) => (
          <motion.div
            key={movie.vimeoId}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08 * index,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.12]
              bg-[#0b080d]/75
              shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_50px_rgba(144,10,156,0.08)]
              backdrop-blur-sm
              transition-all
              duration-500
              hover:border-[#900a9c]/40
              hover:shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(144,10,156,0.14)]
            "
          >

            {/* VIDEO */}
            <div
              className="
                relative
                w-full
                overflow-hidden
                bg-black
              "
              style={{
                aspectRatio: "2.39 / 1",
              }}
            >
              <iframe
                src={getVimeoSrc(movie.vimeoId)}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                "
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={movie.title}
                loading="lazy"
              />

              {/* CINEMATIC EDGE GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-[2]
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-white/[0.02]
                  opacity-70
                "
              />

              
            </div>

            {/* MOVIE INFO */}
            <div
              className="
                relative
                flex
                items-center
                justify-between
                gap-4
                border-t
                border-white/[0.08]
                px-5
                py-[17px]
                sm:px-6
              "
            >
              <div className="min-w-0">

                <h2
                  className="
                    truncate
                    text-[14px]
                    font-medium
                    tracking-[-0.01em]
                    text-white/90
                  "
                >
                  {movie.title}
                </h2>

                {movie.description && (
                  <p
                    className="
                      mt-[4px]
                      truncate
                      text-[11px]
                      text-white/35
                    "
                  >
                    {movie.description}
                  </p>
                )}

              </div>
            </div>

          </motion.div>
        ))}
      </motion.section>
    ) : (
      <section
        className="
          relative
          px-5
          pb-[100px]
          text-center
        "
      >
        <p className="text-sm text-white/40">
          No After Movies available yet.
        </p>
      </section>
    )}
  </div>
</main>

      {/* =========================================================
          FOOTER
      ========================================================== */}
      <Footer />
    </>
  );
}
"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { afterMovies } from "@/lib/afterMoviesData";

export default function AfterMoviesPage() {
  const getVimeoSrc = (vimeoId: string) =>
    `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <>
    <Navbar />

    <main className="relative min-h-screen w-full overflow-hidden bg-[#110c11]">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[100px]
          z-0
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

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="relative z-10 px-5 pb-[20px] pt-[130px] text-center sm:pt-[160px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          {/* =====================================================
            TOP SUBTITLE
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
        ====================================================== */}

        <h1
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
          All Reels
        </h1>

        </motion.div>
      </section>

      {/* =====================================================
          ALL AFTER MOVIES
      ====================================================== */}

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
            z-10
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                bg-[#0b080d]
                shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_50px_rgba(144,10,156,0.08)]
                transition-all
                duration-500
                hover:border-[#900a9c]/40
                hover:shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_60px_rgba(144,10,156,0.14)]
              "
            >
              {/* =================================================
                  VIDEO
              ================================================== */}

              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  bg-black
                "
                style={{ aspectRatio: "2.39 / 1" }}
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

                {/* Cinematic edge glow */}
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

                {/* Play icon atmosphere */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    z-[3]
                    flex
                    h-[54px]
                    w-[54px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:scale-100
                    group-hover:opacity-100
                  "
                >
                  <Play
                    size={19}
                    strokeWidth={1.7}
                    fill="white"
                    className="ml-[2px]"
                  />
                </div>
              </div>

              {/* =================================================
                  MOVIE INFO
              ================================================== */}

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
        <section className="relative z-10 px-5 pb-[100px] text-center">
          <p className="text-sm text-white/40">
            No After Movies available yet.
          </p>
        </section>
      )}

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-[60px]
          h-[1px]
          w-[90%]
          max-w-[900px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(144,10,156,0.22), transparent)",
        }}
      />
    </main>

    <Footer />
    </>
  );
}


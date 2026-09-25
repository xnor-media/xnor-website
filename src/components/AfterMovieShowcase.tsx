"use client";

import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { afterMovies } from "@/lib/afterMoviesData";

// =========================================================
// AFTER MOVIE SHOWCASE
//
// Homepage:
// - Shows only the first 2 After Movies
// - "View All After Movies" links to /after-movies
//
// Full collection:
// - app/after-movies/page.tsx
// =========================================================

export default function AfterMovieShowcase() {
  // Only show the first 2 movies on the homepage
  const showcaseMovies = afterMovies.slice(0, 2);

  if (showcaseMovies.length === 0) {
    return null;
  }

  const getVimeoSrc = (vimeoId: string) =>
    `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <section className="relative w-full overflow-hidden">
      {/* =====================================================
          CINEMATIC BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[80px]
          z-0
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          opacity-40
          blur-[140px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.20) 0%, rgba(76,3,93,0.10) 40%, transparent 72%)",
        }}
      />

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

        

        

      {/* =====================================================
          AFTER MOVIE GRID
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          pt-5
          w-full
          max-w-[1350px]
          grid-cols-1
          gap-[22px]
          px-4
          sm:px-8
          lg:grid-cols-2
          lg:gap-[24px]
        "
      >
        {showcaseMovies.map((movie, index) => (
          <motion.div
            key={movie.vimeoId}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
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
                <h3
                  className="
                    truncate
                    text-[14px]
                    font-medium
                    tracking-[-0.01em]
                    text-white/90
                  "
                >
                  {movie.title}
                </h3>

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

              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/45
                  transition-all
                  duration-300
                  group-hover:border-[#900a9c]/50
                  group-hover:bg-[#900a9c]/10
                  group-hover:text-[#c34fd1]
                "
              >
                <ArrowUpRight size={14} strokeWidth={1.7} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* =====================================================
          VIEW ALL AFTER MOVIES
      ====================================================== */}

      {afterMovies.length > 2 && (
        <div className="relative z-10 mt-[38px] flex justify-center px-5">
          <Link
            href="/after-movies"
            className="
              flex
              h-12
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#900a9c]/45
              bg-[#4c035d]/20
              px-5
              text-[13px]
              font-medium
              text-white/80
              shadow-[inset_0_1px_2px_rgba(255,255,255,0.12),0_0_20px_rgba(144,10,156,0.08)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#900a9c]
              hover:bg-[#900a9c]/20
              hover:text-white
              hover:shadow-[0_0_25px_rgba(144,10,156,0.25)]
            "
          >
            View All After Movies
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      )}

      {/* =====================================================
          BOTTOM CINEMATIC LINE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-[55px]
          h-[1px]
          w-[90%]
          max-w-[900px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(144,10,156,0.22), transparent)",
        }}
      />
    </section>
  );
}

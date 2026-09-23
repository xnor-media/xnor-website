"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeftIcon,
  ChevronRightIcon,
  Play,
} from "lucide-react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { reels } from "@/lib/reelsData";

// =========================================================
// REEL CAROUSEL
//
// Desktop (sm and up): iframes are embedded directly, exactly
//   as before. Drag/touch works and there is no extra click.
//
// Mobile (below sm): each iframe is non-interactive until its
//   card is tapped once, so swipes reach Swiper. The second
//   tap then hits YouTube's own play button. Changing slide
//   pauses the video and resets the card.
// =========================================================

export default function ReelShowcase() {
  const canLoop = reels.length > 3;

  const containerRef = useRef<HTMLDivElement>(null);

  // Which card has been "activated" by a tap (mobile only)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Pause any playing video and reset the tap state when the
  // slide changes. Skipped on desktop so it behaves as before.
  const handleSlideChange = () => {
    if (window.matchMedia("(min-width: 640px)").matches) return;

    const iframes = containerRef.current?.querySelectorAll("iframe");

    iframes?.forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      );
    });

    setActiveVideoId(null);
  };

  const css = `
    .reel-carousel {
      padding-bottom: 52px !important;
    }

    .reel-carousel .swiper-slide {
      width: clamp(190px, 26vw, 300px);
    }

    .reel-carousel .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.35);
      opacity: 1;
    }

    .reel-carousel .swiper-pagination-bullet-active {
      background-color: #c34fd1;
      box-shadow: 0 0 8px rgba(144, 10, 156, 0.6);
    }
  `;

  return (
    <div className="mt-[64px] sm:mt-[30px]">
      <style>{css}</style>

      {/* Hint line: mobile only */}
      <p className="mb-6 text-center text-[13px] text-white/60 sm:hidden">
        Tap twice to play the reel
      </p>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto w-full max-w-[1100px] px-2 sm:px-8"
      >
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          spaceBetween={18}
          loop={canLoop}
          onSlideChange={handleSlideChange}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 140,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".reel-nav-next",
            prevEl: ".reel-nav-prev",
          }}
          className="reel-carousel"
        >
          {reels.map((reel) => {
            const isActive = activeVideoId === reel.youtubeId;

            return (
              <SwiperSlide key={reel.youtubeId}>
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/15
                    bg-black
                    shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(144,10,156,0.15)]
                  "
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}?rel=0&modestbranding=1&enablejsapi=1`}
                    className={`
                      absolute
                      inset-0
                      h-full
                      w-full
                      ${
                        isActive
                          ? "pointer-events-auto"
                          : "pointer-events-none sm:pointer-events-auto"
                      }
                    `}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={reel.title}
                    loading="lazy"
                  />

                  {/* Tap-to-activate overlay: mobile only */}
                  {!isActive && (
                    <button
                      type="button"
                      aria-label={`Play ${reel.title}`}
                      onClick={() => setActiveVideoId(reel.youtubeId)}
                      className="
                        absolute
                        inset-0
                        z-10
                        flex
                        cursor-pointer
                        items-center
                        justify-center
                        bg-black/10
                        sm:hidden
                      "
                    >
                      <span
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          bg-[#900a9c]/80
                          text-white
                          shadow-[0_0_20px_rgba(144,10,156,0.45)]
                          backdrop-blur-[6px]
                        "
                      >
                        <Play size={22} strokeWidth={1.8} fill="white" />
                      </span>
                    </button>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* NAV ARROWS (desktop only) */}
        {reels.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous reel"
              className="
                reel-nav-prev
                absolute
                left-[-4px]
                top-[38%]
                z-10
                hidden
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                text-white
                backdrop-blur-[18px]
                transition-all
                duration-300
                hover:border-[#900a9c]/60
                hover:bg-[#4c035d]/30
                sm:flex
              "
            >
              <ChevronLeftIcon size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Next reel"
              className="
                reel-nav-next
                absolute
                right-[-4px]
                top-[38%]
                z-10
                hidden
                h-11
                w-11
                -translate-y-1/2
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                text-white
                backdrop-blur-[18px]
                transition-all
                duration-300
                hover:border-[#900a9c]/60
                hover:bg-[#4c035d]/30
                sm:flex
              "
            >
              <ChevronRightIcon size={20} strokeWidth={1.8} />
            </button>
          </>
        )}
      </motion.div>

      {/* VIEW MORE REELS */}
      <div className="mt-8 flex justify-center sm:mt-10">
        <Link
          href="/reels"
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-[#900a9c]/45
            bg-[#4c035d]/25
            px-5
            text-[13px]
            font-medium
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
          View All Reels
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
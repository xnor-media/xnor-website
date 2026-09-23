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
// Shows every reel from reelsData.ts as a coverflow carousel:
// the centered card sits flat and large, the neighbours tilt
// away on either side. With only 3 reels there's nothing to
// scroll past yet — the moment a 4th entry is added to
// reelsData.ts, swiping/dragging or the arrow buttons reveal
// it automatically. "View More Reels" still links to the
// full /reels page for browsing the whole collection at once.
// =========================================================

export default function ReelShowcase() {
  // Looping only makes sense once there are more reels than
  // are visible on screen at a time — otherwise a 3-item loop
  // just awkwardly repeats itself.
  const canLoop = reels.length > 3;

  // Starting centered on the SECOND reel (index 1) means the
  // first reel has somewhere to sit — to the left of center —
  // right from the initial render. Starting on index 0 would
  // leave nothing before it, so only the center + right card
  // would show at first.
  const initialSlide = reels.length >= 3 ? 1 : 0;

  const containerRef = useRef<HTMLDivElement>(null);

  // =======================================================
  // TAP-TO-ACTIVATE
  //
  // On mobile, a touch that starts on an iframe gets captured
  // by that iframe's own page (YouTube's embed is a separate
  // document), so the swipe gesture never reaches Swiper. To
  // keep swiping reliable, every iframe stays non-interactive
  // (pointer-events: none) until its card is explicitly tapped
  // — only THAT one card's iframe becomes interactive, letting
  // the visitor then tap YouTube's own play button normally.
  // Swiping to a new slide resets this, so a card doesn't stay
  // "activated" (and swipe-blocking) after you've moved past it.
  // =======================================================

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // =======================================================
  // PAUSE ON SLIDE CHANGE
  //
  // YouTube's embed responds to postMessage commands once
  // "enablejsapi=1" is in its URL. Whenever the carousel moves
  // to a different slide, this tells every visible iframe to
  // pause — so a reel someone started playing doesn't keep
  // running in the background after they swipe away from it.
  // =======================================================

  const handleSlideChange = () => {
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

      {/* =====================================================
          HINT LINE
          Sits right under the section heading.
      ====================================================== */}

      <p className="mb-6 text-center text-[13px] text-white/60 sm:mb-8 sm:text-[14px]">
        <span className="sm:hidden">Tap</span>
        <span className="hidden sm:inline">Click</span> twice to play the reel
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
          initialSlide={initialSlide}
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
                      ${isActive ? "pointer-events-auto" : "pointer-events-none"}
                    `}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title={reel.title}
                    loading="lazy"
                  />

                  {/* =====================================
                      TAP-TO-ACTIVATE OVERLAY
                      A plain div (not an iframe), so it never
                      swallows swipe gestures — only taps.
                  ====================================== */}

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
                        transition-colors
                        duration-300
                        hover:bg-black/0
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

        {/* =================================================
            NAV ARROWS
            Only worth showing once there's more than one reel
            to move between.
        ================================================== */}

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

      {/* =====================================================
          VIEW MORE REELS
      ====================================================== */}

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
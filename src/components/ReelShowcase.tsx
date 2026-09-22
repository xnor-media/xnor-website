"use client";

import { useState } from "react";

interface ReelItem {
  /** Numeric Vimeo video ID, e.g. "1229222739" */
  vimeoId: string;
  /** Full title, used as the iframe title and the caption under the player */
  title: string;
  /** Short name shown in the playlist strip */
  label: string;
}

// =========================================================
// REELS DATA
//
// Add more reels here as they come in — the playlist strip
// appears automatically once there's more than one entry.
// =========================================================

const reels: ReelItem[] = [
  {
    vimeoId: "1229222739",
    title: "80th Bradby Shield reel 1",
    label: "Bradby Shield",
  },
];

export default function ReelShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = reels[activeIndex];

  return (
    <div className="mt-[64px] sm:mt-[90px]">
      <div
        className="
          flex
          flex-col
          items-center
          gap-8

          lg:flex-row
          lg:items-start
          lg:justify-center
          lg:gap-14
        "
      >
        {/* =================================================
            PLAYER

            Vertical 9:16 format to match the reel's native
            aspect ratio, capped to a phone-like width rather
            than stretched across the section.
        ================================================== */}

        <div className="w-full max-w-[340px] shrink-0 sm:max-w-[380px]">
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
              key={active.vimeoId}
              src={`https://player.vimeo.com/video/${active.vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
              className="absolute inset-0 h-full w-full"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title={active.title}
            />
          </div>

          <p className="mt-3 text-center text-[13px] text-white/50">
            {active.title}
          </p>
        </div>

        {/* =================================================
            PLAYLIST

            Only rendered once there's something to switch
            between — a single-item list would just be a
            button that does nothing.
        ================================================== */}

        {reels.length > 1 && (
          <div
            className="
              flex
              w-full
              max-w-[420px]
              flex-col
              gap-2

              lg:max-w-[280px]
              lg:pt-2
            "
          >
            {reels.map((reel, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={reel.vimeoId}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-current={isActive}
                  className={`
                    flex
                    cursor-pointer
                    items-center
                    gap-3
                    rounded-[14px]
                    border
                    px-4
                    py-3
                    text-left
                    text-[14px]
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "border-[#900a9c] bg-[#4c035d]/30 text-white shadow-[0_0_20px_rgba(144,10,156,0.25)]"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:border-[#900a9c]/40 hover:text-white"
                    }
                  `}
                >
                  <span
                    className={`
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      ${isActive ? "bg-[#c34fd1]" : "bg-white/25"}
                    `}
                  />

                  {reel.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
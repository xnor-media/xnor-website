"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const togetherRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const [arrow, setArrow] = useState<{ path: string; head: string } | null>(null);

  useEffect(() => {
    const computeArrow = () => {
      const container = containerRef.current;
      const together = togetherRef.current;
      const button = buttonRef.current;
      if (!container || !together || !button) return;

      // Only draw it when the CTA is laid out as a row (sm and up) —
      // stacked on mobile, the arrow wouldn't point anywhere sensible.
      if (window.innerWidth < 640) {
        setArrow(null);
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const togetherRect = together.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      // Start right at the full stop, just under the word.
      const startX = togetherRect.right - containerRect.left - 4;
      const startY = togetherRect.bottom - containerRect.top + 8;

      // End close to the button's left edge, vertically centered on it.
      const endX = buttonRect.left - containerRect.left - 10;
      const endY = buttonRect.top - containerRect.top + buttonRect.height / 2;

      const midX = startX + (endX - startX) * 0.55;
      const dipY = startY + 30;
      const riseY = endY - 6;

      // A loose S-curve rather than a straight line, so it reads as
      // hand-drawn rather than a perfect vector arc.
      const path = `M ${startX} ${startY} C ${startX + 26} ${dipY}, ${midX - 30} ${riseY + 22}, ${midX} ${riseY} S ${endX - 46} ${endY + 12}, ${endX} ${endY}`;

      const angle = Math.atan2(endY - (riseY + 8), endX - (midX + 30));
      const headLen = 9;
      const spread = 0.6;
      const hx1 = endX - headLen * Math.cos(angle - spread);
      const hy1 = endY - headLen * Math.sin(angle - spread);
      const hx2 = endX - headLen * Math.cos(angle + spread);
      const hy2 = endY - headLen * Math.sin(angle + spread);
      const head = `M ${hx1} ${hy1} L ${endX} ${endY} L ${hx2} ${hy2}`;

      setArrow({ path, head });
    };

    computeArrow();
    window.addEventListener("resize", computeArrow);

    const ro = new ResizeObserver(computeArrow);
    if (containerRef.current) ro.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", computeArrow);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      className="
        relative
        w-full
        bg-[#110c11]
        py-[26px]
      "
    >
      <div
        ref={containerRef}
        className="
          relative
          mx-auto
          flex
          w-[calc(100%-40px)]
          max-w-[1410px]
          flex-col
          items-start
          justify-between
          gap-[22px]
          overflow-hidden
          rounded-[20px]
          border
          border-white/10
          bg-white/[0.025]
          px-5
          py-[30px]
          backdrop-blur-[6px]
          sm:flex-row
          sm:items-center
          sm:px-8
          lg:px-10
        "
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.35)",
        }}
      >

        {/* =================================================
            DECORATIVE PINK STREAK (project asset)
        ================================================== */}

        <img
          src="/pink-streak.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            h-full
            w-[220px]
            object-cover
            object-left-bottom
            opacity-70
          "
        />


        {/* =================================================
            HAND-DRAWN ARROW: "Together." -> "Let's Talk"
        ================================================== */}

        {arrow && (
          <svg
            className="
              pointer-events-none
              absolute
              inset-0
              z-[5]
              hidden
              h-full
              w-full
              sm:block
            "
            aria-hidden="true"
          >
            <path
              d={arrow.path}
              fill="none"
              stroke="#c34fd1"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d={arrow.head}
              fill="none"
              stroke="#c34fd1"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
          </svg>
        )}

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
          <span
            ref={togetherRef}
            className="relative inline-block text-[#c34fd1]"
          >
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
          ref={buttonRef}
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
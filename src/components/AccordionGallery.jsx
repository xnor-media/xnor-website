"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

const DEFAULT_ITEMS = [
  { image: "https://picsum.photos/id/1015/900/1200", label: "Canyon", link: "#" },
  { image: "https://picsum.photos/id/1018/900/1200", label: "Ridgeline", link: "#" },
  { image: "https://picsum.photos/id/1039/900/1200", label: "Falls", link: "#" },
  { image: "https://picsum.photos/id/1043/900/1200", label: "Harbour", link: "#" },
  { image: "https://picsum.photos/id/1044/900/1200", label: "Skyline", link: "#" },
];

const MOBILE_BREAKPOINT = 520;

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  accentColor = "#ffffff",
  overlayColor = "#060010",
  textColor = "#ffffff",
  height = 460,
  // Aspect ratio (width / height) for the EXPANDED panel on mobile.
  // 16/9 by default. Change to e.g. 4/3 or 1 if you ever need a
  // different ratio — the panel height is derived from this and the
  // panel's live width, so it always stays correct on resize.
  mobileAspectRatio = 16 / 9,
  mobileCollapsedHeight = 96,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = "horizontal",
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = "hover",
  showLabels = true,
  grayscale = true,
  className = "",
}) => {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const tlRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);
  // Computed px height for the expanded mobile panel, derived from
  // live panel width ÷ mobileAspectRatio. Starts as a sane guess so
  // the very first paint isn't 0 before ResizeObserver fires.
  const mobileExpandedHeightRef = useRef(Math.round(360 / mobileAspectRatio));

  const vertical = orientation === "vertical";
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const [isMobileStack, setIsMobileStack] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobileStack(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const effectiveVertical = vertical || isMobileStack;

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const overlayBg = `linear-gradient(180deg, transparent 45%, color-mix(in srgb, ${overlayColor} 78%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`;

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      if (isMobileStack) {
        const expandedH = mobileExpandedHeightRef.current;

        panels.forEach((panel, i) => {
          if (!panel) return;
          const isActive = i === active;
          const media = mediaRefs.current[i];
          const bar = barRefs.current[i];
          const text = textRefs.current[i];

          tl.to(
            panel,
            { height: isActive ? expandedH : mobileCollapsedHeight, duration: dur, ease },
            0
          );

          if (media) {
            const gray = grayscale ? (isActive ? 0 : 1) : 0;
            tl.to(media, { "--ag-gray": gray, "--ag-dim": isActive ? 0 : 0.35, duration: dur, ease }, 0);
          }

          if (showLabels && bar && text) {
            if (isActive) {
              tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
            } else {
              tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
            }
          }
        });

        tlRef.current = tl;
        return;
      }

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;
      const mediaSize = mediaSizeRef.current;

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(panel, { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease }, 0);

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - i));
          const shift = drift * parallax * mediaSize * 0.06;
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          tl.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: vertical ? 0 : isActive ? 0 : shift,
              y: vertical ? (isActive ? 0 : shift) : 0,
              "--ag-gray": gray,
              "--ag-dim": isActive ? 0 : 0.35,
              duration: dur,
              ease,
            },
            0
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            tl.to([bar, text], { opacity: 1, x: 0, duration: dur, ease, stagger: prefersReduced ? 0 : stagger }, 0);
          } else {
            tl.to([bar, text], { opacity: 0, x: -14, duration: dur * 0.6, ease }, 0);
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
      isMobileStack,
      mobileCollapsedHeight,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      if (isMobileStack) {
        // Panels are full-width, so the container's width IS the
        // panel width. Expanded height = width / (16/9), so it's
        // always a true 16:9 box regardless of screen size.
        const rect = el.getBoundingClientRect();
        const width = rect.width;
        mobileExpandedHeightRef.current = Math.round(width / mobileAspectRatio);
        applyLayout(!firstRunRef.current);
        return;
      }

      const rect = el.getBoundingClientRect();
      const total = vertical ? rect.height : rect.width;
      const usable = Math.max(total - gap * (count - 1), 120);
      const size = Math.max(140, usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22);
      mediaSizeRef.current = size;
      el.style.setProperty("--ag-media-size", `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout, gap, count, expandRatio, vertical, isMobileStack, mobileAspectRatio]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i) => {
    if (trigger === "hover") setActive(i);
  };

  const handleClick = (i, e) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`flex ${effectiveVertical ? "flex-col" : "flex-row"} w-full max-w-full ${
        effectiveVertical ? "[perspective:none]" : "[perspective:1400px]"
      } ${className}`}
      style={{
        gap: `${gap}px`,
        height: isMobileStack ? "auto" : vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
      }}
      role="list"
      aria-label="Image accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = item.link ? "a" : "div";
        return (
          <Tag
            key={i}
            ref={(el) => (panelRefs.current[i] = el)}
            className={`group relative block min-w-0 min-h-0 cursor-pointer overflow-hidden bg-[#0a0713] no-underline outline-none [transform-style:preserve-3d] [transform-origin:center] [box-shadow:0_10px_30px_-18px_rgba(0,0,0,0.8)] focus-visible:[box-shadow:0_0_0_2px_var(--ag-accent),0_10px_30px_-18px_rgba(0,0,0,0.8)] ${
              isMobileStack ? "flex-none !transform-none w-full" : "flex-[1_1_0]"
            }`}
            style={{
              borderRadius: `${radius}px`,
              "--ag-accent": accentColor,
              willChange: isMobileStack ? "height" : "flex-grow, transform",
              height: isMobileStack
                ? isActive
                  ? mobileExpandedHeightRef.current
                  : mobileCollapsedHeight
                : undefined,
            }}
            href={item.link || undefined}
            onClick={(e) => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => {
              if (trigger === "hover") setActive(i);
            }}
            onKeyDown={(e) => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={item.label}
          >
            {isMobileStack ? (
              <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
                <img
                  ref={(el) => (mediaRefs.current[i] = el)}
                  src={item.image}
                  alt={item.alt || item.label || ""}
                  draggable="false"
                  className="block h-full w-full select-none object-cover [-webkit-user-drag:none] [filter:grayscale(var(--ag-gray,1))]"
                  style={{ willChange: "filter" }}
                />
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{ background: overlayBg }}
                  aria-hidden="true"
                />
              </span>
            ) : (
              <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
                <span
                  ref={(el) => (mediaRefs.current[i] = el)}
                  className="absolute top-1/2 left-1/2 [filter:grayscale(var(--ag-gray,1))]"
                  style={{
                    width: vertical ? "100%" : "var(--ag-media-size, 320px)",
                    height: vertical ? "var(--ag-media-size, 320px)" : "100%",
                    willChange: "transform, filter",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt || item.label || ""}
                    draggable="false"
                    className="block h-full w-full select-none object-cover [-webkit-user-drag:none]"
                  />
                </span>
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{ background: overlayBg }}
                  aria-hidden="true"
                />
              </span>
            )}
            {showLabels && (
              <span
                className="pointer-events-none absolute bottom-5 left-5 right-5 z-[2] flex items-center gap-3"
                aria-hidden="true"
              >
                <span
                  ref={(el) => (barRefs.current[i] = el)}
                  className="h-[26px] w-[3px] flex-none rounded-[3px] opacity-0"
                  style={{
                    background: accentColor,
                    boxShadow: `0 0 12px color-mix(in srgb, ${accentColor} 60%, transparent)`,
                  }}
                />
                <span
                  ref={(el) => (textRefs.current[i] = el)}
                  className="overflow-hidden text-ellipsis whitespace-nowrap text-[clamp(1rem,1.4vw,1.4rem)] font-semibold tracking-[0.01em] opacity-0 [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]"
                  style={{ color: textColor }}
                >
                  {item.label}
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
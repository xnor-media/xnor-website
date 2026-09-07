"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#cta" },
];

export default function Navbar() {
  const { open } = useContactModal();
    const buttonRef = useRef<HTMLButtonElement>(null);
  
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tracks scroll position so we can fade in a solid glass backdrop
  // behind the whole header once content starts passing underneath
  // the logo — otherwise the logo (which has no background of its
  // own) visually overlaps whatever scrolls beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close the mobile menu if the viewport is resized up
  // past the desktop breakpoint while it's open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`
        fixed
        left-1/2
        z-[9999]
        w-[calc(100%-48px)]
        max-w-[1570px]
        -translate-x-1/2
        rounded-[26px]
        transition-all
        duration-500
        ease-out
        ${scrolled ? "top-[12px] px-[14px] py-[10px]" : "top-[25px] px-0 py-0"}
      `}
      style={{
        background: scrolled
          ? `
            linear-gradient(
              135deg,
              rgba(255,255,255,0.06) 0%,
              rgba(144,10,156,0.10) 40%,
              rgba(17,12,17,0.62) 100%
            )
          `
          : "transparent",
        border: scrolled
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(22px) saturate(160%)" : "none",
        boxShadow: scrolled
          ? "0 8px 28px rgba(0,0,0,0.32), 0 0 20px rgba(144,10,156,0.10)"
          : "none",
      }}
    >
      <nav className="flex items-center justify-between gap-6">

        {/* =====================================================
            LOGO
            NOTE: onClick now syncs `active` back to "Home" so the
            nav pill highlight is correct after navigating home via
            the logo instead of the "Home" link itself. Also scales
            down slightly once scrolled, in step with the header's
            backdrop transition, so it settles into the smaller bar.
        ====================================================== */}

        <Link
          href="/"
          aria-label="XNOR Home"
          onClick={() => {
            setActive("Home");
            setMobileOpen(false);
          }}
          className={`
            group
            flex
            shrink-0
            items-center
            transition-all
            duration-500
            ease-out
            ${scrolled ? "h-[42px] w-[105px]" : "h-[52px] w-[131px]"}
          `}
        >
          <img
            src="/xnor-logo.avif"
            alt="XNOR"
            className={`
              block
              object-contain
              transition-all
              duration-500
              ease-out
              group-hover:scale-[1.02]
              ${scrolled ? "w-[82px]" : "w-[102px]"}
            `}
            style={{
              filter: `
                brightness(1.15)
                contrast(1.05)
                drop-shadow(0 0 5px rgba(255,255,255,0.08))
              `,
            }}
          />
        </Link>


        {/* =====================================================
            MAIN LIQUID GLASS NAVIGATION (desktop only)
        ====================================================== */}

        <div
          className="
            relative
            hidden
            h-[54px]
            items-center
            rounded-full
            p-[1px]
            lg:flex
          "
          style={{
            /*
             * Main glass body
             */
            background: `
              linear-gradient(
                135deg,
                rgba(255,255,255,0.19) 0%,
                rgba(255,255,255,0.07) 12%,
                rgba(144,10,156,0.18) 38%,
                rgba(76,3,93,0.14) 68%,
                rgba(17,12,17,0.48) 100%
              )
            `,

            /*
             * Glass border + depth
             */
            border: "1px solid rgba(255,255,255,0.16)",

            /*
             * Real background blur
             */
            backdropFilter: `
              blur(26px)
              saturate(175%)
              contrast(105%)
            `,
            WebkitBackdropFilter: `
              blur(26px)
              saturate(175%)
              contrast(105%)
            `,

            /*
             * 3D glass depth
             */
            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.28),
              inset 0 -1px 0 rgba(0,0,0,0.42),
              inset 1px 0 0 rgba(255,255,255,0.06),
              inset -1px 0 0 rgba(255,255,255,0.035),
              0 8px 32px rgba(0,0,0,0.34),
              0 0 25px rgba(144,10,156,0.13)
            `,
          }}
        >

          {/* =================================================
              OUTER GLASS HIGHLIGHT
          ================================================== */}

          <span
            className="
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-[1px]
              h-[1px]
              rounded-full
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
              filter: "blur(0.4px)",
            }}
          />

          {/* =================================================
              INNER GLASS SURFACE
          ================================================== */}

          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              overflow-hidden
              rounded-full
              px-[5px]
            "
            style={{
              background: `
                radial-gradient(
                  ellipse 80% 100% at 20% 0%,
                  rgba(255,255,255,0.075),
                  transparent 45%
                ),
                radial-gradient(
                  ellipse 70% 100% at 80% 100%,
                  rgba(144,10,156,0.095),
                  transparent 48%
                ),
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.045),
                  rgba(17,12,17,0.20)
                )
              `,

              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.10),
                inset 0 -1px 0 rgba(0,0,0,0.24)
              `,
            }}
          >

            {/* =================================================
                LIQUID REFRACTION
            ================================================== */}

            <span
              className="
                pointer-events-none
                absolute
                -left-[15%]
                top-[-65%]
                h-[120%]
                w-[55%]
                rounded-full
              "
              style={{
                background:
                  "radial-gradient(ellipse, rgba(255,255,255,0.10), transparent 65%)",
                filter: "blur(14px)",
                transform: "rotate(-8deg)",
              }}
            />

            <span
              className="
                pointer-events-none
                absolute
                -right-[10%]
                bottom-[-65%]
                h-[120%]
                w-[48%]
                rounded-full
              "
              style={{
                background:
                  "radial-gradient(ellipse, rgba(144,10,156,0.16), transparent 68%)",
                filter: "blur(18px)",
              }}
            />


            {/* =================================================
                NAVIGATION LINKS
            ================================================== */}

            {navItems.map((item) => {
              const isActive = active === item.name;
              const isHovered = hovered === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="
                    relative
                    z-10
                    flex
                    h-[42px]
                    items-center
                    justify-center
                    rounded-full
                    px-[21px]
                    text-[14px]
                    font-medium
                    tracking-[-0.015em]
                    whitespace-nowrap
                    transition-all
                    duration-300
                  "
                  style={{
                    color: isActive
                      ? "rgba(255,255,255,0.98)"
                      : isHovered
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.70)",

                    textShadow: isActive
                      ? "0 0 10px rgba(255,255,255,0.16)"
                      : "none",

                    background: isActive
                      ? `
                        linear-gradient(
                          180deg,
                          rgba(144,10,156,0.68) 0%,
                          rgba(76,3,93,0.58) 48%,
                          rgba(17,12,17,0.42) 100%
                        )
                      `
                      : isHovered
                        ? `
                          linear-gradient(
                            180deg,
                            rgba(255,255,255,0.075),
                            rgba(144,10,156,0.10)
                          )
                        `
                        : "transparent",

                    border: isActive
                      ? "1px solid rgba(255,255,255,0.14)"
                      : isHovered
                        ? "1px solid rgba(255,255,255,0.055)"
                        : "1px solid transparent",

                    boxShadow: isActive
                      ? `
                        inset 0 1px 1px rgba(255,255,255,0.24),
                        inset 0 -1px 1px rgba(0,0,0,0.34),
                        0 0 15px rgba(144,10,156,0.28)
                      `
                      : "none",
                  }}
                >

                  {/* Active pill top reflection */}
                  {isActive && (
                    <span
                      className="
                        pointer-events-none
                        absolute
                        left-[18%]
                        right-[18%]
                        top-[2px]
                        h-[1px]
                        rounded-full
                      "
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.34), transparent)",
                        filter: "blur(0.35px)",
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>


        {/* =====================================================
            LET'S TALK CTA (desktop only)
        ====================================================== */}

        <button
          ref={buttonRef}
          onClick={open}
          onMouseEnter={() => setHovered("cta")}
          onMouseLeave={() => setHovered(null)}
          type="button"
          aria-label="Open contact form"
          className="
            group
            relative
            hidden
            h-[54px]
            w-[135px]
            shrink-0
            items-center
            justify-center
            cursor-pointer
            gap-[11px]
            overflow-hidden
            rounded-full
            text-[14px]
            font-medium
            tracking-[-0.015em]
            text-white
            transition-all
            duration-300
            lg:flex
          "
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(144,10,156,0.34) 0%,
                rgba(76,3,93,0.26) 42%,
                rgba(17,12,17,0.55) 100%
              )
            `,

            border: hovered === "cta"
              ? "1px solid rgba(144,10,156,0.60)"
              : "1px solid rgba(255,255,255,0.17)",

            backdropFilter: `
              blur(24px)
              saturate(175%)
            `,
            WebkitBackdropFilter: `
              blur(24px)
              saturate(175%)
            `,

            boxShadow:
              hovered === "cta"
                ? `
                  inset 0 1px 0 rgba(255,255,255,0.25),
                  inset 0 -1px 0 rgba(0,0,0,0.35),
                  0 8px 30px rgba(0,0,0,0.34),
                  0 0 28px rgba(144,10,156,0.32)
                `
                : `
                  inset 0 1px 0 rgba(255,255,255,0.21),
                  inset 0 -1px 0 rgba(0,0,0,0.35),
                  0 8px 28px rgba(0,0,0,0.30),
                  0 0 20px rgba(144,10,156,0.14)
                `,
          }}
        >

          {/* CTA top glass reflection */}
          <span
            className="
              pointer-events-none
              absolute
              left-[17%]
              right-[17%]
              top-[2px]
              h-[1px]
              rounded-full
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
              filter: "blur(0.35px)",
            }}
          />

          {/* CTA internal purple refraction */}
          <span
            className="
              pointer-events-none
              absolute
              -right-[15%]
              -top-[65%]
              h-[150%]
              w-[65%]
              rounded-full
            "
            style={{
              background:
                "radial-gradient(ellipse, rgba(144,10,156,0.22), transparent 68%)",
              filter: "blur(14px)",
            }}
          />

          <span className="relative z-10">
            Let's Talk
          </span>


          {/* =================================================
              ARROW CIRCLE
          ================================================== */}

          <span
            className="
              relative
              z-10
              flex
              h-[22px]
              w-[22px]
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300
            "
            style={{
              background:
                hovered === "cta"
                  ? "rgba(144,10,156,0.35)"
                  : "rgba(255,255,255,0.075)",

              border:
                hovered === "cta"
                  ? "1px solid rgba(144,10,156,0.40)"
                  : "1px solid rgba(255,255,255,0.10)",

              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.14)",
            }}
          >
            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </span>
        </button>


        {/* =====================================================
            HAMBURGER TOGGLE (mobile only)
        ====================================================== */}

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="
            flex
            h-[46px]
            w-[46px]
            shrink-0
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
            lg:hidden
          "
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={1.8} />
          ) : (
            <Menu size={20} strokeWidth={1.8} />
          )}
        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU PANEL
          
          Slides/fades open below the header row on small screens.
          Same glass language as the desktop pill. Every link and
          the logo already close it via onClick.
      ====================================================== */}

      <div
        className={`
          overflow-hidden
          transition-all
          duration-400
          ease-out
          lg:hidden
          ${mobileOpen ? "mt-[12px] max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            flex
            flex-col
            gap-[6px]
            rounded-[22px]
            border
            border-white/15
            p-[14px]
          "
          style={{
            background: `
              linear-gradient(
                160deg,
                rgba(31,20,33,0.94) 0%,
                rgba(17,12,17,0.97) 60%
              )
            `,
            backdropFilter: "blur(26px) saturate(175%)",
            WebkitBackdropFilter: "blur(26px) saturate(175%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.10), 0 12px 40px rgba(0,0,0,0.45)",
          }}
        >
          {navItems.map((item) => {
            const isActive = active === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setMobileOpen(false);
                }}
                className="
                  flex
                  h-[46px]
                  items-center
                  rounded-[16px]
                  px-[16px]
                  text-[15px]
                  font-medium
                  tracking-[-0.01em]
                  transition-all
                  duration-300
                "
                style={{
                  color: isActive
                    ? "rgba(255,255,255,0.98)"
                    : "rgba(255,255,255,0.75)",
                  background: isActive
                    ? `
                      linear-gradient(
                        180deg,
                        rgba(144,10,156,0.55) 0%,
                        rgba(76,3,93,0.45) 100%
                      )
                    `
                    : "transparent",
                }}
              >
                {item.name}
              </Link>
            );
          })}

          <button
            ref={buttonRef}
            onClick={open}
            className="
              mt-[6px]
              flex
              h-[48px]
              items-center
              justify-center
              gap-[9px]
              rounded-[16px]
              text-[15px]
              font-medium
              text-white
            "
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(144,10,156,0.55) 0%,
                  rgba(76,3,93,0.42) 100%
                )
              `,
              border: "1px solid rgba(255,255,255,0.17)",
            }}
          >
            Let's Talk
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </button>
        </div>
      </div>

    </header>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header
      className="
        fixed
        left-1/2
        top-[25px]
        z-[9999]
        w-[calc(100%-48px)]
        max-w-[1570px]
        -translate-x-1/2
      "
    >
      <nav className="flex items-center justify-between gap-6">

        {/* =====================================================
            LOGO
            NOTE: scaled up ~1.25x to match target sizing
        ====================================================== */}

        <Link
          href="/"
          aria-label="XNOR Home"
          className="
            group
            flex
            h-[52px]
            w-[131px]
            shrink-0
            items-center
          "
        >
          <img
            src="/xnor-logo.png"
            alt="XNOR"
            className="
              block
              w-[102px]
              object-contain
              transition-all
              duration-300
              group-hover:scale-[1.02]
            "
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
            MAIN LIQUID GLASS NAVIGATION
            NOTE: pill height, link height/padding/text scaled up
        ====================================================== */}

        <div
          className="
            relative
            flex
            h-[54px]
            items-center
            rounded-full
            p-[1px]
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
                NOTE: height, padding, text size scaled up
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
                    text-[12px]
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
            LET'S TALK CTA
            NOTE: button size, gap, text, arrow circle scaled up
        ====================================================== */}

        <Link
          href="#contact"
          onMouseEnter={() => setHovered("cta")}
          onMouseLeave={() => setHovered(null)}
          className="
            group
            relative
            flex
            h-[54px]
            w-[135px]
            shrink-0
            items-center
            justify-center
            gap-[11px]
            overflow-hidden
            rounded-full
            text-[12px]
            font-medium
            tracking-[-0.015em]
            text-white
            transition-all
            duration-300
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
        </Link>

      </nav>
    </header>
  );
}
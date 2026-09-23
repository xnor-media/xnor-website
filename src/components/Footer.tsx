"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { scrollToSection } from "@/lib/scrollToSection";

// Brand/logo icons (Instagram, LinkedIn, YouTube, Behance) are inlined as
// plain SVGs — lucide-react's v1 release removed all trademarked brand
// icons, so these no longer exist as importable components.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.4 8.75h4.2V23H.4V8.75ZM8.3 8.75h4v1.95h.06c.56-1.05 1.93-2.16 3.97-2.16 4.25 0 5.04 2.8 5.04 6.44V23h-4.2v-6.94c0-1.66-.03-3.79-2.31-3.79-2.32 0-2.68 1.8-2.68 3.67V23H8.3V8.75Z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M14.5 4v10.2a3.3 3.3 0 1 1-2.5-3.2V8.4a5.8 5.8 0 1 0 5 5.7V9.8c1.2.9 2.6 1.4 4 1.4V8.5c-2.1-.1-3.8-1.8-4-4.5h-2.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path
        d="M14 8h2V5.5h-2.5C11.3 5.5 10 6.8 10 9v2H8v2.5h2V19h2.5v-5.5H15L15.5 11h-3v-1.7c0-.9.4-1.3 1.5-1.3Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  // { name: "About Us", href: "#about" },
  { name: "Contact", href: "#cta" },
];

const serviceLinks = [
  { name: "Photography", href: "#services" },
  { name: "Videography", href: "#services" },
  { name: "Digital Marketing", href: "#services" },
  { name: "Graphic Designing", href: "#services" },
  { name: "Event Coverage", href: "#services" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/xnor_lk?stkn=MWlxaHA0cDNjdjJ3bA==", icon: InstagramIcon },
  { name: "Facebook", href: "https://www.facebook.com/share/1AYMPd6YGq/", icon: FacebookIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@xnormedia?_r=1&_t=ZS-99eLoTDM5xs", icon: TikTokIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/xnor-media/", icon: LinkedinIcon },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname.replace(/\/+$/, "") === "" || pathname === "/";

  // =========================================================
  // FOOTER LINK CLICK
  //
  // On the homepage: prevent default, smooth-scroll in place.
  // On any other page (e.g. /reels): let the Link navigate
  // normally to "/#section" — Navbar's mount effect finishes
  // the scroll once we land back on "/".
  // =========================================================

  function handleFooterLinkClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!isHome) {
      return;
    }

    e.preventDefault();
    scrollToSection(href.replace("#", ""));
  }

  const linkHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#110c11]
        px-6
        pt-[80px]
        text-white
        sm:px-10
        lg:px-[50px]
        xl:px-[63px]
      "
    >

      {/* =====================================================
          BACKGROUND PURPLE ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-160px]
          bottom-[-100px]
          h-[360px]
          w-[360px]
          rounded-full
          opacity-20
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.45) 0%, rgba(76,3,93,0.18) 38%, transparent 72%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-140px]
          top-[-80px]
          h-[300px]
          w-[300px]
          rounded-full
          opacity-15
          blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.42) 0%, transparent 70%)",
        }}
      />


      {/* =====================================================
          TOP GRID
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1650px]
          grid-cols-2
          gap-x-[30px]
          gap-y-[50px]
          pb-[55px]
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-x-[40px]
        "
      >

        {/* ===========================================
            BRAND / ABOUT
        ============================================ */}

        <div className="col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="XNOR Home"
            onClick={(e) => {
              if (!isHome) {
                return;
              }

              e.preventDefault();
              scrollToSection("home");
            }}
            className="
              inline-flex
              h-[42px]
              w-[115px]
              items-center
            "
          >
            <img
              src="/xnor-logo.avif"
              alt="XNOR"
              className="block w-[98px] object-contain"
            />
          </Link>

          <p
            className="
              mt-[20px]
              max-w-[325px]
              text-[16px]
              font-normal
              leading-[1.65]
              tracking-[0.005em]
              text-white/55
            "
          >
            We are a creative studio helping brands tell their story
            through powerful visuals &amp; strategies.
          </p>
        </div>


        {/* ===========================================
            QUICK LINKS
        ============================================ */}

        <nav aria-label="Quick links">
          <h4
            className="
              mb-[22px]
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#c34fd1]
            "
          >
            Quick Links
          </h4>

          <ul className="flex flex-col gap-[15px]">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={linkHref(item.href)}
                  onClick={(e) => handleFooterLinkClick(e, item.href)}
                  className="
                    text-[16px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        {/* ===========================================
            SERVICES
        ============================================ */}

        <nav aria-label="Services">
          <h4
            className="
              mb-[22px]
              text-[14px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#c34fd1]
            "
          >
            Services
          </h4>

          <ul className="flex flex-col gap-[15px]">
            {serviceLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={linkHref(item.href)}
                  onClick={(e) => handleFooterLinkClick(e, item.href)}
                  className="
                    text-[16px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        {/* ===========================================
            FOLLOW US + GET IN TOUCH
        ============================================ */}

        <div className="col-span-2 flex flex-col gap-[40px] sm:col-span-1 sm:flex-row lg:col-span-1 lg:flex-col lg:gap-[45px]">

          <div>
            <h4
              className="
                mb-[22px]
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#c34fd1]
              "
            >
              Follow Us
            </h4>

            <div className="flex flex-wrap items-center gap-[13px]">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[48px]
                      w-[48px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/15
                      bg-white/[0.04]
                      text-white/80
                      transition-all
                      duration-300
                      hover:border-[#900a9c]/70
                      hover:bg-[#4c035d]/35
                      hover:text-white
                      hover:shadow-[0_0_18px_rgba(144,10,156,0.30)]
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              className="
                mb-[22px]
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#c34fd1]
              "
            >
              Get In Touch
            </h4>

            <ul className="flex flex-col gap-[16px]">
              <li>
                <a
                  href="mailto:hello@xnor.studio"
                  className="
                    flex
                    items-center
                    gap-[13px]
                    text-[16px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <Mail size={19} strokeWidth={1.8} className="text-[#c34fd1]" />
                  xnormedialk@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+94726553268"
                  className="
                    flex
                    items-center
                    gap-[13px]
                    text-[16px]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  <Phone size={19} strokeWidth={1.8} className="text-[#c34fd1]" />
                  +94 72 655 3268
                </a>
              </li>
              <li
                className="
                  flex
                  items-center
                  gap-[13px]
                  text-[16px]
                  text-white/65
                "
              >
                <MapPin size={19} strokeWidth={1.8} className="text-[#c34fd1]" />
                Colombo 07, Sri Lanka
              </li>
            </ul>
          </div>

        </div>

      </div>


      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          h-[1px]
          w-full
          max-w-[1650px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.18) 15%, rgba(144,10,156,0.5) 50%, rgba(144,10,156,0.18) 85%, transparent 100%)",
          boxShadow: "0 0 20px rgba(144,10,156,0.15)",
        }}
      />


      {/* =====================================================
          BOTTOM COPYRIGHT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1650px]
          py-[28px]
          text-center
          text-[15px]
          text-white/40
        "
      >
        © {new Date().getFullYear()} XNOR. All rights reserved.
      </div>

    </footer>
  );
}
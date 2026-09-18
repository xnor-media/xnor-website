"use client";

import { useState } from "react";
import {
  Camera,
  Video,
  Megaphone,
  Palette,
  CalendarDays,
  Code,
  Radio,
  ArrowUpRight,
} from "lucide-react";

import ServiceModal, {
  type ServiceModalData,
} from "./ServiceModal";

// =========================================================
// SERVICES DATA
// =========================================================

const services = [
  {
    title: "Photography",

    description: (
      <>
        Capturing moments
        <br />
        that tell your story
        <br />
        beautifully.
      </>
    ),

    icon: Camera,

    modal: {
      title: "Photography",
      tagline: "Every shoot, tailored to the moment.",

      videoSrc: "/videos/photography.webm",
      reverseVideoSrc: "/videos/photography-reverse.webm",

      packages: [
        {
          name: "Photoshoot",
          subtitle: "LKR 10,000 upwards",
          duration: "2 hour session",
          photos: "Unlimited Photos",

          includes: [
            "Personal Portrait Shoot",
            "Family Photoshoot",
            "Creative Concept Shoot",
            "Social Media Content Shoot",
            "Corporate Headshots",
          ],
        },

        {
          name: "Graduation Shoot",
          subtitle: "LKR 10,000 upwards",
          duration: "2 hours session",
          photos: "Unlimited Photos",
          includes: [],
        },

        {
          name: "Event Photography",
          subtitle: "LKR 24,500 upwards",
          photos: "Unlimited Photos",

          includes: [
            "Concerts & Musical Shows",
            "Corporate Events",
            "Anniversaries",
            "Promotional Events",
            "Festivals & Cultural Events",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // VIDEOGRAPHY
  // =========================================================

  {
    title: "Videography",

    description: (
      <>
        Cinematic visuals
        <br />
        that bring your ideas
        <br />
        to life.
      </>
    ),

    icon: Video,

    modal: {
      title: "Videography",
      tagline: "Cinematic stories, shot and cut for how you'll use them.",

      videoSrc: "/videos/videography.mp4",
      reverseVideoSrc: "/videos/videography-reverse.mp4",

      packages: [
        {
          name: "Social Media Reel",
          subtitle: "LKR 10,000 upwards",
          includes: [],
        },
        {
          name: "Personal / Lifestyle Video",
          subtitle: "LKR 15,000 upwards",
          includes: [],
        },
        {
          name: "Birthday Pre-Shoot Video",
          subtitle: "LKR 17,500 upwards",
          includes: [],
        },
        {
          name: "Birthday Event Video",
          subtitle: "LKR 25,000 upwards",
          includes: [],
        },
        {
          name: "Graduation Video",
          subtitle: "LKR 15,000 upwards",
          includes: [],
        },
        {
          name: "Event Aftermovie",
          subtitle: "LKR 35,000 upwards",
          includes: [],
        },
        {
          name: "Product Promotional Video",
          subtitle: "LKR 20,000 upwards",
          includes: [],
        },
        {
          name: "Business / Brand Promotional Video",
          subtitle: "LKR 30,000 upwards",
          includes: [],
        },
        {
          name: "Please Note",
          includes: [
            "Final pricing depends on shoot duration, location and editing requirements.",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // DIGITAL MARKETING
  // =========================================================

  {
    title: "Digital Marketing",

    description: (
      <>
        Strategies that
        <br />
        grow your brand
        <br />
        and reach.
      </>
    ),

    icon: Megaphone,

    modal: {
      title: "Digital Marketing",
      tagline: "Growth strategy built around your audience.",

      videoSrc: "/videos/digital-marketing.mp4",
      reverseVideoSrc: "/videos/digital-marketing-reverse.mp4",

      packages: [
        {
          name: "Social Media Page Setup & Optimisation",
          subtitle: "LKR 7,500 upwards (one-time)",
          includes: [],
        },
        {
          name: "Social Media Post Design",
          subtitle: "LKR 2,500 upwards (per post)",
          includes: [],
        },
        {
          name: "Social Media Reel Editing",
          subtitle: "LKR 5,000 upwards (per reel)",
          includes: [],
        },
        {
          name: "Starter",
          subtitle: "LKR 25,000 upwards / month",
          includes: ["8 posts", "Captions & scheduling"],
        },
        {
          name: "Growth",
          subtitle: "LKR 40,000 upwards / month",
          includes: [
            "12 posts",
            "2 edited reels",
            "Captions & scheduling",
          ],
        },
        {
          name: "Premium",
          subtitle: "LKR 60,000 upwards / month",
          includes: [
            "16 posts",
            "4 edited reels",
            "Captions & scheduling",
            "Basic inbox management",
          ],
        },
        {
          name: "Facebook & Instagram Ads Management",
          subtitle: "LKR 15,000 upwards / month",
          includes: [],
        },
        {
          name: "Google Ads Management",
          subtitle: "LKR 20,000 upwards / month",
          includes: [],
        },
        {
          name: "SEO Services",
          subtitle: "LKR 25,000 upwards / month",
          includes: [],
        },
        {
          name: "Digital Marketing Strategy & Consultation",
          subtitle: "LKR 10,000 upwards / session",
          includes: [],
        },
        {
          name: "Please Note",
          includes: [
            "Social media packages cover Facebook & Instagram using shared content.",
            "Reel editing uses client-supplied footage.",
            "Advertising budgets, photography, video shoots and website development are charged separately.",
            "Final pricing depends on your requirements.",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // GRAPHIC DESIGNING
  // =========================================================

  {
    title: "Graphic Designing",

    description: (
      <>
        Designs that
        <br />
        communicate,
        <br />
        inspire and stand out.
      </>
    ),

    icon: Palette,

    modal: {
      title: "Graphic Designing",
      tagline: "Visual identity that holds up everywhere it's seen.",

      videoSrc: "/videos/graphic-designing.mp4",
      reverseVideoSrc: "/videos/graphic-designing-reverse.mp4",

      packages: [
        {
          name: "Brand Identity",

          includes: [
            "Logo suite",
            "Colour & type system",
            "Brand guidelines",
          ],
        },

        {
          name: "Social Media Kit",

          includes: [
            "Post templates",
            "Story templates",
            "Highlight covers",
          ],
        },

        {
          name: "Print & Packaging",

          includes: [
            "Business cards",
            "Packaging design",
            "Print-ready files",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // EVENT COVERAGE
  // =========================================================

  {
    title: "Event Coverage",

    description: (
      <>
        Every event,
        <br />
        captured with
        <br />
        precision and style.
      </>
    ),

    icon: CalendarDays,

    modal: {
      title: "Event Coverage",
      tagline: "Full coverage, so nothing about the day gets missed.",

      videoSrc: "/videos/event-coverage.mp4",
      reverseVideoSrc: "/videos/event-coverage-reverse.mp4",

      packages: [
        {
          name: "Half-Day Coverage",
          duration: "Up to 4 hours",
          photos: "Unlimited Photos",

          includes: [
            "Single photographer",
            "Edited gallery",
            "Online delivery",
          ],
        },

        {
          name: "Full-Day Coverage",
          duration: "Up to 8 hours",
          photos: "Unlimited Photos",

          includes: [
            "Two photographers",
            "Edited gallery",
            "Highlight selection",
          ],
        },

        {
          name: "Multi-Day Event",
          photos: "Unlimited Photos",

          includes: [
            "Dedicated team",
            "Daily turnaround previews",
            "Full edited archive",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // WEB & SOFTWARE DEVELOPMENT
  // =========================================================

  {
    title: "Web & Software Development",

    description: (
      <>
        Websites and tools
        <br />
        built to run
        <br />
        your business.
      </>
    ),

    icon: Code,

    modal: {
      title: "Web & Software Development",
      tagline: "From landing pages to full custom systems.",

      videoSrc: "/videos/web-development.mp4",
      reverseVideoSrc: "/videos/web-development-reverse.mp4",

      packages: [
        {
          name: "Landing Page / Single-Page Website",
          subtitle: "LKR 25,000 upwards",
          includes: [],
        },
        {
          name: "Personal / Portfolio Website",
          subtitle: "LKR 35,000 upwards",
          includes: [],
        },
        {
          name: "Business Website",
          subtitle: "LKR 50,000 upwards",
          includes: [],
        },
        {
          name: "E-Commerce Website",
          subtitle: "LKR 100,000 upwards",
          includes: [],
        },
        {
          name: "Custom Web Application",
          subtitle: "LKR 150,000 upwards",
          includes: [],
        },
        {
          name: "Inventory Management System",
          subtitle: "LKR 100,000 upwards",
          includes: [],
        },
        {
          name: "Booking & Appointment System",
          subtitle: "LKR 100,000 upwards",
          includes: [],
        },
        {
          name: "POS & Billing System",
          subtitle: "LKR 125,000 upwards",
          includes: [],
        },
        {
          name: "Custom Business Software",
          subtitle: "LKR 150,000 upwards",
          includes: [],
        },
        {
          name: "Mobile App Development",
          subtitle: "LKR 200,000 upwards",
          includes: [],
        },
        {
          name: "Website Maintenance",
          subtitle: "LKR 5,000 upwards / month",
          includes: [],
        },
        {
          name: "Software Maintenance & Support",
          subtitle: "LKR 10,000 upwards / month",
          includes: [],
        },
        {
          name: "Please Note",
          includes: [
            "These are indicative starting prices. Final quotations depend on features, integrations and project complexity.",
            "Domain registration, hosting, paid licences and third-party service fees are charged separately.",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },

  // =========================================================
  // LIVE STREAMING
  // =========================================================

  {
    title: "Live Streaming",

    description: (
      <>
        Real-time coverage
        <br />
        for events that can't
        <br />
        wait to be shared.
      </>
    ),

    icon: Radio,

    modal: {
      title: "Live Streaming",
      tagline: "Multi-camera streams, switched and delivered live.",

      videoSrc: "/videos/live-streaming.mp4",
      reverseVideoSrc: "/videos/live-streaming-reverse.mp4",

      packages: [
        {
          name: "Basic",
          subtitle: "LKR 25,000 upwards",
          includes: [
            "Up to 2 hours of coverage",
            "Single-camera setup",
            "Streaming to Facebook or YouTube",
            "Basic title & logo overlay",
            "Digital recording of the stream",
          ],
        },
        {
          name: "Standard",
          subtitle: "LKR 45,000 upwards",
          includes: [
            "Up to 3 hours of coverage",
            "Two-camera setup",
            "Live camera switching",
            "Streaming to Facebook or YouTube",
            "Custom overlays & titles",
            "Audio feed from the venue sound system",
            "Digital recording of the stream",
          ],
        },
        {
          name: "Premium",
          subtitle: "LKR 75,000 upwards",
          includes: [
            "Up to 4 hours of coverage",
            "Three-camera setup",
            "Live camera switching",
            "Streaming to Facebook & YouTube simultaneously",
            "Custom overlays, titles & presentation integration",
            "Audio feed from the venue sound system",
            "Dedicated stream operator",
            "Digital recording of the stream",
          ],
        },
        {
          name: "Custom Live Streaming",
          subtitle: "Price on request",
          includes: [
            "Corporate events, conferences, concerts, sports & hybrid events",
          ],
        },
        {
          name: "Please Note",
          includes: [
            "These are suggested starting rates, subject to venue and technical requirements.",
            "Stable internet and power must be available at the venue.",
            "Dedicated internet, backup power, sound systems, lighting, travel and additional coverage hours are quoted separately.",
          ],
        },
      ],
    } satisfies ServiceModalData,
  },
];

// =========================================================
// SERVICES COMPONENT
// =========================================================

export default function Services() {
  const [activeService, setActiveService] =
    useState<ServiceModalData | null>(null);

  return (
    <section
      id="services"
      className="
        relative
        w-full
        scroll-mt-10
        overflow-hidden
        bg-[#110c11]
        px-6
        lg:py-[110px]
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
          left-[-180px]
          top-[40px]
          h-[330px]
          w-[330px]
          rounded-full
          opacity-30
          blur-[110px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.42) 0%, rgba(76,3,93,0.18) 38%, transparent 72%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[120px]
          h-[400px]
          w-[400px]
          rounded-full
          opacity-20
          blur-[130px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(144,10,156,0.45) 0%, transparent 68%)",
        }}
      />

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
        What We Do
      </div>

      {/* =====================================================
          MAIN TITLE
      ====================================================== */}

      <h2
        className="
          relative
          z-10
          mb-[30px]
          text-center
          font-serif
          text-[42px]
          leading-none
          tracking-[-0.035em]
          text-white
          sm:text-[48px]
          lg:text-[50px]
        "
      >
        Creative{" "}
        <span
          className="
            italic
            text-[#900a9c]
          "
          style={{
            textShadow:
              "0 0 22px rgba(144,10,156,0.35)",
          }}
        >
          Services
        </span>
      </h2>

      {/* =====================================================
          SERVICES GRID

          NOTE: cards no longer force a min-height and align
          to the start of the row (not stretched), so each
          card sizes to its own content instead of leaving a
          big empty gap above the button.
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[1650px]
          grid-cols-1
          items-start
          gap-[18px]
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/20
                bg-white/[0.035]
                px-[24px]
                pb-[21px]
                pt-[23px]
                backdrop-blur-[18px]
                transition-all
                duration-500
                hover:-translate-y-[3px]
                hover:border-[#900a9c]/60
                hover:bg-white/[0.055]
                hover:shadow-[0_12px_45px_rgba(144,10,156,0.16)]
              "
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(144,10,156,0.08), 0 8px 35px rgba(0,0,0,0.22)",
              }}
            >
              {/* =================================================
                  GLASS TOP REFLECTION
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-0
                  h-[1px]
                  opacity-80
                "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.42), transparent)",
                }}
              />

              {/* =================================================
                  PURPLE CARD GLOW
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[35px]
                  -top-[35px]
                  h-[110px]
                  w-[110px]
                  rounded-full
                  opacity-20
                  blur-[35px]
                  transition-opacity
                  duration-500
                  group-hover:opacity-45
                "
                style={{
                  background:
                    "radial-gradient(circle, #900a9c 0%, #4c035d 42%, transparent 72%)",
                }}
              />

              {/* =================================================
                  ICON
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  h-[64px]
                  w-[64px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#900a9c]/50
                  bg-[#4c035d]/30
                  shadow-[0_0_22px_rgba(144,10,156,0.20),inset_0_1px_1px_rgba(255,255,255,0.18)]
                  transition-all
                  duration-500
                  group-hover:border-[#900a9c]
                  group-hover:bg-[#4c035d]/45
                  group-hover:shadow-[0_0_28px_rgba(144,10,156,0.35),inset_0_1px_1px_rgba(255,255,255,0.22)]
                "
              >
                {/* Icon inner glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-[6px]
                    rounded-full
                    opacity-50
                    blur-[5px]
                  "
                  style={{
                    background:
                      "radial-gradient(circle, rgba(144,10,156,0.65), transparent 70%)",
                  }}
                />

                <Icon
                  size={26}
                  strokeWidth={1.8}
                  className="
                    relative
                    z-10
                    text-[#d99be0]
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              {/* =================================================
                  SERVICE TITLE
              ================================================== */}

              <h3
                className="
                  relative
                  mt-[20px]
                  text-[20px]
                  font-normal
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-white
                "
              >
                {service.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                className="
                  relative
                  mt-[12px]
                  text-[15px]
                  font-normal
                  leading-[1.55]
                  tracking-[0.005em]
                  text-white/55
                "
              >
                {service.description}
              </p>

              {/* =================================================
                  ARROW BUTTON

                  NOTE: no longer absolutely positioned — it now
                  sits in normal flow, pushed to the bottom of
                  whatever space the row leaves via mt-auto, with
                  a divider so it never looks disconnected from
                  the text above it.
              ================================================== */}

              <div className="mt-auto flex justify-end pt-[22px]">
                <button
                  type="button"
                  aria-label={`View ${service.title} packages`}
                  onClick={() => setActiveService(service.modal)}
                  className="
                    cursor-pointer
                    flex
                    h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#900a9c]/45
                    bg-[#4c035d]/25
                    px-4
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
                  <span
                    className="
                      text-[13px]
                      font-medium
                      tracking-[0.01em]
                      whitespace-nowrap
                    "
                  >
                    View Packages
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.7}
                    className="
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-[1px]
                      group-hover:-translate-y-[1px]
                    "
                  />
                </button>
              </div>

              {/* =================================================
                  BOTTOM GLASS REFLECTION
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[10%]
                  right-[10%]
                  h-[1px]
                  opacity-40
                "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(144,10,156,0.7), transparent)",
                }}
              />
            </article>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM DECORATIVE DIVIDER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-[-24px]
          mt-[80px]
          h-[1px]
          sm:mx-[-40px]
          lg:mx-[-50px]
          xl:mx-[-63px]
        "
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(144,10,156,0.18) 15%, rgba(144,10,156,0.5) 50%, rgba(144,10,156,0.18) 85%, transparent 100%)",

          boxShadow:
            "0 0 20px rgba(144,10,156,0.15)",
        }}
      />

      {/* =====================================================
          SERVICE MODAL
      ====================================================== */}

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </section>
  );
}
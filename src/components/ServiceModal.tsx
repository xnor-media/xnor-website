"use client";

import { useEffect, useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

export interface ServicePackage {
  /** Package name, e.g. "Photoshoot" */
  name: string;

  /** Short highlight shown next to the name (never a price) */
  subtitle?: string;

  /** e.g. "2 hour session" */
  duration?: string;

  /** e.g. "Unlimited Photos" */
  photos?: string;

  /** e.g. ["Personal Portrait Shoot", "Family Photoshoot", ...] */
  includes: string[];
}

export interface ServiceModalData {
  title: string;
  tagline?: string;

  /** Forward video: start -> end */
  videoSrc: string;

  /** Reverse video: end -> start */
  reverseVideoSrc: string;

  packages: ServicePackage[];
}

interface ServiceModalProps {
  service: ServiceModalData | null;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  onClose,
}: ServiceModalProps) {
  const forwardVideoRef = useRef<HTMLVideoElement>(null);
  const reverseVideoRef = useRef<HTMLVideoElement>(null);

  const [isReverse, setIsReverse] = useState(false);

  const { open: openContact } = useContactModal();

  // =====================================================
  // CLOSE ON ESCAPE + LOCK PAGE SCROLL
  // =====================================================

  useEffect(() => {
    if (!service) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [service, onClose]);

  // =====================================================
  // RESET TO FORWARD VIDEO WHEN SERVICE CHANGES
  // =====================================================

  useEffect(() => {
    if (!service) return;

    setIsReverse(false);

    const forward = forwardVideoRef.current;
    const reverse = reverseVideoRef.current;

    if (forward) {
      forward.currentTime = 0;
      forward.play().catch(() => {});
    }

    if (reverse) {
      reverse.pause();
      reverse.currentTime = 0;
    }
  }, [service]);

  if (!service) return null;

  // =====================================================
  // FORWARD VIDEO ENDED
  // =====================================================

  const handleForwardEnded = () => {
    const forward = forwardVideoRef.current;
    const reverse = reverseVideoRef.current;

    if (!forward || !reverse) return;

    setIsReverse(true);

    forward.pause();

    reverse.currentTime = 0;
    reverse.play().catch(() => {});
  };

  // =====================================================
  // REVERSE VIDEO ENDED
  // =====================================================

  const handleReverseEnded = () => {
    const forward = forwardVideoRef.current;
    const reverse = reverseVideoRef.current;

    if (!forward || !reverse) return;

    setIsReverse(false);

    reverse.pause();

    forward.currentTime = 0;
    forward.play().catch(() => {});
  };

  // =====================================================
  // REQUEST PRICING
  // Closes this modal, then opens the contact form with the
  // message pre-filled for the service being viewed.
  // =====================================================

  const handleRequestPricing = () => {
    const title = service.title;

    onClose();

    openContact({
      message: `Hi, I'd like to request pricing for ${title}.`,
    });
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        px-3
        py-4
        sm:px-4
        sm:py-8
      "
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} packages`}
    >
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <div
        className="absolute inset-0 bg-[#0a070a]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* =====================================================
          MODAL SHELL

          MOBILE:
          - Vertical layout
          - Video is hidden
          - Packages take the full modal

          DESKTOP:
          - Horizontal layout
          - Video stays on left
          - Packages stay on right
      ====================================================== */}

      <div
        className="
          relative z-10 flex w-full max-w-[980px]
          max-h-[92vh] mt-20 flex-col overflow-hidden
          rounded-[24px] border border-white/15 bg-[#150e16]
          shadow-[0_30px_100px_rgba(0,0,0,0.6),0_0_60px_rgba(144,10,156,0.15)]

          md:h-[86vh] md:max-h-none md:flex-row md:rounded-[28px]
        "
      >
        {/* =====================================================
            TOP GLASS REFLECTION
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[8%]
            right-[8%]
            top-0
            z-20
            h-[1px]
            opacity-80
          "
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.42), transparent)",
          }}
        />

        {/* =====================================================
            CLOSE BUTTON
        ====================================================== */}

        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-white/15
            bg-black/30
            text-white/70
            backdrop-blur-md
            transition-colors
            hover:border-[#900a9c]/60
            hover:text-white

            sm:right-4
            sm:top-4
          "
        >
          <X size={18} strokeWidth={1.8} />
        </button>

        {/* =====================================================
            VIDEO SECTION

            MOBILE:
            Hidden entirely - no animation shown.

            DESKTOP:
            Unchanged 42% left column.
        ====================================================== */}

        <div
          className="
            relative hidden shrink-0 overflow-hidden bg-[#150e16]

            md:block md:h-full md:w-auto md:max-w-[48%]
            md:aspect-411/890
          "
        >
          {/* =================================================
              FORWARD VIDEO
          ================================================== */}

          <video
            key={`${service.videoSrc}-forward`}
            ref={forwardVideoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleForwardEnded}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-opacity
              duration-100
              ${
                isReverse
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          >
            <source
              src={service.videoSrc}
              type="video/webm"
            />
          </video>

          {/* =================================================
              REVERSE VIDEO
          ================================================== */}

          <video
            key={`${service.reverseVideoSrc}-reverse`}
            ref={reverseVideoRef}
            muted
            playsInline
            preload="auto"
            onEnded={handleReverseEnded}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-opacity
              duration-100
              ${
                isReverse
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >
            <source
              src={service.reverseVideoSrc}
              type="video/webm"
            />
          </video>

          {/* =================================================
              PURPLE WASH
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(17,12,17,0.05) 0%, rgba(17,12,17,0.55) 100%), radial-gradient(circle at 30% 20%, rgba(144,10,156,0.25), transparent 60%)",
            }}
          />
        </div>

        {/* =====================================================
            PACKAGE COLUMN

            Split into a scrollable list and a pinned footer so
            the "Request Pricing" button is always visible,
            no matter how long the package list is.
        ====================================================== */}

        <div className="flex min-h-0 flex-1 flex-col">
          {/* =================================================
              SCROLLABLE PACKAGE DETAILS
          ================================================== */}

          <div
            className="
              modal-scroll
              min-h-0 flex-1 overflow-auto
              px-5 py-7
              sm:px-7 sm:py-8
              md:px-9
            "
          >
            <p
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-[#c98ed6]/70
              "
            >
              {service.title}
            </p>

            <h3
              className="
                mt-2
                font-serif
                text-[28px]
                leading-tight
                text-white

                sm:text-[32px]
              "
            >
              Packages
            </h3>

            {service.tagline && (
              <p
                className="
                  mt-2
                  text-[14px]
                  leading-6
                  text-white/55
                "
              >
                {service.tagline}
              </p>
            )}

            {/* ===============================================
                PACKAGES
            ================================================ */}

            <div
              className="
                mt-6
                flex
                flex-col
                gap-4

                sm:mt-7
                sm:gap-5
              "
            >
              {service.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="
                    rounded-[18px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                    transition-colors
                    hover:border-[#900a9c]/40

                    sm:p-5
                  "
                >
                  {/* PACKAGE TITLE */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-baseline
                      gap-x-3
                      gap-y-1
                    "
                  >
                    <h4
                      className="
                        text-[17px]
                        font-medium
                        text-white
                      "
                    >
                      {pkg.name}
                    </h4>

                    {pkg.subtitle && (
                      <span
                        className="
                          text-[13px]
                          text-[#c98ed6]/80
                        "
                      >
                        {pkg.subtitle}
                      </span>
                    )}
                  </div>

                  {/* DURATION / PHOTOS */}

                  {(pkg.duration || pkg.photos) && (
                    <div
                      className="
                        mt-2
                        flex
                        flex-wrap
                        gap-x-5
                        gap-y-1
                        text-[13px]
                        text-white/50
                      "
                    >
                      {pkg.duration && (
                        <span>
                          {pkg.duration}
                        </span>
                      )}

                      {pkg.photos && (
                        <span>
                          {pkg.photos}
                        </span>
                      )}
                    </div>
                  )}

                  {/* INCLUDED SERVICES */}

                  {pkg.includes.length > 0 && (
                    <ul
                      className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-1.5
                        text-[13px]
                        leading-5
                        text-white/65
                      "
                    >
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="
                            flex
                            items-center
                            gap-1.5
                          "
                        >
                          <span
                            className="
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-[#900a9c]
                            "
                          />

                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              PINNED FOOTER: REQUEST PRICING
          ================================================== */}

          <div
            className="
              shrink-0
              border-t
              border-white/10
              bg-[#150e16]
              px-5
              py-4
              sm:px-7
              md:px-9
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p className="text-[13px] leading-5 text-white/55">
                Pricing is tailored to your requirements.
              </p>

              <button
  type="button"
  onClick={handleRequestPricing}
  className="
    flex
    h-[48px]
    px-4
    items-center
    justify-center
    gap-[9px]
    rounded-[26px]
    text-[15px]
    font-medium
    text-white
  "
  style={{
    background:
      "linear-gradient(135deg, rgba(144,10,156,0.55) 0%, rgba(76,3,93,0.42) 100%)",
    border: "1px solid rgba(255,255,255,0.17)",
  }}
>
                Request Pricing
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
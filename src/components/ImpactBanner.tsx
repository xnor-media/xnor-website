"use client";

export default function ImpactBanner() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#110c11]
      "
    >
      <picture>
        {/* Mobile image */}
        <source
          media="(max-width: 768px)"
          srcSet="/banner-impact-mobile.avif"
        />

        {/* Desktop image */}
        <img
          src="/banner-impact.png"
          alt="We don't follow trends. We create impact."
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />
      </picture>
    </section>
  );
}
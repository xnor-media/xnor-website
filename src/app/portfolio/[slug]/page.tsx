import Link from "next/link";
import { notFound } from "next/navigation";
import { workItems } from "@/lib/portfolioData";
import GradientWaves from "@/effects/GradientWaves";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortfolioPage({ params }: PageProps) {
  const { slug } = await params;

  const project = workItems.find(
    (item) => item.type === "cloudinary" && item.slug === slug
  );

  if (!project) {
    notFound();
  }

  if (!project.gallery) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#110c11] text-white">

          {/* =====================================================
              BACKGROUND GRADIENT
          ====================================================== */}

          <div
            className="
                pointer-events-none
                fixed
                left-0
                right-0
                top-0
                z-0
                h-screen
                overflow-hidden
            "
            >
            <GradientWaves
                horizonColor="#110c11"
                waveColor="#7a0085"
                crestColor="#f08aff"
                speed={0.35}
                amplitude={3.5}
                waveScale={0.6}
                waveRatio={0.9}
                swell={35}
                turbulence={20}
                tilt={1.11}
                zoom={1}
                height={5.5}
                fogDepth={15}
                detail="high"
                brightness={1.4}
                opacity={1}
                mouseInteraction
                parallaxStrength={0.5}
                grain
                grainIntensity={0.04}
                className="h-full w-full"
            />
            </div>

        

        {/* =====================================================
            TITLE
        ====================================================== */}

        <section className="mx-auto w-full max-w-[1650px] text-center px-5 pb-10 pt-30 sm:px-8 sm:pt-40 lg:px-[50px] xl:px-[50px]">

          <p
            className="
              mb-2
              sm:text-[14px]
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#c34fd1]
            "
          >
            XNOR Gallery
          </p>

          <h1
            className="
              font-serif
              text-[36px]
              italic
              leading-tight
              tracking-[-0.03em]
              text-white
              sm:text-[48px]
              md:text-[48px]
            "
          >
            {project.label}
          </h1>

        </section>

        {/* =====================================================
            GALLERY
        ====================================================== */}

        <section className="mx-auto w-full max-w-[1650px] px-5 pb-20 sm:px-8 lg:px-[50px] xl:px-[50px]">

          <div className="columns-2 gap-3 sm:columns-2 lg:columns-3">

            {project.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="
                  group
                  relative
                  mb-3
                  break-inside-avoid
                  overflow-hidden
                  rounded-[5px]
                  bg-[#0a0713]
                "
              >

                <img
                  src={image}
                  alt={`${project.label} - ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
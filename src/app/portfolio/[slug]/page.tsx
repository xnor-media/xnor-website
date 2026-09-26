import Link from "next/link";
import { notFound } from "next/navigation";
import { workItems } from "@/lib/portfolioData";

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
    <main className="min-h-screen bg-[#110c11] text-white">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#110c11]/85 backdrop-blur-xl">

        <div className="mx-auto flex h-[72px] w-full max-w-[1650px] items-center justify-between px-5 sm:px-8 lg:px-[50px] xl:px-[63px]">

          <Link
            href="/#work"
            className="
              group
              flex
              items-center
              gap-3
              text-sm
              font-medium
              text-white/70
              transition
              hover:text-white
            "
          >
            <span
              className="
                text-lg
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            Back to Work
          </Link>

          <div
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/40
            "
          >
            XNOR Photography
          </div>

        </div>

      </header>

      {/* =====================================================
          TITLE
      ====================================================== */}

      <section className="mx-auto w-full max-w-[1650px] px-5 pb-10 pt-14 sm:px-8 sm:pt-20 lg:px-[50px] xl:px-[63px]">

        <p
          className="
            mb-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#c34fd1]
          "
        >
          Photography
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
            md:text-[58px]
          "
        >
          {project.label}
        </h1>

      </section>

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="mx-auto w-full max-w-[1650px] px-5 pb-20 sm:px-8 lg:px-[50px] xl:px-[63px]">

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

          {project.gallery.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="
                group
                relative
                mb-5
                break-inside-avoid
                overflow-hidden
                rounded-[18px]
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
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reels } from "@/lib/reelsData";

export const metadata = {
  title: "All Reels | XNOR",
  description: "The full collection of reels and highlight videos from XNOR.",
};

export default function ReelsPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          relative
          w-full
          overflow-hidden
          bg-[#110c11]
          px-6
          pb-[100px]
          pt-[150px]
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
            top-[80px]
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
            top-[220px]
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
          Our Work
        </div>

        {/* =====================================================
            MAIN TITLE
        ====================================================== */}

        <h1
          className="
            relative
            z-10
            mb-[45px]
            text-center
            font-serif
            text-[42px]
            italic
            leading-none
            tracking-[-0.035em]
            text-[#900a9c]
            sm:text-[48px]
            lg:text-[50px]
          "
          style={{
            textShadow: "0 0 22px rgba(144,10,156,0.35)",
          }}
        >
          All Reels
        </h1>

        {/* =====================================================
            REELS GRID
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
            gap-x-[24px]
            gap-y-[48px]
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {reels.map((reel) => (
            <div key={reel.youtubeId} className="w-full">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/15
                  bg-black
                  shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(144,10,156,0.15)]
                "
                style={{ aspectRatio: "9 / 16" }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}?rel=0&modestbranding=1`}
                  className="absolute inset-0 h-full w-full"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title={reel.title}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
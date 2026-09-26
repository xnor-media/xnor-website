import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { reels } from "@/lib/reelsData";
import GradientWaves from "@/effects/GradientWaves";
import LiteYouTube from "@/components/LiteYouTube";

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
          pt-[120px]
          text-white
          sm:px-10
          lg:px-[50px]
          xl:px-[63px]
        "
      >

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
            text-[#c34fd1]
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
            text-white
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
            gap-x-[14px]
            gap-y-[14px]
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
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
                <div
                  className="relative overflow-hidden rounded-[24px] border border-white/15 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(144,10,156,0.15)]"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <LiteYouTube youtubeId={reel.youtubeId} title={reel.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
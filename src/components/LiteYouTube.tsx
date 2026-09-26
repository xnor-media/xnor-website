// components/LiteYouTube.tsx
"use client";

import { useState } from "react";
import { Play } from "lucide-react"; // or swap for your own icon/svg

interface LiteYouTubeProps {
  youtubeId: string;
  title: string;
  className?: string;
}

export default function LiteYouTube({ youtubeId, title, className }: LiteYouTubeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`}
        className={className ?? "absolute inset-0 h-full w-full"}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title={title}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play ${title}`}
      className={(className ?? "absolute inset-0 h-full w-full") + " group cursor-pointer"}
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span
        className="
          absolute inset-0 flex items-center justify-center
          bg-black/25 transition-colors duration-200 group-hover:bg-black/10
        "
      >
        <span
          className="
            flex h-14 w-14 items-center justify-center rounded-full
            bg-white/90 shadow-lg transition-transform duration-200
            group-hover:scale-110
          "
        >
          <Play className="ml-1 h-6 w-6 fill-black text-black" />
        </span>
      </span>
    </button>
  );
}
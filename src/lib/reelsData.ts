export interface ReelItem {
  /** YouTube video ID, e.g. the "kXaRtmI8U-s" in youtube.com/embed/kXaRtmI8U-s */
  youtubeId: string;
  /** Caption shown under the video and used as the iframe title */
  title: string;
}

// =========================================================
// REELS DATA
//
// Shared by:
//   - ReelShowcase.tsx   (homepage preview, first 3 shown)
//   - app/reels/page.tsx (the full "All Reels" page)
//
// To add a new reel later, just add another object below —
// it will automatically appear on the /reels page. The
// homepage preview always shows only the first 3 entries.
//
// NOTE: titles below are placeholders — replace "Reel 1" /
// "Reel 2" / "Reel 3" with the real names for each video.
// =========================================================

export const reels: ReelItem[] = [
  { youtubeId: "kXaRtmI8U-s", title: "Reel 1" },
  // { youtubeId: "wFCuNKnFv_U", title: "Reel 2" },
  { youtubeId: "c12FY7deYIQ", title: "Reel 3" },
  { youtubeId: "Bmtd0uyuzU8", title: "Reel 4" },
  { youtubeId: "ZDcSbwnGsm0", title: "Reel 5" },
  { youtubeId: "3bDWrOeNyfE", title: "Reel 6" },
  { youtubeId: "ge6nQ-nd50M", title: "Reel 7" },
  { youtubeId: "qeop58q12vc", title: "Reel 8" },
  { youtubeId: "pkYif8aKrXk", title: "Reel 9" },
  { youtubeId: "oBABDJCOW80", title: "Reel 10" },
  { youtubeId: "-6GolGQarR4", title: "Reel 11" },
  { youtubeId: "tnB9Tt9saGE", title: "Reel 12" },
  { youtubeId: "OSsx1cD2X5Q", title: "Reel 13" },
  { youtubeId: "dIacGOP4TmQ", title: "Reel 14" },
  { youtubeId: "mHBQGry_hGA", title: "Reel 15" },
  { youtubeId: "yV9TAmrI-2k", title: "Reel 16" },
  { youtubeId: "L5KWE4dyWHc", title: "Reel 17" },
  { youtubeId: "-XHOMkdcSQU", title: "Reel 18" },
];
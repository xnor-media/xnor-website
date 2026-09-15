"use client";

// Maps each section id to the "real" route your rewrites in
// next.config.ts already understand. Keep this in sync with
// navItems in Navbar.tsx and next.config.ts.
export const SECTION_ROUTES: Record<string, string> = {
  home: "/",
  services: "/services",
  work: "/work",
  about: "/about",
  cta: "/contact",
};

export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  // Always scroll, regardless of whatever the URL currently says.
  // This is what fixes "clicking a second hash link does nothing"
  // -- we never gate on whether the URL changed.
  element.scrollIntoView({ behavior: "smooth", block: "start" });

  const path = SECTION_ROUTES[id] ?? `/${id}`;

  // Push (not replace) so back/forward behaves like real navigation,
  // and the address bar reflects the section the user is actually on.
  if (window.location.pathname !== path) {
    window.history.pushState(null, "", path);
  }
}
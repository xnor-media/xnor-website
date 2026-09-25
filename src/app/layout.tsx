import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XNOR",
  description: "Creative Studio",
  verification: {
    google: "0naNDDhFBa9vXe0hE__GcDrqyrzrZFnvEiyZw2oZprs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={spaceGrotesk.variable}>
      <body>
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>

        <Analytics />
      </body>
    </html>
  );
}
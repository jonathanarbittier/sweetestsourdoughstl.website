import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sweets & Sourdough | Creve Coeur Micro Bakery",
  description:
    "Small batch sourdough and sweet bakes from a roadside cart in Creve Coeur, Missouri.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              const root = document.documentElement;
              const lockMobileViewport = () => {
                root.style.setProperty("--initial-mobile-viewport-height", window.innerHeight + "px");
              };
              lockMobileViewport();
              window.addEventListener("orientationchange", () => {
                window.setTimeout(lockMobileViewport, 300);
              }, { passive: true });
            })();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "@/content/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-accent",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.title}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} - ${profile.title}`,
    description: profile.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a
            href="#main"
            className="fixed left-2 top-2 z-50 -translate-y-16 rounded bg-accent px-4 py-2 text-bg transition-transform focus:translate-y-0"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

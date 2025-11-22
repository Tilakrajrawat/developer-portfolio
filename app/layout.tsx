import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tilak Raj Rawat — Designer & Developer",
  description: "Modern portfolio — Tilak Raj Rawat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.className}
          antialiased
          bg-[var(--bg-primary)]
          text-[var(--text-primary)]
          transition-colors duration-500
          bg-radial-glow
          pt-28
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="nova"
          enableSystem={false}
          themes={["dark", "crimson", "oled", "twilight", "nova"]}
        >
          <SmoothScroll>
            <Navbar />
            <main className="flex flex-col">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

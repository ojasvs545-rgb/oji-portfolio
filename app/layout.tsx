import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Oji Game Paglu — Professional Video Editor",
  description:
    "Oji Game Paglu is a professional video editor specializing in gaming videos, YouTube content, reels, shorts, cinematic editing and motion graphics.",
  keywords: [
    "Oji Game Paglu",
    "video editor",
    "gaming video editor",
    "YouTube editor",
    "reels editor",
    "shorts editor",
    "motion graphics",
    "cinematic editor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Ramanathan | Portfolio",
  description: "Portfolio website for an electrical engineering and robotics student.",
  icons: [
    { rel: "icon", url: "/favicon.jpg", type: "image/jpeg" },
    { rel: "shortcut icon", url: "/favicon.jpg", type: "image/jpeg" },
    { rel: "apple-touch-icon", url: "/favicon.jpg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
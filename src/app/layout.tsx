import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mukesh Ramanathan | Portfolio",
  description: "Portfolio website for an electrical engineering and robotics student.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
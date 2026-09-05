import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arshad-khan.com"),
  title: {
    default: "Arshad Khan | Designer & Product Builder",
    template: "%s | Arshad Khan",
  },
  description:
    "Industrial designer and product builder creating human-centered digital products, AI experiences, and memorable offline games.",
  openGraph: {
    title: "Arshad Khan | Designer & Product Builder",
    description:
      "Human-centered products, experimental technology, and Imposter Arcade — an offline LAN party game.",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07080d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

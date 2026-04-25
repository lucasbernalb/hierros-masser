import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hierros Masser | Faroles Coloniales y Herrería Artesanal Uruguay",
  description:
    "Faroles coloniales y herrería artesanal a medida en Uruguay. Más de 30 años de experiencia creando piezas únicas que perduran generaciones.",
  keywords: [
    "faroles coloniales",
    "herrería artesanal",
    "hierro forjado",
    "Uruguay",
    "portones",
    "barandas",
    "trabajos a medida",
    "iluminación colonial",
  ],
  authors: [{ name: "Hierros Masser" }],
  openGraph: {
    title: "Hierros Masser | Faroles Coloniales y Herrería Artesanal",
    description:
      "Herrería artesanal en Uruguay. Faroles coloniales, portones, barandas y trabajos a medida. Más de 30 años de experiencia.",
    type: "website",
    locale: "es_UY",
    siteName: "Hierros Masser",
  },
  alternates: {
    languages: {
      es: "https://hierrosmasser.uy",
    },
  },
  metadataBase: new URL("https://hierrosmasser.uy"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-negro text-blanco antialiased">
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true"></div>

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
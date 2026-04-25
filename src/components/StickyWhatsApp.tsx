"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "59894729199";

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20trabajos%20de%20herrería.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BD5A] transition-all duration-300 hover:scale-110 animate-pulse-whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/whatsapp-icon.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="w-7 h-7 sm:w-8 sm:h-8"
      />
    </a>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "59894729199"; // Replace with actual number

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-negro/80 backdrop-blur-md border-b border-gris-800/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand - Left aligned */}
          <Link 
            href="/" 
            className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden">
              <Image
                src="/logo.PNG"
                alt="Hierros Masser"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            <span className="text-blanco font-display text-lg sm:text-xl font-light tracking-wide">
              Hierros Masser
            </span>
          </Link>

          {/* WhatsApp CTA - Right aligned, discrete but visible */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20productos.`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm font-medium text-gris-300 transition-all duration-300 ${
              scrolled 
                ? "bg-gris-800/60 hover:bg-naranja-600 hover:text-blanco" 
                : "bg-gris-800/40 hover:bg-naranja-600 hover:text-blanco"
            }`}
            style={{
              backgroundColor: scrolled ? 'rgba(38, 38, 38, 0.6)' : 'rgba(38, 38, 38, 0.4)'
            }}
          >
            <Image
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
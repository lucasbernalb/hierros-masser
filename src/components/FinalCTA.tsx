"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "59894729199"; // Replace with actual number

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="final-cta"
      ref={ref}
      className="section-padding bg-carbon relative overflow-hidden"
    >
      {/* Background with border effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-carbon to-charcoal"></div>
        {/* Gold border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-bronze/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-copper/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Content */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Decorative icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 gold-border flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">
            ¿Tenés un proyecto en{" "}
            <span className="gold-text">mente</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-warm-gray text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Transformamos tus ideas en realidad. Cada pieza es una obra única,
            creada con pasión y precisión artesanal.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-warm-gray">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-artisan-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-artisan-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Presupuesto sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-artisan-green"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Atención en todo Uruguay</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20quiero%20contactar%20para%20consultar%20por%20un%20proyecto%20de%20herrería.`}
            target="_blank"
            rel="noopener noreferrer"
className="btn-whatsapp btn-whatsapp-lg inline-flex animate-pulse-whatsapp"
            >
              <Image
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
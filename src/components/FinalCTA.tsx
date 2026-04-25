"use client";

import { useEffect, useRef, useState } from "react";

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
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.66-1.596-1.08-2.223-.364-.546-.614-.707-.854-.707-.198-.005-.42-.003-.64-.003-.248 0-.497.002-.712.005-.249.004-.497.099-.714.272-.174.149-.447.347-.447.596v.1c0 .198.099.348.27.474.174.149.347.298.52.447.174.149.347.298.52.447.149.149.248.298.347.496.099.198.05.346.025.52-.075.174-.175.347-.27.472-.099.124-.274.347-.397.52-.124.174-.274.248-.472.248-.198 0-.397-.003-.595-.075-.198-.074-.397-.174-.595-.347-.174-.149-.446-.372-.595-.496-.149-.124-.347-.173-.52-.149-.174.025-.397.099-.595.347-.198.249-1.08 1.223-1.08 1.223s-.892.347-1.223.521c-.33.174-.595.372-.852.52-.248.149-.595.323-.85.421-.05.02-.198.074-.297.099-.248.075-.595.149-1.223.124-1.223-.025-2.39-.795-2.864-2.47-.472-1.672.645-3.333 1.453-3.979 1.594-1.273 3.48-1.223 4.03-1.223.148 0 .347.025.52.074.174.05.347.099.52.198.174.099.347.248.52.421.174.174.297.397.421.595.124.198.198.421.248.595.05.174.025.372-.025.546-.074.248-.124.595-.074.852.049.258.173.52.347.745.174.224.421.447.646.62.224.174.495.347.771.446.297.099.595.174.92.124.347-.05.695-.124 1.048-.347.347-.224 1.223-.744 1.223-.744s.124-.074.347-.198c.224-.124.446-.224.595-.347.174-.149.247-.272.322-.421.074-.174.099-.372.074-.595-.025-.224-.124-.52.347-.991.595-.595 1.223-1.223 1.328-1.472.124-.174.173-.347.173-.595 0-.248-.124-.546-.347-.744-.248-.224-.645-.347-.92-.347-.274 0-.546.074-.771.173-.224.099-.447.224-.644.347-.198.124-.42.297-.595.495-.174.198-.322.42-.347.546-.025.124-.025.248 0 .347.049.173.173.595.595 1.173.42.579 1.052 1.322 1.9 1.796 1.223.695 2.568.744 3.48.496.744-.199 1.273-1.223 1.393-1.596.124-.372.124-.82-.099-1.173z" />
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
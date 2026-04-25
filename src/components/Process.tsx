"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consulta",
    description:
      "Nos contactás y conversamos sobre tu proyecto. Te escuchamos y entendemos tu visión.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Diseño y presupuesto",
    description:
      "Te Presentamos propuestas personalizadas con presupuesto detallado y plazos claros.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Fabricación e instalación",
    description:
      "Tu pieza se fabrica con materiales seleccionados y se instala profesionalmente en tu espacio.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.794M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.652m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.09 21.542M9.228 14.772a3 3 0 00-.104 1.195m-.104-1.195L14.77 9.228" />
      </svg>
    ),
  },
];

export default function Process() {
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
      id="proceso"
      ref={ref}
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-bronze/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-bronze text-sm uppercase tracking-widest">
            Cómo Trabajamos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">
            Nuestro proceso
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-bronze via-gold to-bronze opacity-30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {/* Step number */}
                <div className="md:absolute md:-top-8 md:left-1/2 md:-translate-x-1/2 text-center md:mb-4">
                  <span className="font-display text-5xl font-light text-bronze/30">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 gold-border rounded-full mb-6 mx-auto text-bronze">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-medium text-center mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-warm-gray text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-4 text-warm-gray">
            <span className="h-px w-12 bg-bronze/50"></span>
            <span className="text-sm">Compromiso en cada etapa</span>
            <span className="h-px w-12 bg-bronze/50"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M5 5h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M19 12h.01M12 5v.01M12 19v.01" />
      </svg>
    ),
    title: "30+ años de experiencia",
    description:
      "Tres décadas forjando confianza. Cada pieza lleva el saber acumulado de generaciones de herreros.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2a1 1 0 011-1h2z" />
      </svg>
    ),
    title: "Trabajos a medida",
    description:
      "No hay dos proyectos iguales. Cada diseño se adapta a tu visión, espacio y necesidades específicas.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Calidad duradera",
    description:
      "Materiales seleccionados y acabados profesionales. Nuestras piezas resisten el paso del tiempo y las condiciones climáticas.",
  },
];

export default function Trust() {
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
      id="confianza"
      ref={ref}
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #B8860B 20px, #B8860B 21px)`,
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-bronze text-sm uppercase tracking-widest">
            Por qué elegirnos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4">
            Nuestra promesa
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 delay-${index * 150} ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 gold-border rounded-full mb-6 text-bronze">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-medium mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-warm-gray leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-bronze to-transparent w-32"></div>
          <div className="w-2 h-2 rotate-45 bg-bronze mx-4"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-bronze to-transparent w-32"></div>
        </div>
      </div>
    </section>
  );
}
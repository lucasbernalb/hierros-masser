"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PremiumVideoCard from "./PremiumVideoCard";

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  id: number;
  src: string;
  videoSrc?: string;
  alt: string;
  title: string;
  subtitle: string;
  align: "left" | "right" | "center";
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery/frame1farol1.jpeg",
    videoSrc: "/gallery/faro1video.mp4",
    alt: "Farol colonial premium instalado",
    title: "Diseño artesanal",
    subtitle: "Presencia que transforma espacios",
    align: "left",
  },
  {
    id: 2,
    src: "/gallery/frame1farol2.jpeg",
    videoSrc: "/gallery/faro2video.mp4",
    alt: "Detalle de hierro forjado artesanal",
    title: "Hierro trabajado",
    subtitle: "Con precisión y pasión",
    align: "right",
  },
  {
    id: 3,
    src: "/gallery/frame1farol3.jpeg",
    videoSrc: "/gallery/farol3video.mp4",
    alt: "Farol en ambiente nocturno",
    title: "Luz que cobra vida",
    subtitle: "Transforma la noche",
    align: "center",
  },
  {
    id: 4,
    src: "/gallery/frame1farol4.jpeg",
    videoSrc: "/gallery/farol4video.mp4",
    alt: "Farol colonial en ambientación premium",
    title: "Elegancia que perdura",
    subtitle: "Cada detalle cuenta",
    align: "center",
  },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for DOM
    const ctx = gsap.context(() => {
      // Intro section reveal
      gsap.fromTo(
        introRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Gallery images with directional reveal
      const imageBlocks = document.querySelectorAll(".gallery-block");
      imageBlocks.forEach((block, index) => {
        const direction = index % 2 === 0 ? -80 : 80;
        
        gsap.fromTo(
          block,
          { 
            x: direction, 
            opacity: 0,
            scale: index % 2 === 0 ? 0.95 : 0.95 
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating numbers parallax
      const floatingNumbers = document.querySelectorAll(".floating-number");
      floatingNumbers.forEach((num, index) => {
        gsap.fromTo(
          num,
          { y: 0 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: num,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      // Content overlay reveal
      const contents = document.querySelectorAll(".gallery-content");
      contents.forEach((content) => {
        gsap.fromTo(
          content,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: content,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Closing section reveal
      gsap.fromTo(
        closingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Scroll indicator fade
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: scrollIndicatorRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeria"
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* Section intro */}
      <div ref={introRef} className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-naranja-500 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium">
            Portafolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 text-blanco font-light leading-[1.1]">
            Trabajos que{" "}
            <span className="text-naranja-400">hablan</span>
          </h2>
          <p className="text-gris-400 mt-6 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Cada pieza es una oportunidad para crear algo único.
            <br className="hidden sm:block" />
            Descubrí nuestra colección.
          </p>
        </div>
      </div>

      {/* Premium alternating gallery */}
      <div className="space-y-24 sm:space-y-32">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`gallery-block relative min-h-[45vh] sm:min-h-[50vh] flex items-center py-12 sm:py-16 ${
              image.align === "left"
                ? "justify-start"
                : image.align === "right"
                ? "justify-end"
                : "justify-center"
            } ${
              index % 2 === 0 ? "bg-negro" : "bg-blanco"
            }`}
          >
            {/* Premium Video Card - only for first 2 items with video */}
            {image.videoSrc ? (
              <PremiumVideoCard
                videoSrc={image.videoSrc}
                posterSrc={image.src}
                alt={image.alt}
                title={image.title}
                subtitle={image.subtitle}
                index={index}
                maxDuration={image.id === 4 ? 5 : undefined}
              />
            ) : (
              /* Standard Image Card - for remaining items */
              <div
                className={`relative w-full sm:w-[70%] lg:w-[55%] ${
                  image.align === "left"
                    ? "sm:mr-auto lg:ml-16"
                    : image.align === "right"
                    ? "sm:ml-auto lg:mr-16"
                    : "mx-6 sm:mx-16 lg:mx-32"
                }`}
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 75vw"
                  />

                {/* Content overlay - más aire */}
                <div
                  className={`gallery-content absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 ${
                    index % 2 === 0
                      ? "bg-gradient-to-t from-negro/80 via-negro/20 to-transparent"
                      : "bg-gradient-to-t from-negro/60 via-negro/10 to-transparent"
                  }`}
                >
                  <span
                    className={`inline-block text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3 ${
                      index % 2 === 0 ? "text-naranja-400" : "text-naranja-500"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className={`font-display text-xl sm:text-2xl lg:text-3xl font-light ${
                      index % 2 === 0 ? "text-blanco" : "text-blanco"
                    }`}
                  >
                    {image.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm mt-1 sm:mt-2 font-light ${
                      index % 2 === 0 ? "text-gris-300" : "text-gris-400"
                    }`}
                  >
                    {image.subtitle}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute -top-px -right-px w-16 h-16 overflow-hidden ${
                  index % 2 === 0 ? "border-l" : "border-r"
                } border-t border-naranja-500/30`}
              />
              <div className="absolute -bottom-px -left-0 w-16 h-16 overflow-hidden border-r border-b border-naranja-500/30" />
              </div>
            )}
            
            {/* Floating index number - más discreto */}
            <div
              className={`floating-number hidden lg:block absolute ${
                index % 2 === 0
                  ? "right-0 xl:right-8"
                  : "left-0 xl:left-8"
              } top-1/2 -translate-y-1/2`}
            >
              <span
                className={`text-6xl xl:text-7xl font-display font-light ${
                  index % 2 === 0 ? "text-negro" : "text-blanco"
                } opacity-[0.06]`}
              >
                0{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Emotional closing */}
      <div ref={closingRef} className="py-20 sm:py-28 px-6 bg-negro">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-blanco font-light leading-relaxed">
            Cada pieza transforma más que un espacio.
            <br />
            <span className="text-naranja-400">Construye presencia.</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="py-12 px-6 bg-negro"
      >
        <div className="flex justify-center">
          <div className="flex items-center gap-4 text-gris-500">
            <div className="w-px h-12 bg-gradient-to-b from-gris-600 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
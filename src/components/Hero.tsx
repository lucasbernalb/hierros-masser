"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "59894729199"; // Replace with actual number

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Ensure video plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (e) {
          // Autoplay was prevented, video will show paused
          console.log("Video autoplay prevented");
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-negro">
      {/* VIDEO BACKGROUND - Full screen protagonist */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            className="video-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            poster=""
          >
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          /* Fallback gradient if video fails */
          <div className="absolute inset-0 bg-gradient-to-br from-negro via-gris-900 to-negro" />
        )}

        {/* Dark elegant overlay - ensures text readability without competing with video */}
        <div className="video-overlay" />
      </div>

      {/* Decorative accent elements */}
      <div className="hero-accent" aria-hidden="true" />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* SPACING - Push content to center */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            {/* HEADLINE */}
            <h1
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] tracking-tight text-blanco mb-6 transition-all duration-1000 delay-200 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Faroles coloniales y{" "}
              <span className="text-naranja-400">herrería a medida</span>
            </h1>

            {/* SUBHEADLINE - Brief, elegant */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-gris-300 max-w-xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Diseño artesanal, experiencia y confiabilidad en cada pieza.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20faroles%20coloniales%20y%20trabajos%20de%20herrería.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-whatsapp-lg"
              >
                <Image
                  src="/whatsapp-icon.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                Consultar por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/hierrosmasser.uy?igsh=MTU1dmplb2JtZ2l6cQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.362-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator at bottom */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3 text-gris-500">
            <span className="text-[0.625rem] uppercase tracking-[0.2em]">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-gris-600 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
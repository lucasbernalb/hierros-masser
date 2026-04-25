"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface PremiumVideoCardProps {
  videoSrc: string;
  posterSrc: string;
  alt: string;
  title: string;
  subtitle: string;
  index: number;
  maxDuration?: number;
}

export default function PremiumVideoCard({
  videoSrc,
  posterSrc,
  alt,
  title,
  subtitle,
  index,
  maxDuration,
}: PremiumVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (maxDuration && videoRef.current) {
      // Wait maxDuration seconds before stopping
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
        videoRef.current?.pause();
        videoRef.current!.currentTime = 0;
      }, maxDuration * 1000);
    } else {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className={`relative w-full sm:w-[70%] lg:w-[55%] ${
        isEven
          ? "sm:mr-auto lg:ml-16"
          : "sm:ml-auto lg:mr-16"
      } mx-6 sm:mx-16 lg:mx-32 group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
        {/* Static image - always visible */}
        <Image
          src={posterSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 75vw"
        />

        {/* Video - only visible on hover */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Illumination overlay */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-1000 ease-out ${
            isHovered
              ? "bg-gradient-to-t from-amber-900/40 via-amber-500/10 to-transparent opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Brightness on hover */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-500 ease-out ${
            isHovered ? "brightness-110" : "brightness-100"
          }`}
        />

        {/* Content overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10 transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-t from-negro/80 via-negro/20 to-transparent"
              : "bg-gradient-to-t from-negro/60 via-negro/10 to-transparent"
          }`}
        >
          <span
            className={`inline-block text-xs uppercase tracking-[0.2em] mb-2 sm:mb-3 transition-all duration-500 ${
              isHovered ? "text-naranja-300" : "text-naranja-400"
            }`}
          >
            0{index + 1}
          </span>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-light text-blanco transition-all duration-500">
            {title}
          </h3>
          <p
            className={`text-xs sm:text-sm mt-1 sm:mt-2 font-light transition-all duration-500 ${
              isHovered ? "text-gris-200" : "text-gris-300"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Decorative corners */}
      <div
        className={`absolute -top-px -right-px w-16 h-16 overflow-hidden ${
          isEven ? "border-l" : "border-r"
        } border-t border-naranja-500/30 transition-all duration-500 group-hover:border-naranja-400/50`}
      />
      <div className="absolute -bottom-px -left-0 w-16 h-16 overflow-hidden border-r border-b border-naranja-500/30" />
    </div>
  );
}
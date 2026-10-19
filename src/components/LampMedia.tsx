"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Props = { poster: string; video: string; alt: string; sizes: string };

// Foto quieta; al pasar el cursor (o tocar en el celular) el video prende el farol.
export default function LampMedia({ poster, video, alt, sizes }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const kind = useRef<string>("mouse");
  const [on, setOn] = useState(false);

  const turn = (next: boolean) => {
    const v = ref.current;
    if (!v) return;
    setOn(next);
    if (next) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={on}
      aria-label={`${alt}: ${on ? "apagar" : "prender"}`}
      className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-white outline-offset-2"
      onPointerEnter={(e) => { kind.current = e.pointerType; if (e.pointerType === "mouse") turn(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") turn(false); }}
      onPointerDown={(e) => { kind.current = e.pointerType; }}
      onClick={() => { if (kind.current !== "mouse") turn(!on); }}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); turn(!on); } }}
    >
      <Image src={poster} alt={alt} fill sizes={sizes} className="object-cover" />
      <video
        ref={ref}
        src={video}
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0"}`}
      />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-300/25 to-transparent transition-opacity duration-1000 ${on ? "opacity-100" : "opacity-0"}`} />
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-white backdrop-blur">
        {on ? "Prendido" : (
          <>
            <span className="hidden [@media(hover:hover)]:inline">Pasá el cursor</span>
            <span className="[@media(hover:hover)]:hidden">Tocá</span> para prender
          </>
        )}
      </span>
    </div>
  );
}

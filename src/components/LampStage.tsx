"use client";
import { useRef, useState } from "react";
import Image from "next/image";

type Props = { poster: string; video?: string; alt: string; sizes: string; contain?: boolean; pos?: string };

// Círculo de pared "apagada" con el farol quieto. Al pasar el cursor / tocar: el video prende el farol y la pared se ilumina.
export default function LampStage({ poster, video, alt, sizes, contain, pos = "50% 50%" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const kind = useRef("mouse");
  const [on, setOn] = useState(false);

  const turn = (next: boolean) => {
    setOn(next);
    const v = ref.current;
    if (!v) return;
    if (next) { v.currentTime = 0; v.play().catch(() => {}); } else { v.pause(); v.currentTime = 0; }
  };

  return (
    <div className="lamp-stage">
      <div className="lamp-disc-wrap">
      <div className={`lamp-ring ${on ? "on" : ""}`} />
      <div
        role="button" tabIndex={0} aria-pressed={on} aria-label={`${alt}: ${on ? "apagar" : "prender"}`}
        className="lamp-disc"
        style={{ boxShadow: on ? "0 0 180px 40px rgba(255,140,30,.35)" : "0 0 0 rgba(0,0,0,0)" }}
        onPointerEnter={(e) => { kind.current = e.pointerType; if (e.pointerType === "mouse") turn(true); }}
        onPointerLeave={(e) => { if (e.pointerType === "mouse") turn(false); }}
        onPointerDown={(e) => { kind.current = e.pointerType; }}
        onClick={() => { if (kind.current !== "mouse") turn(!on); }}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); turn(!on); } }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 40%, #bdb4a6, #6f685f)" }} />
        <div className={`absolute inset-0 transition-opacity duration-1000 ${on ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(circle at 50% 45%, #ffe6a8, #ff9d2e 72%)" }} />
        <Image src={poster} alt={alt} fill sizes={sizes} style={{ objectPosition: pos }} className={`mix-blend-multiply ${contain ? "object-contain p-8" : "object-cover"} transition-opacity duration-700 ${on && video ? "opacity-0" : "opacity-100"}`} />
        {video && (
          <video ref={ref} src={video} muted playsInline preload="metadata" style={{ objectPosition: pos }}
            className={`absolute inset-0 h-full w-full object-cover mix-blend-multiply transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0"}`} />
        )}
      </div>
      </div>
      <p className="label text-center" style={{ marginTop: 40 }}>
        {on ? <span className="text-amber">● Prendido</span> : (<><span className="hidden [@media(hover:hover)]:inline">Pasá el cursor</span><span className="[@media(hover:hover)]:hidden">Tocá</span> para prender</>)}
      </p>
    </div>
  );
}

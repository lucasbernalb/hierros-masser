import { wa } from "@/lib/site";
import LampStage from "./LampStage";
import Reveal from "./Reveal";

const SIZES = "(min-width:1024px) 34rem, 90vw";
const items = [
  { name: "Farol colgante", desc: "Estructura trapezoidal y lámpara vintage. Para livings, galerías y rincones con carácter.", poster: "/gallery/frame1farol1.jpeg", video: "/gallery/faro1video.mp4", pos: "54% 50%" },
  { name: "Aplique de pared", desc: "Líneas rectas y vidrio. Para fachadas y entradas de líneas modernas.", poster: "/gallery/frame1farol2.jpeg", video: "/gallery/faro2video.mp4" },
  { name: "Farol colonial", desc: "Silueta hexagonal clásica con cúpula. El de siempre, bien hecho.", poster: "/gallery/frame1farol3.jpeg", video: "/gallery/farol3video.mp4" },
  { name: "Farolito de pared", desc: "Formato compacto con asa y aire industrial.", poster: "/gallery/frame1farol4.jpeg", video: "/gallery/farol4video.mp4" },
  { name: "Farol de pilar", desc: "Pensado para columnas y portones, con base y remate colonial.", poster: "/gallery/farol4.PNG", contain: true },
  { name: "Farol colonial de pared", desc: "Ménsula de hierro y cúpula clásica, para fachadas y galerías.", poster: "/gallery/farol3.jpg", contain: true },
];

export default function Lamps() {
  return (
    <section id="faroles" className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="label text-amber">01 — Catálogo</p>
        <h2 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[.92]">Elegí tu farol</h2>
        <p className="mt-5 max-w-md text-lg font-light text-bone/75">Pasá el cursor (o tocá en el celular) sobre cada pieza para encenderla.</p>
      </Reveal>
      <div className="mt-20 divide-y divide-line">
        {items.map((p, i) => (
          <div key={p.name} className={`lamp-row py-20 ${i % 2 ? "flip" : ""}`}>
            <Reveal>
              <LampStage poster={p.poster} video={p.video} alt={p.name} sizes={SIZES} contain={p.contain} pos={p.pos} />
            </Reveal>
            <Reveal delay={150}>
              <p className="label">N° 0{i + 1}</p>
              <h3 className="mt-3 font-display text-5xl font-bold uppercase leading-none sm:text-6xl">{p.name}</h3>
              <p className="mt-5 max-w-md text-lg font-light text-bone/75">{p.desc}</p>
              <dl className="spec">
                {[["Material", "Hierro y vidrio"], ["Medidas", "A pedido"], ["Fabricación", "Artesanal, en Uruguay"]].map(([k, v]) => (
                  <div key={k}><dt className="label">{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <a href={wa(`Hola, me interesa el modelo "${p.name}". ¿Me pasan más información?`)} target="_blank" rel="noopener noreferrer" className="btn-ember cta-top">Consultar este modelo</a>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

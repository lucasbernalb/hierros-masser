import Image from "next/image";
import { wa } from "@/lib/site";
import LampMedia from "./LampMedia";

const SIZES = "(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw";
const items = [
  { name: "Farol colgante", desc: "Estructura trapezoidal con lámpara vintage. Ideal para livings y galerías.", poster: "/gallery/frame1farol1.jpeg", video: "/gallery/faro1video.mp4" },
  { name: "Aplique de pared", desc: "Líneas rectas y vidrio, para fachadas y entradas modernas.", poster: "/gallery/frame1farol3.jpeg", video: "/gallery/farol3video.mp4" },
  { name: "Farol de pilar", desc: "Base para columnas y portones, con remate colonial.", poster: "/gallery/frame1farol2.jpeg", video: "/gallery/faro2video.mp4" },
  { name: "Farolito de pared", desc: "Formato compacto con asa, de aire industrial.", poster: "/gallery/frame1farol4.jpeg", video: "/gallery/farol4video.mp4" },
  { name: "Farol colonial de pared", desc: "Ménsula forjada y cúpula clásica. El farol de siempre, bien hecho.", photo: "/gallery/farol3.jpg" },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="border-t border-line bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Algunas de nuestras piezas</h2>
        <p className="mt-4 max-w-xl text-mute">Cada modelo se adapta a tu espacio: medidas, terminaciones y color a elección. Pasá el cursor (o tocá en el celular) sobre cada farol para prenderlo.</p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.name} className="group rounded-3xl bg-paper p-4">
              {p.video ? (
                <LampMedia poster={p.poster} video={p.video} alt={p.name} sizes={SIZES} />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                  <Image src={p.photo!} alt={p.name} fill sizes={SIZES} className="object-contain p-4" />
                </div>
              )}
              <div className="px-2 pb-2 pt-5">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <p className="mt-2 text-sm text-mute">{p.desc}</p>
                <a href={wa(`Hola, me interesa el modelo "${p.name}". ¿Me pasan más información?`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">Consultar este modelo →</a>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-3xl bg-navy p-8 text-white">
            <h3 className="font-display text-3xl leading-tight">¿Tenés otra idea en mente?</h3>
            <div>
              <p className="mb-6 text-white/75">Portones, barandas, puertas y piezas especiales: contanos y lo fabricamos.</p>
              <a href={wa("Hola, quiero consultar por un trabajo a medida.")} target="_blank" rel="noopener noreferrer" className="btn bg-white text-ink">Pedir presupuesto</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

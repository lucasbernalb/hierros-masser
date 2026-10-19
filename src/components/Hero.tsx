import { wa } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero">
      <video className="absolute inset-0 h-full w-full object-cover opacity-55" autoPlay muted loop playsInline preload="metadata"><source src="/video-hero.mp4" type="video/mp4" /></video>
      <div className="absolute inset-0 bg-gradient-to-t from-forge via-forge/55 to-forge/30" />
      <div className="hero-inner">
        <p className="label mb-5 text-amber">Herrería artesanal · Uruguay</p>
        <h1 className="hero-title">
          Hierro que <span className="text-ember">ilumina</span> tu casa.
        </h1>
        <p className="mt-5 max-w-lg text-lg font-light text-bone/80">Faroles y piezas de herrería fabricados a mano, a la medida de cada hogar.</p>
        <div className="hero-bottom">
          <div className="flex flex-wrap gap-4">
            <a href={wa("Hola, me interesa conocer más sobre sus faroles.")} target="_blank" rel="noopener noreferrer" className="btn-ember">Pedir presupuesto</a>
            <a href="#faroles" className="border border-bone/40 px-8 py-3 font-display text-lg font-semibold uppercase tracking-[0.15em] transition-colors hover:border-bone" style={{ padding: ".85rem 1.9rem" }}>Ver faroles ↓</a>
          </div>
          <dl className="hero-stats">
            {[["30+", "Años de oficio"], ["100%", "A medida"], ["Todo", "Uruguay"]].map(([n, l]) => (
              <div key={l}><dt>{n}</dt><dd className="label">{l}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

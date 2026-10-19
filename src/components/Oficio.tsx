import Reveal from "./Reveal";

const steps = [
  ["01", "Nos contás", "Por WhatsApp o Instagram: qué querés, dónde va y qué medidas tiene."],
  ["02", "Lo diseñamos", "Te proponemos el modelo y los materiales, con presupuesto claro."],
  ["03", "Lo fabricamos", "Se hace a mano en el taller y llega listo para instalar."],
];

export default function Oficio() {
  return (
    <section id="oficio" className="border-y border-line bg-steel">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <p className="label text-amber">02 — Oficio</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,7vw,6rem)] font-bold uppercase leading-[.95]">Cada pieza se hace a mano, a la medida de tu casa.</h2>
        </Reveal>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 120}>
              <div className="border-t border-ember pt-6">
                <span className="label text-ember">{n}</span>
                <h3 className="mt-3 font-display text-3xl font-semibold uppercase">{t}</h3>
                <p className="mt-3 font-light text-bone/70">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

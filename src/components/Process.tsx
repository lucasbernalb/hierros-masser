const steps = [
  ["01", "Nos contás", "Por WhatsApp o Instagram: qué querés, dónde va y qué medidas tiene."],
  ["02", "Diseño y presupuesto", "Te proponemos el modelo y los materiales, con un presupuesto claro."],
  ["03", "Fabricación e instalación", "Lo hacemos a mano en taller y lo dejamos listo en tu casa."],
];

export default function Process() {
  return (
    <section id="proceso" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Así trabajamos</h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map(([n, t, d]) => (
            <li key={n} className="border-t border-white/20 pt-6">
              <span className="font-display text-5xl text-brand">{n}</span>
              <h3 className="mt-4 text-xl font-medium">{t}</h3>
              <p className="mt-2 text-white/65">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

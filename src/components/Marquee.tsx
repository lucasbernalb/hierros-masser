const words = ["Faroles", "Apliques", "Portones", "Barandas", "A medida", "Hecho en Uruguay"];

export default function Marquee() {
  const row = words.map((w) => `${w} ✺ `).join("");
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-brand py-4 text-paper">
      <div className="marquee flex w-max whitespace-nowrap font-display text-4xl uppercase">
        <span className="pr-4">{row.repeat(3)}</span><span className="pr-4" aria-hidden>{row.repeat(3)}</span>
      </div>
    </div>
  );
}

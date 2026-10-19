import Image from "next/image";
import { wa, IG } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <>
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <p className="label text-amber">03 — Contacto</p>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(3rem,9vw,8rem)] font-bold uppercase leading-[.9]">¿Tenés una idea para tu casa? <span className="text-ember">Hagámosla.</span></h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={wa("Hola, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" className="btn-ember">Escribir por WhatsApp</a>
            <a href={IG} target="_blank" rel="noopener noreferrer" className="border border-bone/40 px-9 py-4 font-display text-xl font-semibold uppercase tracking-[0.15em] transition-colors hover:border-bone">Instagram</a>
          </div>
        </Reveal>
      </section>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.png" alt="" width={256} height={189} className="brand-mark brightness-125" style={{ height: 28, width: "auto" }} />
            <span className="label">© {new Date().getFullYear()} Hierros Masser · Envíos a todo Uruguay</span>
          </div>
        </div>
      </footer>
      <a href={wa("Hola, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110" style={{ width: 56, height: 56 }}>
        <Image src="/whatsapp-icon.svg" alt="" width={28} height={28} />
      </a>
    </>
  );
}

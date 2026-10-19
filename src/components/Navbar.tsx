import Image from "next/image";
import { wa } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-forge/75 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo-mark.png" alt="" width={256} height={189} priority className="brand-mark brightness-125" style={{ height: 36, width: "auto" }} />
          <span className="brand-text">Hierros Masser</span>
        </a>
        <nav className="label hidden gap-10 md:flex">
          <a href="#faroles" className="hover:text-bone">Faroles</a>
          <a href="#oficio" className="hover:text-bone">Oficio</a>
          <a href="#contacto" className="hover:text-bone">Contacto</a>
        </nav>
        <a href={wa("Hola, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" className="nav-cta border border-ember px-5 py-2 font-display text-sm font-semibold uppercase tracking-[0.15em] text-ember transition-colors hover:bg-ember hover:text-forge">WhatsApp</a>
      </div>
    </header>
  );
}

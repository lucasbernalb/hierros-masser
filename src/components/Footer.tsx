"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-carbon border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 gold-border flex items-center justify-center">
                <span className="font-display text-lg font-bold gold-text">HM</span>
              </div>
              <div>
                <span className="font-display text-lg font-medium">
                  Hierros Masser
                </span>
                <p className="text-xs text-warm-gray">Herrería Artesanal</p>
              </div>
            </div>
            
            <p className="text-warm-gray text-sm mb-6 max-w-md">
              Empresa familiar con más de 30 años de experiencia en herrería artesanal.
              Especializados en faroles coloniales y trabajos a medida en todo Uruguay.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm text-warm-gray">
              <p>📍 Uruguay</p>
              <p>
                📞{" "}
                <a
                  href="https://wa.me/59894729199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-naranja-400 transition-colors"
                >
                  +598 94 729 199
                </a>
              </p>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-medium mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-warm-gray">
              <li>
                <a href="#confianza" className="hover:text-gold transition-colors">
                  Conocenos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-gold transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-gold transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#final-cta" className="hover:text-gold transition-colors">
                  Contactar
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-medium mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-warm-gray">
              <li>
                <span className="hover:text-gold transition-colors">
                  Faroles coloniales
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors">
                  Portones y rejas
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors">
                  Barandas
                </span>
              </li>
              <li>
                <span className="hover:text-gold transition-colors">
                  Trabajos a medida
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-sm">
            © {currentYear} Hierros Masser. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-warm-gray text-sm">
              Hecho en Uruguay 🇺🇾
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
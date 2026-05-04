import Link from "next/link"
import { Facebook, MapPin, Phone } from "lucide-react"
import BrandLogo from "@/components/brand-logo"

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <BrandLogo variant="light" />
            <p className="text-sm leading-relaxed max-w-xs mt-1">
              30 años cuidando autos en el barrio. Cambio de aceite, filtros y más.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Contacto</h3>
            <address className="not-italic flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm">
                <MapPin size={14} className="text-accent shrink-0" />
                Av. Raúl Scalabrini Ortiz 878 – CABA
              </span>
              <span className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-accent shrink-0" />
                011 4772-2452
              </span>
            </address>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Seguinos</h3>
            <Link
              href="https://www.facebook.com/lubricentrocanning/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              aria-label="Facebook de Lubricentro Canning"
            >
              <Facebook size={18} className="text-accent" />
              Facebook
            </Link>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Lubricentro Canning. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

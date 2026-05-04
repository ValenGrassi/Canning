"use client"

import { Phone } from "lucide-react"

export default function CTA() {
  const handleCall = () => {
    window.location.href = "tel:01147722452"
  }

  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="Llamada a la acción final"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior3-genhgecoRKLvhdH8OLxPqprdgHmuus.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/88" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-tight">
          Tu próximo service, rápido y sin pagar de más
        </h2>
        <p className="text-white/80 text-lg max-w-xl leading-relaxed">
          Vení sin turno, atendemos por orden de llegada. Más de 30 años de experiencia respaldan cada servicio.
        </p>
        <button
          onClick={handleCall}
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold text-lg uppercase tracking-wider px-10 py-5 rounded-xl transition-all duration-200 shadow-2xl hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          <Phone size={22} />
          LLAMAR AHORA
        </button>
        <p className="text-white/60 text-sm">011 4772-2452 · Av. Raúl Scalabrini Ortiz 878, CABA</p>
      </div>
    </section>
  )
}

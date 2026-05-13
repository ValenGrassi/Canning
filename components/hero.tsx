"use client"

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function Hero() {
  const handleCall = () => {
    window.location.href = "tel:01147722452"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/5491133982304?text=Hola%2C%20quiero%20consultar%20sobre%20el%20servicio.", "_blank")
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Sección de inicio"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-76vgSLIGlsdbBnjTs3kKtwv3x9dhn1.webp"
          alt="Interior del lubricentro con auto en elevador"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-navy/75" />
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
          más de 30 años en el barrio
        </span>

        {/* Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight text-balance max-w-4xl">
          Service rápido,{" "}
          <span className="text-accent">confiable</span>
          {" "}y al mejor precio
        </h1>

        {/* Sub-headline */}
        <p className="text-white/80 text-lg sm:text-xl max-w-xl leading-relaxed">
        Atención personalizada y asesoramiento en Villa Crespo. Todas las marcas, productos originales y alternativos.        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={handleCall}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone size={18} />
            Llamar ahora
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle size={18} />
            Consultar por WhatsApp
          </button>
        </div>

        {/* Quick info bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-white/70 text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin size={15} className="text-accent shrink-0" />
            Av. Raúl Scalabrini Ortiz 878 – CABA
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={15} className="text-accent shrink-0" />
            011 4772-2452
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-accent shrink-0" />
            Atención por orden de llegada
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}

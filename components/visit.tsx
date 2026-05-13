"use client"

import { MapPin, Clock, Phone, MessageCircle, Navigation, CalendarCheck, UserCheck } from "lucide-react"

export default function Visit() {
  const handleCall = () => {
    window.location.href = "tel:01147722452"
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5491133982304?text=Hola%2C%20quiero%20coordinar%20un%20turno.",
      "_blank"
    )
  }

  const handleDirections = () => {
    window.open(
      "https://maps.google.com/?q=Av.+Ra%C3%BAl+Scalabrini+Ortiz+878,+Buenos+Aires",
      "_blank"
    )
  }

  return (
    <section
      id="visitanos"
      className="py-24 bg-background"
      aria-label="Cómo visitarnos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Vení cuando quieras</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mt-2 text-balance">
            Sin turno o con turno, vos elegís
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
            Podés venir directo al local y te atendemos por orden de llegada, o coordinar un horario por teléfono o WhatsApp.
          </p>
        </div>

        {/* Appointment mode cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="flex items-start gap-4 bg-primary/8 border border-primary/20 rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <UserCheck size={22} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground text-base">Sin turno</p>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
              De lunes a viernes, vení directamente al local. Te atendemos por orden de llegada.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-accent/10 border border-accent/30 rounded-xl p-5">
            <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <CalendarCheck size={22} className="text-foreground" />
            </div>
            <div>
              <p className="font-heading font-bold text-foreground text-base">Con turno</p>
              <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
              Los sábados podés reservar un turno por teléfono o WhatsApp.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Exterior photo */}
            <div className="relative rounded-2xl overflow-hidden h-56 shadow-xl group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior3-genhgecoRKLvhdH8OLxPqprdgHmuus.webp"
                alt="Exterior de Lubricentro Canning en Av. Scalabrini Ortiz"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="inline-flex items-center gap-1.5 bg-white/90 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                  <MapPin size={12} className="text-primary" />
                  Av. Raúl Scalabrini Ortiz 878, CABA
                </span>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Horarios</p>
                  <div className="text-muted-foreground text-sm mt-1 flex flex-col gap-1">
                    <span>Lunes a viernes: 9:00 a 17:00</span>
                    <span>Sábados: 8:30 a 13:00</span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Teléfono</p>
                  <p className="text-muted-foreground text-sm mt-0.5">011 4772-2452</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDirections}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm px-5 py-3 rounded-lg transition-all duration-200"
              >
                <Navigation size={16} />
                Cómo llegar
              </button>
              <button
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm px-5 py-3 rounded-lg transition-all duration-200"
              >
                <Phone size={16} />
                Llamar
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bb5a] text-white font-bold text-sm px-5 py-3 rounded-lg transition-all duration-200"
              >
                <MessageCircle size={16} />
                Reservar turno
              </button>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[460px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3!2d-58.4257!3d-34.5878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59df5b70e87%3A0x1b7b47e2c5e38bde!2sAv.%20Ra%C3%BAl%20Scalabrini%20Ortiz%20878%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1699999999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Lubricentro Canning"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

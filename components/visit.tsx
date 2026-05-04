"use client"

import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react"

export default function Visit() {
  const handleCall = () => {
    window.location.href = "tel:01147722452"
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5491147722452?text=Hola%2C%20quiero%20consultar%20sobre%20el%20servicio.",
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
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Sin turno previo</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mt-2 text-balance">
            Vení sin turno
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto leading-relaxed">
            Atendemos por orden de llegada. Encontranos en el barrio de Palermo, CABA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Info card */}
          <div className="flex flex-col gap-6">
            {/* Exterior photo */}
            <div className="rounded-2xl overflow-hidden h-56 shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior3-genhgecoRKLvhdH8OLxPqprdgHmuus.webp"
                alt="Exterior de Lubricentro Canning en Av. Scalabrini Ortiz"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Details */}
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Dirección</p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Av. Raúl Scalabrini Ortiz 878 – CABA
                  </p>
                </div>
              </div>
              <div className="h-px bg-border" />
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

            {/* Buttons */}
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
                WhatsApp
              </button>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[420px] border border-border">
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

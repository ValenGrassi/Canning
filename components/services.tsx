import { Droplets, Wrench, Zap, Factory } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Servicio Completo",
    items: [
      "Cambio de aceite",
      "Cambio de filtros",
      "Filtros de aire acondicionado y ventilación",
      "Revisión de fluidos",
    ],
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Mantenimiento Mecánico",
    items: [
      "Cambio de bujías",
      "Revisión y cambio de aceite de caja",
      "Aditivos para motor",
    ],
    highlight: false,
  },
  {
    icon: Zap,
    title: "Baterías",
    items: [
      "Diagnóstico de batería",
      "Reemplazo de batería",
    ],
    highlight: false,
  },
  {
    icon: Factory,
    title: "Lubricantes Industriales",
    items: [
      "Productos para maquinaria",
      "Lubricantes para empresas",
    ],
    highlight: false,
  },
]

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-background"
      aria-label="Nuestros servicios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Lo que hacemos</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mt-2 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Todo lo que tu auto necesita en un solo lugar, con los mejores productos y atención de primera.
          </p>
        </div>

        {/* Interior photo */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-o5XSewzbo4v47kbwmBgjjPmkc0IFfw.webp"
            alt="Mecánico trabajando bajo un auto elevado en Lubricentro Canning"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/40 flex items-end p-6">
            <p className="text-white font-heading font-bold text-xl sm:text-2xl">
              Profesionales con experiencia y equipamiento moderno
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`rounded-xl p-6 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  service.highlight
                    ? "bg-primary text-white border-primary"
                    : "bg-card text-card-foreground border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    service.highlight ? "bg-white/20" : "bg-primary/10"
                  }`}
                >
                  <Icon
                    size={24}
                    className={service.highlight ? "text-white" : "text-primary"}
                  />
                </div>
                <h3 className={`font-heading font-bold text-lg ${service.highlight ? "text-white" : "text-foreground"}`}>
                  {service.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm leading-relaxed ${
                        service.highlight ? "text-white/85" : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                          service.highlight ? "bg-accent" : "bg-primary"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

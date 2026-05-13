import { Droplets, Wrench, Zap, Factory } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Servicio Completo",
    items: [
      "Cambio de aceite y filtros",
      "Filtros de habitáculo y combustible",
      "Control de densidad y nivel de refrigerante",
      "Control de nivel de dirección hidráulica y líquido de frenos",
      "Control y cambio de luces",
      "Control y cambio de escobillas limpiaparabrisas",
    ],
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    items: [
      "Cambio de bujías y cables",
      "Control y cambio de aceite de caja y diferencial",
      "Cambio de refrigerante y aceite de dirección hidráulica",
      "Control de pastillas de freno",
      "Asesoramiento sobre aditivos",
      "Orientación y derivación a especialista si es necesario",
    ],
    highlight: false,
  },
  {
    icon: Zap,
    title: "Varios",
    items: [
      "Cambio de aceite para motos",
      "Recambio y recarga de matafuegos",
      "Control y diagnóstico de carga de la batería",
      "Venta y colocación de chapón cubrecárter",
    ],
    highlight: false,
  },
  {
    icon: Factory,
    title: "Lubricantes Industriales",
    items: [
      "Aceites hidráulicos",
      "Aceites para la industria gráfica",
      "Aceites para la industria textil",
      "Fluidos de corte y roscado",
      "Aceites para engranajes y rodamientos",
      "Grasas especiales",
      "Antiespumantes y aditivos especiales",
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
            Todo lo que tu auto necesita en un solo lugar. Lo resolvemos en el momento, sin vueltas y con el cuidado de siempre.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {/* Left: car on lift — interior wide shot */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-lg group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-76vgSLIGlsdbBnjTs3kKtwv3x9dhn1.webp"
              alt="Auto elevado en el taller de Lubricentro Canning"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-white font-heading font-bold text-lg leading-snug text-balance">
                Equipamiento moderno de elevación
              </p>
              <p className="text-white/70 text-sm mt-1">
                Trabajamos con seguridad y precisión
              </p>
            </div>
          </div>

          {/* Right: mechanic working under car */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-lg group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-o5XSewzbo4v47kbwmBgjjPmkc0IFfw.webp"
              alt="Mecánico trabajando bajo un auto elevado en Lubricentro Canning"
              className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-white font-heading font-bold text-lg leading-snug text-balance">
                Técnicos con experiencia
              </p>
              <p className="text-white/70 text-sm mt-1">
                Atención rápida y de calidad
              </p>
            </div>
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

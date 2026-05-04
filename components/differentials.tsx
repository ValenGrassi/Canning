import { Award, Heart, Clock, DollarSign, ShoppingBag, CheckCircle } from "lucide-react"

const differentials = [
  {
    icon: Award,
    title: "30 años de experiencia",
    desc: "Más de tres décadas atendiendo a los vecinos del barrio con profesionalismo.",
  },
  {
    icon: Heart,
    title: "Negocio familiar",
    desc: "Atención personalizada y cercana. Nos importa cada cliente.",
  },
  {
    icon: Clock,
    title: "Atención rápida",
    desc: "Sin turno y por orden de llegada. Tu tiempo es valioso.",
  },
  {
    icon: DollarSign,
    title: "Precios accesibles",
    desc: "La mejor calidad al precio más conveniente del barrio.",
  },
  {
    icon: ShoppingBag,
    title: "Todas las marcas",
    desc: "YPF, Shell, Total, Castrol, Liqui-Moly, Valvoline y más.",
  },
  {
    icon: CheckCircle,
    title: "Productos originales",
    desc: "Garantizamos la calidad con productos originales y alternativos certificados.",
  },
]

export default function Differentials() {
  return (
    <section
      id="diferenciales"
      className="py-24 bg-navy"
      aria-label="Nuestros diferenciales"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-bold uppercase tracking-widest">Por qué elegirnos</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-2 text-balance">
            Nuestros Diferenciales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Grid of differentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Photo collage */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden h-56 shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-95FcrwaFAeq2FQZUQJEYLHD3aR6eZK.jpg"
                alt="Mercedes-Benz clásico en el elevador de Lubricentro Canning"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-XztYfcW0XxjuGpz9LMI8q2qWi3hCow.webp"
                alt="Interior del local con productos y elevador"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

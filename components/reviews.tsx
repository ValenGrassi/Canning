const reviews = [
  {
    name: "Sol Sastre",
    text: "¡Excelente atención! Cordiales y muy profesionales, controlaron todo. Perfecto servicio y buen precio. Altamente recomendables.",
    stars: 5,
  },
  {
    name: "Gastón Paz",
    text: "Excelente por la atención y los precios. 100% recomendables.",
    stars: 5,
  },
  {
    name: "Fernando Rodríguez",
    text: "Calidad y confiabilidad en los productos, rapidez en el trabajo y amabilidad de siempre.",
    stars: 5,
  },
  {
    name: "Agustín Gaiero",
    text: "Muy buena atención, rápida, sinceros y buenos precios.",
    stars: 5,
  },
  {
    name: "Felipe Quiceno",
    text: "Si pudiera calificar 10 estrellas lo haría. Desde la llamada hasta que salí por la puerta.",
    stars: 5,
  },
  {
    name: "J P",
    text: "Súper recomendable. Pagás menos de la mitad que en concesionario y el servicio es excelente.",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="resenas"
      className="py-24 bg-secondary/50"
      aria-label="Reseñas de clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">Lo que dicen nuestros clientes</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mt-2 text-balance">
            Reseñas Reales
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRating count={5} />
            <span className="text-muted-foreground text-sm font-medium">5.0 en Google</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <StarRating count={review.stars} />
              <p className="text-foreground/80 text-sm leading-relaxed italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs">Cliente verificado</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

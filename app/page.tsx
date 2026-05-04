import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Differentials from "@/components/differentials"
import Reviews from "@/components/reviews"
import Visit from "@/components/visit"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Differentials />
      <Reviews />
      <Visit />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

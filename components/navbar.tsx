"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Menu, X } from "lucide-react"
import BrandLogo from "@/components/brand-logo"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Diferenciales", href: "#diferenciales" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Visítanos", href: "#visitanos" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center group"
            aria-label="Ir al inicio"
          >
            <BrandLogo variant={scrolled ? "dark" : "light"} />
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: social + mobile toggle */}
          <div className="flex items-center gap-3">
          <Link
  href="https://www.facebook.com/lubricentrocanning/?locale=es_LA"
  target="_blank"
  rel="noopener noreferrer"
  className={`
    inline-flex items-center justify-center
    px-6 py-2.5 
    text-sm font-semibold tracking-wide
    border-2 rounded-full
    transition-all duration-300 ease-in-out
    hover:scale-105 active:scale-95
    ${
      scrolled 
        ? "border-primary bg-primary text-white hover:bg-transparent hover:text-primary" 
        : "border-white bg-transparent text-white hover:bg-white hover:text-primary"
    }
  `}
>
  Cuide su motor
</Link>
            <button
              className={`md:hidden transition-colors duration-200 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-border shadow-lg">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

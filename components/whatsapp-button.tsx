"use client"

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5491133982304?text=Hola%2C%20quiero%20consultar%20sobre%20el%20servicio.",
      "_blank"
    )
  }

  return (
    <button
      onClick={handleWhatsApp}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bb5a] shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.658 4.615 1.805 6.512L4 29l7.701-1.788A11.94 11.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.94 9.94 0 01-5.03-1.357l-.36-.215-4.573 1.062 1.09-4.453-.24-.373A9.952 9.952 0 016 15C6 9.486 10.486 5 16 5zm-3.81 5.47c-.195 0-.512.073-.78.365-.267.293-1.024 1-1.024 2.44s1.048 2.83 1.195 3.025c.146.195 2.025 3.202 4.984 4.365 2.459.97 2.959.777 3.493.728.533-.049 1.72-.703 1.963-1.381.244-.68.244-1.26.17-1.382-.073-.121-.268-.195-.56-.34-.293-.146-1.72-.849-1.988-.946-.267-.097-.461-.146-.655.146-.195.293-.754.946-.924 1.14-.17.195-.34.22-.633.073-.293-.146-1.237-.456-2.355-1.453-.87-.776-1.457-1.735-1.628-2.028-.17-.293-.018-.45.128-.595.13-.13.293-.34.44-.511.146-.17.195-.292.293-.487.097-.195.049-.365-.025-.511-.073-.146-.642-1.593-.898-2.165-.244-.558-.498-.476-.655-.476-.153 0-.33-.017-.512-.017z" />
      </svg>
    </button>
  )
}

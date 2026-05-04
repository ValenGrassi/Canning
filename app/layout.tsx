import type { Metadata, Viewport } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'Lubricentro Canning – Cambio de Aceite y Filtros en CABA',
  description:
    '30 años cuidando autos en el barrio. Cambio de aceite, filtros, bujías y lubricantes. Atención rápida, precios accesibles. Av. Scalabrini Ortiz 878, CABA.',
  keywords: 'lubricentro, cambio de aceite, filtros, CABA, Canning, service, mecánica, lubricantes',
}

export const viewport: Viewport = {
  themeColor: '#1a4fa0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${barlow.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

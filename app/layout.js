import './globals.css'

export const metadata = {
  title: 'BitZonePY',
  description: 'Gaming Hardware Premium',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

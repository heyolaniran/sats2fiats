import './globals.css'

export const metadata = {
  title: 'Sats 2 Fiats ',
  description: 'Get sats rate in your local currency rate in real time ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

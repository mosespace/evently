import './globals.css'

export const metadata = {
  title: 'Evently',
  description: 'Discover and find tech events!',
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

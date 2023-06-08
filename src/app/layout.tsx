import './globals.scss'


export const metadata = {
  title: 'Boilerplate Next App',
  description: 'Webapp React with Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

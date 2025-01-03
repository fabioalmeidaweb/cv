import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="print:text-[14px]">
      <body className="print:leading-snug">{children}</body>
    </html>
  )
}

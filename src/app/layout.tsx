import { Inter } from 'next/font/google'
import { Header } from '@/app/component/header'
import { Footer } from '@/app/component/footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SHOP.CO - Find clothes that matches your style',
  description: 'Browse through our diverse range of meticulously crafted garments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


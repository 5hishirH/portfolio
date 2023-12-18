import { Inconsolata } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata = {
  title: 'Shishir Halder',
  description: 'Portfolio website of Shishir',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

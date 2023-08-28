import './globals.css'
import { Inter } from 'next/font/google'
import Theme from '@/Components/Layout/Theme'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  )
}

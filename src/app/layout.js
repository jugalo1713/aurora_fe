import './globals.css'
import { Inter } from 'next/font/google'
import Theme from '@/Components/Layout/Theme'
import AuthProvider from '@/Components/Auth/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Theme>
            {children}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}

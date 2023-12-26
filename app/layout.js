import { Inter } from 'next/font/google'
import './globals.css'
import ReactQueryWrapper from '@/components/wrapping/reactquery'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bigs App',
  description: 'Doctor Appointment App',
  manifest: "./manifest.json",
  icons: { apple: './icon.png' },
  themeColor: '#fff',
  viewport :'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgF8F8FC`}>
        <ReactQueryWrapper>
          {children}
        </ReactQueryWrapper>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Opti Next Experimentation',
  description: 'A Next.js project integrated with Optimizely for A/B testing and feature flagging.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='//cdn.optimizely.com/js/5079706295336960.js'
          as='script'
        />
        <link rel='preconnect' href='//logx.optimizely.com' />
        <script src='https://cdn.optimizely.com/js/5079706295336960.js'></script>
        <GoogleTagManager gtmId="GTM-NGPJ62BF" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header transparent />
        {children}
        <Footer />
      </body>
    </html>
  )
}

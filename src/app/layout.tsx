import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GoogleTagManager } from '@next/third-parties/google'
import StandardPage, { StandardPageContentType } from '@/components/StandardPage'
import { initContentTypeRegistry } from '@optimizely/cms-sdk';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';
import './globals.css'

initContentTypeRegistry([StandardPageContentType]);
initReactComponentRegistry({
  resolver: {
    StandardPage,
  },
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ipsum Inc - Opti Next Experimentation',
  description: 'A Next.js project integrated with Optimizely for A/B testing, feature flagging and CMS.'
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
          href='//cdn.optimizely.com/js/5176819565985792.js'
          as='script'
        />
        <link rel='preconnect' href='//logx.optimizely.com' />
        <script src='https://cdn.optimizely.com/js/5176819565985792.js'></script>
        <script src='https://app-epsaanthonyqqz97p001.cms.optimizely.com/util/javascript/communicationinjector.js'></script>
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

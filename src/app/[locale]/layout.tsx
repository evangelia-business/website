import { getMessages } from 'next-intl/server'
import { Providers } from './providers'
import { Urbanist } from 'next/font/google'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import '@/styles/globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evangelia - Home Page',
  description: "Home page of Evangealia's Umbrella Website",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all locales to the client
  // side is the easiest way to get started
  const locales = await getMessages()
  const isValidLocale = ['en'].includes(locale)
  if (!isValidLocale) notFound()
  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <Providers messages={locales} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

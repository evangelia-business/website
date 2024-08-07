// app/providers.tsx
'use client'

import theme from '../../styles/settings/theme'
import { NextIntlClientProvider } from 'next-intl'

import { ChakraProvider } from '@chakra-ui/react'

type ProvidersProps = {
  children: React.ReactNode
  messages: Record<string, unknown>
  locale: string
}
export function Providers({ children, messages, locale }: ProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextIntlClientProvider
        messages={messages}
        locale={locale}
        timeZone="Europe/Athens"
      >
        {children}
      </NextIntlClientProvider>
    </ChakraProvider>
  )
}

import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from './Banner'
import { NextIntlClientProvider } from 'next-intl'
import enLocales from '@/locales/en.json'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

const renderWithIntl = (component: React.ReactNode, locale: string) => {
  const locales = locale === 'en' ? { Banner: enLocales.Banner } : {}
  return render(
    <NextIntlClientProvider locale={locale} messages={locales}>
      {component}
    </NextIntlClientProvider>
  )
}
describe('Banner component', () => {
  test('renders Banner component with title and subtitle', () => {
    renderWithIntl(<Banner />, 'en')

    // Use translations from the enLocales file for assertions
    expect(screen.getByText(enLocales.Banner.motto)).toBeInTheDocument()
    expect(
      screen.getByText(enLocales.Banner.motto_subtitle)
    ).toBeInTheDocument()
  })
})

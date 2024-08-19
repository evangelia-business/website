import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import { NextIntlClientProvider } from 'next-intl'
import enLocales from '@/locales/en.json'

const renderWithIntl = (component: React.ReactNode, locale: string) => {
  const locales = locale === 'en' ? enLocales : {}
  return render(
    <NextIntlClientProvider locale={locale} locales={locales}>
      {component}
    </NextIntlClientProvider>
  )
}

describe('Menu component', () => {
  test('Menu navigation links in English', () => {
    renderWithIntl(<Menu />, 'en')
    const homeLink = screen.getByTestId('home-link')
    const techLink = screen.getByTestId('tech-link')

    expect(homeLink).toHaveTextContent('home')
    expect(techLink).toHaveTextContent('tech')
    expect(homeLink.getAttribute('href')).toBe('https://www.evangelia.me')
    expect(techLink.getAttribute('href')).toBe('https://tech.evangelia.me')
  })
})

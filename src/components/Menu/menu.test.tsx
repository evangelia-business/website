import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import { NextIntlClientProvider } from 'next-intl'
import enMessages from '../../../messages/en.json'
import grMessages from '../../../messages/gr.json'

const renderWithIntl = (component: React.ReactNode, locale: string) => {
  const messages = locale === 'en' ? enMessages : grMessages
  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      {component}
    </NextIntlClientProvider>
  )
}

describe('Menu component', () => {
  test('Menu navigation links in English', () => {
    renderWithIntl(<Menu />, 'en')
    const homeLink = screen.getByTestId('home-link')
    const techLink = screen.getByTestId('tech-link')

    expect(homeLink).toHaveTextContent(enMessages.Menu.home)
    expect(techLink).toHaveTextContent(enMessages.Menu.tech)
    expect(homeLink.getAttribute('href')).toBe('https://www.evangelia.me')
    expect(techLink.getAttribute('href')).toBe('https://tech.evangelia.me')
  })

  test('Menu navigation links in Greek', () => {
    renderWithIntl(<Menu />, 'gr')
    const homeLink = screen.getByTestId('home-link')
    const techLink = screen.getByTestId('tech-link')

    expect(homeLink).toHaveTextContent(grMessages.Menu.home)
    expect(techLink).toHaveTextContent(grMessages.Menu.tech)
    expect(homeLink.getAttribute('href')).toBe('https://www.evangelia.me')
    expect(techLink.getAttribute('href')).toBe('https://tech.evangelia.me')
  })
})

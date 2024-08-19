import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Banner, { BannerProps } from './Banner'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/navigation'
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

    // Use regular expressions to make the matching more flexible
    expect(screen.getByText(/PHILOMATH/i)).toBeInTheDocument()
    expect(
      screen.getByText(/The Coding Academy for Frontend Engineers/i)
    ).toBeInTheDocument()
  })

  test('renders a button in the Banner component', () => {
    renderWithIntl(<Banner />, 'en')
    const button = screen.getByRole('button', { name: /Join my courses/i })
    expect(button).toBeInTheDocument()
  })

  test('calls the onClick handler when the button is clicked', () => {
    const handleClick = jest.fn()
    const props: BannerProps = {
      onClick: handleClick,
    }
    renderWithIntl(<Banner {...props} />, 'en')

    const button = screen.getByRole('button', { name: /Join my courses/i })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })

  test('navigates to the tech subdomain when the button is clicked and no onClick is provided', () => {
    const pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: pushMock })

    renderWithIntl(<Banner />, 'en')

    const button = screen.getByRole('button', { name: /Join my courses/i })
    fireEvent.click(button)

    expect(pushMock).toHaveBeenCalledWith('https://tech.evangelia.me')
  })
})

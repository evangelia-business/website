import '@testing-library/jest-dom'

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Banner, { BannerProps } from './Banner'

import { NextIntlClientProvider } from 'next-intl'
import enMessages from '../../../messages/en.json'

test('renders Banner component with title and subtitle', () => {
  const { getByText } = render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <Banner />
    </NextIntlClientProvider>
  )
  expect(getByText(enMessages.Banner.title)).toBeInTheDocument()
  expect(getByText(enMessages.Banner.text)).toBeInTheDocument()
})

test('renders a button in the Banner component', () => {
  const { getByRole } = render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <Banner />
    </NextIntlClientProvider>
  )
  const button = getByRole('button')
  expect(button).toBeInTheDocument()
})

test('calls the onClick handler when the button is clicked', () => {
  const handleClick = jest.fn()
  const props: BannerProps = {
    onClick: handleClick,
  }
  const { getByRole } = render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      <Banner {...props} />
    </NextIntlClientProvider>
  )

  const button = getByRole('button')
  fireEvent.click(button)

  expect(handleClick).toHaveBeenCalled()
})

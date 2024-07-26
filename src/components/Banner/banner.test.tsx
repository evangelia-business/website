import '@testing-library/jest-dom'

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Banner from './Banner'

test('renders Banner component with title and subtitle', () => {
  const { getByText } = render(<Banner />)
  expect(
    getByText('Motto for Customers to convince them to buy the product')
  ).toBeInTheDocument()
  expect(
    getByText('The Coding Academy for Frontend Engineers')
  ).toBeInTheDocument()
})

test('renders a button in the Banner component', () => {
  const { getByRole } = render(<Banner />)
  const button = getByRole('button')
  expect(button).toBeInTheDocument()
})

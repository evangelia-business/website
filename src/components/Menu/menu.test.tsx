import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Menu from './Menu'

test('Menu navigation links', () => {
  render(<Menu />)
  const homeLink = screen.getByTestId('home-link')
  const techLink = screen.getByTestId('tech-link')

  expect(homeLink.getAttribute('href')).toBe('https://www.evangelia.me')
  expect(techLink.getAttribute('href')).toBe('https://tech.evangelia.me')
})

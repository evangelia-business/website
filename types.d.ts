// types.d.ts

declare global {
  interface Product {
    title: string
    description: string
    iconSrc: string
    color: string
  }

  interface ProductsSectionProps {
    products?: Product[]
    columns?: { base: number; md: number; lg: number }
    maxWidth?: string
    backgroundColor?: string
  }
}

export {}

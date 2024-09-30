import { Grid } from '@chakra-ui/react'

import Header from '@/components/Header/Header'
import ProductsSection from '@/components/ProductsSection/ProductsSection'
import { products } from '@/config/products'
export default function HomePage() {
  return (
    <Grid
      templateAreas={`"header"
            "hello"
            "products"
            "footer"
            `}
      gridTemplateColumns={'1fr'}
      height="auto"
    >
      <Header />
      <ProductsSection
        products={products}
        maxWidth="100%"
        backgroundColor="transparent"
      />
    </Grid>
  )
}

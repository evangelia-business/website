import { Grid } from '@chakra-ui/react'

import Header from '@/components/Header/Header'
import HelloSection from '@/components/HelloSection/HelloSection'
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
      gridTemplateRows={'30% 25% 35% 10%'}
      height="90vh"
    >
      <Header />
      <HelloSection />
      <ProductsSection
        products={products}
        maxWidth="100%"
        backgroundColor="transparent"
      />
    </Grid>
  )
}

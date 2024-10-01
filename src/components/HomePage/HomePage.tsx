import { Grid } from '@chakra-ui/react'

import Header from '@/components/Header/Header'
import Products from '@/components/Products/Products'
import HelloSection from '../HelloSection/HelloSection'
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
      <HelloSection />
      <Products />
    </Grid>
  )
}

import { Grid } from '@chakra-ui/react'

import Header from '@/components/Header/Header'
import HelloSection from '@/components/HelloSection/HelloSection'

export default function HomePage() {
  return (
    <Grid
      templateAreas={`"header"
            "hello"
            "products"
            "footer"
            `}
      gridTemplateColumns={'1fr'}
      height="90vh"
    >
      <Header />
      <HelloSection />
    </Grid>
  )
}

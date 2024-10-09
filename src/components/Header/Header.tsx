import { Flex, Box, Spacer, Grid, GridItem, Image } from '@chakra-ui/react'

import Menu from '@/components/Menu/Menu'
import Banner from '@/components/Banner/Banner'

import styles from './header.module.css'

export default function Header() {
  return (
    <Grid
      className={styles.background}
      height={{ base: 80, sm: 72 }}
      backgroundSize={['cover', 'cover', 'contain', 'contain']}
    >
      <GridItem w="100%" h="0" colStart={1}>
        <Flex gap="1" alignItems="top">
          <Box>
            <Image
              className={styles.logo}
              height="50"
              src="/logo.svg"
              alt="Company Logo"
            />
          </Box>
          <Spacer />

          <Menu />
        </Flex>
      </GridItem>
      <GridItem colStart={1}>
        <Banner></Banner>
      </GridItem>
    </Grid>
  )
}

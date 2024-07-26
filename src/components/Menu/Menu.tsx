import NextLink from 'next/link'

import { Box, HStack, Link } from '@chakra-ui/react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <Box as="header" className={styles.header}>
      <HStack as="nav" spacing="1rem">
        <Link
          as={NextLink}
          data-testid="home-link"
          href="https://www.evangelia.me"
          className={styles.menuItem}
        >
          Home
        </Link>
        <Link
          as={NextLink}
          data-testid="tech-link"
          href="https://tech.evangelia.me"
          className={styles.menuItem}
        >
          Philomath
        </Link>
      </HStack>
    </Box>
  )
}

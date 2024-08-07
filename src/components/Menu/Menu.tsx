import NextLink from 'next/link'

import { Box, HStack, Link } from '@chakra-ui/react'
import styles from './menu.module.css'
import { useTranslations } from 'next-intl'

export default function Menu() {
  const t = useTranslations('Menu')

  return (
    <Box as="header" className={styles.header}>
      <HStack as="nav" spacing="1rem">
        <Link
          as={NextLink}
          data-testid="home-link"
          href="https://www.evangelia.me"
          className={styles.menuItem}
        >
          {t('home')}
        </Link>
        <Link
          as={NextLink}
          data-testid="tech-link"
          href="https://tech.evangelia.me"
          className={styles.menuItem}
        >
          {t('tech')}
        </Link>
      </HStack>
    </Box>
  )
}

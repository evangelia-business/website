import NextLink from 'next/link'

import { Box, HStack, Link } from '@chakra-ui/react';
import styles from './menu.module.css'

export default function Menu() {
  return (

    <Box as="header" className={styles.header}>
      <HStack spacing="1rem">
        <Link as={NextLink} href='https://www.evangelia.me' className={styles.menuitem}>Home</Link>
        <Link as={NextLink} href='https://tech.evangelia.me' className={styles.menuitem}>Philomath</Link>
      </HStack>
    </Box>
  );
}

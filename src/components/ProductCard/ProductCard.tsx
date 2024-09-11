// components/ProductCard/ProductCard.tsx

import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import styles from './ProductCard.module.css'

export const ProductCard: React.FC<Product> = ({
  title,
  description,
  iconSrc,
  color,
}) => (
  <Box className={styles.productCard}>
    <Flex alignItems="center" mb={2}>
      <Text color={color} fontWeight="bold" fontSize="xl" mr={2}>
        {title}
      </Text>
      <Image src={iconSrc} alt={`${title} icon`} width="24px" height="24px" />
    </Flex>
    <Text color="gray.300" fontSize="sm">
      {description}
    </Text>
  </Box>
)

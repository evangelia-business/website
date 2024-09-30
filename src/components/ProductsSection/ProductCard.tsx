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
  <Flex direction="column" alignItems="center">
    <Flex alignItems="center" pb={2}>
      <Text color={color} fontWeight={550} fontSize="xl" height={8} mr={3}>
        {title}
      </Text>
      <Image src={iconSrc} alt={`${title} icon`} boxSize={9} />
    </Flex>
    <Text fontSize="m">{description}</Text>
  </Flex>
)

// components/ProductCard/ProductCard.tsx

import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export const ProductCard: React.FC<Product> = ({
  title,
  description,
  iconSrc,
  color,
}) => (
  <Flex direction="column" alignItems="center" justifyContent="flex-start">
    <Flex alignItems="center" pb={2}>
      <Text color={color} fontWeight={550} fontSize="xl" height={8} mr={3}>
        {title}
      </Text>
      <Image src={iconSrc} alt={`${title} icon`} boxSize={9} />
    </Flex>
    <Text justifyContent="flex-start" flexGrow={1} height={16} fontSize="m">
      {description}
    </Text>
  </Flex>
)

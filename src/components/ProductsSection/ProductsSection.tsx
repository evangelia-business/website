// components/ProductsSection/ProductsSection.tsx

import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { products } from '@/config/products'

const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const topRowProducts = products.slice(0, 2)
  const bottomRowProducts = products.slice(2)

  return (
    <Flex direction="column" width="100%" padding={14} gap={16}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={16}
        alignSelf="center"
        alignItems="center"
      >
        {topRowProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={16}
        alignSelf="center"
        alignItems="center"
      >
        {bottomRowProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Flex>
    </Flex>
  )
}
export default ProductsSection

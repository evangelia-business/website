// components/ProductsSection/ProductsSection.tsx

import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import styles from './ProductsSection.module.css'

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products = [],
  maxWidth = '1200px',
  backgroundColor = 'transparent',
}) => {
  return (
    <Flex
      className={styles.productsSection}
      maxWidth={maxWidth}
      bg={backgroundColor}
    >
      <Flex className={styles.content}>
        {products.map((product, index) => (
          <Box key={index} className={styles.productWrapper}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
export default ProductsSection

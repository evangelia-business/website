// components/ProductsSection/ProductsSection.tsx

import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'

import { useTranslations } from 'next-intl'

const ProductsSection: React.FC<ProductsSectionProps> = () => {
  const t = useTranslations('Products')
  const products: Product[] = [
    {
      title: t('philomath_title').toUpperCase(),
      description: t('philomath_description'),
      iconSrc: '/tech.svg',
      color: 'var(--accent-hex)',
    },
    {
      title: t('evexia_title').toUpperCase(),
      description: t('evexia_description'),
      iconSrc: '/Evangelia-Icons_e_commerce.svg',
      color: 'var(--green-hex)',
    },
    {
      title: t('rhizes_title').toUpperCase(),
      description: t('rhizes_description'),
      iconSrc: '/Evangelia-Icons_global_citizen.svg',
      color: 'var(--orange-hex)',
    },
    {
      title: t('ekphrasis_title').toUpperCase(),
      description: t('ekphrasis_description'),
      iconSrc: '/Evangelia-Icons_art_and_expression.svg',
      color: 'var(--purple-hex)',
    },
  ]

  const topRowProducts = products.slice(0, 2)
  const bottomRowProducts = products.slice(2)

  return (
    <Flex
      direction="column"
      width="100%"
      padding={14}
      gap={16}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', lg: '70%' }}
        gap={16}
        alignSelf="center"
        alignItems="center"
      >
        {topRowProducts.map((product, index) => (
          <Box key={index} flex={1} paddingX={{ base: 0, md: 5 }}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', lg: '70%' }}
        gap={16}
        alignSelf="center"
        alignItems="center"
      >
        {bottomRowProducts.map((product, index) => (
          <Box key={index} flex={1} paddingX={{ base: 0, md: 5 }}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
export default ProductsSection

import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { ProductCard } from './ProductCard'

import { useTranslations } from 'next-intl'

type ColoredBoxProps = {
  color: string
}

const ColoredBox: React.FC<ColoredBoxProps> = ({ color }) => (
  <Box
    display={{ base: 'none', md: 'block' }}
    width={6}
    height={9}
    background={color}
    backgroundRepeat="repeat"
    justifySelf="center"
    backgroundSize="12px 12px"
  />
)

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
      paddingY={24}
      paddingX={{ base: 0, md: 14 }}
      gap={12}
      justifyContent="center"
      alignItems="center"
      background="#2B2E3B"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', lg: '57rem' }}
        gap={10}
        justifyContent="space-between"
        alignSelf="center"
        alignItems="center"
      >
        {topRowProducts.map((product, index) => (
          <Box key={index}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        direction="row"
        paddingY={8}
        width="100%"
        justifyContent="center"
      >
        <ColoredBox color="var(--background-blue-dots)" />
        <ColoredBox color="var(--background-purple-dots)" />
        <ColoredBox color="var(--background-green-dots)" />
        <ColoredBox color="var(--background-orange-dots)" />
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        width={{ base: '100%', lg: '57rem' }}
        gap={10}
        justifyContent="space-between"
      >
        {bottomRowProducts.map((product, index) => (
          <Box key={index}>
            <ProductCard {...product} />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
export default ProductsSection

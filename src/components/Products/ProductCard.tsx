import React from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

export const ProductCard: React.FC<Product> = ({
  title,
  description,
  iconSrc,
  color,
}) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    paddingBottom={{ base: 16, md: 'none' }}
  >
    <Flex alignItems="center" pb={4}>
      <Text color={color} fontWeight={550} fontSize="xl" height={8} mr={3}>
        {title}
      </Text>
      <Image src={iconSrc} alt={`${title} icon`} boxSize={8} />
    </Flex>
    <Text
      justifyContent="flex-start"
      flexGrow={1}
      height={16}
      fontSize={{ base: 'medium', md: 'large' }}
      maxWidth="400px"
    >
      {description}
    </Text>
  </Flex>
)

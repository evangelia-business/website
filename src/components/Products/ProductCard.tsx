import React from 'react'
import { Flex, Text, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import styles from './productcard.module.css'

export const ProductCard: React.FC<Product> = ({
  title,
  description,
  iconSrc,
  color,
  targetLink,
  isLaunched,
}) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    paddingBottom={{ base: 16, md: 12 }}
    paddingLeft={1.5}
    paddingTop={2}
    className={styles.productcard}
  >
    <Flex alignItems="center" pb={4}>
      <Text
        color={color}
        fontWeight={550}
        fontSize="xl"
        height={8}
        mr={3}
        className={styles.inactiveTitle}
      >
        {title}
      </Text>
      <Image src={iconSrc} alt={`${title} icon`} boxSize={8} />
      {!isLaunched && (
        <Text
          alignSelf="flex-end"
          width="max-content"
          backgroundColor="#6C757D"
          padding="3px 5px"
          position="relative"
          right={{ base: '-70px', md: '-50px' }}
        >
          In Progress
        </Text>
      )}
    </Flex>
    {isLaunched ? (
      <Link
        as={NextLink}
        data-testid="philomath-link"
        href={targetLink}
        className={styles.productItem}
      >
        <Text
          justifyContent="flex-start"
          flexGrow={1}
          height={16}
          fontSize={{ base: 'medium', md: 'large' }}
          maxWidth="400px"
          className={styles.productDescription}
        >
          {description}
        </Text>
      </Link>
    ) : (
      <Text
        justifyContent="flex-start"
        flexGrow={1}
        height={16}
        fontSize={{ base: 'medium', md: 'large' }}
        maxWidth="400px"
        className={`${styles.productDescription} ${styles.inactiveLink}`}
      >
        {description}
      </Text>
    )}
  </Flex>
)

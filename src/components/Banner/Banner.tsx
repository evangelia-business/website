'use client'

import { FC } from 'react'
import { useRouter } from 'next/navigation'
import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react'

import { useTranslations } from 'next-intl'

import styles from './banner.module.css'

export interface BannerProps {
  onClick?: () => void
}

const Banner: FC<BannerProps> = ({ onClick }) => {
  const t = useTranslations('Banner')

  const router = useRouter()

  // Default handler that navigates to the tech subdomain
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      router.push('https://tech.evangelia.me')
    }
  }
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr',
        lg: '1fr',
        xl: '1fr',
      }}
      className={styles.bannerContainer}
    >
      <GridItem order={{ base: 2, md: 2, lg: 1 }}>
        <Flex
          direction="column"
          alignItems={['center', 'center', 'center', 'center']}
          paddingLeft={6}
        >
          <Flex
            direction="row"
            justifyContent={['center', 'center', 'center', 'center']}
            display={{ base: 'none', md: 'none', lg: 'none' }}
          >
            <Box className={styles.titleLeft}>
              <Text>{t('title')} </Text>
            </Box>
            <Image
              className={styles.techIcon}
              src="/tech.svg"
              width="25"
              height="25"
              alt="Company Logo"
            />
          </Flex>
        </Flex>
      </GridItem>

      <GridItem order={{ base: 1, md: 1, lg: 1 }}>
        <Box className={styles.titleRight} margin="0 auto" right={0}>
          <Text
            width={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
            fontSize={['2rem', '2.4rem', '2.6rem', '2.8rem']}
            textAlign={['center', 'center', 'center', 'center']}
            paddingTop={['0.5rem', '0.5rem', '0', '0']}
            paddingBottom={['1.3rem', '1.3rem', '1rem', '1rem']}
            paddingRight={0}
            paddingLeft={['1.5rem', '1.5rem', '0', '0']}
            lineHeight={['2.5rem', '2.5rem', '2.2rem', '2.6rem']}
            fontWeight={700}
          >
            {t('motto')}
          </Text>
          <Text
            width={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
            fontSize={['1.2rem', '1.6rem', '1.7rem', '1.9rem']}
            textAlign={['center', 'center', 'center', 'center']}
            paddingBottom={['1.3rem', '1.3rem', '0', '0']}
            paddingRight={0}
            paddingLeft={['1.5rem', '1.5rem', '0', '0']}
            lineHeight={['1.4rem', '1.4rem', '2.2rem', '2.6rem']}
            fontWeight={400}
          >
            {t('motto_subtitle')}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Banner

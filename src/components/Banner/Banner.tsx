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
        md: '2fr 2fr',
        lg: '2fr 3fr',
        xl: '2fr 2fr',
      }}
      className={styles.bannerContainer}
    >
      <GridItem order={{ base: 2, md: 1 }}>
        <Flex
          direction="column"
          alignItems={['center', 'center', 'start', 'start']}
        >
          <Flex
            direction="row"
            justifyContent={['center', 'center', 'flex-start', 'flex-start']}
            display={{ base: 'none', md: 'flex' }}
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
          <Box
            className={styles.subTitleLeft}
            paddingBottom={['0.5rem', '0.5rem', '0.8rem', '2.5rem']}
          >
            <Text
              fontSize={['0.9rem', '1rem', '1rem', '1.08rem']}
              display={{ base: 'none', md: 'block' }}
              lineHeight="1.3rem"
              width={{ base: '100%', md: '70%' }}
            >
              {t('text')}
            </Text>
          </Box>
          <Box textAlign={['center', 'center', 'left', 'left']}>
            <Button
              role="button"
              name="join-courses"
              colorScheme="brand"
              bg="primary"
              size="xs"
              onClick={handleClick} // Add onClick prop to the Button component
            >
              {t('btn_join')}
            </Button>
          </Box>
        </Flex>
      </GridItem>

      <GridItem order={{ base: 1, md: 2 }} margin="0 auto">
        <Box className={styles.titleRight} width="max-content">
          <Text
            fontSize={['1.5rem', '1.7rem', '2.1rem', '2.4rem']}
            textAlign={['center', 'center', 'end', 'end']}
            paddingTop={['0.5rem', '0.5rem', '0', '0']}
            paddingBottom={['1.3rem', '1.3rem', '0', '0']}
            paddingRight={['1.5rem', '1.5rem', '0', '0']}
            paddingLeft={['1.5rem', '1.5rem', '0', '0']}
            lineHeight={['1.4rem', '1.3rem', '2.2rem', '2.6rem']}
            fontWeight={700}
          >
            {t('motto')}
          </Text>
          <Text
            fontSize={['1.2rem', '1.4rem', '2rem', '1.9rem']}
            textAlign={['center', 'center', 'end', 'end']}
            paddingBottom={['1.3rem', '1.3rem', '0', '0']}
            paddingRight={['1.5rem', '1.5rem', '0', '0']}
            paddingLeft={['1.5rem', '1.5rem', '0', '0']}
            lineHeight={['0.5rem', '0.5rem', '2.2rem', '2.6rem']}
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

'use client'

import { FC } from 'react'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react'

import { useTranslations } from 'next-intl'

import styles from './banner.module.css'

export interface BannerProps {
  onClick?: () => void
}

const Banner: FC<BannerProps> = ({ onClick }) => {
  const t = useTranslations('Banner')

  return (
    <Grid templateColumns={'1'} className={styles.bannerContainer}>
      <GridItem>
        <Box
          className={styles.titleRight}
          margin="0 auto"
          right={0}
          textAlign="center"
        >
          <Text
            width="auto"
            fontSize={['2.3rem', '2.4rem', '2.6rem', '2.8rem']}
            paddingBottom={['1.3rem', '1.3rem', '1rem', '1rem']}
            lineHeight={['2.5rem', '2.5rem', '2.2rem', '2.6rem']}
            fontWeight={700}
          >
            {t('motto')}
          </Text>
          <Text
            width="auto"
            fontSize={['1.5rem', '1.6rem', '1.7rem', '1.9rem']}
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

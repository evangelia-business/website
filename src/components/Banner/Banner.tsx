import { FC } from 'react'
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
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        md: '1fr 2fr',
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
              fontSize={['0.9rem', '1.125rem', '1.125rem', '1.125rem']}
              display={{ base: 'none', md: 'block' }}
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
              onClick={onClick} // Add onClick prop to the Button component
            >
              {t('btn_join')}
            </Button>
          </Box>
        </Flex>
      </GridItem>

      <GridItem order={{ base: 1, md: 2 }}>
        <Box className={styles.titleRight}>
          <Text
            fontSize={['1.5rem', '1.5rem', '1.6rem', '1.875rem']}
            textAlign={['center', 'center', 'end', 'end']}
            paddingTop={['0.5rem', '0.5rem', '0', '0']}
            paddingBottom={['1.3rem', '1.3rem', '0', '0']}
            paddingRight={['1.5rem', '1.5rem', '0', '0']}
            paddingLeft={['1.5rem', '1.5rem', '0', '0']}
            lineHeight={['1.6rem', '1.6rem', '2rem', '2rem']}
          >
            {t('motto')}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Banner

import { Flex, Text, Image } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function HelloSection() {
  const t = useTranslations('Hello')
  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      alignItems="center"
      justifyContent="space-between"
      textAlign="left"
      color="#e6e6e6"
      paddingX="12"
      paddingY="7"
      fontWeight={500}
      gap={2}
    >
      <Flex direction="column">
        <Text
          fontSize={{ base: 'large', md: 'x-large' }}
          display="flex"
          alignItems="center"
          color="#02e5f3"
          paddingBottom={12}
          position="relative"
          zIndex="10"
        >
          {t('title').toUpperCase()},
        </Text>

        <Flex
          fontSize={{ base: 'medium', md: 'large' }}
          display="inline-block"
          width={{ base: '100%', md: '100%', lg: '80%' }}
        >
          <Text>{t('description_init')}</Text>
          <br />
          <Text as="span">{t('description_tech_init')}</Text>
          <Text as="span" color="var(--accent-hex)">
            {t('technology')}
          </Text>
          <Text as="span">{t('description_after_technology')}</Text>
          <Text as="span">{t('descrition_wellness_init')}</Text>
          <Text as="span" color="#03ea94">
            {t('wellness')}
          </Text>
          <Text as="span">{t('description_after_wellness')}</Text>
          <br />
          <br />
          <Text as="span">{t('description_cultural_understanding_init')}</Text>
          <Text as="span" color="#ff9f24">
            {t('cultural_understanding')}
          </Text>
          &nbsp;
          <Text as="span">{t('description_after_cultural_understanding')}</Text>
          <Text as="span">
            {t('description_creative_expression_init')}
          </Text>{' '}
          <Text as="span" color="#B400FF">
            {t('creative_expression')}
          </Text>
          <Text as="span">{t('description_after_creative_expression')}</Text>
        </Flex>
        <Flex
          gap={2}
          marginTop="20px"
          justifyContent={['flex-start', 'flex-start', 'flex-start']}
        >
          <Image
            alt="YouTube icon"
            src="/hello-icon-youtube.svg"
            width="26px"
            height="16px"
          />
          <Image
            alt="Mic icon"
            src="/icon-mic.svg"
            width="14px"
            height="14px"
          />
        </Flex>
      </Flex>

      <Image
        alt="Circle"
        src="/Circle_icons_circle_icons_dark_blue.svg"
        boxSize={{ base: '72', md: '80', lg: '96' }}
        objectFit="cover"
        position="relative"
        zIndex="1"
        top={{ base: '0', lg: '10%' }}
        alignSelf={{ base: 'center', lg: 'flex-start' }}
      />
    </Flex>
  )
}

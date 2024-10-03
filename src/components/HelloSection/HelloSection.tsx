import { Flex, Text, Image } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function HelloSection() {
  const t = useTranslations('Hello')
  return (
    <Flex
      direction={['column', 'column', 'column', 'row']}
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      color="var(--foreground-hex)"
      paddingX={12}
      paddingY={20}
      fontWeight={500}
      gap={12}
    >
      <Flex direction="column">
        <Text
          fontSize={{ base: 'large', md: 'x-large' }}
          color="var(--accent-hex)"
          paddingBottom={12}
        >
          {t('title').toUpperCase()},
        </Text>

        <Flex
          fontSize={{ base: 'medium', md: 'large' }}
          display="block"
          width={{ base: '100%', md: 'auto', lg: '32rem' }}
        >
          <Text>{t('description_init')}</Text>
          <br />
          <Text as="span">{t('description_tech_init')}</Text>
          <Text as="span" color="var(--accent-hex)">
            {t('technology')}
          </Text>
          <Text as="span">{t('description_after_technology')}</Text>
          <Text as="span">{t('descrition_wellness_init')}</Text>
          <Text as="span" color="var(--green-hex)">
            {t('wellness')}
          </Text>
          <Text as="span">{t('description_after_wellness')}</Text>
          <br />
          <br />
          <Text as="span">{t('description_cultural_understanding_init')}</Text>
          <Text as="span" color="var(--orange-hex)">
            {t('cultural_understanding')}
          </Text>
          &nbsp;
          <Text as="span">{t('description_after_cultural_understanding')}</Text>
          <Text as="span">
            {t('description_creative_expression_init')}
          </Text>{' '}
          <Text as="span" color="var(--purple-hex)">
            {t('creative_expression')}
          </Text>
          <Text as="span">{t('description_after_creative_expression')}</Text>
        </Flex>
        <Flex gap={2} marginTop="20px" justifyContent="flex-start">
          <Image alt="YouTube icon" src="/hello-icon-youtube.svg" boxSize={6} />
          <Image alt="Mic icon" src="/icon-mic.svg" boxSize={6} />
        </Flex>
      </Flex>

      <Image
        alt="Circle"
        src="/Circle_icons_circle_icons_dark_blue.svg"
        boxSize={{ base: '72', md: '96' }}
      />
    </Flex>
  )
}

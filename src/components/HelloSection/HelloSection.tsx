import { Flex, Text, Image } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function HelloSection() {
  const t = useTranslations('Hello')
  return (
    <Flex
      direction={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="space-between"
      textAlign="left"
      color="#e6e6e6"
      padding={12}
      gap={2}
    >
      <Flex direction="column" fontWeight={500}>
        <Text
          fontSize={{ base: 'large', md: 'x-large' }}
          display="flex"
          alignItems="center"
          color="#02e5f3"
          paddingBottom={12}
        >
          {t('title').toUpperCase()},
        </Text>

        <Text
          fontSize={{ base: 'medium', md: 'large' }}
          display="inline-block"
          width={{ base: '100%', md: '80%' }}
        >
          <Text as="span">{t('description_init')}</Text>
          <br />
          <br />
          <Text as="span">{t('description_tech_init')}</Text>
          <Text as="span" color="var(--accent-hex)">
            {t('technology')}
          </Text>{' '}
          <Text as="span">{t('description_after_technology')}</Text>
          <br />
          <br />
          <Text as="span">{t('descrition_wellness_init')}</Text>
          <Text as="span" color="#03ea94">
            {t('wellness')}
          </Text>{' '}
          <Text as="span">{t('description_after_wellness')}</Text>
          <br />
          <br />
          <Text as="span">{t('description_cultural_understanding_init')}</Text>
          <Text as="span" color="#ff9f24">
            {t('cultural_understanding')}.
          </Text>
          &nbsp;
          <Text as="span">{t('description_after_cultural_understanding')}</Text>
          <br />
          <br />
          <Text as="span">
            {t('description_creative_expression_init')}
          </Text>{' '}
          <Text as="span" color="#B400FF">
            {t('creative_expression')}
          </Text>
          <Text as="span">{t('description_after_creative_expression')}</Text>
        </Text>
        <Flex
          gap="10px"
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
        display={{ base: 'none', md: 'block' }}
        alt="Circle"
        src="/Circle_icons_circle_icons_dark_blue.svg"
        boxSize={{ base: '52', md: 'md', lg: 'lg' }}
        objectFit="cover"
        position="relative"
        top="-10%"
        alignSelf="center"
      />
    </Flex>
  )
}

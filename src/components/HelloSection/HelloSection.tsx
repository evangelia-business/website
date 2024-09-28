import { Box, Flex, Text, Image } from '@chakra-ui/react'

export default function HelloSection() {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      textAlign="left"
      fontSize="16px"
      color="#e6e6e6"
      padding={10}
      gap={2}
    >
      <Flex
        direction="column"
        position="relative"
        top={{ base: '0', md: '-30%' }}
      >
        <Text
          fontSize={['48px', '20px']}
          lineHeight="150%"
          fontWeight="500"
          display="flex"
          alignItems="center"
          height="48px"
          color="#02e5f3"
        >
          HELLO,
        </Text>

        <Text
          lineHeight="150%"
          fontWeight="500"
          display="inline-block"
          width="100%"
          maxWidth="372px"
        >
          <Text as="span">Lorem ipsum dolor sit </Text>
          <Text as="span" color="#02e5f3">
            amet
          </Text>
          <Text as="span">
            , consectetur adipiscing elit, sed do eiusmod tempory,{' '}
          </Text>
          <Text as="span" color="#ff9f24">
            Lorem
          </Text>
          <Text as="span"> ipsum dolor sit </Text>
          <Text as="span" color="#03ea94">
            amet
          </Text>
          <Text as="span">, consectetur adipiscing Lorem ipsum dolor sit </Text>
          <Text as="span" color="#b400ff">
            amet
          </Text>
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
        width="382px"
        height="342px"
        objectFit="cover"
        position="relative"
        top="-40%"
      />
    </Flex>
  )
}

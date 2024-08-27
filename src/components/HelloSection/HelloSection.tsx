import { Box, Flex, Text, Image } from '@chakra-ui/react'

export default function HelloSection() {
  return (
    <Box
      width="100%"
      position="relative"
      height={['auto', 'auto', '278px']}
      textAlign="left"
      fontSize="16px"
      color="#e6e6e6"
      padding={['10px', '10px', '0']}
    >
      <Box
        position={['relative', 'relative', 'absolute']}
        top={['0', '0', '38px']}
        left={['0', '0', '325px']}
        width={['100%', '100%', 'calc(100% - 325px)']}
        maxWidth={['none', 'none', '600px']}
      >
        <Box
          width="181px"
          height="40px"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          paddingBottom="29px"
          fontSize="18px"
          color="#02e5f3"
        >
          <Text
            fontSize={['48px', '20px']}
            lineHeight="150%"
            fontWeight="500"
            display="flex"
            alignItems="center"
            height="48px"
          >
            HELLO,
          </Text>
        </Box>
        <Text
          position="relative"
          top="20px"
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
          position="relative"
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
      </Box>
      <Box
        position="absolute"
        top="-87px"
        right="0"
        width="382px"
        height="342px"
        display={['none', 'none', 'block']}
      >
        <Image
          alt="Circle"
          src="/Circle_icons_circle_icons_dark_blue.svg"
          width="382px"
          height="342px"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}

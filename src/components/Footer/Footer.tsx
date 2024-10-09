'use client'

import { Image, Flex, Text, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      as="footer"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      paddingY={3}
      paddingX={2}
    >
      <Image
        paddingLeft={12}
        height="30px"
        src="/logo_offwhite.svg"
        alt="Company Logo"
      />
      <Flex direction="row" fontSize={14}>
        <Text paddingX={2}>© 2024 Thessaloniki, Greece</Text>|
        <Text paddingX={2}>Terms & Conditions </Text> |
        <Text paddingX={2}>Privavy Policy</Text>
      </Flex>
      <Flex gap={5} alignItems="center" padding="0px 20px" fontSize={6}>
        <Link
          role="link"
          data-testid="youtube"
          href="https://www.youtube.com/@Evangelia.Mitsopoulou"
          isExternal
        >
          <Image alt="YouTube icon" src="/hello-icon-youtube.svg" boxSize={6} />
        </Link>
        <Link
          role="link"
          data-testid="linkedin"
          href="https://www.linkedin.com/in/evangelia-mitsopoulou-5765135/"
          isExternal
        >
          <Image alt="Mic icon" src="/linkedin.svg" boxSize={5} />
        </Link>
      </Flex>
    </Flex>
  )
}

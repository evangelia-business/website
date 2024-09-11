import { Box, Flex, Text, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './HelloSection.module.css'

export default function HelloSection() {
  return (
    <Flex
      className={styles.helloSection}
      direction={['column', 'column', 'row']}
      position="relative"
      height={['auto', 'auto', '278px']}
      color="#e6e6e6"
      padding={['20px', '20px', '0']}
    >
      <Flex
        direction="column"
        flex={1}
        zIndex={1}
        marginTop={['0', '0', '38px']}
        marginLeft={['0', '0', '325px']}
        maxWidth={['none', 'none', '600px']}
      >
        <Text
          className={styles.hello}
          fontSize={['24px', '24px', '24px']} // You can change the font size as you wish to adjust for screen sizes
          color="#02e5f3"
          marginBottom="29px"
        >
          HELLO,
        </Text>
        <Text className={styles.description} maxWidth="372px">
          Lorem ipsum dolor sit <span className={styles.cyan}>amet</span>,
          consectetur adipiscing elit, sed do eiusmod tempory,{' '}
          <span className={styles.orange}>Lorem</span> ipsum dolor sit{' '}
          <span className={styles.green}>amet</span>, consectetur adipiscing
          Lorem ipsum dolor sit <span className={styles.purple}>amet</span>
        </Text>
        <Flex gap="10px" marginTop="20px">
          <ChakraImage
            alt="YouTube icon"
            src="/hello-icon-youtube.svg"
            width="26px"
            height="16px"
          />
          <ChakraImage
            alt="Mic icon"
            src="/icon-mic.svg"
            width="14px"
            height="14px"
          />
        </Flex>
      </Flex>
      <Box
        className={styles.circleImage}
        position="absolute"
        top={['-20px', '-20px', '-87px']}
        right="0"
        width={['200px', '200px', '382px']}
        height={['179px', '179px', '342px']}
      >
        <Image
          alt="Circle"
          src="/Circle_icons_circle_icons_dark_blue.svg"
          fill
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Flex>
  )
}

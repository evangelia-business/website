import { Flex, Box, Button, Spacer } from '@chakra-ui/react'
import Image from "next/image";

import styles from './banner.module.css'

export default function Banner() {
    return (
        <Flex className={styles.bannerContainer} >
            <Flex direction='column'>
                <Flex direction="row">
                    <Box className={styles.titleLeft}> PHILOMATH</Box>
                    <Image className= {styles.techIcon} src='/tech.svg' width="25" height="25" alt="Company Logo" />
                </Flex>


                <Box className={styles.subtitleLeft}> The Coding Academy for Frontend Engineers</Box>
            </Flex>

            <Spacer />

            <Flex alignItems='flexEnd'>
                <Box className={styles.titleRight}>
                    Motto for Customers to convince them to buy the product
                </Box>
            </Flex>
        </Flex>
    )
}
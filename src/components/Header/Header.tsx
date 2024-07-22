import { Flex, Box, Spacer, Grid, GridItem } from '@chakra-ui/react'
import Image from "next/image";

import Menu from '@/components/Menu/menu'
import Banner from '@/components/Banner/banner';

import styles from './header.module.css'

export default function Header() {
    return (
        <Grid className={styles.background}>
            <GridItem w='100%' h='0' colStart={1}>
                <Flex gap='1' alignItems='top'>
                    <Box backgroundSize={{ base: "cover", md: "auto" }}>
                        <Image className={styles.logo} src='/logo.svg' width="245" height="65" alt="Company Logo" />
                    </Box>
                    <Spacer />
                    <Box >
                        <Menu />
                    </Box>
                </Flex>
            </GridItem>
            <GridItem colStart={1}>
                <Banner></Banner>
            </GridItem>
        </Grid>
    )
}
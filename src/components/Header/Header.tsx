import { Flex, Box, Spacer } from '@chakra-ui/react'
import Image from "next/image";

import Menu from '@/components/Menu/menu'

import styles from './header.module.css'

export default function Header() {
    return (
        <Flex gap='2' alignItems='top' className={styles.background}>
            <Box>
                <Image className = {styles.logo} src='/logo.svg' width="245" height="65" alt="Company Logo" />
            </Box>
            <Spacer />
            <Box p='6' >
                <Menu />
            </Box>
        </Flex>

    )
}
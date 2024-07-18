import { Flex, Box, Spacer } from '@chakra-ui/react'
import Image from "next/image";

import Menu from '@/components/Menu/Menu';
import styles from './header.module.css'

export default function Header() {
    return (
        <Flex gap='2' alignItems='top' className={styles.background}>
            <Box>
                <Image src='/logo.svg' width="300" height="90" alt="Company Logo" />
            </Box>
            <Spacer />
            <Box p='6' >
                <Menu />
            </Box>
        </Flex>

    )
}
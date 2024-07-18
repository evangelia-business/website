import { Flex, Box, Spacer } from '@chakra-ui/react'
import Image from "next/image";

export default function Banner() {
    return (
        <Flex gap='2' alignItems='top' style={{ backgroundImage: `url('dotted_pattern.svg')`, backgroundSize: `65%`, height: `17rem ` }}>
            <Box style={{paddingTop:15, paddingLeft:0}}>
                <Image src='/logo.svg' width="300" height="90" alt="Company Logo" />
            </Box>
            <Spacer />
            <Box p='6' >
                Navigation Menu
            </Box>
        </Flex>

    )
}
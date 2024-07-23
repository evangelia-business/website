import { Flex, Box, Button, Spacer, Text, Grid, GridItem, } from '@chakra-ui/react'
import Image from "next/image";

import styles from './banner.module.css'


export default function Banner() {
    return (
        <Grid templateColumns={{ base: "1fr", md: "2fr 3fr", lg: '2fr 1.5fr' }} className={styles.bannerContainer} >

            <GridItem order={{ base: 2, md: 1 }}>
                <Flex direction='column'>
                    <Flex direction="row" justifyContent={['center', 'center', 'flex-start', 'flex-start']}>
                        <Box className={styles.titleLeft}><Text>PHILOMATH </Text></Box>
                        <Image className={styles.techIcon} src='/tech.svg' width="25" height="25" alt="Company Logo" />
                    </Flex>
                    <Box className={styles.subTitleLeft} paddingBottom={['0.5rem', '0.5rem', '2.5rem', '2.5rem' ]}>
                        <Text fontSize={['0.9rem', '1.125rem', '1.125rem', '1.125rem']} display={{ base: 'none', md: 'block' }}> The Coding Academy for Frontend Engineers</Text>
                    </Box>
                    <Box textAlign={['center', 'center', 'left', 'left']}>
                        <Button colorScheme='brand' bg='primary' size="xs">Joiny my courses</Button>
                    </Box>

                </Flex>
            </GridItem>


            <GridItem order={{ base: 1, md: 2 }} >

                <Box className={styles.titleRight}>
                    <Text
                        fontSize={['1.2rem', '1.2rem', '1.6rem', '1.875rem']}
                        textAlign={['center', 'center', 'end', 'end']}
                        paddingTop= {['1.75rem', '1.75rem', '0.5', '0']}
                        paddingBottom= {['1.3rem', '1.3rem', '0', '0']}
                        paddingRight= {['1.5rem', '1.5rem', '0', '0']}
                        paddingLeft= {['1.5rem', '1.5rem', '0', '0']}
                        >
                        Motto for Customers to convince them to buy the product
                    </Text>
                </Box>

            </GridItem>

        </Grid>
    )
}
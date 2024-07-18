import { Flex, Spacer } from '@chakra-ui/react'

import styles from './menu.module.css'

export default function Menu() {
  return (

    <Flex as='nav' gap="5">
        <a className={styles.menuitem} href='https://www.evangelia.me'>Home</a>
        <Spacer/>
        <a className = {styles.menuitem} href='https://tech.evangelia.me'> Philomath </a>
    </Flex>
 
  );
}

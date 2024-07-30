// styles/theme.js or themes/theme.js
import { extendTheme, ThemeConfig, StyleFunctionProps } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  cssVarPrefix: 'evangelia',
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: '#00DCFF',
    },
    primary: '#00DCFF',
    body: {
      500: '#101425',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '3px',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#101425' : 'white',
      },
    }),
  },
})

export default theme

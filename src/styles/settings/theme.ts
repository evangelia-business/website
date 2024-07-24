// styles/theme.js or themes/theme.js
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "evangelia",
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: "#00DCFF",
    },
    primary: "#00DCFF",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "3px",
      },
    },
  },
});

export default theme;

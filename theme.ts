import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.950" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
        lineHeight: "tall",
      },
      "*::selection": {
        bg: "teal.300",
        color: "gray.900",
      },
    }),
  },
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  semanticTokens: {
    colors: {
      brand: {
        50: "#e6fffa",
        100: "#b2f5ea",
        200: "#81e6d9",
        300: "#4fd1c5",
        400: "#38b2ac",
        500: "#319795",
        600: "#2c7a7b",
        700: "#285e61",
        800: "#234e52",
        900: "#1d4044",
      },
    },
  },
});

export default theme;

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    night: {
      950: "#04050a",
      900: "#080a12",
      800: "#0d1019",
      700: "#12151f",
      600: "#191d2b",
      500: "#232838",
      400: "#343a4f",
    },
    brand: {
      50: "#eef1ff",
      100: "#e0e4ff",
      200: "#c7cdff",
      300: "#a5adfd",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#302b81",
    },
    accent: {
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "night.950",
        color: "whiteAlpha.900",
      },
      body: {
        lineHeight: "tall",
      },
      "*::selection": {
        bg: "brand.500",
        color: "white",
      },
      "::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },
      "::-webkit-scrollbar-track": {
        bg: "night.950",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "night.500",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        bg: "brand.600",
      },
    },
  },
  fonts: {
    heading: "var(--font-sans), Inter, system-ui, sans-serif",
    body: "var(--font-sans), Inter, system-ui, sans-serif",
    mono: "var(--font-mono), 'JetBrains Mono', monospace",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "full",
      },
    },
    Container: {
      baseStyle: {
        maxW: "7xl",
      },
    },
  },
});

export default theme;

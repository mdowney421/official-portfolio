"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="night.950" color="whiteAlpha.900" overflowX="hidden">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}

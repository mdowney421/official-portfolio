"use client";

import { useEffect } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import theme from "@/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      startEvent: "load",
    });
  }, []);

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" bg="gray.50" color="gray.900">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}

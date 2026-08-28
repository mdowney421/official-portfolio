"use client";

import { Box } from "@chakra-ui/react";
import { MotionBox } from "./motion-utils";

export function BackgroundFx() {
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={-1}
      overflow="hidden"
      pointerEvents="none"
      aria-hidden
    >
      <Box position="absolute" inset={0} className="grid-overlay" />

      <MotionBox
        position="absolute"
        top="-10%"
        left="-10%"
        w={{ base: "60vw", md: "40vw" }}
        h={{ base: "60vw", md: "40vw" }}
        borderRadius="full"
        bg="brand.600"
        opacity={0.18}
        filter="blur(120px)"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionBox
        position="absolute"
        top="20%"
        right="-15%"
        w={{ base: "70vw", md: "35vw" }}
        h={{ base: "70vw", md: "35vw" }}
        borderRadius="full"
        bg="accent.500"
        opacity={0.14}
        filter="blur(140px)"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionBox
        position="absolute"
        bottom="-10%"
        left="30%"
        w={{ base: "50vw", md: "30vw" }}
        h={{ base: "50vw", md: "30vw" }}
        borderRadius="full"
        bg="brand.400"
        opacity={0.1}
        filter="blur(120px)"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </Box>
  );
}

export default BackgroundFx;

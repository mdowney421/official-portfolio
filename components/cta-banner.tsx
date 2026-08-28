"use client";

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { MotionLink, Reveal } from "./motion-utils";

export function CtaBanner() {
  return (
    <Box as="section" py={{ base: 16, md: 20 }} px={4}>
      <Container maxW="6xl">
        <Reveal
          position="relative"
          overflow="hidden"
          borderRadius="3xl"
          className="aurora-bg"
          px={{ base: 8, md: 16 }}
          py={{ base: 14, md: 20 }}
          textAlign="center"
        >
          <Box position="absolute" inset={0} bg="blackAlpha.400" />
          <Stack spacing={6} position="relative" align="center">
            <Heading as="h2" size="2xl" color="white" letterSpacing="-0.02em" maxW="2xl">
              Have a project in mind?
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.900" maxW="xl">
              Let&apos;s talk about what you&apos;re building — I&apos;ll tell you honestly whether
              I&apos;m the right fit.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} pt={2}>
              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                px={8}
                py={3.5}
                borderRadius="full"
                bg="white"
                color="night.950"
                fontWeight="semibold"
              >
                Start a project
              </MotionLink>
              <MotionLink
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                px={8}
                py={3.5}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.600"
                color="white"
                fontWeight="semibold"
              >
                See the work
              </MotionLink>
            </Stack>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}

export default CtaBanner;

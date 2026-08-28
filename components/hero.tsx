"use client";

import { Box, Container, Flex, HStack, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { MotionBox, MotionLink, MotionSpan } from "./motion-utils";
import { CodeWindow } from "./code-window";
import { SocialLinks } from "./social-links";
import { allSkills } from "@/lib/content";

const floatingBadges = [allSkills[1] ?? "React", allSkills[0] ?? "TypeScript", "AWS"];

export function Hero() {
  return (
    <Box as="section" id="home" position="relative" pt={{ base: 32, md: 40 }} pb={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 16, lg: 10 }} alignItems="center">
          <Stack spacing={7}>
            <MotionBox
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              display="inline-flex"
              alignItems="center"
              gap={2}
              alignSelf="flex-start"
              px={4}
              py={2}
              borderRadius="full"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
              fontSize="sm"
            >
              <MotionSpan
                display="inline-block"
                w="8px"
                h="8px"
                borderRadius="full"
                bg="accent.400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Text color="whiteAlpha.800">Open for select projects</Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Heading as="h1" size="3xl" lineHeight="1.05" letterSpacing="-0.02em">
                I build software
                <br />
                that <Box as="span" className="gradient-text">ships and scales.</Box>
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Text fontSize="lg" color="whiteAlpha.700" maxW="34rem">
                I&apos;m Matt Downey, a full-stack software engineer who partners with teams and
                founders to design, build, and ship reliable web applications — senior-level
                engineering without the overhead of a big agency.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                <MotionLink
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  px={7}
                  py={3.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.500, accent.400)"
                  color="white"
                  fontWeight="semibold"
                  textAlign="center"
                  boxShadow="0 10px 40px -12px rgba(99, 102, 241, 0.6)"
                >
                  Start a project
                </MotionLink>
                <MotionLink
                  href="#work"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  px={7}
                  py={3.5}
                  borderRadius="full"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  fontWeight="semibold"
                  textAlign="center"
                >
                  View my work
                </MotionLink>
              </Stack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              pt={2}
            >
              <SocialLinks />
            </MotionBox>
          </Stack>

          <Box position="relative" display={{ base: "none", lg: "flex" }} justifyContent="center">
            <CodeWindow />

            <MotionBox
              position="absolute"
              top="-8%"
              right="-6%"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1, duration: 0.6 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              bg="night.800"
              border="1px solid"
              borderColor="whiteAlpha.100"
              borderRadius="xl"
              px={4}
              py={2}
              boxShadow="lg"
            >
              <HStack spacing={2}>
                <Box w="8px" h="8px" borderRadius="full" bg="green.400" />
                <Text fontSize="xs" fontFamily="mono" color="whiteAlpha.700">
                  build passing
                </Text>
              </HStack>
            </MotionBox>

            {floatingBadges.map((badge, index) => (
              <MotionBox
                key={badge}
                position="absolute"
                bottom={`${8 + index * 16}%`}
                left={index % 2 === 0 ? "-8%" : undefined}
                right={index % 2 !== 0 ? "-10%" : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{
                  opacity: { delay: 1.2 + index * 0.15, duration: 0.5 },
                  scale: { delay: 1.2 + index * 0.15, duration: 0.5 },
                  y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" },
                }}
                bg="night.800"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="lg"
                px={3}
                py={1.5}
                fontFamily="mono"
                fontSize="xs"
                color="brand.300"
                boxShadow="md"
                display={{ base: "none", xl: "block" }}
              >
                {badge}
              </MotionBox>
            ))}
          </Box>
        </SimpleGrid>
      </Container>

      <Flex justify="center" mt={{ base: 12, md: 20 }} display={{ base: "none", md: "flex" }}>
        <MotionLink
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          color="whiteAlpha.400"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </MotionLink>
      </Flex>
    </Box>
  );
}

export default Hero;

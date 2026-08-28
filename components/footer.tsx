"use client";

import { Box, Container, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { SocialLinks } from "./social-links";
import { social } from "@/lib/content";

const sitemap = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <Box as="footer" borderTop="1px solid" borderColor="whiteAlpha.100" pt={14} pb={8}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={12}>
          <Stack spacing={4} maxW="20rem">
            <HStack spacing={2}>
              <Box
                w="28px"
                h="28px"
                borderRadius="md"
                bgGradient="linear(to-br, brand.500, accent.400)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontFamily="mono"
                fontSize="xs"
                fontWeight="bold"
                color="white"
              >
                MD
              </Box>
              <Text fontWeight="semibold">Matt Downey</Text>
            </HStack>
            <Text fontSize="sm" color="whiteAlpha.600">
              Full-stack software engineer helping teams design, build, and ship reliable web
              applications.
            </Text>
            <SocialLinks size="sm" />
          </Stack>

          <Stack spacing={3}>
            <Text fontSize="sm" fontWeight="semibold" color="whiteAlpha.800">
              Sitemap
            </Text>
            {sitemap.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontSize="sm"
                color="whiteAlpha.600"
                _hover={{ color: "brand.300", textDecor: "none" }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <Stack spacing={3}>
            <Text fontSize="sm" fontWeight="semibold" color="whiteAlpha.800">
              Contact
            </Text>
            <Link
              href="#contact"
              fontSize="sm"
              color="whiteAlpha.600"
              _hover={{ color: "brand.300", textDecor: "none" }}
            >
              Contact form
            </Link>
            <Link
              href={social.github}
              isExternal
              fontSize="sm"
              color="whiteAlpha.600"
              _hover={{ color: "brand.300", textDecor: "none" }}
            >
              GitHub
            </Link>
            <Link
              href={social.linkedin}
              isExternal
              fontSize="sm"
              color="whiteAlpha.600"
              _hover={{ color: "brand.300", textDecor: "none" }}
            >
              LinkedIn
            </Link>
          </Stack>
        </SimpleGrid>

        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={3}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
        >
          <Text fontSize="xs" color="whiteAlpha.500">
            © {new Date().getFullYear()} Matt Downey. All rights reserved.
          </Text>
          <Text fontSize="xs" color="whiteAlpha.500" fontFamily="mono">
            Built with Next.js, TypeScript &amp; Chakra UI
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

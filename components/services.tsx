"use client";

import { Box, Container, HStack, Heading, List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Reveal } from "./motion-utils";
import { services } from "@/lib/content";

const icons = [
  <path key="a" d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  <path
    key="b"
    d="M12 3 3 8l9 5 9-5-9-5zM3 16l9 5 9-5M3 12l9 5 9-5"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="c"
    d="M12 20V10m0 0 4 4m-4-4-4 4M5 6h14"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
  <path
    key="d"
    d="M12 2 3 6v6c0 5 4 8.5 9 10 5-1.5 9-5 9-10V6l-9-4z"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />,
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Services() {
  return (
    <Box as="section" id="services" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <Reveal maxW="2xl" mx="auto" textAlign="center" mb={{ base: 12, md: 16 }}>
          <Text color="accent.400" fontFamily="mono" fontSize="sm" mb={3}>
            What I do
          </Text>
          <Heading as="h2" size="2xl" letterSpacing="-0.02em">
            Services built around shipped software
          </Heading>
          <Text mt={4} fontSize="lg" color="whiteAlpha.700">
            Not just advice — working software, delivered by one senior engineer who owns the
            outcome end to end.
          </Text>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              position="relative"
              p={8}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="whiteAlpha.50"
              overflow="hidden"
              _hover={{ borderColor: "brand.500", transform: "translateY(-4px)" }}
              sx={{ transition: "border-color 0.3s ease, transform 0.3s ease" }}
            >
              <Box
                w="52px"
                h="52px"
                borderRadius="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient="linear(to-br, brand.600, accent.500)"
                color="white"
                mb={5}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {icons[index % icons.length]}
                </svg>
              </Box>

              <Heading as="h3" size="md" mb={3}>
                {service.title}
              </Heading>
              <Text color="whiteAlpha.700" mb={5}>
                {service.description}
              </Text>

              <List spacing={2}>
                {service.deliverables.map((item) => (
                  <ListItem key={item}>
                    <HStack align="flex-start" fontSize="sm" color="whiteAlpha.600" spacing={2}>
                      <Box color="accent.400" mt={0.5} flexShrink={0}>
                        <CheckIcon />
                      </Box>
                      <Text as="span">{item}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Services;

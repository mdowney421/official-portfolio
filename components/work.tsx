"use client";

import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Reveal } from "./motion-utils";
import { TiltCard } from "./tilt-card";
import { projectGroups } from "@/lib/content";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="11"
        width="14"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const [featuredGroup] = projectGroups;

export function Work() {
  return (
    <Box as="section" id="work" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <Reveal maxW="2xl" mx="auto" textAlign="center" mb={{ base: 12, md: 16 }}>
          <Text color="accent.400" fontFamily="mono" fontSize="sm" mb={3}>
            Selected work
          </Text>
          <Heading as="h2" size="2xl" letterSpacing="-0.02em">
            {featuredGroup.title}
          </Heading>
          <Text mt={4} fontSize="lg" color="whiteAlpha.700">
            {featuredGroup.description}
          </Text>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {featuredGroup.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <TiltCard
                role="group"
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                bg="whiteAlpha.50"
                overflow="hidden"
                h="full"
              >
                {project.image ? (
                  <Box position="relative" overflow="hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      objectFit="cover"
                      w="100%"
                      h="220px"
                      filter={project.status === "in-development" ? "grayscale(0.3)" : undefined}
                      transition="transform 0.5s ease"
                      _groupHover={{ transform: "scale(1.05)" }}
                    />
                    {project.status === "in-development" ? (
                      <HStack
                        position="absolute"
                        top={3}
                        left={3}
                        spacing={2}
                        px={3}
                        py={1.5}
                        borderRadius="full"
                        bg="blackAlpha.700"
                        backdropFilter="blur(6px)"
                        border="1px solid"
                        borderColor="whiteAlpha.300"
                      >
                        <Box
                          w="6px"
                          h="6px"
                          borderRadius="full"
                          bg="orange.400"
                          boxShadow="0 0 0 3px rgba(251,146,60,0.3)"
                        />
                        <Text fontSize="xs" fontWeight="semibold" color="white" letterSpacing="wide">
                          IN DEVELOPMENT
                        </Text>
                      </HStack>
                    ) : null}
                  </Box>
                ) : null}

                <Box p={7}>
                  <Stack spacing={4}>
                    <Heading as="h3" size="lg">
                      {project.title}
                    </Heading>
                    <Text color="whiteAlpha.700">{project.description}</Text>

                    {project.outcome ? (
                      <HStack
                        align="flex-start"
                        p={3}
                        borderRadius="lg"
                        bg={project.status === "in-development" ? "orange.900" : "brand.900"}
                        border="1px solid"
                        borderColor={project.status === "in-development" ? "orange.700" : "brand.700"}
                      >
                        <Box
                          color={project.status === "in-development" ? "orange.300" : "accent.300"}
                          mt={0.5}
                          flexShrink={0}
                        >
                          {project.status === "in-development" ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path
                                d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
                            </svg>
                          )}
                        </Box>
                        <Text fontSize="sm" color="whiteAlpha.800">
                          {project.outcome}
                        </Text>
                      </HStack>
                    ) : null}

                    <HStack flexWrap="wrap" spacing={2}>
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          bg="whiteAlpha.100"
                          color="whiteAlpha.700"
                          fontWeight="normal"
                          textTransform="none"
                          borderRadius="md"
                          px={2}
                          py={0.5}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>

                    <HStack flexWrap="wrap" spacing={4} pt={1}>
                      {project.links.map((link) =>
                        link.url ? (
                          <HStack
                            as="a"
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            spacing={1}
                            fontSize="sm"
                            fontWeight="semibold"
                            color="brand.300"
                            _hover={{ color: "accent.300" }}
                          >
                            <Text>{link.label}</Text>
                            <ExternalLinkIcon />
                          </HStack>
                        ) : (
                          <HStack key={link.label} spacing={1} fontSize="sm" color="whiteAlpha.500">
                            <LockIcon />
                            <Text fontWeight="semibold">{link.label}</Text>
                            {link.note && <Text fontWeight="normal">· {link.note}</Text>}
                          </HStack>
                        )
                      )}
                    </HStack>
                  </Stack>
                </Box>
              </TiltCard>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Work;

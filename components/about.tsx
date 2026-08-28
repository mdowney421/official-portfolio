"use client";

import {
  Box,
  Button,
  Collapse,
  Container,
  Heading,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Reveal } from "./motion-utils";
import { certifications, experience, resumeUrl, skillGroups } from "@/lib/content";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function About() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="section" id="about" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }}>
          <Reveal>
            <Text color="accent.400" fontFamily="mono" fontSize="sm" mb={3}>
              About me
            </Text>
            <Heading as="h2" size="2xl" letterSpacing="-0.02em" mb={6}>
              The engineer behind the work
            </Heading>

            <Stack spacing={4} color="whiteAlpha.700" fontSize="lg" maxW="34rem" mb={8}>
              <Text>
                I&apos;m a results-driven software engineer with a background in engineering,
                focused on building high-impact web applications that solve real problems. I enjoy
                breaking complex challenges into maintainable systems and delivering consistent
                value through clean, thoughtful code.
              </Text>
              <Text>
                Today, I lead full-stack development for enterprise applications and collaborate
                closely with product, analytics, and engineering teams to deliver reliable,
                scalable solutions.
              </Text>
              <Text>
                I&apos;m also an avid, early adopter of AI-assisted development — I build it into
                planning, scaffolding, code review, and testing to move faster on every engagement
                without cutting corners on quality.
              </Text>
            </Stack>

            <HStack
              align="flex-start"
              spacing={4}
              p={5}
              borderRadius="xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="whiteAlpha.50"
              maxW="34rem"
            >
              <Box
                w="40px"
                h="40px"
                flexShrink={0}
                borderRadius="lg"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgGradient="linear(to-br, brand.600, accent.500)"
                color="white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
                </svg>
              </Box>
              <Box>
                <Text fontWeight="semibold" mb={1}>
                  AI-accelerated, not AI-replaced
                </Text>
                <Text fontSize="sm" color="whiteAlpha.600">
                  I use modern AI tooling daily to speed up delivery — the judgment, architecture,
                  and quality bar are still all mine.
                </Text>
              </Box>
            </HStack>
          </Reveal>

          <Stack spacing={10}>
            <Reveal delay={0.1}>
              <Heading as="h3" size="md" mb={6}>
                Experience
              </Heading>
              <Stack spacing={0} position="relative" pl={6} borderLeft="2px solid" borderColor="whiteAlpha.100">
                {experience.map((role) => (
                  <Box key={role.company} position="relative" pb={8}>
                    <Box
                      position="absolute"
                      left="-31px"
                      top="4px"
                      w="12px"
                      h="12px"
                      borderRadius="full"
                      bg="brand.400"
                      boxShadow="0 0 0 4px rgba(99,102,241,0.2)"
                    />
                    <Text fontFamily="mono" fontSize="xs" color="accent.400" mb={1}>
                      {role.timeframe}
                    </Text>
                    <Heading as="h4" size="sm" mb={1}>
                      {role.title}
                    </Heading>
                    <Text fontSize="sm" fontWeight="medium" color="whiteAlpha.600" mb={3}>
                      {role.company}
                    </Text>
                    <List spacing={2}>
                      {role.highlights.map((highlight) => (
                        <ListItem key={highlight}>
                          <HStack align="flex-start" fontSize="sm" color="whiteAlpha.700" spacing={2}>
                            <Box color="accent.400" mt={0.5} flexShrink={0}>
                              <CheckIcon />
                            </Box>
                            <Text as="span">{highlight}</Text>
                          </HStack>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Stack>
            </Reveal>

            <Reveal delay={0.15}>
              <Heading as="h3" size="md" mb={4}>
                Certifications
              </Heading>
              <List spacing={2} mb={6}>
                {certifications.map((cert) => (
                  <ListItem key={cert}>
                    <HStack align="flex-start" fontSize="sm" color="whiteAlpha.700" spacing={2}>
                      <Box color="accent.400" mt={0.5} flexShrink={0}>
                        <CheckIcon />
                      </Box>
                      <Text as="span">{cert}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>

              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as="a"
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  bgGradient="linear(to-r, brand.500, accent.400)"
                  color="white"
                >
                  View full résumé
                </Button>
                <Button size="sm" variant="outline" borderColor="whiteAlpha.300" onClick={onToggle}>
                  {isOpen ? "Hide full toolkit" : "View full toolkit"}
                </Button>
              </HStack>

              <Collapse in={isOpen} animateOpacity>
                <Stack spacing={5} mt={6}>
                  {skillGroups.map((group) => (
                    <Box key={group.title}>
                      <Text fontSize="xs" textTransform="uppercase" letterSpacing="wide" color="whiteAlpha.500" mb={2}>
                        {group.title}
                      </Text>
                      <Wrap spacing={2}>
                        {group.skills.map((skill) => (
                          <WrapItem key={skill}>
                            <Tag size="sm" bg="whiteAlpha.100" color="whiteAlpha.700">
                              {skill}
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                  ))}
                </Stack>
              </Collapse>
            </Reveal>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default About;

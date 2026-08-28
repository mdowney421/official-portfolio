"use client";

import { Box, Container, Text } from "@chakra-ui/react";
import { allSkills } from "@/lib/content";

const featured = allSkills.filter((skill) =>
  [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Tailwind CSS",
    "GitHub",
  ].includes(skill)
);

const track = [...featured, ...featured];

export function LogosMarquee() {
  return (
    <Box as="section" py={{ base: 12, md: 16 }} borderY="1px solid" borderColor="whiteAlpha.100">
      <Container maxW="7xl" mb={6}>
        <Text textAlign="center" fontSize="sm" letterSpacing="wide" textTransform="uppercase" color="whiteAlpha.500">
          Building with tools trusted across the industry
        </Text>
      </Container>

      <Box
        overflow="hidden"
        position="relative"
        sx={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <Box className="marquee-track">
          {track.map((skill, index) => (
            <Box
              key={`${skill}-${index}`}
              flexShrink={0}
              mx={3}
              px={5}
              py={2.5}
              borderRadius="full"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="whiteAlpha.50"
              fontFamily="mono"
              fontSize="sm"
              color="whiteAlpha.700"
              whiteSpace="nowrap"
            >
              {skill}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LogosMarquee;

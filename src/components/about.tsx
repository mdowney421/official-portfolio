import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Box
      as="section"
      id="about"
      py={20}
      bg={useColorModeValue("white", "gray.950")}
    >
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" textAlign="center" pb={10}>
          About Me
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={12}
          alignItems="center"
        >
          <Stack spacing={6}>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              I'm a results-driven software engineer with a background in
              engineering, focused on building high-impact web applications that
              solve real problems. I enjoy breaking down complex challenges into
              maintainable systems and delivering consistent value through
              clean, thoughtful code.
            </Text>

            <Text
              fontSize="lg"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              Today, I lead full-stack development for enterprise applications
              and collaborate closely with product, analytics, and engineering
              teams to deliver reliable, scalable solutions.
            </Text>

            <Text
              fontSize="lg"
              color={useColorModeValue("gray.700", "gray.200")}
            >
              Outside of work, I enjoy learning about modern architecture
              patterns, mentoring engineers, and exploring ways to make tooling
              and workflows more efficient.
            </Text>
          </Stack>

          <Box display="flex" justifyContent="center">
            <Image
              src="pictureofme.jpg"
              maxW="260px"
              borderRadius="2xl"
              boxShadow="lg"
              alt="Headshot of Matt Downey"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AboutMe;

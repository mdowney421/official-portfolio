"use client";

import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import LinkContainer from "./linkContainer";

const Welcome = () => {
  const accent = useColorModeValue("brand.600", "brand.300");

  return (
    <Box as="section" id="home" minH={{ base: "100vh", md: "calc(100vh - 80px)" }} py={{ base: 20, md: 0 }} display="flex" alignItems="center">
      <Container maxW="container.lg">
        <Stack spacing={8} align="center" textAlign="center">
          <Heading as="h1" size="3xl" maxW="30rem">
            Hi, I’m{" "}
            <Text as="span" color={accent}>
              Matt Downey
            </Text>
            .
          </Heading>

          <Heading
            as="h2"
            size="lg"
            fontWeight="normal"
            maxW="34rem"
            color="gray.600"
          >
            Senior software engineer building reliable, scalable full-stack web
            applications.
          </Heading>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            align="center"
          >
            <Button as="a" href="#projects" colorScheme="brand" size="lg">
              View projects
            </Button>
            <Button as="a" href="#contact" size="lg" variant="outline">
              Let&apos;s connect
            </Button>
          </Stack>

          <LinkContainer />
        </Stack>
      </Container>
    </Box>
  );
};

export default Welcome;

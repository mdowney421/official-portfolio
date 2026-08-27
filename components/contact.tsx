"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import GithubLink from "./githubLink";
import LinkedInLink from "./linkedinLink";

const Contact = () => {
  const buttonBg = useColorModeValue("gray.900", "whiteAlpha.900");
  const buttonColor = useColorModeValue("white", "gray.900");

  return (
    <Box
      as="section"
      id="contact"
      bg={useColorModeValue("gray.50", "gray.900")}
      py={20}
    >
      <Container maxW="container.md" textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>
          Let&apos;s Connect
        </Heading>
        <Text
          fontSize="lg"
          mb={8}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Interested in working together or just want to say hello? I&apos;m always
          happy to chat.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          justify="center"
          spacing={4}
          mb={6}
        >
          <Button
            as={Link}
            href="mailto:mattdowney421@gmail.com"
            leftIcon={<EmailIcon />}
            bg={buttonBg}
            color={buttonColor}
            _hover={{ opacity: 0.85 }}
          >
            Email me
          </Button>
          <Button
            as={Link}
            href="https://docs.google.com/document/d/e/2PACX-1vRLUWCD9iOwOk0RZbmal_23kDpqp2jHNgw2vPlLURkHEwRvX6i-C67hxe7qxg3SbsRM50NMhiQAO32X/pub"
            isExternal
            leftIcon={<ExternalLinkIcon />}
          >
            View resume
          </Button>
        </Stack>
        <HStack justify="center" spacing={8}>
          <GithubLink />
          <LinkedInLink />
        </HStack>
      </Container>
    </Box>
  );
};

export default Contact;

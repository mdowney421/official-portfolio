"use client";

import React from "react";
import { HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import GithubLink from "./githubLink";
import LinkedInLink from "./linkedinLink";
import { EmailIcon } from "@chakra-ui/icons";

const LinkContainer = () => {
  const iconColor = useColorModeValue("gray.700", "gray.200");

  return (
    <HStack justify="center" spacing={6}>
      <GithubLink />

      <IconButton
        aria-label="Send email"
        icon={<EmailIcon boxSize="50px" />}
        width="50px"
        height="50px"
        variant="ghost"
        color={iconColor}
        onClick={() =>
          (window.location.href = "mailto:mattdowney421@gmail.com")
        }
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="1000"
      />

      <LinkedInLink />
    </HStack>
  );
};

export default LinkContainer;

import React from "react";
import { Box, Container, Text, Link, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={8} bg={useColorModeValue("gray.100", "gray.900")}> 
      <Container maxW="container.lg" textAlign="center">
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}> 
          © {new Date().getFullYear()} Matt Downey. Built with React and Chakra UI.
        </Text>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}> 
          <Link href="https://github.com/mdowney421" isExternal>
            View source
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;

"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MotionBox, MotionLink } from "./motion-utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <Link href="#home" display="flex" alignItems="center" gap={3} _hover={{ textDecor: "none" }}>
      <Flex
        w="36px"
        h="36px"
        align="center"
        justify="center"
        borderRadius="lg"
        bgGradient="linear(to-br, brand.500, accent.400)"
        fontWeight="bold"
        fontSize="sm"
        color="white"
        fontFamily="mono"
      >
        MD
      </Flex>
      <Box display={{ base: "none", sm: "block" }}>
        <Text fontWeight="semibold" fontSize="md" lineHeight="1.1">
          Matt Downey
        </Text>
        <Text fontSize="xs" color="whiteAlpha.500" lineHeight="1.1">
          Full-Stack Engineering
        </Text>
      </Box>
    </Link>
  );
}

function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1300}
      transition="all 0.3s ease"
      bg={scrolled ? "rgba(8,10,18,0.75)" : "transparent"}
      backdropFilter={scrolled ? "saturate(180%) blur(16px)" : "none"}
      borderBottom="1px solid"
      borderColor={scrolled ? "whiteAlpha.100" : "transparent"}
    >
      <Flex maxW="7xl" mx="auto" py={4} px={{ base: 4, md: 8 }} align="center" justify="space-between">
        <Logo />

        {isDesktop ? (
          <HStack spacing={8}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontWeight="medium"
                fontSize="sm"
                color="whiteAlpha.800"
                position="relative"
                _hover={{ textDecor: "none", color: "white" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        ) : null}

        {isDesktop ? (
          <MotionLink
            href="#contact"
            fontSize="sm"
            fontWeight="semibold"
            bgGradient="linear(to-r, brand.500, accent.400)"
            color="white"
            px={5}
            py={2}
            borderRadius="full"
            _hover={{ opacity: 0.9, textDecor: "none" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a project
          </MotionLink>
        ) : (
          <IconButton
            aria-label="Open navigation menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onOpen}
          />
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg="blackAlpha.700" />
        <DrawerContent bg="night.900" color="white">
          <DrawerCloseButton />
          <DrawerBody pt={16}>
            <Stack spacing={6}>
              {navLinks.map((link, index) => (
                <MotionBox
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    fontSize="2xl"
                    fontWeight="semibold"
                    onClick={onClose}
                    _hover={{ color: "brand.300", textDecor: "none" }}
                  >
                    {link.label}
                  </Link>
                </MotionBox>
              ))}
              <Button
                as="a"
                href="#contact"
                onClick={onClose}
                mt={4}
                bgGradient="linear(to-r, brand.500, accent.400)"
                color="white"
              >
                Start a project
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default NavigationBar;

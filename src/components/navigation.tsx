import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const bg = useColorModeValue("rgba(255,255,255,0.8)", "rgba(17,24,39,0.7)");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg={bg}
      backdropFilter="saturate(180%) blur(12px)"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Flex maxW="7xl" mx="auto" py={4} px={{ base: 4, md: 8 }} align="center" justify="space-between">
        <Link href="#home" fontWeight="semibold" fontSize="lg">
          Matt Downey
        </Link>

        {isDesktop ? (
          <HStack spacing={6}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontWeight="medium"
                _hover={{ textDecor: "none", color: "brand.600" }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        ) : (
          <IconButton
            aria-label="Open navigation menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            onClick={onOpen}
          />
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  fontSize="lg"
                  fontWeight="medium"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavigationBar;

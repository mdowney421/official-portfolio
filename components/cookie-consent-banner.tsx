"use client";

import { Box, Button, Container, HStack, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  applyConsent,
  getStoredConsent,
  OPEN_COOKIE_PREFERENCES_EVENT,
  storeConsent,
  type ConsentChoice,
} from "@/lib/consent";
import NextLink from "next/link";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reads localStorage, unavailable during SSR, so this can't be computed
    // during render without risking a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!getStoredConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
    return () =>
      window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    storeConsent(choice);
    applyConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      position="fixed"
      left={4}
      right={4}
      bottom={4}
      zIndex={60}
      maxW="2xl"
      mx="auto"
      p={5}
      bg="night.800"
      border="1px solid"
      borderColor="whiteAlpha.200"
      borderRadius="lg"
      boxShadow="dark-lg"
    >
      <Container maxW="none" p={0}>
        <HStack align="center" justify="space-between" spacing={6} flexWrap="wrap">
          <Text fontSize="sm" color="whiteAlpha.700" flex="1 1 320px">
            This site uses Google Analytics to understand how it&apos;s used.
            It only runs if you say yes, and you can change your mind anytime
            from the link in the footer. See the{" "}
            <Link as={NextLink} href="/privacy" color="brand.300">
              privacy policy
            </Link>{" "}
            for details.
          </Text>
          <HStack spacing={3} flexShrink={0}>
            <Button
              size="sm"
              variant="outline"
              borderColor="whiteAlpha.500"
              bg="whiteAlpha.50"
              color="whiteAlpha.900"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => choose("denied")}
            >
              Decline
            </Button>
            <Button
              size="sm"
              bgGradient="linear(to-r, brand.500, accent.400)"
              color="white"
              onClick={() => choose("granted")}
            >
              Accept
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}

export default CookieConsentBanner;

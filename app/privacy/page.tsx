"use client";

import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import NavigationBar from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <NavigationBar />
      <Box as="main" py={{ base: 20, md: 28 }}>
        <Container maxW="3xl">
          <Heading as="h1" size="xl" mb={2}>
            Privacy Policy
          </Heading>
          <Text color="whiteAlpha.500" fontSize="sm" mb={10}>
            Last updated August 2026
          </Text>

          <VStack align="stretch" spacing={8} color="whiteAlpha.800">
            <Box>
              <Heading as="h2" size="md" mb={2} color="accent.400">
                What we collect
              </Heading>
              <Text>
                This site doesn&apos;t require an account. Browsing the
                portfolio doesn&apos;t send us any personal information. If
                you use the contact form, we receive whatever you write along
                with the email address you provide, so we can reply.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2} color="accent.400">
                Cookies and analytics
              </Heading>
              <Text mb={3}>
                We use Google Analytics to understand which pages get
                visited, so we can improve the site. Google Analytics is off
                by default: it only sets cookies and starts measuring after
                you accept analytics cookies in the banner shown on your
                first visit. If you decline, no Google Analytics cookies are
                set and no analytics data is sent for you.
              </Text>
              <Text>
                We also use Vercel Analytics and Vercel Speed Insights to
                track overall traffic and page performance. These run
                without cookies or any personal identifiers and don&apos;t
                require consent.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2} color="accent.400">
                Your choices
              </Heading>
              <Text>
                You can change your analytics cookie choice at any time using
                the &quot;Cookie preferences&quot; link in the footer of any
                page.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2} color="accent.400">
                Third parties
              </Heading>
              <Text>
                We share data with Google (Google Analytics) and Vercel
                (hosting, analytics, and speed insights) only as described
                above. We don&apos;t sell your data or use it for
                advertising.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="md" mb={2} color="accent.400">
                Contact
              </Heading>
              <Text>
                Questions about this policy? Reach out through the{" "}
                <Link as={NextLink} href="/#contact" color="brand.300">
                  contact form
                </Link>
                .
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

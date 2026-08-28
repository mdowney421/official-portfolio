"use client";

import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { MotionButton, Reveal } from "./motion-utils";
import { SocialLinks } from "./social-links";

const fieldStyles = {
  bg: "whiteAlpha.50",
  borderColor: "whiteAlpha.200",
  _hover: { borderColor: "whiteAlpha.400" },
  _focusVisible: { borderColor: "brand.400", boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)" },
};

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "New build",
    message: "",
    company: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Couldn't send your message. Please try again.");
      }

      setStatus("sent");
      setForm({ name: "", email: "", projectType: "New build", message: "", company: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Couldn't send your message.");
    }
  };

  return (
    <Box as="section" id="contact" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 14, lg: 20 }}>
          <Reveal>
            <Text color="accent.400" fontFamily="mono" fontSize="sm" mb={3}>
              Get in touch
            </Text>
            <Heading as="h2" size="2xl" letterSpacing="-0.02em" mb={5}>
              Let&apos;s build something great
            </Heading>
            <Text fontSize="lg" color="whiteAlpha.700" mb={8} maxW="30rem">
              Tell me about your project — what you&apos;re building, where you&apos;re stuck, or
              what you need shipped. I aim to reply within a couple of business days.
            </Text>

            <SocialLinks />
          </Reveal>

          <Reveal delay={0.1}>
            <Box
              as="form"
              onSubmit={handleSubmit}
              p={{ base: 6, md: 8 }}
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              bg="whiteAlpha.50"
            >
              <Stack spacing={5}>
                <Input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  position="absolute"
                  left="-9999px"
                  width="1px"
                  height="1px"
                  opacity={0}
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Name</FormLabel>
                  <Input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" {...fieldStyles} />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    {...fieldStyles}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm">Project type</FormLabel>
                  <Select name="projectType" value={form.projectType} onChange={handleChange} {...fieldStyles}>
                    <option style={{ color: "black" }}>New build</option>
                    <option style={{ color: "black" }}>Ongoing support</option>
                    <option style={{ color: "black" }}>Consulting / audit</option>
                    <option style={{ color: "black" }}>Something else</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm">Message</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you building?"
                    rows={5}
                    {...fieldStyles}
                  />
                </FormControl>

                <MotionButton
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                  py={3.5}
                  borderRadius="full"
                  bgGradient="linear(to-r, brand.500, accent.400)"
                  color="white"
                  fontWeight="semibold"
                  textAlign="center"
                  border="none"
                  cursor={status === "sending" ? "not-allowed" : "pointer"}
                  opacity={status === "sending" ? 0.7 : 1}
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </MotionButton>

                {status === "sent" ? (
                  <Text fontSize="sm" color="accent.300" textAlign="center">
                    Thanks — your message is on its way. I&apos;ll reply within a couple of business
                    days.
                  </Text>
                ) : null}

                {status === "error" ? (
                  <Text fontSize="sm" color="orange.300" textAlign="center">
                    {errorMessage} Please try again in a moment, or reach out on LinkedIn.
                  </Text>
                ) : null}
              </Stack>
            </Box>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Contact;

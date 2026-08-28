"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { MotionBox, Reveal } from "./motion-utils";
import { processSteps } from "@/lib/content";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    function measure() {
      const container = containerRef.current;
      const first = firstDotRef.current;
      const last = lastDotRef.current;
      if (!container || !first || !last) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      const left = firstRect.left + firstRect.width / 2 - containerRect.left;
      const right = lastRect.left + lastRect.width / 2 - containerRect.left;
      setLine({ left, width: Math.max(right - left, 0) });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const fillWidth = useTransform(scrollYProgress, [0, 1], [0, line?.width ?? 0]);

  return (
    <Box as="section" id="process" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <Reveal maxW="2xl" mx="auto" textAlign="center" mb={{ base: 14, md: 20 }}>
          <Text color="accent.400" fontFamily="mono" fontSize="sm" mb={3}>
            How it works
          </Text>
          <Heading as="h2" size="2xl" letterSpacing="-0.02em">
            A process built to remove surprises
          </Heading>
          <Text mt={4} fontSize="lg" color="whiteAlpha.700">
            Five stages, tight feedback loops, and no black boxes.
          </Text>
        </Reveal>

        <Box ref={containerRef} position="relative">
          {line ? (
            <>
              <Box
                display={{ base: "none", lg: "block" }}
                position="absolute"
                top="24px"
                left={`${line.left}px`}
                width={`${line.width}px`}
                height="2px"
                bg="whiteAlpha.100"
              />
              <MotionBox
                display={{ base: "none", lg: "block" }}
                position="absolute"
                top="24px"
                left={`${line.left}px`}
                height="2px"
                bgGradient="linear(to-r, brand.400, accent.400)"
                style={{ width: fillWidth }}
              />
            </>
          ) : null}

          <SimpleGrid columns={{ base: 1, lg: 5 }} spacing={{ base: 10, lg: 6 }}>
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1} position="relative" zIndex={1}>
                <Box
                  ref={index === 0 ? firstDotRef : index === processSteps.length - 1 ? lastDotRef : undefined}
                  w="48px"
                  h="48px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="brand.400"
                  bg="night.900"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="mono"
                  fontWeight="bold"
                  color="brand.300"
                  mb={4}
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>
                <Heading as="h3" size="sm" mb={2}>
                  {step.title}
                </Heading>
                <Text fontSize="sm" color="whiteAlpha.600">
                  {step.description}
                </Text>
              </Reveal>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default Process;

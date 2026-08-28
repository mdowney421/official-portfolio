"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./motion-utils";
import { stats } from "@/lib/content";

function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(() => (/\d+/.test(value) ? "0" : value));

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/\d+/);
    if (!match) return;
    const target = Number(match[0]);
    const suffix = value.replace(match[0], "");
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(`${Math.round(latest)}${suffix}`),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <Text ref={ref} fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" className="gradient-text" fontFamily="mono">
      {display}
    </Text>
  );
}

export function Stats() {
  return (
    <Box as="section" py={{ base: 16, md: 20 }} borderY="1px solid" borderColor="whiteAlpha.100" bg="whiteAlpha.50">
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 8, md: 6 }}>
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} textAlign="center">
              <StatValue value={stat.value} />
              <Text mt={2} fontSize="sm" color="whiteAlpha.600" maxW="14rem" mx="auto">
                {stat.label}
              </Text>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Stats;

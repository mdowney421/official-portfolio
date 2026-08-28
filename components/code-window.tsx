"use client";

import { useEffect, useState } from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { MotionBox } from "./motion-utils";

const codeLines = [
  { indent: 0, text: "type Engagement = {" },
  { indent: 1, text: "scope: \"mvp\" | \"feature\" | \"audit\";" },
  { indent: 1, text: "stack: \"next.js\" | \"node\" | \"aws\";" },
  { indent: 1, text: "outcome: \"shipped\";" },
  { indent: 0, text: "};" },
  { indent: 0, text: "" },
  { indent: 0, text: "async function buildProduct(brief: Brief) {" },
  { indent: 1, text: "const plan = await scope(brief);" },
  { indent: 1, text: "const app = await build(plan);" },
  { indent: 1, text: "return deploy(app); // 🚀" },
  { indent: 0, text: "}" },
];

const fullText = codeLines.map((line) => "  ".repeat(line.indent) + line.text).join("\n");

function useTypewriter(text: string, speed = 18) {
  const [count, setCount] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? text.length
      : 0
  );

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      return;
    }

    const interval = setInterval(() => {
      setCount((current) => {
        if (current >= text.length) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return text.slice(0, count);
}

function highlight(line: string) {
  const keywords = ["type", "async", "function", "await", "const", "return"];
  const parts = line.split(/(\s+)/);
  return parts.map((part, index) => {
    if (keywords.includes(part)) {
      return (
        <Text as="span" key={index} color="brand.300">
          {part}
        </Text>
      );
    }
    if (part.startsWith("//")) {
      return (
        <Text as="span" key={index} color="whiteAlpha.400">
          {part}
        </Text>
      );
    }
    return (
      <Text as="span" key={index} color="whiteAlpha.800">
        {part}
      </Text>
    );
  });
}

export function CodeWindow() {
  const typed = useTypewriter(fullText);
  const lines = typed.split("\n");

  return (
    <MotionBox
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ rotate: 0, scale: 1.01 }}
      bg="night.800"
      border="1px solid"
      borderColor="whiteAlpha.100"
      borderRadius="2xl"
      boxShadow="0 30px 80px -20px rgba(79, 70, 229, 0.45)"
      overflow="hidden"
      w="full"
      maxW="480px"
      fontFamily="mono"
    >
      <HStack px={4} py={3} bg="night.700" spacing={2} borderBottom="1px solid" borderColor="whiteAlpha.100">
        <Box w="10px" h="10px" borderRadius="full" bg="#ff5f56" />
        <Box w="10px" h="10px" borderRadius="full" bg="#ffbd2e" />
        <Box w="10px" h="10px" borderRadius="full" bg="#27c93f" />
        <Text fontSize="xs" color="whiteAlpha.500" pl={2}>
          engagement.ts
        </Text>
      </HStack>

      <VStack align="stretch" spacing={0} p={5} fontSize="sm" lineHeight="1.9" minH="260px">
        {lines.map((line, index) => (
          <HStack key={index} align="flex-start" spacing={3}>
            <Text color="whiteAlpha.300" userSelect="none" minW="1.5em" textAlign="right">
              {index + 1}
            </Text>
            <Text as="pre" whiteSpace="pre-wrap" fontFamily="mono" m={0}>
              {highlight(line)}
              {index === lines.length - 1 && (
                <Box as="span" display="inline-block" w="2px" h="1em" bg="accent.400" ml="1px" animation="blink 1s step-end infinite" />
              )}
            </Text>
          </HStack>
        ))}
      </VStack>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </MotionBox>
  );
}

export default CodeWindow;

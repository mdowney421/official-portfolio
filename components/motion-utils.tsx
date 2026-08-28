"use client";

import type { ComponentProps, ComponentType, FC } from "react";
import { motion, isValidMotionProp, type HTMLMotionProps } from "framer-motion";
import { chakra, shouldForwardProp, type HTMLChakraProps } from "@chakra-ui/react";

function motionChakra<Tag extends "div" | "span" | "a" | "button">(
  Component: ComponentType<HTMLMotionProps<Tag>>
) {
  const Chakra = chakra(Component, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return Chakra as unknown as FC<
    Omit<HTMLChakraProps<Tag>, keyof HTMLMotionProps<Tag>> & HTMLMotionProps<Tag>
  >;
}

export const MotionBox = motionChakra<"div">(motion.div);
export const MotionSpan = motionChakra<"span">(motion.span);
export const MotionLink = motionChakra<"a">(motion.a);
export const MotionButton = motionChakra<"button">(motion.button);

export type MotionBoxProps = ComponentProps<typeof MotionBox>;

type RevealProps = MotionBoxProps & {
  delay?: number;
  y?: number;
  children: React.ReactNode;
};

export function Reveal({ children, delay = 0, y = 24, ...rest }: RevealProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}

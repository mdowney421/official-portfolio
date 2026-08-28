"use client";

import { useScroll, useSpring } from "framer-motion";
import { MotionBox } from "./motion-utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <MotionBox
      style={{ scaleX, transformOrigin: "0%" }}
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="3px"
      bgGradient="linear(to-r, brand.400, accent.400)"
      zIndex={1400}
      pointerEvents="none"
    />
  );
}

export default ScrollProgress;

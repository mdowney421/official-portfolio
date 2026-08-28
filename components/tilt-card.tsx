"use client";

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { MotionBox, type MotionBoxProps } from "./motion-utils";

export function TiltCard({ children, ...rest }: MotionBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 150, damping: 26 });
  const springY = useSpring(y, { stiffness: 150, damping: 26 });

  const rotateX = useTransform(springY, [0, 1], [2, -2]);
  const rotateY = useTransform(springX, [0, 1], [-2, 2]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <MotionBox
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}

export default TiltCard;

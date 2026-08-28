"use client";

import { HStack } from "@chakra-ui/react";
import { MotionLink } from "./motion-utils";
import { social } from "@/lib/content";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        fill="currentColor"
      />
    </svg>
  );
}

const links = [
  { label: "GitHub profile", href: social.github, icon: <GithubIcon />, external: true },
  { label: "LinkedIn profile", href: social.linkedin, icon: <LinkedInIcon />, external: true },
];

const sizeMap = { sm: "36px", md: "44px", lg: "52px" } as const;

export function SocialLinks({ size = "md", spacing = 3 }: { size?: keyof typeof sizeMap; spacing?: number }) {
  const boxSize = sizeMap[size];

  return (
    <HStack spacing={spacing}>
      {links.map((link, index) => (
        <MotionLink
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          aria-label={link.label}
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={boxSize}
          h={boxSize}
          borderRadius="full"
          border="1px solid"
          borderColor="whiteAlpha.200"
          color="whiteAlpha.800"
          bg="whiteAlpha.50"
          _hover={{ bg: "brand.500", borderColor: "brand.400", color: "white" }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
        >
          {link.icon}
        </MotionLink>
      ))}
    </HStack>
  );
}

export default SocialLinks;

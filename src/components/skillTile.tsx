import React from "react";
import { Text, Box } from "@chakra-ui/react";

interface skillTileProps {
  skill: string;
}

const SkillTile = ({ skill }: skillTileProps) => {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.5)"
      p="0.5rem"
      m="0.25rem"
      borderRadius="1.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      data-aos="fade-up"
    >
      <Text textAlign="center" textColor="gray.300" data-aos="fade-up">
        {skill}
      </Text>
    </Box>
  );
};

export default SkillTile;

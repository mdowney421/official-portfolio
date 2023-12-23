import React from "react";
import { Text, Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface skillTileProps {
    skill: {
        name: string,
        proficiency: number
    }
}

const SkillTile = ({skill}: skillTileProps) => {
    return (
        <Box 
            bg='rgba(0, 0, 0, 0.5)' 
            p='1rem' 
            m='0.25rem' 
            borderRadius='1.5rem' 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            alignItems='center' 
        >
            <Text textAlign='center' textColor='gray.300'>
                {skill.name}
            </Text>
            <CircularProgress value={skill.proficiency}>
                <CircularProgressLabel color='white'>{skill.proficiency}%</CircularProgressLabel>
            </CircularProgress>
        </Box>
    )
}

export default SkillTile
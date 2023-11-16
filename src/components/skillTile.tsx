import React from "react";
import { Avatar, Text, Container, Center } from "@chakra-ui/react";

interface skillTileProps {
    skillName: string
}

const SkillTile = ({skillName}: skillTileProps) => {
    return (
        <Center bg='rgba(0, 0, 0, 0.5)' p='1rem' m='0.25rem' borderRadius='1.5rem' width='7rem'>
            <Container centerContent>
                <Text textAlign='center' textColor='gray.300'>
                    {skillName}
                </Text>
            </Container>
        </Center>
    )
}

export default SkillTile
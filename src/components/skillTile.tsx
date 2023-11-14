import React from "react";
import { Avatar, Text, Container, Center } from "@chakra-ui/react";

interface skillTileProps {
    skillName: string
}

const SkillTile = ({skillName}: skillTileProps) => {
    return (
        <Center bg='green.600' p='1rem'>
            <Container>
                <Avatar name={skillName} src={'../media/' + skillName + '.png'} />
                <Text textAlign='center'>
                    {skillName}
                </Text>
            </Container>
        </Center>
    )
}

export default SkillTile
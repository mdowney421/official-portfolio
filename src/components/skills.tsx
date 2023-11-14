import React from "react";
import { Heading, Container, Center, VStack, HStack } from "@chakra-ui/react";
import SkillTile from "./skillTile";

const Skills = () => {

    const skillList = ['HTML', 'CSS', 'JavaScript', 'Typescript']

    return (
        <Center bg='blue.600' maxWidth='100%' h='100vh'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center'>
                    some things i know
                </Heading>
                <VStack>
                    <HStack>
                        {skillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </HStack>
                </VStack>
            </Container>
        </Center>
    )
}

export default Skills

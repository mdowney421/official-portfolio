import React from "react";
import { Heading, Container, Center, HStack, VStack, Text, Divider } from "@chakra-ui/react";
import SkillTile from "./skillTile";

const Skills = () => {

    const languagesSkillList = ['HTML', 'CSS', 'JavaScript', 'Typescript']
    const frontEndSkillList = ['jQuery', 'React', 'Bootstrap', 'ChakraUI']
    const backEndSkillList = ['Express.js', 'Node.js', 'Django', 'FastAPI', 'Flask']
    const databaseSkillList = ['SQL', 'NoSQL', 'PostgreSQL', 'MongoDB']
    const VCandDevOpsSkillList = ['Git', 'Github', 'Gitlab', 'AWS']

    
    return (
        <Center maxWidth='100%' h='100vh' id='skills'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem'>
                    some things i know
                </Heading>
                <HStack justifyContent='center'>
                    <VStack>
                        {languagesSkillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </VStack>
                    <Center height='18rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <VStack>
                        {frontEndSkillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </VStack>
                    <Center height='22rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <VStack>
                        {backEndSkillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </VStack>
                    <Center height='22rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <VStack>
                        {databaseSkillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </VStack>
                    <Center height='18rem'>
                        <Divider orientation='vertical' />
                    </Center>
                    <VStack>
                        {VCandDevOpsSkillList.map((skill) => {
                            return (
                                <SkillTile skillName={skill} />
                            )
                        })}
                    </VStack>
                </HStack>
            </Container>
        </Center>
    )
}

export default Skills

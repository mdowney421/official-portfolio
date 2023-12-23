import React from "react";
import { Heading, Container, Center, Flex } from "@chakra-ui/react";
import SkillTile from "./skillTile";

const Skills = () => {

    const skillList = [
        {name: 'HTML', proficiency: 100},
        {name: 'CSS', proficiency: 100},
        {name: 'JavaScript', proficiency: 100},
        {name: 'Typescript', proficiency: 100},
        {name: 'Python', proficiency: 100},
        {name: 'Java', proficiency: 30},
        {name: 'jQuery', proficiency: 100},
        {name: 'React', proficiency: 95},
        {name: 'Bootstrap', proficiency: 100},
        {name: 'ChakraUI', proficiency: 100},
        {name: 'VSCode', proficiency: 100},
        {name: 'Express.js', proficiency: 90},
        {name: 'Node.js', proficiency: 90},
        {name: 'Django', proficiency: 80},
        {name: 'FastAPI', proficiency: 90},
        {name: 'Flask', proficiency: 90},
        {name: 'Spring Boot', proficiency: 30},
        {name: 'SQL', proficiency: 90},
        {name: 'NoSQL', proficiency: 85},
        {name: 'PostgreSQL', proficiency: 90},
        {name: 'MongoDB', proficiency: 85},
        {name: 'Databricks', proficiency: 65},
        {name: 'Git', proficiency: 100},
        {name: 'Github', proficiency: 100},
        {name: 'Gitlab', proficiency: 100},
        {name: 'AWS', proficiency: 50},
        {name: 'PyCharm', proficiency: 100},
    ]
    
    return (
        <Center maxWidth='100%' h='100%' mb='10rem' id='skills'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem'>
                    some things i know
                </Heading>
                <Flex wrap='wrap' justifyContent='center'>
                    {skillList.map((skill) => {
                        return (
                            <SkillTile skill={skill} />
                        )
                    })}
                </Flex>
            </Container>
        </Center>
    )
}

export default Skills

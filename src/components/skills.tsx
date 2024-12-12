import React from "react";
import { Heading, Container, Center, Flex } from "@chakra-ui/react";
import SkillTile from "./skillTile";

const Skills = () => {

    const skillList = [
        'HTML',
        'CSS',
        'JavaScript',
        'Typescript',
        'Python',
        'Java',
        'jQuery',
        'React',
        'Bootstrap',
        'ChakraUI',
        'VSCode',
        'Express.js',
        'Node.js',
        'Django',
        'FastAPI',
        'Flask',
        'Spring Boot',
        'SQL',
        'NoSQL',
        'PostgreSQL',
        'MongoDB',
        'Databricks',
        'Git',
        'Github',
        'Gitlab',
        'AWS',
        'PyCharm',
    ]
    
    return (
        <Center maxWidth='100%' h='100%' mb='10rem' id='skills'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem' data-aos='fade-up'>
                    some things i know
                </Heading>
                <Flex wrap='wrap' justifyContent='center'>
                    {skillList.map((skill) => {
                        return (
                            <SkillTile key={skill} skill={skill} />
                        )
                    })}
                </Flex>
            </Container>
        </Center>
    )
}

export default Skills

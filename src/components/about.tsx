import React from "react";
import { Heading, Text, Container, Center } from "@chakra-ui/react";

const AboutMe = () => {
    return (
        <Center maxWidth='100%' h='100vh' id='about'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center'>
                    about me
                </Heading>
                <Text textAlign='center'>
                    as a results-driven software developer with an extensive background in engineering, i love solving complex challenges and building full-stack web applications. logic-minded by nature, i have a knack for breaking down large problems into smaller, solvable parts. i am self-motivated, team-oriented, and i get excited to write clean, scalable code. i strive to get better at what i do every day, so that i can positively influence others and make a real impact through my work.
                </Text>
            </Container>
        </Center>
    )
}

export default AboutMe

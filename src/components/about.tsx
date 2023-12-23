import React from "react";
import { Heading, Text, Container, Center, VStack, Image } from "@chakra-ui/react";

const AboutMe = () => {
    return (
        <Center maxWidth='100%' h='100vh' mb='10rem' id='about'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem'>
                    about me
                </Heading>
                <VStack>
                    <Text textAlign='center' fontSize='xl'>
                        as a <strong>results-driven</strong> software developer with an extensive <strong>background in engineering,</strong> i love solving complex challenges and building full-stack web applications. logic-minded by nature, i have a knack for <strong>breaking down large problems</strong> into smaller, solvable parts. i am <strong>self-motivated, team-oriented,</strong> and i get excited to write <strong>clean, scalable code.</strong> i strive to get better at what i do every day, so that i can positively influence others and make a real impact through my work.
                    </Text>
                    <Image src='pictureofme.jpg' boxSize='250px' borderRadius='full' mt='1rem' alt='picture of matt downey' />
                </VStack>
                
            </Container>
        </Center>
    )
}

export default AboutMe

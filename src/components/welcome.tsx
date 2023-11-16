import React from "react";
import { Heading, Container, Center } from "@chakra-ui/react";

const Welcome = () => {
    return (
        <Center maxWidth='100%' h='100vh' id='home'>
            <Container>
                <Heading as='h1' size='4xl' textAlign='center' pb='2.5rem'>
                    hi, i'm matt downey.
                </Heading>
                <Heading as='h2' size='2xl' textAlign='center'>
                    i build full-stack web applications.
                </Heading>
            </Container>
        </Center>
    )
}

export default Welcome

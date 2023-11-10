import React from "react";
import { Heading, Container, Center } from "@chakra-ui/react";

const Welcome = () => {
    return (
        <Center bg='blue.600' maxWidth='100%' h='100vh'>
            <Container>
                <Heading as='h1' size='4xl' textAlign='center'>
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

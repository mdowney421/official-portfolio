import React from "react";
import { Heading, Container, Center } from "@chakra-ui/react";
import LinkContainer from "./linkContainer";

const Welcome = () => {
    return (
        <Center maxWidth='100%' h='100vh' mb='10rem' id='home'>
            <Container>
                <Heading as='h1' size='4xl' textAlign='center' pb='2.5rem'>
                    hi, i'm matt downey.
                </Heading>
                <Heading as='h2' size='2xl' textAlign='center' pb='2.5rem'>
                    i build full-stack web applications.
                </Heading>
                <LinkContainer />
            </Container>
        </Center>
    )
}

export default Welcome

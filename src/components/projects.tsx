import React from "react";
import { Heading, Container, Center, VStack, Text } from "@chakra-ui/react";

const Projects = () => {

    return (
        <Center maxWidth='100%' h='100vh'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center'>
                    coding projects
                </Heading>
                <VStack>
                    <Text>
                        cool stuff here
                    </Text>
                </VStack>
            </Container>
        </Center>
    )
}

export default Projects

import React from "react";
import { 
    Heading, 
    Text, 
    Container, 
    Center, 
    HStack, 
    VStack, 
    UnorderedList, 
    ListItem, 
    Button,
    Link
} from "@chakra-ui/react";

const Experience = () => {
    return (
        <Center maxWidth='100%' h='100vh' id='experience'>
            <Container>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem'>
                    experience
                </Heading>
                <VStack>
                    <Heading as='h3' size='md'>
                        senior associate software engineer - Amgen
                    </Heading>
                    <Text>
                        october 2022 - present
                    </Text>
                    <Text>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                    <Heading as='h3' size='md'>
                        technical certifications:
                    </Heading>
                    <UnorderedList>
                        <ListItem>SAFe 5 Practitioner</ListItem>
                        <ListItem>SAFe 5 Agile Software Engineer</ListItem>
                        <ListItem>Advanced React by Meta</ListItem>
                        <ListItem>AWS Solutions Architect (in progress)</ListItem>
                    </UnorderedList>
                    <Link isExternal href="https://docs.google.com/document/d/e/2PACX-1vRLUWCD9iOwOk0RZbmal_23kDpqp2jHNgw2vPlLURkHEwRvX6i-C67hxe7qxg3SbsRM50NMhiQAO32X/pub">
                        <Button colorScheme='blackAlpha' textColor='green.100'>
                            see full resume
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Center>
    )
}

export default Experience

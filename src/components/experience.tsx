import React from "react";
import { 
    Heading, 
    Text, 
    Container, 
    Center, 
    VStack, 
    UnorderedList, 
    ListItem, 
    Button,
    Link
} from "@chakra-ui/react";

const Experience = () => {
    return (
        <Center maxWidth='100%' h='100vh' mb='10rem' id='experience' data-aos='fade-up'>
            <Container data-aos='fade-up'>
                <Heading as='h2' size='2xl' textAlign='center' pb='2rem' data-aos='fade-up'>
                    experience
                </Heading>
                <VStack>
                    <Heading as='h3' size='md' data-aos='fade-up'>
                        senior associate software engineer - Amgen
                    </Heading>
                    <Text mt='1rem' data-aos='fade-up'>
                        october 2022 - present
                    </Text>
                    <Text mt='1rem' textAlign='justify' data-aos='fade-up'>
                        as a Senior Associate Software Engineer at Amgen, i perform full-stack development for our proprietary web-based business analytics platform. i drive technical innovation, collaborate cross-functionally to address challenges, and optimize platform performance. my role directly influences our company's success by delivering cutting-edge solutions for data-driven decision-making.
                    </Text>
                    <Heading as='h3' size='md' mt='1.5rem' data-aos='fade-up'>
                        technical certifications:
                    </Heading>
                    <UnorderedList>
                        <ListItem data-aos='fade-up'>SAFe 5 Practitioner</ListItem>
                        <ListItem data-aos='fade-up'>SAFe 5 Agile Software Engineer</ListItem>
                        <ListItem data-aos='fade-up'>Advanced React by Meta</ListItem>
                        <ListItem data-aos='fade-up'>AWS Solutions Architect (in progress)</ListItem>
                    </UnorderedList>
                    <Link isExternal href="https://docs.google.com/document/d/e/2PACX-1vRLUWCD9iOwOk0RZbmal_23kDpqp2jHNgw2vPlLURkHEwRvX6i-C67hxe7qxg3SbsRM50NMhiQAO32X/pub">
                        <Button colorScheme='blackAlpha' textColor='green.100' mt='1.5rem' data-aos='fade-up'>
                            see full resume
                        </Button>
                    </Link>
                </VStack>
            </Container>
        </Center>
    )
}

export default Experience

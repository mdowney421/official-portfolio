import React from "react";
import { Heading, Container, Center, VStack, HStack, Box, Image, Text, Divider } from "@chakra-ui/react";

const Projects = () => {

    return (
        <Center maxWidth='100%' h='100%' id='projects'>
            <Container mb='5rem'>
                <Heading as='h2' size='2xl' textAlign='center'>
                    coding projects
                </Heading>
                <VStack>
                    <HStack mt='2rem' mb='0.5rem'>
                        <Image 
                            src="pumpedup.png" 
                            borderRadius='full' 
                            boxSize='150px' 
                            objectFit='cover' 
                            mr='1rem'
                            alt='screenshot of pumped up application' 
                        />
                        <Box>
                            <Heading as='h3' size='md'>
                                PumpedUp - fitness tracker
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem'>
                                workout tracking app with full user authorization. users can log workouts, see workout history, and track key metrics.
                            </Text>
                            <Text fontWeight='bold'>
                                tech stack - ejs, bootstrap, express, mongodb
                            </Text>
                        </Box>
                    </HStack>
                    <Divider />
                    <HStack mt='1rem' mb='0.5rem'>
                        <Box>
                            <Heading as='h3' size='md'>
                                Civil Discourse - social media site
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem'>
                                social media app that pulls current news from an API. users can like, dislike, or comment on articles and downvote misinformative comments.
                            </Text>
                            <Text fontWeight='bold'>
                                tech stack - PERN stack
                            </Text>
                        </Box>
                        <Image 
                            src="civildiscourse.png" 
                            borderRadius='full' 
                            boxSize='150px' 
                            objectFit='cover' 
                            ml='1rem'
                            alt='screenshot of civil discourse application' 
                        />
                    </HStack>
                    <Divider />
                    <HStack mt='1rem' mb='0.5rem'>
                        <Image 
                            src="theshop.png" 
                            borderRadius='full' 
                            boxSize='150px' 
                            objectFit='cover'
                            mr='1rem' 
                            alt='screenshot of the shop application' 
                        />
                        <Box>
                            <Heading as='h3' size='md'>
                                The Shop - ecommerce app
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem'>
                                a typical online store with full user authorization. users can see deals, search and filter, add to cart, and checkout.
                            </Text>
                            <Text fontWeight='bold'>
                                tech stack - react, django, sql
                            </Text>
                        </Box>
                    </HStack>
                    <Divider />
                    <HStack mt='0.5rem'>
                        <Box>
                            <Heading as='h3' size='md'>
                                StockAid - portfolio management tool
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem'>
                                stock portfolio tool where users can track specific stock information gathered from APIs. users can also choose from recommended stocks.
                            </Text>
                            <Text fontWeight='bold'>
                                tech stack - MERN stack
                            </Text>
                        </Box>
                        <Image 
                            src="stockaid.png" 
                            borderRadius='full' 
                            boxSize='150px' 
                            objectFit='cover'
                            ml='1rem' 
                            alt='screenshot of stock aid application' 
                        />
                    </HStack>
                </VStack>
            </Container>
        </Center>
    )
}

export default Projects

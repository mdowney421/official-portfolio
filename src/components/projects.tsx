import React from "react";
import { Heading, Container, Center, VStack, HStack, Box, Image, Text, Divider } from "@chakra-ui/react";

const Projects = () => {

    return (
        <Center maxWidth='100%' h='100%' id='projects'>
            <Container mb='7rem'>
                <Heading as='h2' size='2xl' textAlign='center' data-aos='fade-up'>
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
                            data-aos='fade-up'
                        />
                        <Box>
                            <Heading as='h3' size='md' data-aos='fade-up'>
                                PumpedUp - fitness tracker
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem' data-aos='fade-up'>
                                workout tracking app with full user authorization. users can log workouts, see workout history, and track key metrics.
                            </Text>
                            <Text fontWeight='bold' data-aos='fade-up'>
                                tech stack - ejs, bootstrap, express, mongodb
                            </Text>
                        </Box>
                    </HStack>
                    <Divider data-aos='fade-up' />
                    <HStack mt='1rem' mb='0.5rem'>
                        <Box>
                            <Heading as='h3' size='md' data-aos='fade-up'>
                                Civil Discourse - social media site
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem' data-aos='fade-up'>
                                social media app that pulls current news from an API. users can like, dislike, or comment on articles and downvote misinformative comments.
                            </Text>
                            <Text fontWeight='bold' data-aos='fade-up'>
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
                            data-aos='fade-up'
                        />
                    </HStack>
                    <Divider data-aos='fade-up' />
                    <HStack mt='1rem' mb='0.5rem'>
                        <Image 
                            src="theshop.png" 
                            borderRadius='full' 
                            boxSize='150px' 
                            objectFit='cover'
                            mr='1rem' 
                            alt='screenshot of the shop application'
                            data-aos='fade-up' 
                        />
                        <Box>
                            <Heading as='h3' size='md' data-aos='fade-up'>
                                The Shop - ecommerce app
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem' data-aos='fade-up'>
                                a typical online store with full user authorization. users can see deals, search and filter, add to cart, and checkout.
                            </Text>
                            <Text fontWeight='bold' data-aos='fade-up'>
                                tech stack - react, django, sql
                            </Text>
                        </Box>
                    </HStack>
                    <Divider data-aos='fade-up' />
                    <HStack mt='0.5rem'>
                        <Box>
                            <Heading as='h3' size='md' data-aos='fade-up'>
                                StockAid - portfolio management tool
                            </Heading>
                            <Text mt='0.5rem' mb='0.5rem' data-aos='fade-up'>
                                stock portfolio tool where users can track specific stock information gathered from APIs. users can also choose from recommended stocks.
                            </Text>
                            <Text fontWeight='bold' data-aos='fade-up'>
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
                            data-aos='fade-up'
                        />
                    </HStack>
                </VStack>
            </Container>
        </Center>
    )
}

export default Projects

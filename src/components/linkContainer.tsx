import React from "react";
import { Container } from "@chakra-ui/react";
import GithubLink from "./githubLink";
import LinkedInLink from "./linkedinLink";

const LinkContainer = () => {
    return (
        <Container 
            display='flex' 
            justifyContent='flex-end'
            position='fixed' 
            top='0' 
            right='0'
            pt='1rem'
        >
            <GithubLink />
            <LinkedInLink />
        </Container>
    )
}

export default LinkContainer
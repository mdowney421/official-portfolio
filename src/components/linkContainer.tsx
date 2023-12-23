import React from "react";
import { Box } from "@chakra-ui/react";
import GithubLink from "./githubLink";
import LinkedInLink from "./linkedinLink";
import { EmailIcon } from "@chakra-ui/icons";

const LinkContainer = () => {
    return (
        <Box 
            display='flex' 
            justifyContent='center'
        >
            <GithubLink />
            <EmailIcon boxSize={50} mx='2rem' />
            <LinkedInLink />
        </Box>
    )
}

export default LinkContainer
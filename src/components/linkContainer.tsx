import React from "react";
import { Box } from "@chakra-ui/react";
import GithubLink from "./githubLink";
import LinkedInLink from "./linkedinLink";
import { EmailIcon } from "@chakra-ui/icons";

const LinkContainer = () => {
    
    const handleEmailClick = () => {
        const mailToLink = `mailto:mattdowney421@gmail.com`
        window.location.href = mailToLink
    }

    return (
        <Box 
            display='flex' 
            justifyContent='center'
        >
            <GithubLink />
            <EmailIcon 
                boxSize={50}
                mx='2rem'
                cursor='pointer'
                onClick={handleEmailClick}
                data-aos='fade-up'
                data-aos-duration='1000'
                data-aos-delay='3000'
            />
            <LinkedInLink />
        </Box>
    )
}

export default LinkContainer

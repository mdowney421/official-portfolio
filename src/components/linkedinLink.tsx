import React from "react";
import { Box } from "@chakra-ui/react";

const LinkedInLink = () => {
    return (
        <Box data-aos='fade-left' date-aos-duration='1500' data-aos-delay='3000'>
            <a href="https://www.linkedin.com/in/matthewpdowney/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#24292f" fillOpacity='0.8'
                    />
                </svg>
            </a>
        </Box>
    )
}

export default LinkedInLink

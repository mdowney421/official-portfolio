import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  List,
  ListItem,
  ListIcon,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const experience = [
  {
    title: "Senior Associate Software Engineer",
    company: "Amgen",
    timeframe: "Oct 2022 - Dec 2025",
    highlights: [
      "Led full-stack development for a proprietary business analytics platform used in executive decision making.",
      "Re-architected ETL and API layers to improve data retrieval speed by 63%.",
      "Implemented automated testing and CI/CD pipelines, reducing regression bugs by 92%.",
      "Collaborated with data engineering, analytics, and DevOps teams to improve performance, scalability, and reliability.",
    ],
  },
];

const certifications = [
  "SAFe 5 Practitioner",
  "SAFe 5 Agile Software Engineer",
  "Advanced React by Meta",
  "AWS Solutions Architect (in progress)",
];

const Experience = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box as="section" id="experience" py={20} bg={sectionBg}>
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" textAlign="center" pb={10}>
          Professional Experience
        </Heading>

        <Stack spacing={10}>
          {experience.map((role) => (
            <Box
              key={role.company}
              bg={cardBg}
              p={8}
              borderRadius="xl"
              boxShadow="sm"
            >
              <Heading as="h3" size="lg" mb={1}>
                {role.title}
              </Heading>
              <Text fontWeight="medium" color={textColor} />

              <List spacing={3} mt={6}>
                {role.highlights.map((highlight) => (
                  <ListItem key={highlight}>
                    <ListIcon as={CheckCircleIcon} color="brand.500" />
                    {highlight}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}

          <Box bg={cardBg} p={8} borderRadius="xl" boxShadow="sm">
            <Heading as="h3" size="lg" mb={4}>
              Certifications
            </Heading>
            <List spacing={3}>
              {certifications.map((cert) => (
                <ListItem key={cert}>
                  <ListIcon as={CheckCircleIcon} color="brand.500" />
                  {cert}
                </ListItem>
              ))}
            </List>

            <Link
              href="https://docs.google.com/document/d/e/2PACX-1vRLUWCD9iOwOk0RZbmal_23kDpqp2jHNgw2vPlLURkHEwRvX6i-C67hxe7qxg3SbsRM50NMhiQAO32X/pub"
              isExternal
            >
              <Button mt={6} colorScheme="brand">
                View full resume
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;

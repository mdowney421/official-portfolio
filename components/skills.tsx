"use client";

import React from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Wrap,
  WrapItem,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "YAML",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "EJS",
      "jQuery",
      "Next.js",
      "Node.js",
      "Express.js",
      "React",
      "Tailwind CSS",
      "NextAuth",
      "Django",
      "Flask",
      "FastAPI",
      "Spring Boot",
      "Chakra UI",
      "Bootstrap",
      "Ant Design",
      "Sass",
      "Resend",
      "Pydantic",
      "Pytest",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "NoSQL", "MongoDB", "Mongoose"],
  },
  {
    title: "Containerization & DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Vercel", "Databricks"],
  },
  {
    title: "Tools & IDEs",
    skills: [
      "VS Code",
      "PyCharm",
      "Git",
      "GitHub",
      "GitLab",
      "Figma",
      "Jira",
      "Postman",
      "Jupyter Notebook",
    ],
  },
  {
    title: "Practices & Concepts",
    skills: [
      "Agile",
      "RESTful API Design",
      "Authentication & Authorization",
      "Observability",
      "Test-driven development",
      "Clean architecture",
      "Performance tuning",
      "Scalability",
    ],
  },
];

const Skills = () => {
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" textAlign="center" pb={10}>
          Technical Skills
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {skillGroups.map((group) => (
            <Box
              key={group.title}
              bg={cardBg}
              p={6}
              borderRadius="xl"
              boxShadow="sm"
            >
              <Text fontSize="lg" fontWeight="semibold" mb={4}>
                {group.title}
              </Text>
              <Wrap spacing={2}>
                {group.skills.map((skill) => (
                  <WrapItem key={skill}>
                    <Tag size="sm" colorScheme="teal" variant="subtle">
                      {skill}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;

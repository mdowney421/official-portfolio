import React from "react";
import { Heading, Container, Center, Flex } from "@chakra-ui/react";
import SkillTile from "./skillTile";

const Skills = () => {
  const skillsList = [
    "Agile",
    "Ant Design",
    "Authentication & Authorization",
    "AWS",
    "Bootstrap",
    "ChakraUI",
    "CSS",
    "Databricks",
    "Docker",
    "Django",
    "EJS",
    "Express.js",
    "FastAPI",
    "Figma",
    "Flask",
    "Git",
    "GitHub",
    "Gitlab",
    "HTML",
    "Java",
    "JavaScript",
    "Jest",
    "Jira",
    "jQuery",
    "Jupyter Notebook",
    "Kubernetes",
    "MongoDB",
    "Mongoose",
    "Node.js",
    "NoSQL",
    "PostgreSQL",
    "Postman",
    "PyCharm",
    "Pydantic",
    "Pytest",
    "Python",
    "React",
    "React Testing Library",
    "RESTful APIs",
    "Sass",
    "Spring Boot",
    "SQL",
    "Typescript",
    "VS Code",
    "YAML",
  ];

  return (
    <Center maxWidth="100%" h="100vh" mb="10rem" id="skills">
      <Container>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          pb="2rem"
          data-aos="fade-up"
        >
          some things i know
        </Heading>
        <Flex wrap="wrap" justifyContent="center">
          {skillsList.map((skill) => {
            return <SkillTile key={skill} skill={skill} />;
          })}
        </Flex>
      </Container>
    </Center>
  );
};

export default Skills;

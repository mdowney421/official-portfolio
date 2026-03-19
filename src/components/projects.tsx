import React from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Badge,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const projects = [
  {
    title: "PumpedUp",
    description:
      "A workout tracker with full user authentication, historical tracking, and performance metrics.",
    stack: ["EJS", "Bootstrap", "Express", "MongoDB"],
    image: "pumpedup.png",
    repos: [
      {
        label: "View code",
        url: "https://github.com/mdowney421/pumpedup-web-application",
      },
    ],
  },
  {
    title: "Civil Discourse",
    description:
      "A social platform that highlights news articles and enables constructive discussion with voting and moderation.",
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
    image: "civildiscourse.png",
    repos: [
      {
        label: "Frontend",
        url: "https://github.com/mdowney421/civil-discourse-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/mdowney421/civil-discourse-backend",
      },
    ],
  },
  {
    title: "The Shop",
    description:
      "E-commerce experience with product browsing, search, cart, and checkout flows backed by a Django API.",
    stack: ["React", "Django", "SQL"],
    image: "theshop.png",
    repos: [
      {
        label: "Frontend",
        url: "https://github.com/JohnKomninos/TheShop",
      },
      {
        label: "Backend",
        url: "https://github.com/mdowney421/the-shop-back-end",
      },
    ],
  },
  {
    title: "StockAid",
    description:
      "Portfolio management tool that tracks stock performance and provides curated recommendations.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: "stockaid.png",
    repos: [
      {
        label: "Frontend",
        url: "https://github.com/eckmanmatt/stockaid-frontend/tree/master",
      },
      {
        label: "Backend",
        url: "https://github.com/mdowney421/stockaid-back-end",
      },
    ],
  },
];

const Projects = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const sectionBg = useColorModeValue("white", "gray.950");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="section" id="projects" py={20} bg={sectionBg}>
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" textAlign="center" pb={10}>
          Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project) => (
            <Box
              key={project.title}
              bg={cardBg}
              borderRadius="2xl"
              boxShadow="sm"
              overflow="hidden"
            >
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                objectFit="cover"
                w="100%"
                h="200px"
              />

              <Box p={6}>
                <Stack spacing={4}>
                  <Heading as="h3" size="lg">
                    {project.title}
                  </Heading>
                  <Text color={textColor}>{project.description}</Text>

                  <Stack direction="row" wrap="wrap" spacing={2}>
                    {project.stack.map((tech) => (
                      <Badge key={tech} colorScheme="teal">
                        {tech}
                      </Badge>
                    ))}
                  </Stack>

                  <Stack direction="row" wrap="wrap" spacing={2}>
                    {project.repos.map((repo) => (
                      <Link key={repo.url} href={repo.url} isExternal>
                        <Button
                          size="sm"
                          rightIcon={<ExternalLinkIcon />}
                          colorScheme="brand"
                        >
                          {repo.label}
                        </Button>
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;

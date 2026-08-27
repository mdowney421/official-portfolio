import React from "react";
import {
  Box,
  Flex,
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

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  links: ProjectLink[];
};

type ProjectGroup = {
  title: string;
  description: string;
  projects: Project[];
};

const projectGroups: ProjectGroup[] = [
  {
    title: "Active",
    description:
      "Current production work that reflects how I am building today: modern React architecture, secure integrations, and deployment-aware engineering.",
    projects: [
      {
        title: "62 Moons Band Website",
        description:
          "Production-ready band website with a protected admin workflow for managing upcoming shows, GitHub-backed content publishing, typed domain logic, and Vercel analytics/observability.",
        stack: [
          "Next.js 16",
          "TypeScript",
          "React 19",
          "Tailwind CSS 4",
          "NextAuth",
          "Resend",
          "Vercel",
        ],
        image: "62moons.png",
        links: [
          {
            label: "Live site",
            url: "https://62moonsband.com/",
          },
          {
            label: "View code",
            url: "https://github.com/mdowney421/62-moons",
          },
        ],
      },
      {
        title: "Grandma's Card Box",
        description:
          "Full-stack recipe-sharing app with real account auth (JWT, bcrypt, email verification), direct-to-S3 photo uploads, a searchable recipe API, and a serverless Express backend on AWS Lambda behind API Gateway.",
        stack: [
          "React 19",
          "TypeScript",
          "Vite",
          "Tailwind CSS 4",
          "Express",
          "MongoDB",
          "AWS Lambda",
          "AWS S3",
        ],
        image: "grandmascardbox.jpeg",
        links: [
          {
            label: "Live site",
            url: "https://grandmascardbox.com/",
          },
          {
            label: "Frontend",
            url: "https://github.com/mdowney421/grandmas-card-box-ui",
          },
          {
            label: "Backend",
            url: "https://github.com/mdowney421/grandmas-card-box-api",
          },
        ],
      },
    ],
  },
  {
    title: "Inactive",
    description:
      "Earlier projects that remain representative of product thinking, backend integration, and full-stack delivery across different stacks.",
    projects: [
      {
        title: "PumpedUp",
        description:
          "A workout tracker with full user authentication, historical tracking, and performance metrics.",
        stack: ["EJS", "Bootstrap", "Express", "MongoDB"],
        image: "pumpedup.png",
        links: [
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
        links: [
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
        links: [
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
        links: [
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
    ],
  },
];

const Projects = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const sectionBg = useColorModeValue("white", "gray.950");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const mutedTextColor = useColorModeValue("gray.500", "gray.400");
  const placeholderBg = useColorModeValue(
    "linear(to-r, teal.500, cyan.500)",
    "linear(to-r, teal.400, blue.500)"
  );

  return (
    <Box as="section" id="projects" py={20} bg={sectionBg}>
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" textAlign="center" pb={10}>
          Projects
        </Heading>

        <Stack spacing={12}>
          {projectGroups.map((group) => (
            <Box key={group.title}>
              <Stack spacing={3} mb={8}>
                <Heading as="h3" size="xl">
                  {group.title} Projects
                </Heading>
                <Text color={mutedTextColor} maxW="3xl">
                  {group.description}
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {group.projects.map((project) => (
                  <Box
                    key={project.title}
                    bg={cardBg}
                    borderRadius="2xl"
                    boxShadow="sm"
                    overflow="hidden"
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        objectFit="cover"
                        w="100%"
                        h="200px"
                      />
                    ) : (
                      <Flex
                        bgGradient={placeholderBg}
                        h="200px"
                        px={6}
                        align="flex-end"
                      >
                        <Heading
                          as="span"
                          size="md"
                          color="white"
                          pb={6}
                          letterSpacing="wide"
                        >
                          {project.title}
                        </Heading>
                      </Flex>
                    )}

                    <Box p={6}>
                      <Stack spacing={4}>
                        <Heading as="h4" size="lg">
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

                        {project.links.length > 0 ? (
                          <Stack direction="row" wrap="wrap" spacing={2}>
                            {project.links.map((link) => (
                              <Link key={link.url} href={link.url} isExternal>
                                <Button
                                  size="sm"
                                  rightIcon={<ExternalLinkIcon />}
                                  colorScheme="brand"
                                >
                                  {link.label}
                                </Button>
                              </Link>
                            ))}
                          </Stack>
                        ) : (
                          <Text color={mutedTextColor} fontSize="sm">
                            Live and repository links can be added here.
                          </Text>
                        )}
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;

import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import NavigationBar from "./components/navigation";
import Welcome from "./components/welcome";
import AboutMe from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.50" color="gray.900">
        <NavigationBar />
        <main>
          <Welcome />
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;

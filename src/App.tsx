import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Welcome from './components/welcome';
import NavigationBar from './components/navigation';
import AboutMe from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';

function App() {
  return (
    <ChakraProvider>
      <Box bgGradient='linear(to-br, green.300, blue.300)'>
        <NavigationBar />
        <Welcome />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </Box>
    </ChakraProvider>
  );
}

export default App;

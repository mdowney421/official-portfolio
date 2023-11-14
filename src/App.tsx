import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/welcome';
import NavigationBar from './components/navigation';
import AboutMe from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <NavigationBar />
      <Welcome />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </ChakraProvider>
  );
}

export default App;

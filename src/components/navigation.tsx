import React from "react";
import { 
    Button, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    DrawerBody,
    useDisclosure,
    Container,
    Text,
    Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement | null>(null)
  
    return (
        <Container position='fixed' pt='1rem'>
            <Button 
                colorScheme='blackAlpha' 
                textColor='green.100' 
                ref={btnRef} 
                onClick={onOpen} 
                data-aos='fade-right' 
                data-aos-duration='1000'
                data-aos-delay='3000'
            >
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bgGradient='linear(to-br, green.200, blue.200)'>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize='4xl'>where to?</DrawerHeader>

                    <DrawerBody>
                        <Link href="#home">
                            <Text fontSize='3xl' data-aos='fade-right' data-aos-delay='200'>home</Text>
                        </Link>
                        <Link href="#about">
                            <Text fontSize='3xl' data-aos='fade-right' data-aos-delay='400'>about me</Text>
                        </Link>
                        <Link href="#skills">
                            <Text fontSize='3xl' data-aos='fade-right' data-aos-delay='600'>skills</Text>
                        </Link>
                        <Link href="#experience">
                            <Text fontSize='3xl' data-aos='fade-right' data-aos-delay='800'>experience</Text>
                        </Link>
                        <Link href="#projects">
                            <Text fontSize='3xl' data-aos='fade-right' data-aos-delay='1000'>coding projects</Text>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    )
}

export default NavigationBar
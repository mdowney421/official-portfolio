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
    Text
} from "@chakra-ui/react";

function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement | null>(null)
  
    return (
        <Container position='fixed' pt='1rem'>
            <Button colorScheme='blackAlpha' textColor='green.100' ref={btnRef} onClick={onOpen}>
                menu
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
                        <a href="#home">
                            <Text fontSize='3xl'>home</Text>
                        </a>
                        <a href="#about">
                            <Text fontSize='3xl'>about me</Text>
                        </a>
                        <a href="#skills">
                            <Text fontSize='3xl'>skills</Text>
                        </a>
                        <a href="#experience">
                            <Text fontSize='3xl'>experience</Text>
                        </a>
                        <a href="#projects">
                            <Text fontSize='3xl'>coding projects</Text>
                        </a>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Container>
    )
}

export default NavigationBar
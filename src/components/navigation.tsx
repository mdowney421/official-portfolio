import React from "react";
import { 
    Button, 
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    Input,
    Container,
} from "@chakra-ui/react";

function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement | null>(null)
  
    return (
        <Container position='fixed' pt='1rem'>
            <Button colorScheme='blackAlpha' textColor='green.100' ref={btnRef} onClick={onOpen}>
                Where to?
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
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Container>
    )
}

export default NavigationBar
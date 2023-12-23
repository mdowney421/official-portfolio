import React, { useState } from "react";
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const EmailModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSend = async () => {
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Email sent successfully");
                // Additional logic, such as closing the modal or showing a success message
            } else {
                console.error("Failed to send email");
                // Handle error, show an error message, etc.
            }
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <>
            <EmailIcon boxSize={50} mx='2rem' onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgGradient='linear(to-br, green.300, blue.300)'>
                    <ModalHeader>What's on your mind?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>
                                Name
                            </FormLabel>
                            <Input type='text' name='name' onChange={handleChange} />
                            <FormLabel mt='1rem'>
                                Email
                            </FormLabel>
                            <Input type='email' name='email' onChange={handleChange} />
                            <FormLabel mt='1rem'>
                                Message
                            </FormLabel>
                            <Textarea name='message' onChange={handleChange} />
                            <Button colorScheme='blackAlpha' mt='1rem' mr='1rem' onClick={handleSend}>
                                Send Message
                            </Button>
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EmailModal;

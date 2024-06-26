import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
  VStack,
  Box
} from '@chakra-ui/react';

const menuItems = [
  {
    name: "Jollof Rice",
    description: "Savory rice dish cooked with tomatoes, peppers, and spices.",
    image: "path_to_jollof_rice_image.jpg"
  },
  {
    name: "Egusi Soup",
    description: "Rich soup made with ground melon seeds, leafy greens, and choice of meat or fish.",
    image: "path_to_egusi_soup_image.jpg"
  },
  {
    name: "Suya",
    description: "Spicy skewered meat, seasoned with traditional Nigerian spices.",
    image: "path_to_suya_image.jpg"
  }
];

const MenuModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Our Menu 🍛</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            {menuItems.map((item, index) => (
              <Box key={index} textAlign="center" p={4} bg="gray.100" borderRadius="md" shadow="md" w="100%">
                <Image src={item.image} alt={item.name} borderRadius="md" mb={2} />
                <Text fontSize="md" fontWeight="bold">{item.name}</Text>
                <Text fontSize="sm">{item.description}</Text>
              </Box>
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="brand" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MenuModal;

import React, { useState } from 'react';
import { Box, Button, VStack, Heading, Text, Image, HStack, Icon } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import MenuModal from './MenuModal'; // Import the MenuModal component

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <VStack spacing={8} align="stretch">
      {/* Fixed Navigation */}
      <Box bg="brand.500" p={4} color="white" position="fixed" width="100%" zIndex="1">
        <HStack spacing={4} justifyContent="space-between">
          <HStack spacing={4}>
            <Image src="path_to_logo.png" alt="LollyB Logo" boxSize="50px" />
            <Heading size="lg">LollyB Catering</Heading>
          </HStack>
          <HStack spacing={4}>
            <Button as={ScrollLink} to="home" smooth={true} duration={500} variant="ghost" colorScheme="whiteAlpha">
              Home
            </Button>
            <Button onClick={openMenu} variant="ghost" colorScheme="whiteAlpha">
              Menu
            </Button>
            <Button as={ScrollLink} to="contact" smooth={true} duration={500} variant="ghost" colorScheme="whiteAlpha">
              Contact
            </Button>
          </HStack>
        </HStack>
      </Box>

      <MenuModal isOpen={isMenuOpen} onClose={closeMenu} />

      {/* Spacer for Fixed Navigation */}
      <Box height="80px" />

      {/* Home Section */}
      <Element name="home">
        <Box id="home" p={8} bg="gray.100" textAlign="center">
          <Heading as="h1" size="2xl" color="brand.600" mb={4}>
            Welcome to LollyB Catering 🍲
          </Heading>
          <Text fontSize="xl" mb={4}>
            Authentic Nigerian Cuisine Delivered to Your Door
          </Text>
          <Image src="path_to_your_image.jpg" alt="Delicious Nigerian food" borderRadius="md" mx="auto" />
        </Box>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <Box id="contact" p={8} bg="gray.300">
          <Heading as="h2" size="xl" color="brand.600" mb={4}>
            Contact Us 📞
          </Heading>
          <Text fontSize="lg" mb={4}>
            Phone: <PhoneIcon /> +44 7432 534708
          </Text>
          <Text fontSize="lg" mb={4}>
            Email: <EmailIcon /> iyabobusari1972@gmail.com
          </Text>
          <HStack spacing={4} justify="center">
            <Button as="a" href="https://instagram.com/iyabo_busari" target="_blank" leftIcon={<FaInstagram />} colorScheme="red" variant="solid">
              Instagram
            </Button>
            <Button as="a" href="https://facebook.com/iyabode.busari.7" target="_blank" leftIcon={<FaFacebook />} colorScheme="blue" variant="solid">
              Facebook
            </Button>
          </HStack>
        </Box>
      </Element>
    </VStack>
  );
}

export default App;

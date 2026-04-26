import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Badge,
  Icon,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { PhoneIcon, EmailIcon, CheckCircleIcon, TimeIcon, StarIcon } from '@chakra-ui/icons';
import { FaWhatsapp, FaHome, FaBuilding, FaBroom, FaKey } from 'react-icons/fa';

function App() {
  const whatsappNumber = '447849040289';
  const whatsappMessage = encodeURIComponent(
    'Hi Lolly B Cleaning Services, I would like a free cleaning quote. My postcode is:'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    {
      icon: FaHome,
      title: 'Home Cleaning',
      text: 'Reliable regular and one-off cleaning for homes, flats and apartments.',
    },
    {
      icon: FaBuilding,
      title: 'Office & Commercial Cleaning',
      text: 'Professional cleaning for offices, shops, salons and managed spaces.',
    },
    {
      icon: FaBroom,
      title: 'Deep Cleaning',
      text: 'Detailed cleans for kitchens, bathrooms, move-ins, move-outs and fresh starts.',
    },
    {
      icon: FaKey,
      title: 'Airbnb Turnover Cleaning',
      text: 'Guest-ready cleans with flexible scheduling for short-let hosts and landlords.',
    },
  ];

  const quoteSteps = [
    'Send your postcode and cleaning needs',
    'Share photos or details of the space',
    'Receive a clear quote',
    'Book your clean at a time that suits you',
  ];

  return (
    <Box bg="white" color="gray.800">
      {/* Navigation */}
      <Box bg="white" borderBottom="1px solid" borderColor="gray.100" position="sticky" top="0" zIndex="10" boxShadow="sm">
        <Container maxW="7xl" py={3}>
          <Flex align="center" justify="space-between" gap={4}>
            <HStack spacing={3}>
              <Image src="/lollyblogo.png" alt="Lolly B Cleaning Services Logo" boxSize="48px" objectFit="contain" fallbackSrc="https://via.placeholder.com/48?text=LB" />
              <Box>
                <Heading size="md" lineHeight="1">Lolly B</Heading>
                <Text fontSize="xs" color="gray.500" fontWeight="semibold">Cleaning Services</Text>
              </Box>
            </HStack>

            <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
              <Button as={ScrollLink} to="home" smooth duration={500} variant="ghost">Home</Button>
              <Button as={ScrollLink} to="services" smooth duration={500} variant="ghost">Services</Button>
              <Button as={ScrollLink} to="quote" smooth duration={500} variant="ghost">Get a Quote</Button>
              <Button as={ScrollLink} to="contact" smooth duration={500} variant="ghost">Contact</Button>
            </HStack>

            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              leftIcon={<FaWhatsapp />}
              bg="#25D366"
color="white"
_hover={{ bg: "#1EBE5D" }}
              borderRadius="full"
              size={{ base: 'sm', md: 'md' }}
            >
              WhatsApp
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Element name="home">
        <Box bgGradient="linear(to-br, brand.50, white, pink.50)" py={{ base: 12, md: 20 }}>
          <Container maxW="7xl">
            <Grid templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }} gap={10} alignItems="center">
              <VStack align="start" spacing={6}>
                <Badge colorScheme="brand" px={3} py={1} borderRadius="full" fontSize="sm">
                  15% off your first clean
                </Badge>
                <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight="1.05" color="brand.900">
                  Reliable cleaning for homes, offices and commercial spaces.
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="2xl">
                  Fresh space. Better mood. Lolly B Cleaning Services provides professional, flexible and friendly cleaning across East London and Essex.
                </Text>
                <HStack spacing={4} flexWrap="wrap">
                  <Button as="a" href={whatsappLink} target="_blank" leftIcon={<FaWhatsapp />} bg="#25D366"
color="white"
_hover={{ bg: "#1EBE5D" }} size="lg" borderRadius="full">
                    Get a Free Quote
                  </Button>
                  <Button as={ScrollLink} to="services" smooth duration={500} variant="outline" colorScheme="brand" size="lg" borderRadius="full">
                    View Services
                  </Button>
                </HStack>
                <HStack spacing={6} pt={2} color="gray.600" flexWrap="wrap">
                  <HStack><CheckCircleIcon color="brand.500" /><Text>Flexible bookings</Text></HStack>
                  <HStack><CheckCircleIcon color="brand.500" /><Text>Trusted cleaners</Text></HStack>
                  <HStack><CheckCircleIcon color="brand.500" /><Text>Fast quotes</Text></HStack>
                </HStack>
              </VStack>

              <Box bg="white" p={4} borderRadius="3xl" boxShadow="xl">
                <Box bg="brand.100" borderRadius="2xl" minH={{ base: '260px', md: '420px' }} display="flex" alignItems="center" justifyContent="center" textAlign="center" px={8}>
                  <VStack spacing={4}>
                    <Icon as={FaBroom} boxSize={16} color="brand.600" />
                    <Heading size="lg" color="brand.800">Clean space. Clear mind.</Heading>
                    <Text color="brand.800" fontSize="lg">
                      Book now and get 15% off your first clean.
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Element>

      {/* Services */}
      <Element name="services">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="7xl">
            <VStack spacing={4} textAlign="center" mb={12}>
              <Heading size="2xl" color="brand.900">Cleaning services made simple</Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                Whether you need a one-off clean, regular support or help preparing a property for guests, we make the process straightforward from quote to completion.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {services.map((service) => (
                <Box key={service.title} p={6} border="1px solid" borderColor="gray.100" borderRadius="2xl" boxShadow="sm" bg="white">
                  <Icon as={service.icon} boxSize={9} color="brand.500" mb={5} />
                  <Heading size="md" mb={3}>{service.title}</Heading>
                  <Text color="gray.600">{service.text}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Element>

      {/* Offer / Why us */}
      <Box bg="brand.50" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '0.9fr 1.1fr' }} gap={10} alignItems="center">
            <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="3xl" boxShadow="md">
              <Badge colorScheme="brand" mb={4}>Limited first-clean offer</Badge>
              <Heading size="xl" mb={4}>Book now and get 15% off your first clean.</Heading>
              <Text color="gray.600" fontSize="lg" mb={6}>
                Perfect for trying our service, refreshing your space or preparing your property for visitors, tenants or customers.
              </Text>
              <Button as="a" href={whatsappLink} target="_blank" leftIcon={<FaWhatsapp />} bg="#25D366"
color="white"
_hover={{ bg: "#1EBE5D" }} size="lg" borderRadius="full">
                Claim Offer on WhatsApp
              </Button>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
              <HStack align="start" bg="white" p={5} borderRadius="2xl" boxShadow="sm">
                <Icon as={StarIcon} color="brand.500" mt={1} />
                <Box>
                  <Heading size="sm" mb={1}>High standards</Heading>
                  <Text color="gray.600">We focus on the details that make a space feel properly clean.</Text>
                </Box>
              </HStack>
              <HStack align="start" bg="white" p={5} borderRadius="2xl" boxShadow="sm">
                <Icon as={TimeIcon} color="brand.500" mt={1} />
                <Box>
                  <Heading size="sm" mb={1}>Flexible scheduling</Heading>
                  <Text color="gray.600">Morning, daytime and evening availability depending on your needs.</Text>
                </Box>
              </HStack>
              <HStack align="start" bg="white" p={5} borderRadius="2xl" boxShadow="sm">
                <Icon as={CheckCircleIcon} color="brand.500" mt={1} />
                <Box>
                  <Heading size="sm" mb={1}>Simple quotes</Heading>
                  <Text color="gray.600">Send photos and your postcode for a quick, clear quote.</Text>
                </Box>
              </HStack>
              <HStack align="start" bg="white" p={5} borderRadius="2xl" boxShadow="sm">
                <Icon as={CheckCircleIcon} color="brand.500" mt={1} />
                <Box>
                  <Heading size="sm" mb={1}>Friendly service</Heading>
                  <Text color="gray.600">Professional communication from enquiry to completed clean.</Text>
                </Box>
              </HStack>
            </SimpleGrid>
          </Grid>
        </Container>
      </Box>

      {/* Quote Process */}
      <Element name="quote">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="6xl">
            <VStack spacing={4} textAlign="center" mb={10}>
              <Heading size="2xl" color="brand.900">How to get your quote</Heading>
              <Text fontSize="lg" color="gray.600">No complicated forms. Just message us the basics and we’ll guide you from there.</Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
              {quoteSteps.map((step, index) => (
                <Box key={step} p={6} bg="white" border="1px solid" borderColor="gray.100" borderRadius="2xl" boxShadow="sm" textAlign="center">
                  <Flex mx="auto" mb={4} w="44px" h="44px" borderRadius="full" bg="brand.500" color="white" align="center" justify="center" fontWeight="bold">
                    {index + 1}
                  </Flex>
                  <Text fontWeight="semibold">{step}</Text>
                </Box>
              ))}
            </SimpleGrid>

            <Box mt={10} p={{ base: 6, md: 8 }} bg="brand.50" borderRadius="3xl" textAlign="center">
              <Heading size="lg" mb={3}>Fast quote checklist</Heading>
              <Text color="gray.700" mb={5}>
                Please send your postcode, property type, approximate size, how often you need cleaning and photos if available.
              </Text>
              <Button as="a" href={whatsappLink} target="_blank" leftIcon={<FaWhatsapp />} bg="#25D366"
color="white"
_hover={{ bg: "#1EBE5D" }} size="lg" borderRadius="full">
                Message for a Quote
              </Button>
            </Box>
          </Container>
        </Box>
      </Element>

      {/* Areas */}
      <Box bg="brand.900" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <Box>
              <Heading size="xl" mb={4}>Areas we cover</Heading>
              <Text color="gray.300" fontSize="lg">
                Based around East London, we cover local homes, offices and commercial spaces across nearby London and Essex areas.
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
              {['Newham', 'Stratford', 'East Ham', 'Forest Gate', 'Barking', 'Dagenham', 'Ilford', 'Redbridge', 'Romford', 'Hornchurch', 'Upminster', 'Havering'].map((area) => (
                <Badge key={area} colorScheme="brand" variant="subtle" px={3} py={2} borderRadius="full" textAlign="center">
                  {area}
                </Badge>
              ))}
            </SimpleGrid>
          </Grid>
        </Container>
      </Box>

      {/* Contact */}
      <Element name="contact">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="5xl">
            <Box p={{ base: 6, md: 10 }} borderRadius="3xl" boxShadow="xl" border="1px solid" borderColor="gray.100" textAlign="center">
              <Heading size="2xl" mb={4} color="brand.900">Ready for a cleaner space?</Heading>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Contact Lolly B Cleaning Services today for a free quote. Send photos if you can, and we’ll respond with the next steps.
              </Text>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" mb={8}>
                <Button as="a" href={whatsappLink} target="_blank" leftIcon={<FaWhatsapp />} bg="#25D366"
color="white"
_hover={{ bg: "#1EBE5D" }} size="lg" borderRadius="full">
                  WhatsApp Us
                </Button>
                <Button as="a" href="tel:+447849040289" leftIcon={<PhoneIcon />} variant="outline" size="lg" borderRadius="full">
                  Call Now
                </Button>
                <Button as="a" href="mailto:lollybcleaningservices@gmail.com" leftIcon={<EmailIcon />} variant="outline" size="lg" borderRadius="full">
                  Email Us
                </Button>
              </Stack>

              <Divider mb={6} />

              <List spacing={2} textAlign="left" maxW="lg" mx="auto" color="gray.600">
                <ListItem><ListIcon as={CheckCircleIcon} color="brand.500" />Free quotes available</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="brand.500" />15% off your first clean</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} color="brand.500" />Regular, one-off and commercial bookings</ListItem>
              </List>

            </Box>
          </Container>
        </Box>
      </Element>

      {/* Footer */}
      <Box bg="brand.50" py={6} borderTop="1px solid" borderColor="brand.100">
        <Container maxW="7xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={3}>
            <Text fontWeight="semibold">© Copyright 2026. All Rights Reserved</Text>
            <Text color="gray.500" fontSize="sm">Professional cleaning across East London & Essex</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

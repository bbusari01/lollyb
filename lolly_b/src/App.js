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
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { PhoneIcon, EmailIcon, CheckCircleIcon, TimeIcon, StarIcon } from '@chakra-ui/icons';
import { FaWhatsapp, FaHome, FaBuilding, FaBroom, FaKey, FaShieldAlt, FaSprayCan, FaCalendarCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function AnimatedSection({ children, ...props }) {
  return (
    <MotionBox
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

function App() {
  const whatsappNumber = '447849040289';
  const whatsappMessage = encodeURIComponent(
    'Hi Lolly B Cleaning Services, I would like a free cleaning quote. My postcode is:'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const services = [
    {
      icon: FaHome,
      title: 'Residential Cleaning',
      text: 'Reliable regular and one-off cleaning for houses, flats and apartments, tailored to your routine.',
    },
    {
      icon: FaBuilding,
      title: 'Commercial Cleaning',
      text: 'Professional cleaning for offices, pharmacies, salons, retail units and managed workspaces.',
    },
    {
      icon: FaBroom,
      title: 'Deep Cleaning',
      text: 'Detailed cleans for kitchens, bathrooms, end-of-tenancy, move-ins, move-outs and seasonal refreshes.',
    },
    {
      icon: FaKey,
      title: 'Airbnb Turnovers',
      text: 'Guest-ready turnover cleans with flexible scheduling for short-let hosts, landlords and property managers.',
    },
  ];

  const quoteSteps = [
    'Send your postcode and cleaning needs',
    'Share photos or details of the space',
    'Receive a clear quote',
    'Book your clean at a time that suits you',
  ];

  const reviews = [
    {
      stars: 5,
      name: 'Aktive Pharmacy',
      area: 'Harold Wood',
      text: 'Excellent service. Reliable, punctual and always leaves the pharmacy spotless. Very professional team.',
    },
    {
      stars: 5,
      name: 'Edward A.',
      area: 'Romford',
      text: 'Needed a last-minute deep clean before guests arrived. They saved the day. Highly recommend.',
    },
    {
      stars: 5,
      name: 'Sarah M.',
      area: 'Hornchurch',
      text: 'Our weekly home clean has been brilliant. Friendly staff and very thorough.',
    },
    {
      stars: 5,
      name: 'Daniel R.',
      area: 'Stratford Airbnb Host',
      text: 'I run an Airbnb and needed dependable turnover cleans. Great communication and always guest-ready.',
    },
    {
      stars: 4,
      name: 'Nadia K.',
      area: 'Ilford',
      text: 'Very impressed with the bathroom and kitchen clean. Everything sparkling.',
    },
    {
      stars: 4,
      name: 'Direct Services Ltd',
      area: 'East London',
      text: 'Great office cleaning service. Consistent, trustworthy and flexible with timings.',
    },
  ];

  const areas = [
    'Newham',
    'Stratford',
    'East Ham',
    'Forest Gate',
    'Barking',
    'Dagenham',
    'Ilford',
    'Redbridge',
    'Romford',
    'Hornchurch',
    'Upminster',
    'Havering',
  ];

  return (
    <Box bg="white" color="gray.800" overflowX="hidden">
      {/* Navigation */}
      <Box
        bg="rgba(255,255,255,0.92)"
        backdropFilter="blur(14px)"
        borderBottom="1px solid"
        borderColor="gray.100"
        position="sticky"
        top="0"
        zIndex="10"
        boxShadow="sm"
      >
        <Container maxW="7xl" py={3}>
          <Flex align="center" justify="space-between" gap={4}>
            <HStack spacing={3}>
              <Image
                src="/lollyblogo.png"
                alt="Lolly B Cleaning Services Logo"
                boxSize="52px"
                objectFit="contain"
                fallbackSrc="https://via.placeholder.com/52?text=LB"
              />
              <Box>
                <Heading size="md" lineHeight="1" color="brand.900">
                  Lolly B
                </Heading>
                <Text fontSize="xs" color="gray.500" fontWeight="semibold" letterSpacing="wide">
                  CLEANING SERVICES
                </Text>
              </Box>
            </HStack>

            <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
              {['home', 'services', 'quote', 'contact'].map((item) => (
                <Button
                  key={item}
                  as={ScrollLink}
                  to={item}
                  smooth
                  duration={500}
                  offset={-80}
                  variant="ghost"
                  textTransform="capitalize"
                  fontWeight="semibold"
                >
                  {item === 'quote' ? 'Get a Quote' : item}
                </Button>
              ))}
            </HStack>

            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              leftIcon={<FaWhatsapp />}
              bg="#25D366"
              color="white"
              _hover={{ bg: '#1EBE5D', transform: 'translateY(-1px)' }}
              borderRadius="full"
              size={{ base: 'sm', md: 'md' }}
              boxShadow="md"
            >
              WhatsApp
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Element name="home">
        <Box
          position="relative"
          bgGradient="linear(to-br, brand.50, white 45%, pink.50)"
          py={{ base: 14, md: 24 }}
          overflow="hidden"
        >
          <Box position="absolute" top="-120px" right="-120px" w="340px" h="340px" bg="brand.100" borderRadius="full" opacity="0.55" />
          <Box position="absolute" bottom="-160px" left="-140px" w="380px" h="380px" bg="pink.100" borderRadius="full" opacity="0.5" />

          <Container maxW="7xl" position="relative">
            <Grid templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }} gap={12} alignItems="center">
              <MotionBox variants={stagger} initial="hidden" animate="visible">
                <VStack align="start" spacing={6}>
                  <MotionBox variants={fadeUp}>
                    <Badge colorScheme="brand" px={4} py={2} borderRadius="full" fontSize="sm" boxShadow="sm">
                      15% off your first clean
                    </Badge>
                  </MotionBox>

                  <MotionBox variants={fadeUp}>
                    <Heading as="h1" fontSize={{ base: '4xl', md: '6xl' }} lineHeight="1.02" color="brand.900" letterSpacing="tight">
                      Professional cleaning that makes every space feel brand new.
                    </Heading>
                  </MotionBox>

                  <MotionBox variants={fadeUp}>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="2xl">
                      Lolly B Cleaning Services delivers reliable residential, commercial, deep cleaning and Airbnb turnover cleans across East London and Essex.
                    </Text>
                  </MotionBox>

                  <MotionBox variants={fadeUp}>
                    <HStack spacing={4} flexWrap="wrap">
                      <Button
                        as="a"
                        href={whatsappLink}
                        target="_blank"
                        leftIcon={<FaWhatsapp />}
                        bg="#25D366"
                        color="white"
                        _hover={{ bg: '#1EBE5D', transform: 'translateY(-2px)', boxShadow: 'xl' }}
                        size="lg"
                        borderRadius="full"
                        px={8}
                      >
                        Get a Free Quote
                      </Button>
                      <Button
                        as={ScrollLink}
                        to="services"
                        smooth
                        duration={500}
                        offset={-80}
                        variant="outline"
                        colorScheme="brand"
                        size="lg"
                        borderRadius="full"
                        px={8}
                      >
                        View Services
                      </Button>
                    </HStack>
                  </MotionBox>

                  <MotionFlex variants={fadeUp} gap={4} flexWrap="wrap" pt={2}>
                    {['Flexible bookings', 'Trusted cleaners', 'Fast quotes'].map((item) => (
                      <HStack key={item} bg="white" px={4} py={2} borderRadius="full" boxShadow="sm">
                        <CheckCircleIcon color="brand.500" />
                        <Text color="gray.700" fontWeight="semibold">
                          {item}
                        </Text>
                      </HStack>
                    ))}
                  </MotionFlex>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
                bg="white"
                p={4}
                borderRadius="3xl"
                boxShadow="2xl"
                position="relative"
              >
                <Box
                  bgGradient="linear(to-br, brand.100, white)"
                  borderRadius="2xl"
                  minH={{ base: '300px', md: '460px' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  px={8}
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top="8" right="8" bg="white" borderRadius="2xl" p={4} boxShadow="lg">
                    <Icon as={FaShieldAlt} boxSize={7} color="brand.500" />
                  </Box>
                  <VStack spacing={5}>
                    <Icon as={FaSprayCan} boxSize={20} color="brand.600" />
                    <Heading size="xl" color="brand.900">
                      Clean space. Clear mind.
                    </Heading>
                    <Text color="brand.800" fontSize="lg" maxW="sm">
                      Book now and get 15% off your first clean.
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            </Grid>
          </Container>
        </Box>
      </Element>

      {/* Trust Stats */}
      <AnimatedSection py={{ base: 8, md: 10 }} bg="white">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            {[
              ['Residential & commercial', 'Flexible cleaning support'],
              ['East London & Essex', 'Local area coverage'],
              ['Free quote', 'Clear pricing before booking'],
            ].map(([number, label]) => (
              <Stat key={label} p={6} border="1px solid" borderColor="gray.100" borderRadius="2xl" boxShadow="sm" textAlign="center">
                <StatNumber color="brand.900" fontSize={{ base: '2xl', md: '3xl' }}>
                  {number}
                </StatNumber>
                <StatLabel color="gray.500" fontWeight="semibold">
                  {label}
                </StatLabel>
              </Stat>
            ))}
          </SimpleGrid>
        </Container>
      </AnimatedSection>

      {/* Services */}
      <Element name="services">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="7xl">
            <AnimatedSection>
              <VStack spacing={4} textAlign="center" mb={12}>
                <Badge colorScheme="brand" borderRadius="full" px={4} py={2}>Our Services</Badge>
                <Heading size="2xl" color="brand.900">
                  Cleaning services made simple
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Whether you need a one-off clean, regular support or help preparing a property for guests, we make the process straightforward from quote to completion.
                </Text>
              </VStack>
            </AnimatedSection>

            <MotionBox variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {services.map((service) => (
                  <MotionBox
                    key={service.title}
                    variants={fadeUp}
                    p={7}
                    border="1px solid"
                    borderColor="gray.100"
                    borderRadius="2xl"
                    boxShadow="sm"
                    bg="white"
                    _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl', borderColor: 'brand.100' }}
                    transition="0.25s ease"
                  >
                    <Flex w="54px" h="54px" borderRadius="2xl" bg="brand.50" align="center" justify="center" mb={5}>
                      <Icon as={service.icon} boxSize={7} color="brand.500" />
                    </Flex>
                    <Heading size="md" mb={3} color="brand.900">
                      {service.title}
                    </Heading>
                    <Text color="gray.600">{service.text}</Text>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </MotionBox>
          </Container>
        </Box>
      </Element>

      {/* Reviews Section */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <AnimatedSection>
            <VStack spacing={4} textAlign="center" mb={12}>
              <Badge colorScheme="brand" borderRadius="full" px={4} py={2}>Client Feedback</Badge>
              <Heading size="2xl" color="brand.900">
                Trusted by homes & businesses
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="3xl">
                We’re proud to deliver reliable, high-standard cleaning services across East London and Essex.
              </Text>
            </VStack>
          </AnimatedSection>

          <MotionBox variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {reviews.map((review) => (
                <MotionBox key={`${review.name}-${review.area}`} variants={fadeUp} bg="white" p={6} borderRadius="2xl" boxShadow="md" border="1px solid" borderColor="gray.100">
                  <HStack color="yellow.400" spacing={1} mb={4}>
                    {Array.from({ length: review.stars || 5 }).map((_, star) => (
                      <StarIcon key={star} />
                    ))}
                  </HStack>
                  <Text color="gray.700">“{review.text}”</Text>
                  <Text mt={5} fontWeight="bold" color="brand.900">
                    {review.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {review.area}
                  </Text>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>

      {/* Offer / Why us */}
      <Box bg="brand.50" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '0.9fr 1.1fr' }} gap={10} alignItems="center">
            <AnimatedSection bg="white" p={{ base: 6, md: 8 }} borderRadius="3xl" boxShadow="md">
              <Badge colorScheme="brand" mb={4} borderRadius="full" px={3} py={1}>
                Limited first-clean offer
              </Badge>
              <Heading size="xl" mb={4} color="brand.900">
                Book now and get 15% off your first clean.
              </Heading>
              <Text color="gray.600" fontSize="lg" mb={6}>
                Perfect for trying our service, refreshing your space or preparing your property for visitors, tenants or customers.
              </Text>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                leftIcon={<FaWhatsapp />}
                bg="#25D366"
                color="white"
                _hover={{ bg: '#1EBE5D', transform: 'translateY(-2px)' }}
                size="lg"
                borderRadius="full"
              >
                Claim Offer on WhatsApp
              </Button>
            </AnimatedSection>

            <MotionBox variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                {[
                  [StarIcon, 'High standards', 'We focus on the details that make a space feel properly clean.'],
                  [TimeIcon, 'Flexible scheduling', 'Morning, daytime and evening availability depending on your needs.'],
                  [CheckCircleIcon, 'Simple quotes', 'Send photos and your postcode for a quick, clear quote.'],
                  [FaCalendarCheck, 'Friendly service', 'Professional communication from enquiry to completed clean.'],
                ].map(([icon, title, text]) => (
                  <MotionBox key={title} variants={fadeUp}>
                    <HStack align="start" bg="white" p={5} borderRadius="2xl" boxShadow="sm" h="100%">
                      <Icon as={icon} color="brand.500" mt={1} boxSize={5} />
                      <Box>
                        <Heading size="sm" mb={1} color="brand.900">
                          {title}
                        </Heading>
                        <Text color="gray.600">{text}</Text>
                      </Box>
                    </HStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* Quote Process */}
      <Element name="quote">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="6xl">
            <AnimatedSection>
              <VStack spacing={4} textAlign="center" mb={10}>
                <Badge colorScheme="brand" borderRadius="full" px={4} py={2}>Free Quote</Badge>
                <Heading size="2xl" color="brand.900">
                  How to get your quote
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  No complicated forms. Just message us the basics and we’ll guide you from there.
                </Text>
              </VStack>
            </AnimatedSection>

            <MotionBox variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={5}>
                {quoteSteps.map((step, index) => (
                  <MotionBox key={step} variants={fadeUp} p={6} bg="white" border="1px solid" borderColor="gray.100" borderRadius="2xl" boxShadow="sm" textAlign="center">
                    <Flex mx="auto" mb={4} w="48px" h="48px" borderRadius="full" bg="brand.500" color="white" align="center" justify="center" fontWeight="bold" fontSize="lg">
                      {index + 1}
                    </Flex>
                    <Text fontWeight="semibold">{step}</Text>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </MotionBox>

            <AnimatedSection mt={10} p={{ base: 6, md: 8 }} bg="brand.50" borderRadius="3xl" textAlign="center">
              <Heading size="lg" mb={3} color="brand.900">
                Fast quote checklist
              </Heading>
              <Text color="gray.700" mb={5}>
                Please send your postcode, property type, approximate size, how often you need cleaning and photos if available.
              </Text>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                leftIcon={<FaWhatsapp />}
                bg="#25D366"
                color="white"
                _hover={{ bg: '#1EBE5D', transform: 'translateY(-2px)' }}
                size="lg"
                borderRadius="full"
              >
                Message for a Quote
              </Button>
            </AnimatedSection>
          </Container>
        </Box>
      </Element>

      {/* Areas */}
      <Box bg="brand.900" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <AnimatedSection>
              <Badge colorScheme="brand" mb={4} borderRadius="full" px={4} py={2}>
                Areas Covered
              </Badge>
              <Heading size="xl" mb={4}>
                Local cleaning across East London & Essex
              </Heading>
              <Text color="gray.300" fontSize="lg">
                Based around East London, we cover local homes, offices and commercial spaces across nearby London and Essex areas.
              </Text>
            </AnimatedSection>

            <MotionBox variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
                {areas.map((area) => (
                  <MotionBox key={area} variants={fadeUp}>
                    <Badge colorScheme="brand" variant="subtle" px={3} py={2} borderRadius="full" textAlign="center" w="100%">
                      {area}
                    </Badge>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </MotionBox>
          </Grid>
        </Container>
      </Box>

      {/* Contact */}
      <Element name="contact">
        <Box py={{ base: 12, md: 20 }}>
          <Container maxW="5xl">
            <AnimatedSection p={{ base: 6, md: 10 }} borderRadius="3xl" boxShadow="xl" border="1px solid" borderColor="gray.100" textAlign="center" bg="white">
              <Badge colorScheme="brand" borderRadius="full" px={4} py={2} mb={4}>
                Contact Us
              </Badge>
              <Heading size="2xl" mb={4} color="brand.900">
                Ready for a cleaner space?
              </Heading>
              <Text fontSize="lg" color="gray.600" mb={8}>
                Contact Lolly B Cleaning Services today for a free quote. Send photos if you can, and we’ll respond with the next steps.
              </Text>

              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center" mb={8}>
                <Button as="a" href={whatsappLink} target="_blank" leftIcon={<FaWhatsapp />} bg="#25D366" color="white" _hover={{ bg: '#1EBE5D', transform: 'translateY(-2px)' }} size="lg" borderRadius="full">
                  WhatsApp Us
                </Button>
                <Button as="a" href="tel:+447849040289" leftIcon={<PhoneIcon />} variant="outline" colorScheme="brand" size="lg" borderRadius="full">
                  Call Now
                </Button>
                <Button as="a" href="mailto:lollybcleaningservices@gmail.com" leftIcon={<EmailIcon />} variant="outline" colorScheme="brand" size="lg" borderRadius="full">
                  Email Us
                </Button>
              </Stack>

              <Divider mb={6} />

              <List spacing={2} textAlign="left" maxW="lg" mx="auto" color="gray.600">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.500" />
                  Free quotes available
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.500" />
                  15% off your first clean
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="brand.500" />
                  Regular, one-off and commercial bookings
                </ListItem>
              </List>
            </AnimatedSection>
          </Container>
        </Box>
      </Element>

      {/* Footer */}
      <Box bg="brand.50" py={6} borderTop="1px solid" borderColor="brand.100">
        <Container maxW="7xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={3} textAlign="center">
            <Text fontWeight="semibold">© Copyright 2026. All Rights Reserved</Text>
            <Text color="gray.500" fontSize="sm">
              Professional cleaning across East London & Essex
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default App;

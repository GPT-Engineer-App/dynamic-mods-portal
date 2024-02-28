import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Button, IconButton, Link, useColorModeValue, Flex, Spacer, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaEnvelope, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("purple.700", "gray.800");
  const textColor = useColorModeValue("white", "gray.100");

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={10}>
          <Heading as="h1" size="2xl">
            SquawkSquad
          </Heading>
          <Text fontSize="xl">Leading Innovation in Minecraft Mods & Custom Software Applications</Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </SimpleGrid>
          <ServicesSection />
          <ContactSection />
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

const PortfolioItem = () => {
  const imageSrc = 'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtaW5lY3JhZnQlMjBtb2R8ZW58MHx8fHwxNzA5MTU1NDQwfDA&ixlib=rb-4.0.3&q=80&w=1080';
  return (
    <VStack spacing={5} bg="gray.700" p={5} borderRadius="lg" boxShadow="md">
      <Image src={imageSrc} borderRadius="md" />
      <Text fontSize="lg">Mod Name</Text>
      <Text>A brief description of the mod, what it adds to the game, and any other relevant information.</Text>
      <Button rightIcon={<FaArrowRight />} variant="solid">
        Learn More
      </Button>
    </VStack>
  );
};

const ServicesSection = () => {
  return (
    <VStack spacing={5} alignItems="flex-start">
      <Heading as="h2">Our Services</Heading>
      <Text>We craft unique applications and Minecraft mods that push the boundaries of creativity and functionality.</Text>
      {/* List other services offered by SquawkSquad here */}
    </VStack>
  );
};

const ContactSection = () => {
  return (
    <VStack spacing={5} alignItems="flex-start" as="form">
      <Heading as="h3">Get In Touch</Heading>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="your-email@example.com" />
      </FormControl>
      <FormControl id="message" isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your message" />
      </FormControl>
      <Button type="submit" rightIcon={<FaEnvelope />} variant="solid">
        Send Message
      </Button>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="gray.400" py={5}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Text>&copy; {new Date().getFullYear()} SquawkSquad</Text>
          <Spacer />
          <IconButton as={Link} href="https://github.com" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as={Link} href="mailto:contact@squawksquad.com" aria-label="Email" icon={<FaEnvelope />} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;

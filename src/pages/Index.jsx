import { Container, VStack, Heading, Text, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Music Streaming Service</Heading>
        <Box boxSize="sm">
          <Image src="/images/album-cover.jpg" alt="Album Cover" borderRadius="md" />
        </Box>
        <Text fontSize="xl" mt={4}>Now Playing: Song Title - Artist Name</Text>
        <VStack spacing={2} direction="row" mt={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid">Previous</Button>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid">Play</Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="solid">Pause</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid">Next</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
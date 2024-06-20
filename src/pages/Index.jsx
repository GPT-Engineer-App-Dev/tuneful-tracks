import { Container, VStack, Heading, Text, Box, Image, Button, List, ListItem } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [playlists, setPlaylists] = useState([
    { name: "My Playlist 1", songs: ["Song 1", "Song 2"] },
    { name: "My Playlist 2", songs: ["Song 3", "Song 4"] },
  ]);

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
        <Button as={Link} to="/create-playlist" colorScheme="teal" mt={4}>Create Playlist</Button>
        <Heading as="h2" size="lg" mt={8}>Your Playlists</Heading>
        <List spacing={3} width="100%">
          {playlists.map((playlist, index) => (
            <ListItem key={index}>
              <Text fontSize="lg">{playlist.name}</Text>
              <List spacing={1}>
                {playlist.songs.map((song, songIndex) => (
                  <ListItem key={songIndex}>
                    <Text>{song}</Text>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
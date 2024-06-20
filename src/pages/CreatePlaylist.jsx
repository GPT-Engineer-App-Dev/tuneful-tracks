import { useState } from "react";
import { Container, VStack, Heading, Input, Button, List, ListItem, Text } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    if (song) {
      setSongs([...songs, song]);
      setSong("");
    }
  };

  const handleCreatePlaylist = () => {
    // Logic to save the playlist
    console.log("Playlist Created:", playlistName, songs);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>Create Playlist</Heading>
        <Input
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <Input
          placeholder="Add Song"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <Button onClick={handleAddSong}>Add Song</Button>
        <List spacing={3} width="100%">
          {songs.map((song, index) => (
            <ListItem key={index}>
              <Text>{song}</Text>
            </ListItem>
          ))}
        </List>
        <Button colorScheme="teal" onClick={handleCreatePlaylist}>Create Playlist</Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;
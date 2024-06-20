import { Container, VStack, Heading, Text, Box, Image, Button, List, ListItem } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Howl, Howler } from "howler";

const Index = () => {
  const [playlists, setPlaylists] = useState([
    { name: "My Playlist 1", songs: ["Song 1", "Song 2"] },
    { name: "My Playlist 2", songs: ["Song 3", "Song 4"] },
  ]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);

  const playSong = (song) => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    const sound = new Howl({
      src: [`/path/to/songs/${song}.mp3`],
      html5: true,
      onend: () => {
        setIsPlaying(false);
      },
    });
    soundRef.current = sound;
    sound.play();
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (direction) => {
    const currentPlaylist = playlists.find((playlist) =>
      playlist.songs.includes(currentSong)
    );
    const currentIndex = currentPlaylist.songs.indexOf(currentSong);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentPlaylist.songs.length;
    } else {
      newIndex = (currentIndex - 1 + currentPlaylist.songs.length) % currentPlaylist.songs.length;
    }
    playSong(currentPlaylist.songs[newIndex]);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={4}>Music Streaming Service</Heading>
        <Box boxSize="sm">
          <Image src="/images/album-cover.jpg" alt="Album Cover" borderRadius="md" />
        </Box>
        <Text fontSize="xl" mt={4}>Now Playing: {currentSong || "No song selected"}</Text>
        <VStack spacing={2} direction="row" mt={4}>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid" onClick={() => handleSkip("previous")}>Previous</Button>
          <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} colorScheme="teal" variant="solid" onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid" onClick={() => handleSkip("next")}>Next</Button>
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
                    <Text onClick={() => playSong(song)} cursor="pointer">{song}</Text>
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
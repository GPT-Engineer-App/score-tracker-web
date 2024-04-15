import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleScoreChange = (team, points) => {
    if (team === "A") {
      setTeamAScore(teamAScore + points);
    } else {
      setTeamBScore(teamBScore + points);
    }
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box p={8} minHeight="100vh" bg={bgColor} color={textColor}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Basketball Pickup Game Scoreboard
      </Heading>
      <Flex justify="space-around" align="center" mb={8}>
        <Box>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            Team A
          </Heading>
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            {teamAScore}
          </Text>
          <Flex justify="center" mt={4}>
            <Button colorScheme="blue" size="lg" mr={2} onClick={() => handleScoreChange("A", 1)}>
              +1
            </Button>
            <Button colorScheme="green" size="lg" mr={2} onClick={() => handleScoreChange("A", 2)}>
              +2
            </Button>
            <Button colorScheme="red" size="lg" onClick={() => handleScoreChange("A", 3)}>
              +3
            </Button>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" size="xl" textAlign="center" mb={4}>
            Team B
          </Heading>
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            {teamBScore}
          </Text>
          <Flex justify="center" mt={4}>
            <Button colorScheme="blue" size="lg" mr={2} onClick={() => handleScoreChange("B", 1)}>
              +1
            </Button>
            <Button colorScheme="green" size="lg" mr={2} onClick={() => handleScoreChange("B", 2)}>
              +2
            </Button>
            <Button colorScheme="red" size="lg" onClick={() => handleScoreChange("B", 3)}>
              +3
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;

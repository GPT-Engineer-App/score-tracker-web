import React, { useState } from "react";
import { Box, Heading, Text, Flex, Button, useColorModeValue, VStack } from "@chakra-ui/react";

const WINNING_SCORE = 11;

const Index = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [wins, setWins] = useState([0, 0, 0, 0]);

  const checkGameOver = () => {
    const maxScore = Math.max(...scores);
    if (maxScore >= WINNING_SCORE) {
      const winningTeam = scores.findIndex((score) => score === maxScore);
      const secondHighestScore = scores.filter((_, index) => index !== winningTeam).sort((a, b) => b - a)[0];
      if (maxScore - secondHighestScore > 1) {
        const newWins = [...wins];
        newWins[winningTeam]++;
        setWins(newWins);
        setScores([0, 0, 0, 0]);
      }
    }
  };

  const handleScoreChange = (team, points) => {
    const newScores = [...scores];
    newScores[team] += points;
    setScores(newScores);
    checkGameOver();
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box p={8} minHeight="100vh" bg={bgColor} color={textColor}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Basketball Pickup Game Scoreboard
      </Heading>
      <Flex justify="space-around" align="center" mb={8} flexWrap="wrap">
        {["A", "B", "C", "D"].map((team, index) => (
          <Box key={team} mb={[4, 4, 0]}>
            <Heading as="h2" size="xl" textAlign="center" mb={4}>
              Team {team}
            </Heading>
            <Text fontSize="6xl" fontWeight="bold" textAlign="center">
              {scores[index]}
            </Text>
            <Flex justify="center" mt={4}>
              <Button colorScheme="blue" size="lg" mr={2} onClick={() => handleScoreChange(index, 1)}>
                +1
              </Button>
              <Button colorScheme="green" size="lg" mr={2} onClick={() => handleScoreChange(index, 2)}>
                +2
              </Button>
              <Button colorScheme="red" size="lg" onClick={() => handleScoreChange(index, 3)}>
                +3
              </Button>
            </Flex>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" mt={4}>
              Wins: {wins[index]}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;

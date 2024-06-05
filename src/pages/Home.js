import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const popularDishes = [
  { id: 1, name: 'Greek Salad', description: 'A delicious starter.', imageUrl: '/assets/greekSalad.jpg' },
  { id: 2, name: 'Lemon Dessert', description: 'A tasty dessert.', imageUrl: '/assets/lemonDessert.jpg' },
  { id: 3, name: 'Bruschetta', description: 'A tasty appetizer.', imageUrl: '/assets/Bruschetta.jpg' },
];

const placeImages = [
  '/assets/MarioA.jpg',
  '/assets/MarioB.jpg',
  '/assets/chef.jpg',
  '/assets/restaurant.jpg',
  '/assets/restaurantfood.jpg',
];

const Home = () => (
  <Box>
    <Box bg="#505c54" color="white" textAlign="center" py={10} px={6} position="relative">
      <Image
        src="/assets/restaurant.jpg"
        alt="Restaurant"
        objectFit="cover"
        width="100%"
        height="300px"
        position="absolute"
        top="0"
        left="0"
        opacity="0.3"
      />
      <Box position="relative" zIndex="1">
        <Heading as="h1" size="2xl" mb={4}>Little Lemon</Heading>
        <Heading as="h2" size="lg" mb={4}>Chicago</Heading>
        <Text fontSize="lg" mb={6}>
          We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illinois.
          We focus on traditional recipes served with a modern twist.
        </Text>
        <Button as={RouterLink} to="/reservation" colorScheme="teal" size="lg">
          Reserve a Table
        </Button>
      </Box>
    </Box>

    <Box py={10} px={6} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>Popular Dishes</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {popularDishes.map(dish => (
          <Box key={dish.id} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src={dish.imageUrl} alt={dish.name} width="100%" height="200px" objectFit="cover" />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>{dish.name}</Heading>
              <Text>{dish.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

    <Box py={10} px={6} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>Our Place</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {placeImages.map((image, index) => (
          <Box
            key={index}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
          >
            <Image src={image} alt={`Place image ${index + 1}`} width="100%" height="200px" objectFit="cover" />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
);

export default Home;

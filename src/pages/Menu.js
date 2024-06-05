import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

const menuItems = [
  { id: 1, name: 'Greek Salad', description: 'A delicious starter.', price: '$10', imageUrl: '/assets/greekSalad.jpg', category: 'Appetizer' },
  { id: 2, name: 'Lemon Dessert', description: 'A tasty dessert.', price: '$8', imageUrl: '/assets/lemonDessert.jpg', category: 'Dessert' },
  { id: 3, name: 'Bruschetta', description: 'A tasty appetizer.', price: '$12', imageUrl: '/assets/Bruschetta.jpg', category: 'Appetizer' },
  { id: 4, name: 'Pasta Carbonara', description: 'Traditional Italian pasta with egg, cheese, and pancetta.', price: '$15', imageUrl: '/assets/pastaCarbonara.jpg', category: 'Main Dish' },
  { id: 5, name: 'Chicken Caesar Salad', description: 'Grilled chicken breast, romaine lettuce, croutons, parmesan cheese, and Caesar dressing.', price: '$14', imageUrl: '/assets/chickenCaesarSalad.jpg', category: 'Main Dish' },
  { id: 6, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.', price: '$16', imageUrl: '/assets/margheritaPizza.jpg', category: 'Main Dish' },
  { id: 7, name: 'Tiramisu', description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', price: '$9', imageUrl: '/assets/tiramisu.jpg', category: 'Dessert' },
  { id: 8, name: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs.', price: '$9.00', imageUrl: '/assets/stuffedMushrooms.jpg', category: 'Appetizer' },
  { id: 9, name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache.', price: '$8.00', imageUrl: '/assets/chocolateCake.jpg', category: 'Dessert' }, 


];

const Menu = () => {
  // Group menu items by category
  const groupedMenuItems = menuItems.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Box py={10} px={6} textAlign="center">
      <Heading as="h1" size="xl" mb={6}>Menu</Heading>

      {Object.keys(groupedMenuItems).map(category => (
        <Box key={category} mb={10}>
          <Heading as="h2" size="lg" mb={4}>{category}</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
            {groupedMenuItems[category].map(item => (
              <Box key={item.id} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src={item.imageUrl} alt={item.name} width="100%" height="250px" objectFit="cover" />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2}>{item.name}</Heading>
                  <Text fontSize="lg" mb={2}>{item.description}</Text>
                  <Text fontSize="lg" fontWeight="bold">{item.price}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default Menu;

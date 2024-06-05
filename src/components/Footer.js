import React from 'react';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <Box bg="#505c54" color="white" py={6}>
    <Box maxW="1200px" mx="auto" px={6}>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box flex="1" maxW={{ base: '100%', md: 'calc(25% - 24px)' }} mb={{ base: 6, md: 0 }} px={4}>
          <Image src="/assets/footer-logo.png" alt="Footer Logo" maxW="100px" />
        </Box>
        <Box flex="1" maxW={{ base: '100%', md: 'calc(25% - 24px)' }} mb={{ base: 6, md: 0 }} px={4}>
          <Text fontWeight="bold" mb={2}>Navigate</Text>
          <Link as={RouterLink} to="/" color="white" mr={2} mb={1} display="block">Home</Link>
          <Link as={RouterLink} to="/menu" color="white" mr={2} mb={1} display="block">Menu</Link>
          <Link as={RouterLink} to="/reservation" color="white" mr={2} mb={1} display="block">Reservation</Link>
        </Box>
        <Box flex="1" maxW={{ base: '100%', md: 'calc(25% - 24px)' }} mb={{ base: 6, md: 0 }} px={4}>
          <Text fontWeight="bold" mb={2}>Contact Us</Text>
          <Text>123 Maldove Street</Text>
          <Text>Chicago, IL</Text>
          <Text>Phone: +1 123-456-7890</Text>
          <Text>Email: info@littlelemon.com</Text>
        </Box>
        <Box flex="1" maxW={{ base: '100%', md: 'calc(25% - 24px)' }} mb={{ base: 6, md: 0 }} px={4}>
          <Text fontWeight="bold" mb={2}>Media</Text>
          <Link href="https://facebook.com" isExternal color="white" mr={2} mb={1} display="block">Facebook</Link>
          <Link href="https://twitter.com" isExternal color="white" mr={2} mb={1} display="block">Twitter</Link>
          <Link href="https://instagram.com" isExternal color="white" mr={2} mb={1} display="block">Instagram</Link>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default Footer;

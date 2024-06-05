import React from 'react';
import { Box, Flex, Link, Spacer, IconButton, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [display, changeDisplay] = useState('none');

  return (
    <Box>
      <Flex p={4} align="center" bg="white" color="gray.800" boxShadow="md">
        <Link as={RouterLink} to="/" display="flex" alignItems="center">
        <Image src="/assets/letas.png" alt="Logo" w="auto" h="40px" />
        </Link>
        <Spacer />
        <Flex display={['none', 'none', 'flex', 'flex']} align="center">
          <Link as={RouterLink} to="/" p={2} color="gray.800">Home</Link>
          <Link as={RouterLink} to="/menu" p={2} color="gray.800">Menu</Link>
          <Link as={RouterLink} to="/reservation" p={2} color="gray.800">Reservation</Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => changeDisplay('flex')}
        />
      </Flex>

      <Flex
        w="100vw"
        bgColor="white"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDirection="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex flexDirection="column" align="center" color="gray.800">
          <Link as={RouterLink} to="/" p={2} onClick={() => changeDisplay('none')} color="gray.800">Home</Link>
          <Link as={RouterLink} to="/menu" p={2} onClick={() => changeDisplay('none')} color="gray.800">Menu</Link>
          <Link as={RouterLink} to="/reservation" p={2} onClick={() => changeDisplay('none')} color="gray.800">Reservation</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

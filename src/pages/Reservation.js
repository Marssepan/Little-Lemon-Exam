import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import BookingForm from './BookingForm';

const Reservation = () => {
  const [availableTimes] = useState(["6:00 PM", "7:00 PM", "8:00 PM"]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>Reserve a Table</Heading>
      <BookingForm onSubmit={handleSubmit} availableTimes={availableTimes} />
    </Box>
  );
};

export default Reservation;

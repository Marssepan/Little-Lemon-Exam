import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Reservation = () => {
  const [showAlert, setShowAlert] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().min(1, 'Must be at least 1 guest').required('Number of guests is required')
  });

  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="xl" mb={6}>Reserve a Table</Heading>

      {showAlert && (
        <Alert status="success" mb={6}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Reservation Successful!</AlertTitle>
            <AlertDescription>Your table has been reserved successfully.</AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" onClick={() => setShowAlert(false)} />
        </Alert>
      )}

      <Formik
        initialValues={{ name: '', email: '', date: '', time: '', guests: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setShowAlert(true);
          actions.setSubmitting(false);
          // Log the values to console (for development purposes)
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Field as={Input} name="name" />
              <Text color="red.500" fontSize="sm">
                <ErrorMessage name="name" />
              </Text>
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Field as={Input} name="email" type="email" />
              <Text color="red.500" fontSize="sm">
                <ErrorMessage name="email" />
              </Text>
            </FormControl>
            <FormControl id="date" mb={4}>
              <FormLabel>Date</FormLabel>
              <Field as={Input} name="date" type="date" />
              <Text color="red.500" fontSize="sm">
                <ErrorMessage name="date" />
              </Text>
            </FormControl>
            <FormControl id="time" mb={4}>
              <FormLabel>Time</FormLabel>
              <Field as={Input} name="time" type="time" />
              <Text color="red.500" fontSize="sm">
                <ErrorMessage name="time" />
              </Text>
            </FormControl>
            <FormControl id="guests" mb={4}>
              <FormLabel>Number of Guests</FormLabel>
              <Field as={Input} name="guests" type="number" />
              <Text color="red.500" fontSize="sm">
                <ErrorMessage name="guests" />
              </Text>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit" isLoading={isSubmitting}>Submit</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Reservation;

import React from 'react';
import { Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookingForm = ({ onSubmit, availableTimes }) => (
  <Formik
    initialValues={{ name: '', email: '', date: '', time: '', guests: '' }}
    validate={values => {
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.date) {
        errors.date = 'Required';
      }
      if (!values.time) {
        errors.time = 'Required';
      }
      if (!values.guests) {
        errors.guests = 'Required';
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        onSubmit(values);
        setSubmitting(false);
        resetForm();
        alert('Reservation Successful!');
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormControl id="name" mb={4}>
          <FormLabel>Name</FormLabel>
          <Field as={Input} name="name" />
          <ErrorMessage name="name" component="div" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Field as={Input} name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </FormControl>
        <FormControl id="date" mb={4}>
          <FormLabel>Date</FormLabel>
          <Field as={Input} name="date" type="date" />
          <ErrorMessage name="date" component="div" />
        </FormControl>
        <FormControl id="time" mb={4}>
          <FormLabel>Time</FormLabel>
          <Field as={Select} name="time">
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" />
        </FormControl>
        <FormControl id="guests" mb={4}>
          <FormLabel>Number of Guests</FormLabel>
          <Field as={Input} name="guests" type="number" />
          <ErrorMessage name="guests" component="div" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default BookingForm;

import React, { useState } from 'react';
import Navbar from '../utilities/Navbar';
import Footer from '../utilities/Footer';
import BookingForm from '../utilities/BookingForm';
import BookingSlots from '../utilities/BookingSlots';
import { Flex, Box, HStack, VStack, Heading, Text, Image, Button } from '@chakra-ui/react';
import { fetchAPI, submitAPI } from '../utilities/api';

const Reservations = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const getAvailableSlots = (date) => {
    // Simulate an API call to fetch the available slots for a given date
    return new Promise((resolve, reject) => {
      try {
        const slots = fetchAPI(date);
        resolve(slots);
      } catch (error) {
        reject(error);
      }
    });
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getAvailableSlots(date)
      .then((slots) => {
        setAvailableSlots(slots);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormSubmit = (values) => {
    const newSlot = values.time;
    setBookedSlots([...bookedSlots, newSlot]);
    console.log(values);
  };

  const handleSlotSelect = (slot) => {
    console.log('Selected slot:', slot);
  };

  return (
    <>
      <Navbar />
      <HStack backgroundColor="#495e57">
        <Box>
          <Heading as="h1" size="3xl" color="white" p={4} fontFamily="markazi text" fontWeight="extrabold">
            Reserve a Table
          </Heading>
        </Box>
        </HStack>
        <VStack>
        <HStack>
        {availableSlots.map((slot) => (
            <BookingSlots key={slot} slot={slot} isBooked={bookedSlots.includes(slot)} onSelect={handleSlotSelect} />
          ))}
        </HStack>
        <BookingForm bookedSlots={bookedSlots} availableSlots={availableSlots} onSubmit={handleFormSubmit} onDateChange={handleDateChange} selectedDate={selectedDate} />
        </VStack>
      <Footer />
    </>
  );
};

export default Reservations;
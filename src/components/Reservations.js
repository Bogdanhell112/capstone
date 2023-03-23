import React, { useState } from 'react';
import Navbar from '../utilities/Navbar';
import Footer from '../utilities/Footer';
import BookingForm from '../utilities/BookingForm';
import BookingSlots from '../utilities/BookingSlots';
import { Flex, Box, HStack, VStack, Heading, Text, Image, Button } from '@chakra-ui/react';

const Reservations = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const availableSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'];

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
        <BookingForm bookedSlots={bookedSlots} availableSlots={availableSlots} onSubmit={handleFormSubmit} />
        </VStack>
      <Footer />
    </>
  );
};

export default Reservations;
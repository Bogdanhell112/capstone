import React from 'react';
import { Box } from '@chakra-ui/react';

function BookingSlots({ slot, isBooked, onSelect }) {
    const handleClick = () => {
      if (!isBooked) {
        onSelect(slot);
      }
    };

    return (
      <Box className={`booking-slot ${isBooked ? 'booked' : ''}`} onClick={handleClick} padding='2' fontFamily='karla' fontSize='18' fontWeight='bold' borderColor='gray' borderWidth='1px' borderRadius='8' textAlign='center'>
        <div className="booking-slot-time">{slot}</div>
        <div className="booking-slot-status">{isBooked ? 'Booked' : 'Available'}</div>
      </Box>
    );
  }

export default BookingSlots;
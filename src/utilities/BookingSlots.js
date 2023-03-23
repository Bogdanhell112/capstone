import React from 'react';

function BookingSlots({ slot, isBooked, onSelect }) {
    const handleClick = () => {
      if (!isBooked) {
        onSelect(slot);
      }
    };

    return (
      <div className={`booking-slot ${isBooked ? 'booked' : ''}`} onClick={handleClick}>
        <div className="booking-slot-time">{slot}</div>
        <div className="booking-slot-status">{isBooked ? 'Booked' : 'Available'}</div>
      </div>
    );
  }

export default BookingSlots;
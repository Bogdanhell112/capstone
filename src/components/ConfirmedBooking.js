import React from 'react'
import Navbar from '../utilities/Navbar'
import Footer from '../utilities/Footer'
import { HStack, VStack, Text, Box, Heading, Center } from '@chakra-ui/react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useLocation } from 'react-router-dom';




const ConfirmedBooking = ({selectedDate, selectedTime, selectedGuests, selectedOccasion}) =>{
  const location = useLocation()
    return (
        <>
      <Navbar />
        <HStack backgroundColor="#495e57" justify='center'>
            <VStack>
                <Box>
                    <Heading as="h1" size="3xl" color="white" p={4} fontFamily="markazi text" fontWeight="extrabold" textAlign='center' >
                    Thank you for your reservation at Little Lemon!
                    </Heading>
                </Box>
            </VStack>
            </HStack>
        <VStack justifyItems='center' m={10} spacing={5} padding='2rem' justify='center' alignContent='center' border='4px' borderColor='#495e57' borderRadius="18">
            <EventAvailableIcon fontSize='large' htmlColor='#495e57'/>
            <Text fontFamily='karla' fontSize='25' fontWeight='extrabold' justify='left'color='black'>Success!</Text>
            <Text fontFamily='karla' fontSize='20' fontWeight='extrabold' justify='left'color='black'>Reservation Details:</Text>
                <VStack alignItems='center'>
                <Text fontFamily='karla' textAlign='center' fontSize='15'justify='center'color='black'>You booked a table on: {location.state.selectedDate} </Text>
                <Text fontFamily='karla' textAlign='center' fontSize='15'justify='center'color='black'>At: {location.state.selectedTime} </Text>
                <Text fontFamily='karla' textAlign='center' fontSize='15'justify='center'color='black'>And you are having {location.state.selectedGuests} guests </Text>
                <Text fontFamily='karla' textAlign='center' fontSize='15'justify='center'color='black'>For the following occasion: {location.state.selectedOccasion} </Text>
                <Text textAlign='center' lineHeight={5} padding={5} fontFamily='markazi text' fontSize='20'justify='center'color='black'>You will receive a confirmation email shortly!</Text>
                </VStack>
        </VStack>
      <Footer />
      </>
    )
  }

export default ConfirmedBooking
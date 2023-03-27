import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { HStack, VStack, Box, Heading, Text, Image } from '@chakra-ui/react'
import UnPic from '../icons_assets/underconstr.png'

const UnderConstruction = () => {
  return (
    <>
    <Navbar />
    <HStack backgroundColor="#495e57" justify='center'>
            <VStack>
                <Box lineHeight={7} padding='3'>
                    <Heading as="h1" size="3xl" color="white"  fontFamily="markazi text" fontWeight="extrabold" textAlign='center' >
                    We are sorry!
                    </Heading>
                    <Text fontFamily='karla' fontSize='25' fontWeight='medium' textAlign='center' color='white'>This page is currently under construction.</Text>
                </Box>
            </VStack>
            </HStack>
        <VStack justifyItems='left' m={10} spacing={5} padding='2rem' justify='left' alignContent='left' border='4px' borderColor='#495e57' borderRadius="18">
                <VStack alignItems='left'>
                <Image src={UnPic} alt='under construction' width={500} height={500} objectFit='cover' />
                <Text textAlign='center' lineHeight={5}  fontFamily='markazi text' fontSize='20'justify='left'color='black'>You will shortly be able to use this page.</Text>
                </VStack>
        </VStack>
    <Footer />
    </>
  )
}

export default UnderConstruction
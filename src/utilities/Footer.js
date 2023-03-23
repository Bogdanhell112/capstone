import React from 'react'
import Pic7 from '../icons_assets/Mario-and-Adrian-A.jpg'
import { HStack, VStack, Heading, Text, Image, Button} from '@chakra-ui/react'

const Footer = () =>{
    return (
        <HStack wrap='wrap' alignItems='top' justify='center' padding='3rem 5rem' backgroundColor='#495e57' gap={20} sx={{
            '@media (max-width: 500px)': {
              textAlign: 'center',
            },
          }}>
                <Image src={Pic7} w='300px' h='400px' objectFit='cover' borderRadius={18} className='about-us-images' />
                  <VStack align='left'  >
                    <Heading fontFamily='Markazi Text' fontSize='64' textColor='#f4ce14' lineHeight={10} >
                    Little Lemon
                    </Heading>
                    <Heading fontFamily='Markazi Text' fontSize='40' textColor='white' >
                    Chicago
                    </Heading>
                    <VStack align='left' textColor='white'
                    fontFamily='Karla'
                    spacing={2}
                    fontWeight='medium'
                    fontSize='18'
                    justifyContent='space-around' >
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    <a href="">Reservations</a>
                    <a href="">About</a>
                    <a href="">Order Online</a>
                    <a href="">Login</a>
                    </VStack>
                  </VStack>
                  <VStack align='left'>
                  <Heading fontFamily='Markazi Text' fontSize='40' textColor='white' >
                    Contact
                    </Heading>
                    <VStack align='left' textColor='white'
                    fontFamily='Karla'
                    spacing={2}
                    fontWeight='medium'
                    fontSize='18'
                    justifyContent='space-around' >
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    </VStack>
                    </VStack>
                    <VStack align='left'>
                  <Heading fontFamily='Markazi Text' fontSize='40' textColor='white' >
                    Social
                    </Heading>
                    <VStack align='left' textColor='white'
                    fontFamily='Karla'
                    spacing={2}
                    fontWeight='medium'
                    fontSize='18'
                    justifyContent='space-around' >
                    <a href="">Home</a>
                    <a href="">Menu</a>
                    </VStack>
                    </VStack>
                </HStack>
    )
  }

export default Footer


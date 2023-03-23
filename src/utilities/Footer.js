import React from 'react'
import Pic7 from '../icons_assets/Mario-and-Adrian-A.jpg'
import { HStack, VStack, Heading, Text, Image, Button} from '@chakra-ui/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

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
                      <Link to='/' className='nav-item'>Home</Link>
                      <Link to='/' className='nav-item'>Menu</Link>
                      <Link to='/reservations' className='nav-item'>Reservations</Link>
                      <Link to='/about' className='nav-item'>About</Link>
                      <Link to='/' className='nav-item'>Order Online</Link>
                      <Link to='/' className='nav-item'>Login</Link>
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
                    <HStack spacing={3} alignItems='center'justify='left'>
                    <LocationOnIcon fontSize='large' />
                    <Text fontFamily='Karla'
                    spacing={2}
                    fontWeight='medium'
                    fontSize='18'
                    justifyContent='left'>805 S State St, Chicago, IL 60605</Text>
                    </HStack>
                    <HStack spacing={3} alignItems='center' justify='left'>
                    <PhoneIphoneIcon fontSize='large' />
                    <Text fontFamily='Karla'
                    spacing={2}
                    fontWeight='medium'
                    fontSize='18'
                    justifyContent='space-around'>+1 312-786-1000</Text>
                    </HStack>
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
                    <Link to='https://www.facebook.com/groups/319554835997390' className='nav-item'><FacebookIcon fontSize='large'/></Link>
                    <Link to='https://www.instagram.com/littlelemon81/' className='nav-item'><InstagramIcon fontSize='large'/></Link>
                    </VStack>
                    </VStack>
                </HStack>
    )
  }

export default Footer


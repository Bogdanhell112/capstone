import React from 'react'
import { Box, Image, Badge, Text, VStack, HStack, Heading } from '@chakra-ui/react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { motion } from 'framer-motion'

const Testimonials = ({customerName, review, rating, image}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
    <VStack background='#edefee'  maxW='300' boxShadow='lg' borderRadius='18'  align='start' cursor='pointer'>
    <VStack p='6'>
        <HStack display='flex' mt='2' alignItems='center'>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarRateIcon
              key={i}
              htmlColor={i < rating ? 'orange' : 'grey'}
            />
          ))}
      </HStack>
      <HStack minW='fit-content' >
      <Image src={image} alt={customerName}  borderRadius='full' boxSize='100px' objectFit='cover'/>
      <Heading fontFamily='Markazi Text' fontSize='30' fontWeight='bold' lineHeight='tight' noOfLines={1}>
        {customerName}
      </Heading>
      </HStack>
      <Text fontSize ='16'
      textAlign='left'
          color ='#333333'
          minH ='80px'>{review}</Text>
      </VStack>
    </VStack>
    </motion.div>
  )
}

export default Testimonials
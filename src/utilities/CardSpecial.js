import React from 'react'
import { VStack, Heading, HStack, Image, Text } from '@chakra-ui/react'
import MopedIcon from '@mui/icons-material/Moped';
import { motion } from 'framer-motion'

const CardSpecial = ({ title, description, price, image }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
    <VStack background='#edefee' boxShadow='lg' borderTopRadius='18' w={'300px'} align='start'  justify='stretch' cursor='pointer' >
      <Image src={image} alt={title}  height='200px' minW='300px' objectFit='cover' borderTopRadius='18'  />
      <VStack align='start' spacing={10} p={4} justifyContent='space-between'>
        <HStack justify='space-between' w='100%' align='center'>
          <Heading fontFamily='Markazi Text' fontSize='30' fontWeight='bold'>{title}</Heading>
          <Text fontFamily ='Markazi Text'
            fontSize ='30'
            fontWeight ='bold'
            color ='#ee9972'>{price}</Text>
        </HStack>
        <Text fontSize ='16'
          color ='#333333'
          minH ='150px'>{description}</Text>
        <HStack>
        <Text as ='p'
          fontSize ='20'
          color ='black'
          fontWeight ='bold'>Order a delivery</Text>
          <MopedIcon fontSize='large' color='black' />
          </HStack>
      </VStack>
    </VStack>
    </motion.div>
  )
}

export default CardSpecial
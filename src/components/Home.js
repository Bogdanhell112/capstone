import React from 'react'
import Navbar from '../utilities/Navbar'
import BannerImage from '../icons_assets/restauranfood.jpg'
import CardSpecial from '../utilities/CardSpecial'
import Testimonials from '../utilities/Testimonials'
import { Flex, Box, HStack, VStack, Heading, Text, Image} from '@chakra-ui/react'
import Pic1 from '../icons_assets/greek-salad.jpg'
import Pic2 from '../icons_assets/bruchetta.svg'
import Pic3 from '../icons_assets/lemon-dessert.jpg'
import Profile1 from '../users_picture/profile1.jpeg'
import Profile2 from '../users_picture/profile2.jpeg'
import Profile3 from '../users_picture/profile3.jpeg'
import Profile4 from '../users_picture/profile4.jpeg'
import Profile5 from '../users_picture/profile5.jpeg'
import Pic5 from '../icons_assets/restaurantchefB.jpg'
import Pic6 from '../icons_assets/restaurant.jpg'


const Home = () => {
  const testimonials = [
    {
      starRating: 5,
      customerName: 'Rafael',
      pictureUrl: Profile1,
      review: 'Excellent food, excellent service, excellent atmosphere. I would recommend this place to anyone.'
    },
    {
      starRating: 5,
      customerName: 'Tina',
      pictureUrl: Profile2,
      review: 'Excellent food, excellent service, excellent atmosphere. I would recommend this place to anyone.'
    },
    {
      starRating: 5,
      customerName: 'Daniela',
      pictureUrl: Profile3,
      review: 'Awesome food, awesome service, awesome atmosphere. I would recommend this place to anyone.'
    },
    {
      starRating: 4,
      customerName: 'Andreea',
      pictureUrl: Profile4,
      review: 'Awesome food, awesome service, awesome atmosphere. I would recommend this place to anyone.'
    },
    {
      starRating: 3,
      customerName: 'Gassan',
      pictureUrl: Profile5,
      review: 'Awesome food, awesome service, awesome atmosphere. I would recommend this place to anyone.'
    },
    {
      starRating: 5,
      customerName: 'Elena',
      pictureUrl: Profile3,
      review: 'Awesome food, awesome service, awesome atmosphere. I would recommend this place to anyone.'
    },
  ]
  const weekSpecials = [
    {
      title: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      image: Pic1
    },
    {
      title: 'Brushcetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeard with garlic and seasoned with salt and olive oil.',
      price: '$5.99',
      image: Pic2
    },
    {
      title: 'Lemon Dessert',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$5.00',
      image: Pic3
    },
  ]

  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-background'>
        <div className='home-text-section'>
            <h1 className='primary-heading'>Little Lemon</h1>
            <h1 className='third-heading' >Chicago</h1>
            <p className='karla'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className='secondary-button'>Reserve a Table</button>
        </div>
            <div className='home-image-section'>
            <img src={BannerImage} alt='restaurant food' width='300px' height='300px' />
            </div>
    </div>
    <div className='specials-heading'>
        <div className='specials-heading-text'>
            <h1 className='markTitle'>This Week Specials!</h1>
        </div>
        <div className='specials-item-button'>
        <button className='specials-secondary-button'>Online Menu</button>
        </div>
    </div>
    <div className='specials-container'>
    <Flex direction={['column', 'row']} wrap='wrap'align='stretch' justify='center' gap={10}>
       {weekSpecials.map((item) => (
          <CardSpecial
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
          />
        ))}
        </Flex>
    </div>
    <div className='testimonials-heading'>
        <div className='testimonials-container'>
          <div className='testimonials-heading-text'>
          <h1 className='markTitleWhite' >Testimonials</h1>
        <Box w={['100%', '100%', '100%', '960px']} mx='auto' overflowX='auto' alignSelf='center' display='-webkit-box' padding='5' gap='5' scrollBehavior='smooth' scro >
    {testimonials.map((item) => (
      <Testimonials
        key={item.customerName}
        customerName={item.customerName}
        review={item.review}
        rating={item.starRating}
        image={item.pictureUrl}
      />
    ))}
</Box>
</div>
        </div>
        </div>
        <Heading fontFamily='Markazi Text' fontSize='64' padding='5rem 0rem' textAlign='center'>
          About Us
        </Heading>
        <HStack wrap='wrap'align='stretch' justify='center' paddingBottom='5rem' alignItems='center' spacing={2}>
          <VStack align='left'>
            <Heading fontFamily='Markazi Text' fontSize='64' textColor='#f4ce14' lineHeight={3} >
            Little Lemon
            </Heading>
            <Heading fontFamily='Markazi Text' fontSize='40'>
            Chicago
            </Heading>
            <Text fontFamily='Karla' fontSize='18' fontWeight='medium' textColor='black'>
            Welcome to Little Lemon Restaurant, a family-owned Mediterranean eatery that takes pride in serving traditional recipes with a modern twist. Our cozy and inviting dining room offers a warm and friendly atmosphere where you can indulge in the flavors of the Mediterranean.
            </Text>
            <Text fontFamily='Karla' fontSize='18' fontWeight='medium' textColor='black'>
            Our menu is carefully crafted to showcase the best of Mediterranean cuisine, with appetizers, salads, entrees, and desserts made from scratch using fresh and high-quality ingredients. Our lamb kebabs, grilled octopus, moussaka, and spanakopita are among our most popular dishes, but there are plenty of other delicious options to explore as well.
            </Text>
            <Text fontFamily='Karla' fontSize='18' fontWeight='medium' textColor='black'>
            Our bar features a selection of fine wines, craft beers, and signature cocktails that perfectly complement the flavors of our food. We're passionate about sharing our love for Mediterranean cuisine with our guests, and our commitment to authenticity ensures that every meal is a memorable one.
            </Text>
            <Text fontFamily='Karla' fontSize='18' fontWeight='medium' textColor='black'>
            At Little Lemon, we believe that food is not just about nourishment, but also about bringing people together. Whether you're a lifelong fan of Mediterranean food or trying it for the first time, we invite you to join us and discover the flavors of the Mediterranean.
            </Text>
          </VStack>
          <Image src={Pic5} w='300px' h='600px' objectFit='cover' borderRadius={18} className='about-us-images' />
          <Image src={Pic6} w='300px' h='600px' objectFit='cover' borderRadius={18} className='about-us-images' />
        </HStack>
        <HStack wrap='wrap' alignItems='top' justify='center' padding='5rem 0 5rem 0' backgroundColor='#495e57' gap={20}>
        <Image src={Pic5} w='300px' h='400px' objectFit='cover' borderRadius={18} className='about-us-images' />
          <VStack align='left'>
            <Heading fontFamily='Markazi Text' fontSize='64' textColor='#f4ce14' lineHeight={3} >
            Doormat
            </Heading>
            <Heading fontFamily='Markazi Text' fontSize='40' textColor='white' >
            Navigation
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
    </div>
  )
}

export default Home
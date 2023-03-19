import React from 'react'
import Navbar from '../utilities/Navbar'
import BannerImage from '../icons_assets/restauranfood.jpg'
import CardSpecial from '../utilities/CardSpecial'
import { Flex } from '@chakra-ui/react'
import Pic1 from '../icons_assets/greek-salad.jpg'
import Pic2 from '../icons_assets/bruchetta.svg'
import Pic3 from '../icons_assets/lemon-dessert.jpg'


const Home = () => {
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
    </div>
  )
}

export default Home
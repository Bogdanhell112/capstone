import React from 'react'
import Navbar from '../utilities/Navbar'
import BannerImage from '../icons_assets/restauranfood.jpg'
import Card from '../utilities/Card'

const Home = () => {
  const weekSpecials = [
    {
      title: 'Greek Salad',
      description: 'Fresh greens, tomatoes, cucumbers, onions, feta cheese, and olives',
      price: '$25.00',
      image: '../icons_assets/greek-salad.jpg'
    },
    {
      title: 'Chicken Souvlaki',
      description: 'Grilled chicken, tomatoes, onions, and tzatziki sauce',
      price: '$25.00',
      image: '../icons_assets/chicken-souvlaki.jpg'
    },
    {
      title: 'Lamb Souvlaki',
      description: 'Grilled lamb, tomatoes, onions, and tzatziki sauce',
      price: '$25.00',
      image: '../icons_assets/lamb-souvlaki.jpg'
    },
  ]

  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-background'>
        <div className='home-text-section'>
            <h1 className='primary-heading'>Little Lemon</h1>
            <h2 className='mark'>Chicago</h2>
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
       {weekSpecials.map((item) => (
          // Pass item properties as props to Card component
          // Replace with your own Card component implementation
          // You may need to update your Card component to accept these props
          // and display them appropriately
          <Card 
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
          />
        ))}
    </div>
    </div>
  )
}

export default Home
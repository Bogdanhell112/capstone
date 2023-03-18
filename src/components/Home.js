import React from 'react'
import Navbar from '../utilities/Navbar'
import BannerImage from '../icons_assets/restauranfood.jpg'

const Home = () => {
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
    </div>
  )
}

export default Home
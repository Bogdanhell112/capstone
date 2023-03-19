import React from 'react'

const Card = ({ title, description, price, image }) => {
  return (
    <div className='card-container'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}

export default Card
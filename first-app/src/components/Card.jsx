import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <img src="https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg" alt="" width={333} 
      style={{border: "2px solid black" }}
      />
      <h2 style={{marginLeft:'5px'}}>{props.title}</h2>
      <p style={{marginLeft:'5px'}}>{props.description}</p>
    </div>
  )
}

export default Card

import React from 'react'

const Card = (props) => {

  return (
    <div id={props.myID} className='card--container'>
        <img src={props.imgCard} />
      <div className='text-card--container'>
        <img src='.././assets/Star.png'/>
        <span>{props.rate}</span>
        <span className='text-ligth'>{props.num} •</span>
        <span className='text-ligth'>{props.country}</span>
        <p className='text-title'>{props.title}</p>
        <p className='text-price'><strong>From {props.cost}</strong> / person</p>
      </div>
    </div>
  )
}

export default Card

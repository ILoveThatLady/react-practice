import React from 'react'

const Card = (props) => {

  return (
    <div className='card--container'>
        <img src={props.imgCard} />
      <div className='text-card--container'>
        <img src=''/>
        <span>{props.rate}</span>
        <span>{props.num} • </span>
        <span>{props.country}</span>
        <p>{props.title}</p>
        <p><strong>From {props.cost}</strong> / person</p>
      </div>
    </div>
  )
}

export default Card

import React from 'react'
import './Card.css'
import CardBody from './CardBody'
import Footer from './Footer'
import MyImage from './MyImage'

const Card = () => {
  return (
    <div className='card--container'>
      <MyImage />
      <CardBody />
      <Footer />
    </div>
  )
}

export default Card

import React from 'react';
import Card from './Card';
import './Experiences.css';

const Experiences = () => {

//imgCard, rate, num, country, title, cost
//'card--container' && 'text-card--container'
  return (
    <div className='exp--containers'>
      <Card myID='firstCard' imgCard='../../src/assets/card1.png' rate='5.0' num=' (6)' country='USA' title='Life lessons with Katie Zaferes' cost='$136' />
      <Card imgCard='../../src/assets/card2.png' rate='5.0' num=' (30)' country='USA' title='Learn edding photography' cost='$125' />
      <Card myID='lastCard' imgCard='../../src/assets/card3.png' rate='4.8' num=' (2)' country='USA' title='Group Mountain Biking' cost='$50' />
    </div>
  )
}

export default Experiences;

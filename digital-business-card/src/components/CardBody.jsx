import React from 'react'
import './CardBody.css'
import RedirectButtons from './RedirectButtons'

const CardBody = () => {
  return (
    <div className='body--container'>
      <h1>Emilio Ortiz</h1>
      <h3>Frontend Developer</h3>
      <a href='https://github.com/ILoveThatLady'>ortizemiliodev.website</a>
      <div className='btn--container'>
       <RedirectButtons url='' className='btn--email' text='Email'/>
        <RedirectButtons
        url='https://www.linkedin.com/in/emilio-ortiz-iltl/' className='btn--linked' text='LinkedIn'/>
      </div>
      <div className='content--container'>
        <div className='sub--containerA'>
          <h2>About</h2>
            <p>Hi, I'm a self-taught developer currently focused on front-end development, UX, and UI design.
            I like to always keep up to date, and my ability to learn and understand new things has always been one of my best qualities that keeps me constantly improving at my job.
            </p>
        </div>
        <div className='sub--containerB'>
          <h2>Interests</h2>
          <p>I like videogames, and drawing, and one of my hobbies is tattooing.</p>
        </div>
      </div>
    </div>
  )
}

export default CardBody

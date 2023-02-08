import React from 'react'
import './Footer.css'

import RedirectButtons from './RedirectButtons'


const Footer = () => {
  

  return (
    <div className='footer--container'>
      <RedirectButtons url='https://twitter.com/?lang=es' className='footer--twitter'/>
      <RedirectButtons url='https://www.facebook.com/' className='footer--facebook'/>
      <RedirectButtons url='https://www.instagram.com/emiliod_ortiz/' className='footer--instagram'/>
      <RedirectButtons url='https://github.com/ILoveThatLady' className='footer--github' />
    </div>
  )
}

export default Footer

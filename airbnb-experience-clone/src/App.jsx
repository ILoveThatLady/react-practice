import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Experiences from './components/Experiences';
import './App.css'

const App = () => {
  return (
    <div className='main--container'>
      <Navbar />
      <Body />
      <Experiences />
    </div>
  )
}

export default App;

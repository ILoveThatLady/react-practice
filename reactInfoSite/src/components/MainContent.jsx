import React from 'react';
import './mainContent.css';

const mainContent = () => {
  return (
    <div className='main-container'>
        <h1>Fun facts about React</h1>
        <ul className='main--facts'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K starts on Github</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
            <li>Is maintained by Facebook</li>
        </ul>
    </div>
  )
};

export default mainContent;

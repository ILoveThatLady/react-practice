import React, { useState } from 'react';

const RedirectButtons = (props) => {
    const [redirect, setRedirect] = useState(false);
  
    const handleClick = () => {
      setRedirect(true);
    };
  
    if (redirect) {
      window.location.href = props.url;
      return null;
    }
  
    return (
      <button onClick={handleClick} className={props.className}>{props.text}</button>
    );
  };

export default RedirectButtons;
import React from 'react'

import './Button.css';

const Button = ({ type, text, onClick, ...props }) => {
  // Decide the class based on the 'type' prop
  let className = 'text-small text-bold large-3 medium-3 small-3 clickable';

  if (type === 'ghost') {
    className += ' button-ghost text-primary';
  } else {
    className += ' button-default text-light';
  }

  return (
    <button className={className} onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
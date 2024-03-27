/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Button = ({ onClick, children, type, className }) => {
  return (
    <button
      onClick={onClick}
      type={type || 'button'} // default type is 'button'
      className={`uppercase ${className || ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
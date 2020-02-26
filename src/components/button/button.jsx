import React from 'react';
import './button.css';

const Button = ({ buttonLabel, clickHandle }) => <button role="button" onClick={clickHandle} className='reset-button'>{buttonLabel}</button>
export default Button;
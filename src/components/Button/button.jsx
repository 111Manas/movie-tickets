import React from 'react';
import './button.css';

const STYLES = ['btm--primary', 'btm--outline'];

const SIZES = ['btm--medium', 'btm--large', 'btm--mobile', 'btm--wide'];

const COLOR = ['primary', 'blue', 'red', 'green','black'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor }) => {
    
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btm ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
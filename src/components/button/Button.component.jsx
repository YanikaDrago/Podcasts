import React from 'react';

import './button.styles.css';

const Button = ({ buttonStyle, children, ...otherProps }) => (
  <button
    className={`button ${buttonStyle}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
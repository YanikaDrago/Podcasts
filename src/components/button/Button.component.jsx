import React from 'react';

import './button.styles.css';

const Button = ({ bottonStyle, children, ...otherProps }) => (
  <button
    className={`button ${bottonStyle}`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
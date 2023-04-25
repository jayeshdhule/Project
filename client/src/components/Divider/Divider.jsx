import React from 'react';
import "./Divider.scss";

const Divider = ({ children }) => (
  <h4
    className={`heading-4 color-grey ${
      children ? 'divider--split' : 'divider'
    }`}
  >
    {children}
  </h4>
);

export default Divider;
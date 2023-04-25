import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => (
  
  <footer className="footer">
    
    <div className="footer__left">
      
      <Link to="/about">ABOUT</Link>
      <Link to="/help">HELP</Link>
      <Link to="/privacy">PRIVACY</Link>
      <Link to="/tnc">TERMS AND CONDITIONS</Link>
    </div>
   
  </footer>
);

export default Footer;
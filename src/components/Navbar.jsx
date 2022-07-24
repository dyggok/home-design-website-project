import React from 'react';
import '../mainCss.css';
import logo from '../images/koctas-324.jpg';

function Navbar(props){
  return(
  <>
  <nav className="navbar">
    <div className="container-fluid">
      <div className='offset-4 col-4'>
        <a href="/" className='navbar-brand'>
          <img src={logo} alt="logo" width="20%"/>
        </a>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar;
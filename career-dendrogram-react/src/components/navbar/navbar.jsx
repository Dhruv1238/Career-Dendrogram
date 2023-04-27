import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    // <nav className="navbar">
    //   <div className="navbar__left">
    //     <h1>Career Dendrogram</h1>
    //   </div>
    //   <div className="navbar__right">
    //     <button>Home</button>
    //     <button>About</button>
    //     <button>Contact</button>
    //   </div>
    // </nav>
    <nav className='navbar'>
      <div className='navtitle'>
        <h1>Career Dendrogram</h1>
      </div>
      <div className='navitems'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="hamburger" >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
  </div>
    </nav>
  );
}

export default Navbar;

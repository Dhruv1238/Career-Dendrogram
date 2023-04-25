import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Career Dendrogram</h1>
      </div>
      <div className="navbar__right">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;

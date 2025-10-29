import React, { useState } from "react";
import { Link } from "react-router-dom";

function CollapsibleMenu2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-menu">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>

      {isOpen && (
        <nav className="menu">
          <ul>
            <li><Link to="/">HOME PAGE</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/search">SEARCH</Link></li>
            <li><Link to="/cities">CITIES</Link></li>
            <li><Link to="/login">USER LOGIN</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default CollapsibleMenu2;
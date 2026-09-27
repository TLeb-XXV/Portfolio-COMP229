//Talia Lebano 
//Last update 2026/09/06

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        TL
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/references">References</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </nav>
  );
}

export default Navbar;
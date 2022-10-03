import React from "react";
import {Link} from 'react-router-dom'
function Navbar()
{
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="Home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="About">About</Link>
      </li>
      
     
    </ul>
  </div>
</nav>

   
}
export default Navbar
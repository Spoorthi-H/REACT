import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbarr extends Component {
  render() {
    return (
    
    
        <nav className="nav nav-pills nav-justified">
  <Link className="nav-link active" to="Contactapp">Contact App</Link>
  <Link className="nav-link" to="ContactList">Contact List</Link>
  <Link className="nav-link" to="ContactDetails">Contact Details</Link>

</nav>
      
    )
  }
}

export default Navbarr
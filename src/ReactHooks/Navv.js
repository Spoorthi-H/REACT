import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbarr extends Component {
  render() {
    return (
    
    
        <nav className="nav nav-pills nav-justified">
  <Link className="nav-link active" to="Msg">View Message</Link>
  <Link className="nav-link active" to="Navv"><button>Home</button></Link>
 
 

</nav>
      
    )
  }
}

export default Navbarr
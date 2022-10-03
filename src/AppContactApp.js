import React, { Component } from 'react'
//import Employee from './Axios/Employee'
//import User from './Axios/User'
import Navbarr from './Axios/ContactApp/Navbarr'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import ContactDetails from './Axios/ContactApp/ContactDetails'
import ContactList from './Axios/ContactApp/ContactList'
import Contactapp from './Axios/ContactApp/Contactapp'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Navbarr/>
      <Switch>
        <Route path='/Contactapp' component={Contactapp}/>
        <Route path='/ContactList' component={ContactList}/>
        <Route path='/ContactDetails' component={ContactDetails}/>
      </Switch>
       
      </Router>
      </div>
    )
  }
}

export default App
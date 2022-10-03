import React, { Component } from 'react'
//import Employee from './Axios/Employee'
//import User from './Axios/User'
import Navv from './ReactHooks/Navv'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Msg from './ReactHooks/Msg'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Navv/>
      <Switch>
        <Route path='/Msg' component={Msg}/>
        
      </Switch>
       
      </Router>
      </div>
    )
  }
}

export default App
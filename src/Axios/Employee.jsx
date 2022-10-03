import React, { Component } from 'react'
import Axios from 'axios'
 class Employee extends Component {
    constructor(props)
    {
        super(props);
        this.state={employees:[]}}
        componentDidMount()
        {
            Axios.get('https://jsonplaceholder.typicode.com/users')
                 .then((response)=>{this.setState({employees:response.data})})
                 .catch((err)=>{console.log(err)})
        }
    
  render() {
    return (
      <div>Employee</div>
    )
  }
}

export default Employee
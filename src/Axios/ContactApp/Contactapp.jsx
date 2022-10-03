import React, { Component } from 'react'
import ContactList from './ContactList'
import Axios from 'axios'
import ContactDetails from './ContactDetails';

 class Contactapp extends Component {
    constructor(props)
    {
    super(props);
    this.state={
        users:[],
    selectedcontact:{}
     }
    }
    selectedcontact=(value)=>
    {
        this.setState({selectedcontact:value})
    }
    componentDidMount()
    {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>
        {
            console.log(response.data)
            this.setState({users:response.data})
        })
        .catch((err)=>{console.log(err)})
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.users)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <ContactList contact={this.state.users} mthd={this.selectedcontact}/>
                </div>
                <div className="col-md-4">
                   {
                    Object.keys(this.state.selectedcontact).length>0?<>
                   
                    <ContactDetails mthd={this.state.selectedcontact}/>
                    </>:null
                   }
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default Contactapp
import React, { Component } from 'react'

class ContactList extends Component {
    selecteduser(value)
    {
        console.log(value)
        this.props.mthd(value)
    }
  render() {
  //let {users} = this.props;
        return (
          <div><h3>Hello,User</h3>
          <pre>{JSON.stringify(this.props)}</pre>
           
            <div className="container">
                <div className="row mr-10">
                    <div className="col-md-6">
                        <table className='table table hover'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.contact.length>0?<>
                                {
                                 this.props.contact.map((user,index)=>{
                                    return <tr key={index} onMouseOver={this.selecteduser.bind(this,user)}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                                })}</>:null}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}

export default ContactList
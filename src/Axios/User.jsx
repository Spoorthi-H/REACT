import React, { Component } from 'react'
import   Axios  from 'axios'
 class User extends Component {
   state={users:[]}
   componentDidMount()
   {
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{this.setState({users:response.data})})
            .catch(()=>{})
   }
  render() {
    return (
      <div><h3>Hello,User</h3>
      <pre>{JSON.stringify(this.state)}</pre>
       
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
                        {
                            this.state.users.length>0?<>
                            { this.state.users.map((user)=>{
                                return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                            })}
                            </>:null
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default User
import React, { Component } from 'react'
 class ContactDetails extends Component {
  render() {
    return (
      <div>ContactDetails
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="container">
        <div className="row">
            <div className="col">
            <div class="card">
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
   
  <ul className="list-group list-group-flush">
    <li className="list-group-item">ID:{this.props.mthd.id}</li>
    <li className="list-group-item">Name:{this.props.mthd.name}</li>
    <li className="list-group-item">Email:{this.props.mthd.email}</li>
  </ul>
  
</div>
            </div>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default ContactDetails
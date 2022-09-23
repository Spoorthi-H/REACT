import React from "react";
class Register extends React.Component
{
    state={fname:"",lname:"",dob:"",gender:"",email:"",location:{Bengaluru:false,Hyderabad:false,Chennai:false,Kolkata:false}}
    updatehandler=( event)=>
    {
        this.setState({[event.target.name]:event.target.value})
        

    }
    chkboxhandler=(event)=>
    {
       
       let state=this.state
      this.state.location[event.target.value]=event.target.checked
       this.setState({state})
       console.log(this.state.location)

    }
    
    loginhandler=(event)=>
    {
        event.preventDefault()

    }
    render()
    {
        return <div>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                            <h1>Registration Form</h1>
                        </div>
                        <div className="card-body">
                        <form onSubmit={this.loginhandler}>
                            <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-control" name="fname" onChange={this.updatehandler}/>
                           </div>
                           <div className="form-group">
                            <input type="text" placeholder="Last Name" className="form-control" name="lname" onChange={this.updatehandler}/> 
                            </div>
                            <div className="form-group">
                            <input type="date" placeholder="DOB" className="form-control" name="dob" onChange={this.updatehandler}/></div>
                            <label>Gender:</label><br/>
                           
                            <div className="form-group">
                            <input type="radio" value="male"  name="gender"
                            checked={this.state.gender==="male"}
                            onChange={this.updatehandler}
                            />Male  &nbsp;&nbsp;
                            <input type="radio" value="female" name="gender"
                            checked={this.state.gender==="female"}
                            onChange={this.updatehandler}/>Female  &nbsp;&nbsp;
                            <input type="radio" value="other" name="gender"
                            checked={this.state.gender==="other"}
                            onChange={this.updatehandler}/>Other
                            </div>
                            <div className="form-group">
                             <input type="text" placeholder="Email" className="form-control" name="email" onChange={this.updatehandler}/></div>
                             <div className="form-group">
                                 <label>Preferred Location:</label><br/>
                                <input type="checkbox"   name="location"  value="Bengaluru"checked={this.state.location.Bengaluru} onChange={this.chkboxhandler}/>Bengaluru &nbsp;&nbsp;
                                <input type="checkbox"   name="location" value="Hyderabad" checked={this.state.location.Hyderabad} onChange={this.chkboxhandler}/>Hyderabad<br/>
                                <input type="checkbox"  name="location" value="Chennai" checked={this.state.location.Chennai} onChange={this.chkboxhandler}/>Chennai   &nbsp;&nbsp;&nbsp; &nbsp;
                                <input type="checkbox"  name="location" value="Kolkata" checked={this.state.location.Kolkata} onChange={this.chkboxhandler}/>Kolkata
                             </div>
                
                            <input type="submit" value="Register" className="btn btn-success "/>
                            
                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    }
}
export default Register
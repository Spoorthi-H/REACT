import React from "react";
class Register extends React.Component
{
    updatehandler=()=>
    {

    }
    render()
    {
        return <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h1>Registration Form</h1>
                        </div>
                        <div className="card-body">
                        <form onChange={this.updatehandler}>
                            <div className="form-group">
                            <input type="text" placeholder="First Name" className="form-control"></input>
                           </div>
                           <div className="form-group">
                            <input type="text" placeholder="Last Name" className="form-control"></input> <br/>
                            </div>
                            <div className="form-group">
                            <input type="date" placeholder="DOB" className="form-control"></input> </div>
                            <label>Gender:</label><br/>
                           
                            <div className="form-group">
                            <input type="radio"></input>&nbsp;&nbsp;Male&nbsp;&nbsp;
                            <input type="radio"></input>&nbsp;&nbsp;Female<br/>
                            <input type="radio"></input>&nbsp;&nbsp;Other<br/>
                            </div>
                            <div className="form-group">
                             <input type="text" placeholder="Email" className="form-control"></input><br/></div>
                            
                            <input type="submit" value="Register" className="btn btn-success "></input>
                            
                            
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
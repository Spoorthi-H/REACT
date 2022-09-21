import React from "react";
class Login extends React.Component
{
    state={email:"",
           pwd:""
          }
    emaailhandler=(event)=>{
        this.setState({email:event.target.value})
    }
    pwdhandler=(event)=>{
        this.setState({pwd:event.target.value})
    }
    loginhandler=(event)=>
    {
      event.preventDefault()
    }
    render()
    {
        return <div> 
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-head">
                                <h4>Login</h4>
                            </div>
                                <div className="card-body">
                                <form >
                                    <div className="form-group">
                
                <input type="text" placeholder="Email"className="form-conrol" onChange={this.emaailhandler}></input><br/>
                </div>
                 <div className="form-group">
                
                <input type="password" placeholder="Password"className="form-conrol" onChange={this.pwdhandler}></input><br/></div>
                <div className="form-group">
                <input type="submit" value="Login" className="form-conrol btn btn-success" onClick={this.loginhandler}></input></div>
            </form>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    }

}
export default Login
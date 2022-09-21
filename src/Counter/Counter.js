import React from "react";
class Counter extends React.Component
{ 
    state={cnt:1}
    incrhandler=()=>
    {
        this.setState({cnt:this.state.cnt+1})

    }
    decrhandler=()=>
    {
        this.setState({cnt:this.state.cnt-1})
    }
    render()
    {
        return <div>
            <h4>Counter value: {this.state.cnt}</h4>
            <button onClick={this.incrhandler}>+</button>
            
            <button onClick={this.decrhandler}>-</button>

        </div>
    }
}
export default Counter
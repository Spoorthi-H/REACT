import React from "react";
class Message extends React.Component
{
     state={msg:"Hello"}
     gmhandler =()=>{
        this.setState({msg:"Good Morning!"})
     }
     gnhandler =()=>{
        this.setState({msg:"Good Night!"})
     }
    render()
    {
        return <div>
            <h4>Message:{this.state.msg}</h4>
            <button onClick={this.gmhandler}>GM</button><br/><br/>
            <button onClick={this.gnhandler}>GN</button>

        </div>
    }
}
export default Message
import React from 'react'
import {useState} from 'react'

let Msg = () => {
    let [msg,state]=useState([1,2,3])
    let [size,setsize]=useState(msg.length)
    let updatehandler=()=>
{
    state(['a','b','c','d'])
}    
  return (
    <div><h3>Message Functional Component:{msg}  </h3>
    <h3>size:{size}</h3>
    <button onClick={updatehandler}>UpdateMSG</button>&nbsp;&nbsp;&nbsp;
    <button onClick={()=>
    {
        setsize(msg.length)
    }
    }>UpdateSize</button>
    </div>
  )
}

export default Msg
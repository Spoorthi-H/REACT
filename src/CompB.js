import React from "react";

function CompB(props)
{
    
        return <div>
           
            <pre>{JSON.stringify(props)}</pre><hr/>
            <h2>Component B</h2>
            <hr/>
            <span>ProductName:{props.prop1} <br></br>
            Price:{props.prop2}</span>


        </div>
   
}
export default CompB
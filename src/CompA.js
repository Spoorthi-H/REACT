import CompB from './CompB'
import React from "react"

function CompA()
{
    let name="Mobile"
    let price="$100"
    

        return <div>
            <h2>Component A</h2>
            <CompB prop1={name} prop2={price}/>
        </div>
    
}
export default CompA
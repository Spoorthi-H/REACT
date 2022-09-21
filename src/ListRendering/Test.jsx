import React,{ Component } from "react";

class Test extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            employees:[{id:1,name:"Rahul",sal:50000,oncall:""},
                       {id:2,name:"Sonia",sal:60000,oncall:""}               
                      ]
                   }


    }
    updatehandler=(value)=>
    {
        value.PreventDefault()
        this.setState(
            {
                employees:{
                    ...this.state.employees,
                oncall:value
                }

           
            
    })


    }   
     render()
    {
       return <div>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>oncall</th>
            </thead>
            <tbody>
                {
                this.state.employees.map((emp,index)=>{
                
                    return <tr key={index}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.sal}</td>
                        <td><button onClick={this.updatehandler.bind(this,"No")}>No</button>{emp.oncall}<button onClick={this.updatehandler.bind(this,"Yes")}>Yes</button></td>
                        
                    </tr>
               })
            } 
            </tbody>
        </table>

        </div>
    }

}
export default Test
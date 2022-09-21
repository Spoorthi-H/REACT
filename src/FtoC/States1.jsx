import React from "react";
class States1 extends React.Component
{
    state={
        product:
        {
        name:"SAMSUNG Galaxy F13",
        price:11999,
        image:"https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/m/w/x/-original-imagfhu6bdzhnmkz.jpeg?q=70",
        qty:1
       }
    }
       incrhandler=()=>{
       
        this.setState({product:{...this.state.product,qty:this.state.product.qty+1 }}) 

       }
       decrhandler=()=>
       {
    
        this.setState({product:{...this.state.product,qty:this.state.product.qty-1
        }})
       }

         
    render()
    {   

        return( <div>
            <pre>{JSON.stringify(this.state.product)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        < table className="table">
                            <thead className=" bg-dark text-white">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody >
                            <tr>
                    <td>{this.state.product.name}</td>
                    <td>{this.state.product.price}</td>
                    <td><img src={this.state.product.image} alt="Mobile" height="80px"/></td>
                    <td><button onClick={this.decrhandler}>-</button>&nbsp; &nbsp;{this.state.product.qty}&nbsp;&nbsp;<button onClick={this.incrhandler}>+</button></td>
                    <td>{this.state.product.qty*this.state.product.price}</td>
                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            

        </div>)
    }
}
export default States1
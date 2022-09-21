import React, { Component } from "react"

class ProdList extends Component
{
    constructor(props)
    {
    super(props)
    this.state={
        product: [
        {
        name:"SAMSUNG Galaxy F13",
        price:11999,
        image:"https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/m/w/x/-original-imagfhu6bdzhnmkz.jpeg?q=70",
        qty:1
       },
       { name:"realme C30s",
       price:21999,
       image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/n/-original-imagg3myvj6f3pez.jpeg?q=70",
       qty:1},
       { name:"REDMI 10 ",
       price:31999,
       image:"https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/w/r/t/-original-imagcgtgwg5taegn.jpeg?q=70",
       qty:1}]
    }
}
       updatehandler=(value)=>{
       
        this.setState({product:{...this.state.product,qty:value }}) 

       }
       
         
    render()
    {   

        return( <div>
            <pre>{JSON.stringify(this.state.product)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        < table className="table table-hover">
                            <thead className=" bg-dark text-white">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody >
                                {
                                    this.state.product.map((prod,index)=>{
                    return  <tr key={index}>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td><img src={prod.image} alt="Mobile" height="80px"/></td>
                    <td><button onClick={prod.updatehandler.bind(prod,prod.qty-1)}>-</button>&nbsp; &nbsp;{prod.qty}&nbsp;&nbsp;<button onClick={prod.updatehandler.bind(prod,prod.qty+1)}>+</button></td>
                    <td>{prod.qty*prod.price}</td>
                </tr>
                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            

        </div>)
    }
}
export default ProdList
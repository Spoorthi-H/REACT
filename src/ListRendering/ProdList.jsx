import React from "react"

class ProdList extends React.Component
{
    constructor(props)
    {
        super(props);
    
   this.state={
        product: [
        {
        id:1,
        name:"SAMSUNG Galaxy F13",
        price:11999,
        image:"https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/m/w/x/-original-imagfhu6bdzhnmkz.jpeg?q=70",
        qty:4
       },

       { 
        id:2,
         name:"realme C30s",
       price:21999,
       image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/n/-original-imagg3myvj6f3pez.jpeg?q=70",
       qty:1
    },
       {
        id:3, name:"REDMI 10 ",
       price:31999,
       image:"https://rukminim1.flixcart.com/image/416/416/l0tweq80/mobile/w/r/t/-original-imagcgtgwg5taegn.jpeg?q=70",
       qty:1
    }]
    }
}
updateProduct = (produc, op)=>{
    console.log(op)
    this.setState({
        
    })
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
                                    this.state.product.map((prod)=>{
                    return  <tr key={prod.id}>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td><img src={prod.image} alt="Mobile" height="80px"/></td>
                    <td><button onClick={this.updateProduct.bind(this,prod,'minus')}>-</button>&nbsp; &nbsp;{prod.qty}&nbsp;&nbsp;<button >+</button></td>
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
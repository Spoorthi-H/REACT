import React from "react";
class Cart extends React.Component
{
    render()
    {
        return <div>
            <h4>Category:</h4>
            <pre>{JSON.stringify(this.props)}</pre>
            <span>Item:  {this.props.prop1}</span><br/>
            <h4>Model:</h4>
            <img src={this.props.prop3} alt="shoes"/><br/>
            <span>Price: {this.props.prop2}</span><br/>
           


        </div>
    }
}
export default Cart
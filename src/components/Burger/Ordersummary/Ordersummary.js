import React, { Component } from "react"
import Auxx from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
    
    render() {
       const ingredientSummary = Object.keys(this.props.ingredients).map((igKey, index) => {
            return <li key={index}><span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{this.props.ingredients[igKey]}</li>
        });
        return (
            <Auxx>
                <h3>Your order</h3>
                <p>Delicous Burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> <strong>Total Price :</strong> {this.props.price} </p>
                <p>Continue to Checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxx>
        );
    }
}


export default OrderSummary;
import React from "react"
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey,index) => {
        return<li key={index}><span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{props.ingredients[igKey]}</li>
    });
    return (
        <Auxx>
            <h3>Your order</h3>
            <p>Delicous Burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> <strong>Total Price :</strong> {props.price} </p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxx>
    );
}

export default orderSummary;
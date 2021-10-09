import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from "react-redux"
import * as actionTypes from '../../store/actions/index'
class Checkout extends Component {
    // // constructor(props) {
    // //     super(props);
    // //     // this.state = {
    // //     //     ingredients: null,
    // //     //     totalPrice: 0
    // //     // }
    // // }
    // UNSAFE_componentWillMount() {
    //     this.props.onInitPurchase()
    //     // const query = new URLSearchParams(this.props.location.search);
    //     // const ingredients = {};
    //     // let price = 0
    //     // for (let param of query.entries()) {
    //     //     if (param[0] === 'price') {
    //     //         price = param[1];
    //     //     } else {
    //     //         ingredients[param[0]] = +param[1]; // + to convert it to a number
    //     //     }
    //     // }
    //     // this.setState({ ingredients: ingredients, totalPrice: price });
    // }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        let summary = <Redirect to="/" />
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        onCheckoutCancelled={this.checkoutCancelledHandler}
                        onCheckoutContinued={this.checkoutContinuedHandler}
                    />
                    <Route path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>)
        }
        return summary
    }
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased
    }
}
const mapsDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(actionTypes.purchaseInit())
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Checkout);
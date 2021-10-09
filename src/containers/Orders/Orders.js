import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
    }
    componentDidMount() {
        this.props.onFetchOrder()
        // axios.get("/orders.json")
        //     .then(response => {
        //         const fetchOrders = []
        //         for (let key in response.data) {
        //             fetchOrders.push({ ...response.data[key], id: key })
        //         }
        //         this.setState({ loading: false, orders: fetchOrders })
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false })
        //     })
    }
    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
        }
        return (
            <div>
                {orders}
            </div>
        )
    }
}
const mapsStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder:()=> dispatch(actions.fetchOrders())
    }
}
export default connect(mapsStateToProps, mapDispatchToProps)(WithErrorHandler(Orders, axios));
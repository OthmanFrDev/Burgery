import * as actionTypes from "./actionTypes"
import axios from "../../axios-orders"

export const purchaseBurgerSucces=(id,orderData)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCES,
        orderId:id,
        orderData:orderData
    }
}
export const purchaseBurgerFail=(error)=>{
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}
export const purchaseBurgerStart=()=>{
    return {
        type:actionTypes.PURCHASE_BURGER_START,
    }
}
export const purchaseBurger=(orderData)=>{
    return dispatch=>{
        dispatch(purchaseBurgerStart())
        axios.post('/orders.json', orderData).then(response => {
            dispatch(purchaseBurgerSucces(response.data.name,orderData))
        }).catch(error => {
            dispatch(purchaseBurgerFail(error))
        })
    }
}
export const purchaseInit=()=>{
    return {
        type:actionTypes.PURCHASE_INIT
    }
}
export const fetchOrderStart=()=>{
    return {
        type:actionTypes.FETCH_ORDERS_START
    }
}
export const fetchOrderSuccess=(orders)=>{
    return {
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}
export const fetchOrderFail=(error)=>{
    return {
        type:actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }
}
export const fetchOrders=()=>{
    return dispatch=>{
        dispatch(fetchOrderStart())
        axios.get("/orders.json")
            .then(response => {
                const fetchOrders = []
                for (let key in response.data) {
                    fetchOrders.push({ ...response.data[key], id: key })
                }
                dispatch(fetchOrderSuccess(fetchOrders))
            })
            .catch(error => {
                dispatch(fetchOrderFail(error))
            })
    }
}
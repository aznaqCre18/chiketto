import axios from 'axios'

const token = window.localStorage.getItem('token')

export const paymentA = (data) => {
    return {
        type : "GET_USER_PAYMENT",
        payload: axios({
            method: "GET",
            url: "http://localhost:3500/api/v1/order-pay",
            headers: {
                Authorization: `Bearer ${token}`
            }   
        })
    }
}
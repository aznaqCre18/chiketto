import axios from 'axios'

const token = window.localStorage.getItem('token')

export const tiketUserA = () => {
    return {
        type : "GET_TIKET_USER", 
        payload: axios({
            method: "GET",
            url: "http://localhost:3500/api/v1/get-order",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}
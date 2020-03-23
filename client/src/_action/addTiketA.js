import axios from 'axios'

const token = window.localStorage.getItem('token')

export const addTiketA  = (data) => {
    return {
        type : "POST_ADD_TIKET",
        payload : axios({
            method: "POST",
            url : "http://localhost:3500/api/v1/add-tiket",
            data : data,
            headers: {
                Authorization : `Bearer ${token}`
            }
        })
    }
}

export const allTiketA = () => {
    return {
        type : "GET_ALL_TIKET",
        payload : axios ({
            method: "GET",
            url : "http://localhost:3500/api/v1/allTiket",
        })
    }
}
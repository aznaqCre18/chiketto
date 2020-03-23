import axios from 'axios'

const token = window.localStorage.getItem('token')

export const find = () => {
    return {
        type : "GET_USER_LOGIN",
        payload: axios({
            method: "GET",
            url: "http://localhost:3500/api/v1/find-user",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

}

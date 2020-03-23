import axios from 'axios';

export const login = (data) => {
    return {
        type: "POST_LOGIN",
        payload: axios({
            method: "POST",
            url: "http://localhost:3500/api/v1/login",
            data: data
        })
    }
}
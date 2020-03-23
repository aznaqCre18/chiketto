import axios from 'axios';

export const register = (data) => {
    return {
        type: "POST_REGISTER",
        payload: axios({
            method: "POST",
            url: "http://localhost:3500/api/v1/register",
            data: data
        })
    }
}
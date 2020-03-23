const initialState = {
    data : [],
    dataLu : [],
    isLoading: false,
    error: false
}

const findUser = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USER_LOGIN_PENDING':
            return{
                ...state,
                isLoading: true
            }

        case 'GET_USER_LOGIN_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data,
                dataLu: action.payload.data
            }
        case 'GET_USER_LOGIN_REJECTED':
            return{
                ...state,
                isLoading: true,
                error: true
            }
        default: 
            return state
    }
}

export default findUser

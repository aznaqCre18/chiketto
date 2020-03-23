const initialState = {
    data: [],
    isLoading: false,
    error: false,
    isLogin: false
}

const registerR = (state = initialState, action) => {
    switch(action.type){
        case 'POST_REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
            }

        case 'POST_REGISTER_FULFILLED':
            return {
                ...state,
                data: action.payload,
                isLogin: true,
                isLoading: false
            }

        case 'POST_REGISTER_REJECTED': 
            return {
                ...state,
                error: true,
                isLoading: false
            }

        default:
            return state;
    }
}


export default registerR;
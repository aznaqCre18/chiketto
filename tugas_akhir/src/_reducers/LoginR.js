const initialState = {
    data: [],
    isLoading: false,
    error: false,
    dataError: '',
    isLogin : false
}


const login = (state = initialState, action) => {
    switch(action.type) {
        case 'POST_LOGIN_PENDING': 
            return {
                ...state,
                isLoading: true,
            }

        case 'POST_LOGIN_FULFILLED': 
        //window.localStorage.setItem('token', action.payload.data.token)
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                isLogin: true
            }

        case 'POST_LOGIN_REJECTED':
            return {
                ...state,
                isLoading:false,
                error: true,
                dataError: {
                    message: "Invalid Password or Email"
                }
            }
        
            default: 
                return state
    }
}

export default login
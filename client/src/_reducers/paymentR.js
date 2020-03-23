const initialState = {
    data: [],
    isLoading: false,
    error: false
}

const paymentR = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USER_PAYMENT_PENDING':
            return {
                ...state,
                isloading: true
            }

        case 'GET_USER_PAYMENT_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
            }

        case 'GET_USER_PAYMENT_REJECTED':
            return {
                ...state,
                error: true
            }

        default :
            return state

    }
}

export default paymentR
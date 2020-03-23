const initialState = {
    dataTiket: [],
    isLoading : false,
    error : false
}

const allTiketR = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_ALL_TIKET_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_ALL_TIKET_FULFILLED':
            return {
                ...state,
                dataTiket : action.payload.data,
                isLoading : false
            }
        case 'GET_ALL_TIKET_REJECTED' : 
            return {
                ...state,
                isLoading : false,
                error: true
            }

        default: 
            return state
    }
}

export default allTiketR;
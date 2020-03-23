const initialState = {
    data : [],
    isLoading: false,
    error: false,
    ifSuccess: false
}

const addTiketR = (state = initialState, action) => {
    switch(action.type) {
        case 'POST_ADD_TIKET_PENDING' : 
            return {
                ...state,
                isloading: true
            }

        case 'POST_ADD_TIKET_FULFILLED' :
            return {
                ...state,
                isLoading: false,
                data : action.payload.data,
                ifSuccess: true
            }
            
        case 'POST_ADD_TIKE_REJECTED' : 
            return {
                ...state,
                isLoading: false,
                error: true
            }
        
        default : 
            return state
    }
}

export default addTiketR
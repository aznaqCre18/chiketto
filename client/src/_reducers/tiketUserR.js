const initialState = {
    data: [],
    isLoading: false,
    error: false 
}

const tiketUserR = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TIKET_USER_PENDING':
            return{
                ...state,
                isLoadig: true
            }

        case 'GET_TIKET_USER_FULFILLED': 
        console.log("data",action.payload.data);
        
            return{
                ...state,
                isloading: false,
                data: action.payload.data.getOrderAl
            }
        case 'GET_TIKET_USER_REJECTED': 
            return{
                ...state,
                isLoading: false,
                error: true
            }

        default: 
            return state
    }
}

export default tiketUserR;
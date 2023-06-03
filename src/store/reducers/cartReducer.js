import actionTypes from '../actions/actionTypes';

const initialState = {

    cartArr: [],

}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUY_PRODUCT_SUCCESS:
            const productInCart = state.cartArr.find(
                (p) => p.id === action.payload.id
            );
            if (!productInCart) {
                return {
                    cartArr: [...state.cartArr, action.payload]
                }
            } else {
                let newCart = state.cartArr;
                const objIndex = newCart.findIndex(
                    (obj) => obj.id === action.payload.id
                );
                if (newCart[objIndex].quantity === undefined) {
                    newCart[objIndex].quantity = 2
                } else {
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1
                }
                return {
                    cartArr: [...newCart]
                }
            }
        case actionTypes.BUY_PRODUCT_FAILED:
            state.carArr = []
            return {
                ...state
            }
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            let newCart = state.cartArr;
            const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
            newCart.splice(objIndex, 1)
            return {
                cartArr: [...newCart]
            }
        case actionTypes.DELETE_PRODUCT_FAILED:
            state.carArr = []
            return {
                ...state
            }
        default:
            return state;
    }
}

export default cartReducer;
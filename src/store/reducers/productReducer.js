import actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    listProductsHome: [],
    categories: [],

}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo
            }
        case actionTypes.FETCH_ALL_PRODUCT_SUCCESS:
            state.products = action.products
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_PRODUCT_FAILED:
            state.products = []
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_LIST_PRODUCT_SUCCESS:
            state.listProductsHome = action.dataProduct
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_LIST_PRODUCT_FAILED:
            state.dataProduct = []
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_CATEGORY_SUCCESS:
            state.categories = action.categories
            return {
                ...state
            }
        case actionTypes.FETCH_ALL_CATEGORY_FAILED:
            state.categories = []
            return {
                ...state
            }


        default:
            return state;
    }
}

export default productReducer;
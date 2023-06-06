import actionTypes from './actionTypes';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../services/productService'

export const addToCart = (product) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProducts("ALL")
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.ADD_PRODUCT_SUCCESS,
                    payload: product
                })
            } else {
                dispatch({
                    type: actionTypes.ADD_PRODUCT_FAILED,
                })
            }
        } catch (e) {
            toast.error("BUY PRODUCT FAILED!")
            dispatch({
                type: actionTypes.ADD_PRODUCT_FAILED,
            })
            console.log('BUY PRODUCT FAILED:', e);
        }
    }
}
export const buyProduct = (product) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProducts("ALL")
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.BUY_PRODUCT_SUCCESS,
                    payload: product
                })
            } else {
                dispatch({
                    type: actionTypes.BUY_PRODUCT_FAILED,
                })
            }
        } catch (e) {
            toast.error("BUY PRODUCT FAILED!")
            dispatch({
                type: actionTypes.BUY_PRODUCT_FAILED,
            })
            console.log('BUY PRODUCT FAILED:', e);
        }
    }
}

export const deleteProduct = (product) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProducts("ALL")
            if (res && res.errCode === 0) {
                toast.success("Delete product success")
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_SUCCESS,
                    payload: product
                })
            } else {
                toast.error("Delete PRODUCT FAILED")
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_FAILED,
                })
            }
        } catch (e) {
            toast.error("DELETE PRODUCT FAILED!")
            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAILED,
            })
            console.log('DELETE PRODUCT FAILED:', e);
        }
    }
}

import actionTypes from './actionTypes';
import { toast } from 'react-toastify';
import {
    getAllProducts, createNewProductService,
    deleteProductService, editProductService,
    getAllProductsListHome,

    createNewCategoryService, getAllCategories, deleteProductCategoryService,

} from '../../services/productService'

export const createNewProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewProductService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new product success")
                dispatch(saveProductSuccess())
                dispatch(fetchAllProductsStart())
            } else {
                dispatch(saveProductFailed())
            }
        } catch (e) {
            dispatch(saveProductFailed())
            console.log('saveProductFailed error:', e);
        }
    }
}

export const saveProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS
})

export const saveProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILED
})

export const fetchAllProductsStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProducts("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllProductsSuccess(res.products.reverse()))
            } else {
                toast.error("Fetch all product error !")
                dispatch(fetchAllProductsFailed())
            }
        } catch (e) {
            toast.error("Fetch all product error !")
            dispatch(fetchAllProductsFailed())
            console.log('fetchAllProductsFailed error:', e);
        }
    }
}

export const fetchAllProductsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
    products: data
})

export const fetchAllProductsFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCT_FAILED,
})

export const deleteAProduct = (productId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteProductService(productId);
            if (res && res.errCode === 0) {
                toast.success("Delete the product success")
                dispatch(deleteProductSuccess())
                dispatch(fetchAllProductsStart())
            } else {
                toast.error("Delete the product error")
                dispatch(deleteProductFailed())
            }
        } catch (e) {
            toast.error("Delete the product error")
            dispatch(deleteProductFailed())
            console.log('deleteProductFailed error:', e);
        }
    }
}

export const deleteProductSuccess = () => ({
    type: actionTypes.DELETE_PRODUCT_SUCCESS
})

export const deleteProductFailed = () => ({
    type: actionTypes.DELETE_PRODUCT_FAILED
})

export const editAProduct = (inputData) => {
    return async (dispatch, getState) => {
        try {
            let res = await editProductService(inputData);
            console.log('check res', res);
            if (res && res.errCode === 0) {
                toast.success("Update the product succeed !")
                dispatch(editProductsSuccess())
                dispatch(fetchAllProductsStart())
            } else {
                toast.error("Update the product error !")
                dispatch(editProductsFailed())
            }
        } catch (e) {
            toast.error("Update the product error !")
            dispatch(editProductsFailed())
            console.log('editProductsFailed error:', e);
        }
    }
}

export const editProductsSuccess = () => ({
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
})

export const editProductsFailed = () => ({
    type: actionTypes.EDIT_PRODUCT_FAILED,
})

export const fetchProductListHome = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllProductsListHome('40')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_LIST_PRODUCT_SUCCESS,
                    dataProduct: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_LIST_PRODUCT_FAILED,
                })
            }
        } catch (e) {
            console.log('FETCH ALL LIST PRODUCT FAILED', e);
            dispatch({
                type: actionTypes.FETCH_ALL_LIST_PRODUCT_FAILED,
            })
        }
    }
}

//Category 

export const createNewCategory = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewCategoryService(data);
            if (res && res.errCode === 0) {
                toast.success("Create a new product category success")
                dispatch(saveCategorySuccess())
                dispatch(fetchAllCategoriesStart())
            } else {
                dispatch(saveCategoryFailed())
            }
        } catch (e) {
            dispatch(saveCategoryFailed())
            console.log('save product category failed', e);
        }
    }
}

export const saveCategorySuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_CATEGORY_SUCCESS
})

export const saveCategoryFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_CATEGORY_FAILED
})

export const fetchAllCategoriesStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCategories("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllCategoriesSuccess(res.categories.reverse()))
            } else {
                toast.error("Fetch all product category failed")
                dispatch(fetchAllCategoriesFailed())
            }
        } catch (e) {
            toast.error("Fetch all product category failed")
            dispatch(fetchAllCategoriesFailed())
            console.log('Fetch all products category error:', e);
        }
    }
}

export const fetchAllCategoriesSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CATEGORY_SUCCESS,
    categories: data
})

export const fetchAllCategoriesFailed = () => ({
    type: actionTypes.FETCH_ALL_CATEGORY_FAILED,
})


export const deleteCategory = (categoryId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteProductCategoryService(categoryId);
            if (res && res.errCode === 0) {
                toast.success("Delete product category success")
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_CATEGORY_SUCCESS
                })
                dispatch(fetchAllCategoriesStart())
            } else {
                toast.error("Delete product category failed")
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_CATEGORY_FAILED
                })
            }
        } catch (e) {
            console.log('Delete product category failed', e);
            dispatch({
                type: actionTypes.DELETE_PRODUCT_CATEGORY_FAILED
            })
        }
    }
}


import axios from '../axios';

// product
const getAllProducts = (inputId) => {
    return axios.get(`/api/get-all-products?id=${inputId}`)
}

const createNewProductService = (data) => {
    console.log('check data axios,', data);
    return axios.post('/api/create-new-product', data)
}

const deleteProductService = (productId) => {
    return axios.delete('/api/delete-product', {
        data: {
            id: productId
        }
    })
}

const editProductService = (inputData) => {
    console.log('check input data edit product', inputData);
    return axios.put('/api/edit-product', inputData)
}

const getAllProductsListHome = (limit) => {
    return axios.get(`/api/product-list-home?limit=${limit}`)
}

const getDetailInfoProduct = (inputId) => {
    return axios.get(`/api/get-product-detail-by-id?id=${inputId}`)
}

//product category api
const getAllCategories = (inputId) => {
    return axios.get(`/api/get-all-category?id=${inputId}`)
}

const createNewCategoryService = (data) => {
    return axios.post('/api/create-new-category', data)
}

const deleteProductCategoryService = (categoryId) => {
    return axios.delete('/api/delete-product-category', {
        data: {
            id: categoryId
        }
    })
}

const editProductCategoryService = (inputData) => {
    return axios.put('/api/edit-product-category', inputData)
}

// type of product
const getAllProductType = (inputId) => {
    return axios.get(`/api/get-all-product-type?id=${inputId}`)
}

const createNewProductTypeService = (data) => {
    return axios.post('/api/create-new-product-type', data)
}

const deleteProductTypeService = (productTypeId) => {
    return axios.delete('/api/delete-product-type', {
        data: {
            id: productTypeId
        }
    })
}

const editProductTypeService = (inputData) => {
    return axios.put('/api/edit-product-type', inputData)
}


export {
    getAllProducts, createNewProductService, deleteProductService, editProductService,
    getAllProductsListHome, getDetailInfoProduct,

    getAllCategories, createNewCategoryService, deleteProductCategoryService, editProductCategoryService,

    getAllProductType, createNewProductTypeService, deleteProductTypeService, editProductTypeService,

}
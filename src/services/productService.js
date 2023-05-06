import axios from '../axios';

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


export {
    getAllProducts, createNewProductService, deleteProductService, editProductService,
    getAllProductsListHome

}
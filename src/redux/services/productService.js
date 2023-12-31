import axios from "axios"

// export const BACKEND_URL = 'http://localhost:5000'

export const BACKEND_URL = 'https://furry.cyclic.app/'



const API_URL = `${BACKEND_URL}/api/products/`

// Create New Product

const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data;
}

// Get all Products

const getProducts = async () => {
    const response = await axios.get(API_URL)
    return response.data;
}


// Get all Products irrespective of user

const getAllProducts = async () => {
    const response = await axios.get(API_URL+'all')
    return response.data;
}

// Delete a Product

const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + id)
    return response.data;
}

// Get a Product

const getProduct = async (id) => {
    const response = await axios.get(API_URL + id)
    return response.data;
}

// Get a Product

const getProductSimply = async (id) => {
    const response = await axios.get(API_URL+'simply/' + id)
    return response.data;
}

// Update a Product

const updateProduct = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData)
    return response.data;
}

const productService = {
    createProduct,
    getProducts,
    getAllProducts,
    deleteProduct,
    getProduct,
    updateProduct,
    getProductSimply,
}

export default productService;
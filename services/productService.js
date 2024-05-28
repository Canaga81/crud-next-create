import axiosInstance from "./axiosInstance";

//* service for fetch all products
export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        return response.data;
    } catch (error) {
        throw new Error(`Datalar tapilmadi: ${error.message}`);
    }
}

//* service for fetch product by id
export const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Datanin daxiline girile bilmedi: ${error.message}`);
    }
}

//* service for delete product by id
export const deleteProduct = async (id) => {
    try {
        const response = await axiosInstance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Data silinmedi: ${error.message}`);
    }
}

//* service for update product
export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await axiosInstance.put(`/products/${id}`, updatedProduct);
        return response.data;
    } catch (error) {
        throw new Error(`Data yenilenmedi: ${error.message}`);
    }
}

//* service for create product
export const createProduct = async (newProduct) => {
    try {
        const response = await axiosInstance.post('/products', newProduct);
        return response.data;
    } catch (error) {
        throw new Error(`Data yaradilmadi: ${error.message}`);
    }
}

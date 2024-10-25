// src/api.js
// src/api.js
// src/api.js
// src/api.js
import axios from 'axios';

const API_URL = 'https://6hfxe4ifp8.execute-api.us-east-1.amazonaws.com/items';

export const fetchItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching items:", error);
        throw error;
    }
};

export const addItem = async (item) => {
    try {
        const response = await axios.post(API_URL, item);
        return response.data;
    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
};

export const updateItem = async (item) => {
    try {
        const response = await axios.put(`${API_URL}/${item.id}`, item);
        return response.data;
    } catch (error) {
        console.error("Error updating item:", error);
        throw error;
    }
};


export const deleteItem = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting item:", error);
        throw error;
    }
};

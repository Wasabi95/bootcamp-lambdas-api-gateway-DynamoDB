// src/ItemList.js
// src/ItemList.js
import React, { useState } from 'react';
import { addItem } from './api';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

const phoneOptions = [
    { name: 'iPhone 15', price: 999 },
    { name: 'iPhone 13', price: 799 },
    { name: 'iPhone 14', price: 899 },
    { name: 'Xiaomi', price: 599 },
    { name: 'Samsung Galaxy S21', price: 749 },
    { name: 'Motorola', price: 499 }
];

const ItemList = ({ onItemAdded }) => {
    const [newItem, setNewItem] = useState({ price: '', name: '' });

    const handleAddItem = async () => {
        if (!newItem.price || !newItem.name) return;

        const itemWithId = { id: uuidv4(), price: newItem.price, name: newItem.name };

        try {
            await addItem(itemWithId);
            setNewItem({ price: '', name: '' }); // Reset selection
            onItemAdded(itemWithId); // Notify App about the new item
            swal("Success", "Item successfully added to the cart!", "success"); // Show success alert
        } catch (error) {
            console.error("Failed to add item", error);
            swal("Error", "Failed to add item", "error"); // Show error alert
        }
    };

    const handleSelectItem = (event) => {
        const selectedItem = phoneOptions.find(item => item.name === event.target.value);
        if (selectedItem) {
            setNewItem({ name: selectedItem.name, price: selectedItem.price });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Lista de Smartphones</h1>
            <div className="mb-4">
                <h3>Add New Item</h3>
                <div className="input-group mb-3">
                    <select
                        className="form-select"
                        onChange={handleSelectItem}
                        value={newItem.name || ''}
                    >
                        <option value="">Select a phone</option>
                        {phoneOptions.map((item) => (
                            <option key={item.name} value={item.name}>
                                {item.name} - ${item.price}
                            </option>
                        ))}
                    </select>
                    <button className="btn btn-primary" onClick={handleAddItem}>
                        Add Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemList;

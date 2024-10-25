//src/App.js
//src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Cart from './Cart';

const App = () => {
    const [items, setItems] = useState([]); // Cart items state
    const [itemToUpdate, setItemToUpdate] = useState(null);

    const handleItemAdded = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]); // Add new item to the cart
    };

    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Delete item
    };

    const handleUpdateItem = (updatedItem) => {
        setItems((prevItems) => 
            prevItems.map((item) => 
                item.id === updatedItem.id ? updatedItem : item
            )
        ); // Update item
        setItemToUpdate(null); // Reset itemToUpdate
    };

    return (
        <div>
            <Navbar cartItemCount={items.length} />
            <Routes>
                <Route 
                    path="/" 
                    element={<ItemList onItemAdded={handleItemAdded} />} 
                />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            items={items} 
                            onDeleteItem={handleDeleteItem} 
                            onUpdateItem={setItemToUpdate} // Pass the setItemToUpdate function
                        /> 
                    } 
                />
            </Routes>
            {itemToUpdate && (
                <div className="mt-4">
                    <h2>Update Item</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            value={itemToUpdate.name}
                            onChange={(e) => setItemToUpdate({ ...itemToUpdate, name: e.target.value })}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Price"
                            value={itemToUpdate.price}
                            onChange={(e) => setItemToUpdate({ ...itemToUpdate, price: e.target.value })}
                        />
                        <button className="btn btn-success" onClick={() => handleUpdateItem(itemToUpdate)}>Update Item</button>
                        <button className="btn btn-secondary" onClick={() => setItemToUpdate(null)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;



// src/Cart.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { deleteItem } from './api'; // Ensure you import your deleteItem function

const Cart = ({ items, onDeleteItem, onUpdateItem }) => {
    const handleDelete = async (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    await deleteItem(id); // Call the API to delete the item
                    onDeleteItem(id); // Remove item from local state
                    swal("Deleted", "Item has been deleted!", "success");
                } catch (error) {
                    console.error("Failed to delete item:", error);
                    swal("Error", "Failed to delete item", "error");
                }
            } else {
                swal("Your item is safe!");
            }
        });
    };

    const handleUpdate = (item) => {
        onUpdateItem(item);
    };

    return (
        <div className="container mt-5">
            <h1>Cart</h1>
            <ul className="list-group">
                {items.length > 0 ? (
                    items.map((item) => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.name} - ${item.price}
                            <div>
                                <button
                                    className="btn btn-warning btn-sm mx-1"
                                    onClick={() => handleUpdate(item)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No items in the cart</li>
                )}
            </ul>
        </div>
    );
};

export default Cart;

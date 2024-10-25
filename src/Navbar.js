// src/Navbar.js
// src/Navbar.js
// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">My Online Store</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart ({cartItemCount})</Link> {/* Display cart count */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



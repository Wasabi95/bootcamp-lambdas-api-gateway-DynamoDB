// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application using createRoot
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

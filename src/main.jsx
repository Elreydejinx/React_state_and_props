import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App'; // Import the main App component


// Create a root element where React will mount the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within React.StrictMode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optionally report web vitals
// reportWebVitals();

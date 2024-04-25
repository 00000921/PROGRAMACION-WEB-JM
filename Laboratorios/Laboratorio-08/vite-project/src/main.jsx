import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios';  // Important!!!
import './index.css'

axios.defaults.baseURL = 'https://api.nasa.gov';
axios.defaults.params = {};
axios.defaults.params['api_key'] = 'UXBz4CGmcUUCUVQo6W1E7pF27trpkpzUL1I85PbB';
axios.defaults.params['thumbs'] = 'true';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
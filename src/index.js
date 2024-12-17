import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client"; 
import App from "./App"; 


// Importing Animation //

import AOS from "aos";

AOS.init({
  duration: 1000, 
  easing: 'ease-in-out', 
  once: true, 
});

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import './App.css';
import ProductForm from './ProductForm'

import SalesLists from './Table'



function App() {
  return (
    
    
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <h1>Sales Management System</h1>
      
      <ProductForm/>      
      <SalesLists/>
    </div>
           
  );
}

export default App;

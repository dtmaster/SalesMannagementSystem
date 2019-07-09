import React from 'react';
import './App.css';
import UserInput from './UserInput'
import SalesLists from './Table'
import MultiForm from './MultilineInput.tsx'


function App() {
  return (
    
    
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <h1>Sales Management System</h1>
      <UserInput/>
      <SalesLists/>
      <MultiForm/>
    </div>
           
  );
}

export default App;

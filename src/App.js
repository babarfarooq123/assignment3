import React from 'react';
import './App.css';
import Meals from './meals';

function App() {
  return (
    <div className="App">
      <h1>Below is our Meals that we serve in our Restaurant</h1>
      <Meals dish1="Biryani" dish2="Nihari" dish3="Chapli kabab"/>
    </div>
  );
}

export default App;

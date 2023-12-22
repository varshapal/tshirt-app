import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTshirtForm from './components/Layout/AddTshirtForm';
import TshirtList from './components/Layout/TshirtList';

function App() {
  const [tshirtsList, setTshirtsList] = useState([]);

  const addTshirtHandler = (tName, tDesc, tPrice, tQty) => {
    setTshirtsList((prevTshirtList) => {
      return [...prevTshirtList, {name: tName, desc: tDesc, price: tPrice, qty: tQty}]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <AddTshirtForm onAddTshirt={addTshirtHandler}/>
        <TshirtList tshirts={tshirtsList}/>
      </header>
    </div>
  );
}

export default App;

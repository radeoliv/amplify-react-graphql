import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from the other side</h1>
        <button onClick={() => alert("Ayy lmao")}>
          Hit me, I dare
        </button>
      </header>
    </div>
  );
}

export default App;

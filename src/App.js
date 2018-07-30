import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">iTunes Search & Play</h1>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


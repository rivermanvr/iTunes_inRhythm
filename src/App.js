import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from './containers/SearchBar/SearchBar';
import ArtistList from './components/Artist_List/Artist_List';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <h1 className="title">iTunes Search, List & Play</h1>
          </header>
          <div>
            <SearchBar />
            <ArtistList />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


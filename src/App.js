import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './containers/SearchBar/SearchBar';
import AlbumList from './components/Album_List/Album_List';
import './App.css';

class App extends Component {

  state = { artist: '', albums: [] };

  selectedArtist (artist) {
    if (artist !== '') {
      axios.get(`https://itunes.apple.com/search?term=${artist}`)
      .then(res => {
        this.setState({ artist, results: res.data.results });
      })
      .catch(err => console.log('timing errors: ', err));
    } else {
      this.setState({ artist: '', albums: [] });
    }
  }

  render() {
    const selectedArtist = _.debounce(artist => this.selectedArtist(artist), 300);
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <h1 className="title">iTunes Search</h1>
          </header>
          <div>
            <SearchBar onSearchTermChange= { selectedArtist } />
            <AlbumList artist={ this.state.artist } results={ this.state.results } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

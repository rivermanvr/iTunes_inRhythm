import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './containers/SearchBar/SearchBar';
import ArtistList from './components/Artist_List/Artist_List';
import './App.css';

class App extends Component {

  state = { artist: '', albums: [] };

  selectedArtist (artist) {
    // display the list of albums, 
    // including the album name and album cover inside #albums-container in a grid. 
    axios.get(`https://itunes.apple.com/search?term=${artist}`)
      .then(res => {
        console.log('axios call response: ', res.data.results);
        this.setState({ artist, results: res.data.results });
      })
      .catch(err => console.log('timing errors:', err));
  }

  render() {
    const selectedArtist = _.debounce(artist => this.selectedArtist(artist), 500);
    console.log('state: ', this.state.artist);
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <h1 className="title">iTunes Artist Search & List</h1>
          </header>
          <div>
            <SearchBar onSearchTermChange= { selectedArtist } />
            <ArtistList />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


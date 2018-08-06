import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './containers/SearchBar/SearchBar';
import AlbumList from './components/Album_List/Album_List';
import './App.css';

class App extends Component {

  state = { artist: '', results: [] };

  shouldComponentUpdate (nextProps, nextState) {
    console.log('will.....state: ', this.state);
    console.log('nextState: ', nextState, '-------');
    if (nextState.artist !== this.state.artist) {
      this.setState({ artist: nextState.artist, results: nextState.results })
      return true;
    } else {
      return false;
    }
  }

  selectedArtist (artist) {
    if (artist !== '') {
      axios.get(`https://itunes.apple.com/search?term=${artist}`)
      .then(res => {
        this.setState({ artist, results: res.data.results });
      })
      .catch(err => console.log('timing errors: ', err));
    } else {
      this.setState({ artist: '', results: [] });
    }
  }

  render() {
    const selectedArtist = _.throttle(artist => this.selectedArtist(artist), 150, {
      leading: true,
      trailing: true
    });
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

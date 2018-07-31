import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = { artist: ''}

  onInputChange = (ev) => {
    const artist = ev.target.value;
    this.setState({ artist });
  }

  render() {
    return (
      <div className="SearchBar">
        <h6 className="label">Artist search:</h6>
        <input
          value={ this.state.artist }
          onChange={ this.onInputChange } />
        <hr />
      </div>
    )
  }
}

export default SearchBar;

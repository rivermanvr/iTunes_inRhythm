import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
  state = { author: ''}

  onInputChange = (ev) => {
    const author = ev.target.value;
    this.setState({ author });
  }

  render() {
    return (
      <div className="SearchBar">
        <h6 className="label">Author search:</h6>
        <input
          value={ this.state.author }
          onChange={ this.onInputChange } />
        <hr />
      </div>
    )
  }
}

export default SearchBar;

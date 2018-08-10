import React from 'react';

import AlbumDetail from './Album_Detail/Album_Detail';

//-----------------------------------
// display the list of albums, 
// including the album name and album cover inside #albums-container in a grid. '
//-----------------------------------

const Album_List = (props) => {
  let albumHeader = <p className="label ctr" >Please enter an Artist name</p>;
  let albumResults = <div></div>;
  if (props.artist !== '') {
    if (props.results && props.results.length > 0) {
      albumHeader = <div className="title marginTitle">Results:</div>;
      albumResults = props.results.map( (album, index) => {
        return (
          <AlbumDetail
            artistName={ album.artistName }
            albumCover={ album.artworkUrl100 }
            albumName={ album.collectionName }
            songName={ album.trackName }
            songGenre={ album.primaryGenreName }
            key= { index }
          />
        ); 
      });
    } 
  }
  return (
    <div className="Album_List">
      { albumHeader }
      <div className="gridCSS">{ albumResults }</div>
    </div>
  );
};

export default Album_List;

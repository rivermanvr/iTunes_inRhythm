import React from 'react';

import AlbumDetail from './Album_Detail/Album_Detail';
import './Album_List.css';

//-----------------------------------
// display the list of albums, 
// including the album name and album cover inside #albums-container in a grid. '
//-----------------------------------

const Album_List = (props) => {
  console.log('in Album_List: -props-', props);
  let albumHeader = <p className="labelAlignCtr" >Please enter an Artist name</p>;
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
      { albumResults }
    </div>
  );
};

export default Album_List;

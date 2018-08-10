import React from 'react';

const Album_Detail = ({ albumCover, albumName, artistName, songGenre, songName }) => {
  const albumData = (
    <div>
      <p><img alt="Album" src={ albumCover }></img></p>
      <p className="weightLabel">Album:</p>
      <p>{ albumName }</p>
      <p className="weightLabel">Artist:</p>
      <p>{ artistName }</p>
      <p><span className="weightLabel">Genre: </span>{ songGenre }</p>
      <p className="weightLabel">Song:</p>
      <p>{ songName }</p>
    </div>
  );
  return (  
    <div className="Album_Detail">
      { albumData }
    </div>
  );
};

export default Album_Detail;

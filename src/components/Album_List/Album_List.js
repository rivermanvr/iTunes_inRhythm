import React from 'react';

import './Album_List.css';

//-----------------------------------
// display the list of albums, 
// including the album name and album cover inside #albums-container in a grid. '
//-----------------------------------

const Album_List = (props) => {
  console.log('in Album_List: -props-', props);
  let albumData = <p style={{ textAlign: "center" }}>Please enter an Artist name</p>;
  if (props.results) albumData = (
      <div>
        <p>Selected Artist: { props.results[0].artistName }</p>
        <p>Result Count: { props.results.length }</p><br />
        <p>The first 15 Results:</p>
      </div>
    );
  return (
    <div className="Album_List">
      { albumData }
    </div>
  );
};

export default Album_List;

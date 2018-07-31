import React from 'react';

import './Album_List.css';

//-----------------------------------
// display the list of albums, 
// including the album name and album cover inside #albums-container in a grid. '
//-----------------------------------

const Album_List = (props) => {
  console.log('in Album_List: -props-', props);
  let albumHeader = <p style={{ textAlign: "center" }}>Please enter an Artist name</p>;
  let albumResults = <div></div>;
  if (props.results && props.results.length > 0) {
    albumHeader = (
      <div>
        <p>Selected Artist: { props.results[0].artistName }</p>
        <p>Result Count: { props.results.length }</p><br />
        <p>The first 1-15 Results:</p>
      </div>
    );
    albumResults = <div>Results</div>;
  } 
  return (
    <div className="Album_List">
      { albumHeader }
      { albumResults }
    </div>
  );
};

export default Album_List;

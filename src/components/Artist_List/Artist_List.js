import React from 'react';

import './Artist_List.css';

const Artist_List = (props) => {
  console.log('in Artist_List: -props-', props);
  let artistData = <p style={{ textAlign: "center" }}>Please enter an Artist name</p>;
  if (props.artist) {
    artistData = (
      <div>
        <p>Selected Artist: { props.results[0].artistName }</p>
        <p>Result Count: { props.results.length }</p><br />
        <p>The first 10 Results:</p>
      </div>
    );
  }
  else console.log('null artist');
  return (
    <div className="Artist_List">
      { artistData }
    </div>
  );
};

export default Artist_List;

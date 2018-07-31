import React from 'react';

import './Artist_List.css';

const Artist_List = (props) => {
  const artistData = <p className="label" style={{ textAlign: "center" }}>Please enter an Artist name</p>;
  if (this.props) console.log('props from Artist_List: ', this.props);
  return (
    <div className="Artist_List">
      { artistData }
    </div>
  )
}

export default Artist_List;

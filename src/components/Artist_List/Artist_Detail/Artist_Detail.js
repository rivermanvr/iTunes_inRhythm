import React from 'react';

import './Artist_Detail.css';

const Artist_Detail = (props) => {
  const artistData = <p style={{ textAlign: "center" }}>Artist Detail</p>;
  if (this.props) console.log('props from Artist_Detail: ', this.props);
  return (
    <div className="Artist_Detail">
      { artistData }
    </div>
  )
}

export default Artist_Detail;

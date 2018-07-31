import React from 'react';

import './Album_Detail.css';

const Album_Detail = (props) => {
  const albumData = <p style={{ textAlign: "center" }}>Album Detail</p>;
  if (props.result) console.log('props from Album_Detail: ', props);
  return (
    <div className="Album_Detail">
      { albumData }
    </div>
  )
}

export default Album_Detail;

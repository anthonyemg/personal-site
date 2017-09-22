import React from 'react';

const WorldFM = (props) => {
  return (
    <div className="worldFM-container" style={{width: props.width, height: props.height}}>
      <a href="http://worldfm.io/" target="_blank" className="worldFM-title">WorldFM</a>
      <div className="worldFM-images" style={{width: props.width}}>
        <img src="https://i.imgur.com/lpSYKFJ.png" height="400"/>
        <img src="https://image.ibb.co/iv6pdk/worldfm_2.png" height="400"/>
      </div>
    </div>
  )
}

export default WorldFM;

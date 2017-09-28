import React from 'react';
import SweetScroll from 'sweet-scroll';

class WorldFM extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previousPage: 0,
      nextPage: 2,
    };
  }

  render() {
    return (
      <div
        className='worldFM-container'
        style={{width: this.props.width, height: this.props.height}}>
        <a href='http://worldfm.io/' target='_blank' className='worldFM-title'>WorldFM</a>
        <span style={{fontSize: 20, width: this.props.width * 0.8, paddingBottom: 20,}}>
          WorldFM is a React/Redux Web App for discovering new music from around the world, powered by Spotify’s API
        </span>
        <div className='worldFM-images' style={{width: this.props.width * 0.8}}>
          <img src='https://i.imgur.com/lpSYKFJ.png' style={{height: this.props.width < 500 ? 200 : 300}}/>
          <img src='https://image.ibb.co/iv6pdk/worldfm_2.png' style={{height: this.props.width < 500 ? 200 : 300}}/>
        </div>
        <div>
          <i className='icon fa fa-chevron-up faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.previousPage)}/>
          <i className='icon fa fa-chevron-down faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.nextPage)}/>
        </div>
      </div>
    )
  }

}

export default WorldFM;

import React from 'react';

class YuoTube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousPage: 2,
    };
  }
  render() {
    return(
      <div
        className='project'
        style={{width: this.props.width, height: this.props.height}}
      >
        <a href='https://yuotubeio.herokuapp.com/' target='_blank' className='project-title'>yuotube</a>
        <span style={{fontSize: 20, width: this.props.width * 0.7, paddingBottom: 20, textAlign: this.props.width < 560 ? 'left' : 'center'}}>
          A React YouTube clone simply made for fun.
        </span>
        <div className='project-images' style={{width: this.props.width * 0.8}}>
          <img src='../assets/yuoTubeMock.png' style={{height: this.props.width < 600 ? '46vw' : 280}}/>
        </div>
        <i className='icon fa fa-chevron-up faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.previousPage)} />
      </div>
    )
  }
}

export default YuoTube;

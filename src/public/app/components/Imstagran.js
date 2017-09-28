import React from 'react';

class Imstagran extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previousPage: 1,
    }
  }

  render() {
    return(
      <div className='imstagran' style={{width: this.props.width, height: this.props.height}}>
        <a href='http://imstagran.io/' target='_blank' className='worldFM-title'>imstagran</a>
        <span style={{fontSize: 20, width: this.props.width * 0.8, paddingBottom: 20,}}>
          Imstagran is a React instagram clone simple made for fun.
        </span>
        <div className='worldFM-images' style={{width: this.props.width * 0.8}}>
          <img src='https://i.imgur.com/lpSYKFJ.png' style={{height: this.props.width < 500 ? 200 : 300}}/>
          <img src='https://image.ibb.co/iv6pdk/worldfm_2.png' style={{height: this.props.width < 500 ? 200 : 300}}/>
        </div>
        <i className='icon fa fa-chevron-up faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.previousPage)}/>
      </div>
    )
  }

}

export default Imstagran;

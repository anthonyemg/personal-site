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
        <i className='icon fa fa-chevron-up faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.previousPage)}/>
      </div>
    )
  }

}

export default Imstagran;

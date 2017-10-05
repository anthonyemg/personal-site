import React from 'react';

class Imstagran extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      previousPage: 1,
      nextPage: 3,
    }
  }

  render() {
    return(
      <div
        className='project'
        style={{width: this.props.width, height: this.props.height}}
      >
        <div className='project-titleContainer'>
          <a href='http://imstagran.io/' target='_blank' className='project-title'>Imstagran</a>
          <a href='https://github.com/anthonyemg/Imstagran' target='_blank'>
            <div className='project-githubLink'>
              <i className='fa fa-github fa-lg' style={{marginRight: 8}} />
              <span>repo</span>
            </div>
          </a>
        </div>
        <span style={{fontSize: 20, width: this.props.width * 0.7, paddingBottom: 20, textAlign: this.props.width < 560 ? 'left' : 'center'}}>
          A React instagram clone simply made for fun.
        </span>
        <div className='project-images' style={{width: this.props.width * 0.8}}>
          <img src='../assets/imstagranMock.png' style={{height: this.props.width < 600 ? '46vw' : 280}}/>
        </div>
        <div>
          <i className='icon fa fa-chevron-up faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.previousPage)}/>
          <i className='icon fa fa-chevron-down faa-pulse animated' onClick={() => this.props.scrollToPage(this.state.nextPage)}/>
        </div>
      </div>
    )
  }

}

export default Imstagran;

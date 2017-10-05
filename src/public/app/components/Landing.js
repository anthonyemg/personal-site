import React from 'react';
import SweetScroll from 'sweet-scroll';
import Subtitle from './Subtitle';
import WorldFM from './WorldFM';
import Imstagran from './Imstagran';
import YuoTube from './YuoTube';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
    }
    this.scrollToPage = this.scrollToPage.bind(this);
  }

  scrollToPage(page) {
    const sweetScroll = new SweetScroll({/* options */}, document.getElementById('container'));
    const height = this.props.windowHeight * 0.8 * page;
    sweetScroll.to(height, 0);
  }

  render() {
    return(
      <div id='container'
        className='container'
        style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}}
      >
        <div className='landing' style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}} >
          <div className='title-container'>
            <div className='title'>
              <span>Anthony</span>
              <span>Greenheck</span>
            </div>
            <Subtitle />
          </div>
          <div className='links'>
            <a href='https://github.com/anthonyemg' target='_blank'><img src='../assets/github.svg' className='links-button' /></a>
            <a href='https://www.linkedin.com/in/anthonygreenheck/' target='_blank'><img src='../assets/linkedin.svg' className='links-button' /></a>
          </div>
          <div className='projects-button faa-pulse animated'>
            <span onClick={() => this.scrollToPage(this.state.nextPage)}>projects</span>
          </div>
        </div>

        <WorldFM
          height={this.props.windowHeight * 0.8}
          width={this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}
          scrollToPage={this.scrollToPage}
        />

        <Imstagran
          height={this.props.windowHeight * 0.8}
          width={this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}
          scrollToPage={this.scrollToPage}
        />

        <YuoTube
          height={this.props.windowHeight * 0.8}
          width={this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}
          scrollToPage={this.scrollToPage}
        />

      </div>
    )
  }

};

export default Landing;

import React from 'react';
import SweetScroll from 'sweet-scroll';
import Subtitle from './Subtitle';
import WorldFM from './WorldFM';
import Imstagran from './Imstagran';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    const sweetScroll = new SweetScroll({/* options */}, document.getElementById("container"));
    const height = this.props.windowHeight;
    sweetScroll.to(height, 0);
  }

  render() {
    return(
      <div id="container"
        className="container"
        style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}}
      >
        <div className="landing" style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}} >
          <div className="title-container">
            <div className="title">
              <span>Anthony</span>
              <span>Greenheck</span>
            </div>
            <Subtitle />
          </div>
          <div className="links">
            <a href="https://github.com/anthonyemg" target="_blank"><img src="../assets/github.svg" className="links-button"/></a>
            <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank"><img src="../assets/linkedin.svg" className="links-button" /></a>
          </div>
          <div className="projects-button faa-pulse animated">
            <span onClick={this.scrollDown}>PROJECTS</span>
          </div>
        </div>

        <WorldFM
          height={this.props.windowHeight * 0.8}
          width={this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}
        />

        <Imstagran
          height={this.props.windowHeight * 0.8}
          width={this.props.windowWidth < 800 ? this.props.windowWidth * 0.9 : 600}
        />

      </div>
    )
  }

};

export default Landing;

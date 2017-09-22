import React from 'react';
import ReactDom from 'react-dom';
import Subtitle from './Subtitle';
import WorldFM from './WorldFM';

class Landing extends React.Component {
  render() {
    return(
      <div className="container" style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 1000 ? this.props.windowWidth * 0.8 : 600, maxWidth: 600 }}>
        <div className="landing" style = {{ height: this.props.windowHeight * 0.8, width: this.props.windowWidth < 1000 ? this.props.windowWidth * 0.8 : 600, maxWidth: 600 }} >
          <div className="title-container">
            <div className="title">
              <span>Anthony</span>
              <span>Greenheck</span>
            </div>
            <Subtitle />
          </div>
          <div className="links">
            <a href="https://github.com/anthonyemg" target="_blank"><img src="../assets/github.svg" /></a>
            <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank"><img src="../assets/linkedin.svg" /></a>
          </div>
          <div className="projects-button faa-pulse animated">
            <span>PROJECTS</span>
          </div>
        </div>
        <WorldFM height={this.props.windowHeight * 0.8} width={this.props.windowWidth < 1000 ? this.props.windowWidth * 0.8 : 600}/>
      </div>
    )
  }
};

export default Landing;

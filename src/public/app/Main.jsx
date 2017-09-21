import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Face from 'material-ui/svg-icons/action/face';
import Work from 'material-ui/svg-icons/action/work';
import PhotoCamera from 'material-ui/svg-icons/image/photo-camera';

import Me from './Me.jsx';
import Skills from './Skills.jsx';
import Photos from './Photos.jsx';

import particleConfig from '../../../particlesjs-config.json';


class Main extends React.Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      content: 'hello world..',
      loading: true,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      slideIndex: 0,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  handleLoading() {
    this.setState({
      loading: false
    });
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleLoading()
    particlesJS('particles', particleConfig);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div id='particles' >
        <div className="Progress" style={{ display: this.state.loading ? 'block' : 'none', left: (this.state.windowWidth / 2) - 40, top: (this.state.windowHeight / 2) - 40 }} >
          <CircularProgress size={80} thickness={5} />
        </div>
        <div className="Main" style = {{ height: this.state.windowHeight * 0.8, width: this.state.windowWidth < 1000 ? this.state.windowWidth * 0.8 : 600, maxWidth: 600 }} >
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab value={0} icon={<Face />} />
            <Tab value={1} icon={<Work />} />
            {/* <Tab value={2} icon={<PhotoCamera />} /> */}
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              <div className="blur"></div>
              <Me />
            </div>
            <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              <Skills />
            </div>
            {/* <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              <Photos windowWidth={this.state.windowWidth} />
            </div> */}
          </SwipeableViews>
        </div>
      </div>
    )
  }
};

export default Main;

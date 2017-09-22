import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Face from 'material-ui/svg-icons/action/face';
import Work from 'material-ui/svg-icons/action/work';
import PhotoCamera from 'material-ui/svg-icons/image/photo-camera';

import Title from './Title';
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
      <div id='particles'>
        <Title
          windowHeight={this.state.windowHeight}
          widowWidth={this.state.windowWidth}
        />
      </div>
    )
  }
};

export default Main;

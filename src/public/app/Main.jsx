import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div >
        <div className="Progress" style={{ display: this.state.loading ? 'block' : 'none', left: (this.state.windowWidth / 2) - 40, top: (this.state.windowHeight / 2) - 40 }} >
          <CircularProgress size={80} thickness={5} />
        </div>
        <div className="Main" style = {{ height: (this.state.windowHeight/10) * 8, width: (this.state.windowWidth/10) * 8 }} >
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Tab 1" value={0} />
            <Tab label="Tab 2" value={1} />
            <Tab label="Tab 3" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              tab 1
            </div>
            <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              tab 2
            </div>
            <div className="Tab" style={{ height: ((this.state.windowHeight/10) * 8) - 48 }}>
              tab 3
            </div>
          </SwipeableViews>
        </div>
      </div>
    )
  }
};

export default Main;

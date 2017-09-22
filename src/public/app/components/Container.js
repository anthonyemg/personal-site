import React from 'react';
import Landing from './Landing';
import particleConfig from '../../../../particlesjs-config.json';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
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
    console.log('test', window.indderHeight)
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
        <Landing
          windowHeight={this.state.windowHeight}
          widowWidth={this.state.windowWidth}
        />
      </div>
    )
  }
};

export default Container;

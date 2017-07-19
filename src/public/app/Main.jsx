import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';

class Main extends React.Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      content: 'hello world..',
      loading: true,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
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

  componentWillMount() {

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
        </div>
      </div>
    )
  }
};

export default Main;

import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Main extends React.Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      content: 'hello world..',
      windowHeight: (window.innerHeight / 10) * 8,
      windowWidth: (window.innerWidth / 10) * 8
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      windowHeight: (window.innerHeight / 10) * 8,
      windowWidth: (window.innerWidth / 10) * 8
    });
    console.log('window width', window.innerWidth)
    console.log('adjusted width', this.state.windowWeight)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    console.log('window width', window.innerWidth)
    console.log('adjusted width', this.windowWidth)
  }

  render() {
    return (
      <div >
        <div
          className = "Main"
          style = {{
            height: this.state.windowHeight,
            width: this.state.windowWidth
          }}
        >
          {/* <CardHeader
            title = {this.state.content}
          /> */}
        </div>
      </div>
    )
  }
};

export default Main;

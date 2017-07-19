import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Main extends React.Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      content: 'hello world..',
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div >
        <Card
          className = "Main"
          style = {{
            height: this.state.windowHeight,
            width: this.state.windowWidth
          }}
        >
          <CardHeader
            title = {this.state.content}
          />
        </Card>
      </div>
    )
  }
};

export default Main;

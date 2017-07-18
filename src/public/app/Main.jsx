import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';

class Main extends React.Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);
    this.state = {
      content: 'Hello World..',
    }
  }

  // injectTapEventPlugin();

  render() {
    return (
      <div className="Main">
        <Card>
          <AppBar />
          <CardHeader
            title= {this.state.content}
          />
        </Card>
      </div>
    )
  }
};

export default Main;

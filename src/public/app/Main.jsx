import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Hello World..',
    }
  }

  render() {
    return (
      <div className="Main">
        <Card>
          <CardHeader
            title= {this.state.content}
          />
        </Card>
      </div>
    )
  }
};

export default Main;

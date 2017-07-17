import React from 'react';

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
        <h1>{this.state.content}</h1>
      </div>
    )
  }
};

export default Main;

import React from 'react';

class Imstagran extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        className='imstagran'
        style={{width: this.props.width, height: this.props.height}}
      >
        whoop
      </div>
    )
  }

}

export default Imstagran;

import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="main">
        X ficha cayendo: {this.props.fallingPieceX} <br/>
        Y ficha cayendo: {this.props.fallingPieceY}
      </div>
    );
  }
}

export default Main;

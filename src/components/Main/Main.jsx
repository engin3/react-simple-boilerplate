import React, { Component } from 'react';

// Components.
import FallingPiece from '../FallingPiece/FallingPiece';

class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="main">
        X ficha cayendo: {this.props.fallingPieceX} <br/>
        Y ficha cayendo: {this.props.fallingPieceY}
        <FallingPiece
          type={'sarasa'}
          xPosition={this.props.fallingPieceX}
          yPosition={this.props.fallingPieceY}
        />
      </div>
    );
  }
}

export default Main;

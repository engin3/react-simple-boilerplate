import React, { Component } from 'react';
import {Size, Width, Height} from '../constants.js';
class Square extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div style={{ boxSizing: 'border-box',
                         border:'gray solid 1px',
                         borderRadius: '3px', 
                         position: 'absolute', 
                         left:(this.props.piece.fallingPieceX*Size)+'px',  
                         top:(((Height-1)*Size)-this.props.piece.fallingPieceY*Size)+'px', 
                         height: '20px', 
                         width: '20px', 
                         background: this.props.piece.aColor}}/>;
  }
}

export default Square;
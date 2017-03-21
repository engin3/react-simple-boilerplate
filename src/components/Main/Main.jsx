import React, { Component } from 'react';
import Square from '../Square.jsx';
import {Width, Height, Size} from '../../constants.js';

class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var pieces = this.props.pieces.map(function(piece){
            return <Square piece={piece}/>
         });

    return (
      <div className="main" style={{ position: 'relative', height: Height*Size, width: Width*Size}}>
        <Square piece={this.props.piece}/>      
        ficha cayendo: <br/>
        <br/>  
        {pieces}
      </div>
    );
  }
}

export default Main;

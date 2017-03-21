import React, { Component } from 'react';
import keydown, { Keys } from 'react-keydown';
// Components.
import Main from './components/Main/Main';
import constants from './constants.js';
const colors = ['lightsalmon', 'antiquewhite', 'lightseagreen', 'aqua',
'lightskyblue','aquamarine','lightslategray','azure','lightsteelblue'];

@keydown
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      piece: {
        fallingPieceX: 4,
        fallingPieceY: constants.Height,
        aColor: this.getColorRandom()
      },     
      speed: constants.InitialSpeed,
      pieces: []
    };
  }
  
  detectLine() {
    var {pieces} = this.state;
    var lines = pieces.reduce(function(acc, val){
    if (acc[val.fallingPieceY]) acc[val.fallingPieceY]++
    else acc[val.fallingPieceY] = 1;
    return acc;
    }, [])
    .reduce(function(acc, line, index){
      if (line === constants.Width) acc.push(index); 
      return acc;
    }, []);
    if (lines.length > 0) {
      let total = [];
      lines.forEach(function(line) {
        let acc = pieces.filter(function(piece){
          if (piece.fallingPieceY !== line){
            if (piece.fallingPieceY > line) {
               piece.fallingPieceY--;
            }
            return piece;
          }
        });
        total = total.concat(acc);
      });
      
      this.state.pieces = total; 
      this.setState(this.state);
    }
  }

  collisioned ({fallingPieceX, fallingPieceY}) {
    return this.state.pieces.some(function(piece){
       return ((piece.fallingPieceX === fallingPieceX) &&
                (piece.fallingPieceY === fallingPieceY))
    });
  }

  getColorRandom() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  componentWillReceiveProps( { keydown } ) {
    if ( keydown.event ) {

      let {piece:{fallingPieceX, fallingPieceY}, speed} = this.state;

     if (keydown.event.which == 39) {
        fallingPieceX = fallingPieceX + 1;
        if ((this.collisioned({fallingPieceX, fallingPieceY})))
        {
          fallingPieceX = fallingPieceX - 1;
        }
        if (fallingPieceX === constants.Width) fallingPieceX = constants.Width-1;
     }

     if (keydown.event.which == 37) {
        fallingPieceX = fallingPieceX - 1;
        if ((this.collisioned({fallingPieceX, fallingPieceY})))
        {
          fallingPieceX = fallingPieceX + 1;
        }

        if (fallingPieceX < 0) fallingPieceX = 0;
     }

     if (keydown.event.which == 13) {
        speed = 10;
     }

     this.state.piece.fallingPieceX = fallingPieceX;
     this.state.speed = speed;
     this.setState(this.state);
    }
  }
 
  componentDidMount() {
    var myFunction = () => {
      
      let {piece: activePiece, speed, pieces, aColor} = this.state;
      
      activePiece.fallingPieceY = activePiece.fallingPieceY-1;

      if ((activePiece.fallingPieceY < 0)|| (this.collisioned(activePiece))){
        speed = constants.InitialSpeed; 
        activePiece.fallingPieceY = activePiece.fallingPieceY+1;
        pieces = [...this.state.pieces, activePiece];
        activePiece = {
          fallingPieceX: 4,
          fallingPieceY: constants.Height,
          aColor: this.getColorRandom()
        };
      }

      this.setState({
        piece: activePiece,
        speed: speed,
        pieces: pieces
      });
      this.detectLine();

      setTimeout(myFunction, this.state.speed);
    }
    var timeout= setTimeout(myFunction, this.state.speed);
  }

  render() {
    return (
        <div className="container">
          speed: {this.state.speed}
          <Main {...this.state}/>
        </div>
    );
  }
}

export default App;

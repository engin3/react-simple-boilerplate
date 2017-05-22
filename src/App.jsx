import React, { Component } from 'react';

// Components.
import Main from './components/Main/Main';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fallingPieceX: 10,
      fallingPieceY: 50
    };
  }

  componentDidMount() {
    setInterval(() => {
      let fallingPieceY = this.state.fallingPieceY - 5;
      if (fallingPieceY < 0) {
        fallingPieceY = 50;
      }

      this.setState({
        fallingPieceY: fallingPieceY
      });
    }, 1000);
  }

  render() {
    return (
      <Main {...this.state} />
    );
  }
}

export default App;

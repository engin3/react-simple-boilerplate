import React, { Component } from 'react';

function FallingPiece({ type, xPosition, yPosition }) {

  const styles = () => {
    return {
      bottom: `${yPosition}px`
    };
  };

  return (
    <div
      className="fallingPiece"
      style={styles()}
    >
      X
    </div>
  );
}

export default FallingPiece;

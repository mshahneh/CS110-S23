import React from 'react';
import { Chess } from 'chess.js'

import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'w',
      chess: new Chess()
    }
    this.move = this.move.bind(this)
  }

  move = function (from, to) {
    console.log("here")
    try {
      this.state.chess.move({ from: from, to: to })
      this.setState({ turn: this.state.chess.turn() })
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    return (<div> 
      <h1> Chess </h1>
      <p> turn: {this.state.turn} </p>
      {this.state.chess.inCheck() ? <p> Check </p> : null}
      <Board chess={this.state.chess} turn={this.state.turn} move={this.move}></Board>
       </div>)
  }
}

export default App;

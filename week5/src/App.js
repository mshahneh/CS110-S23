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
  }
  render() {
    return (<div> 
      <Board chess={this.state.chess}></Board>
       </div>)
  }
}

export default App;

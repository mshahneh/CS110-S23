import logo from './logo.svg';
import './App.css';
import react from 'react';
import StartingPage from './StartingPage';
import {io} from 'socket.io-client'
import ChatScreen from './ChatScreen';

class App extends react.Component {
  constructor(props){
    super(props)
    this.socket = io('http://localhost:3000');
    console.log("here")
    this.state = {
      username: '',
      room: '',
      screen: "starting",
    }
  }

  roomSelect = (room, username) => {
    this.socket.emit("join", {"room":room, "username":username});
    this.setState({room:room, username:username, screen:"chat"})
  }

  sendChat = (text) => {
    console.log("in front", text)
    this.socket.emit("chat message", text);
  }

  goBack = ()=>{
    this.setState({screen:"starting"})
  }

  render(){
    return ( 
      <div>
        {this.state.screen === "starting" ? 
          <StartingPage rooms={["room1", "room2", "room3"]} roomSelect={this.roomSelect}> </StartingPage> 
          : <ChatScreen sendChat={this.sendChat} socket={this.socket} goBack={this.goBack}> </ChatScreen>}
      </div>
    
    )
  }
}

export default App;

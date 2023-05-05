import logo from './logo.svg';
import './App.css';
import React from "react"
import Score from './Components/Score';
import Score_c from './Components/Score_c';
import Text_input from './Components/Text_input';
import ShowText from './Components/dynamic';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      update_count: 0
    }
  }

  onSubmit(text1, text2, thirdArg){
    console.log(text1, text2, this.state.update_count, thirdArg);
    // console.log("in on submit from parent", this.state.update_count)
  }

  render(){
    return (
      <div className="App">
        {/* <Score/>
        <Score/>
        <button onClick={()=>this.setState({update_count:this.state.update_count+1})}> update</button> */}
        {/* <Text_input onSubmit={(text1, text2)=>this.onSubmit(text1, text2, 12)} myCS110={"Hi"}/> */}
        <ShowText text={"this is my text"}/>
      </div>

    );
  }
}

export default App;

import React from "react";
import "./App.css"

class Button extends React.Component {
    constructor(props) {
        super(props);
        console.log("this is in Button", props);
        this.state = {
            count: 0
        }
        setTimeout(()=>{
            this.state.count = 100;
            console.log(this.state.count)
        }, 1000)
    }
  render() {
    return <div style={{padding:"100px"}} onClick={()=>{
        this.setState({count: this.state.count+1})
    }}> {this.props.cs110 + ":" + this.state.count} </div>;
  }
}

export default Button;
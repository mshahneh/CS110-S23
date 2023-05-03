import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return <button onClick={()=>this.setState({count: this.state.count + 1})}>Click me! Number of clicks: {this.state.count}</button>;
    }
}

export default Button;
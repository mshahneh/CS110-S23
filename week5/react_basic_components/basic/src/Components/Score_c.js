import React from "react"

class Score_c extends React.Component{
    constructor(props)
    {
        super(props);
        this.score = 0;
    }
    render(){
        return(
            <div>
                <button 
                onClick={
                    () => {
                        this.score += 1;
                        console.log(this.score)
                    }
                }
                > ^ </button>
                <div> {this.score} </div>
                <button> v </button>
            </div>
        )
    }
  }
  
export default Score_c;
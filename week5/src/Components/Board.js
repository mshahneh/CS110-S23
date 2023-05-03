import React from 'react';
import "./Board.css";
import MyButton from './MyButton';
let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let rows = [8, 7, 6, 5, 4, 3, 2, 1];

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.buttonName = this.buttonName.bind(this);
        this.move = this.move.bind(this);
        this.state = {
            from: null,
            legalMoves: null
        }
    }

    buttonName = function (col, row) {
        let isLegal = false;
        if (this.state.legalMoves !== null)
            for (let i = 0; i < this.state.legalMoves.length; i++)
                if (this.state.legalMoves[i].includes(col + String(row)))
                {
                    isLegal = true;
                    break;
                }
        if (this.props.chess.get(col + String(row)) === false)
            return {type:"empty", color: "empty", isLegal: isLegal}
        else
            //  merge two json objects
            return {...this.props.chess.get(col + String(row)), isLegal: isLegal}
    }

    move = function (col, row) {
        if (this.state.from === null) {
            let legalMoves = this.props.chess.moves({ square: col + String(row) }) 
            this.setState({ from: col + String(row), legalMoves:legalMoves})
        }
        else {
            this.props.move(this.state.from, col + String(row))
            this.setState({ from: null, legalMoves: null })
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div id="board">
                {rows.map((row) => <div className='row' key={"row"+String(row)}> {
                    columns.map((column) => <MyButton 
                        text={this.buttonName(column, row)}
                        onclick={()=>this.move(column, row)}
                        isClicked={this.state.from === column + String(row)}
                        SquareColor={(row + columns.indexOf(column)) % 2 === 0 ? "whiteSquare" : "blackSquare"}
                     />)
                    } </div>)}
            </div>
        )
    }
}

export default Board;
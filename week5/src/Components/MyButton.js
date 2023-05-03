
export default function MyButton(props) {
  let text = "";
  if (props.text.type !== "empty")
    text = props.text.type;
  
  let color = "white";
  if (props.text.color === "b")
    color = "black";
  
  let bg = props.text.isLegal ? " available" : " " + props.SquareColor;
  if (props.isClicked)
    bg = " clicked";

  return (<button className={"chessSquare " + color + bg} onClick={props.onclick}> {text} </button>);
}
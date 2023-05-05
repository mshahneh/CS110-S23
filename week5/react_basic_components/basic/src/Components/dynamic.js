import { useState } from "react"

export default function ShowText(props){
    const [show, setShow] = useState(true)
    let text = <div> {props.text} </div>
    if (!show)
    {
        text = null;
    }
    return (
        <div>
            {text}
            <button onClick={()=>setShow(!show)}> {!show? "s":"hide"} </button>
        </div>
    )
}
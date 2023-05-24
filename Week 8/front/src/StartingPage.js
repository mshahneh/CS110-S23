import { useState } from "react"


function StartingPage (props) {
    const [username, setUsername] = useState('')
    return (
        <div>
            <input type="text" id="chat" onChange={(e) => {setUsername(e.target.value)}}/>
            {props.rooms.map(item => <button onClick={()=>props.roomSelect(item, username)}>{item}</button>)}
        </div>
    )
}

export default StartingPage
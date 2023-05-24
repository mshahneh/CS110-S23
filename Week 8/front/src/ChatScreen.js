import { useState } from "react"


function ChatScreen (props) {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([]);

    props.socket.on('chat message', (message)=>{
        setMessages([...messages, message]);
    })

    return (
        <div>
            <ul>
                {messages.map((message)=><li> {message} </li>)}
            </ul>
            <input type="text" id="text" onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={()=>props.sendChat(text)}>send</button>
            <button onClick={()=>props.goBack()}> back </button>
        </div>
    )
}

export default ChatScreen
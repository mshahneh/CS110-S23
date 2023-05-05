import { useState } from "react";

export default function Text_input(props) {
    console.log(props)
    return(
        <div>
            <input id="text1" type="text"/>
            <input id="text2" type="text"/>
            <button onClick={()=>{
                let text1 = document.getElementById("text1").value;
                props.onSubmit(text1, "dummy2");
            }
            }> submit </button>
        </div>
    )
}
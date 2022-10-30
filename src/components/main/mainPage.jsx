import React from "react";
import { useState, useRef} from "react";

export default function Main (){

const [message, setMessage]=useState('')
const [response, setResponse] = useState('');
const input = useRef()
console.log(window.api, window)
const sendData = async(e) => {
	e.preventDefault();

const info = await window.api.getName({LastName:e.target.value})
setResponse(info)
console.log('a',response, info)
}
return (
	<>
	<input type="text" id="name" value={message} ref={input}
                    onChange={()=>{setMessage(input.current.value)}} />
																				<button type="button" onClick={sendData} >send</button>
	<p>this is value from react:</p>
	<div>{message}</div>
	<p>this is value from back:</p>
	<div> <pre>
                    {(response && JSON.stringify(response, null, 2)) ||
                        'No query results yet!'}
                </pre></div>
	</>
)
}

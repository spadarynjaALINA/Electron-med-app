import React, { useEffect } from "react";
import { useState, useRef} from "react";
// import promiseIpc from 'electron-promise-ipc';

export default function Main (){
const [message, setMessage]=useState('')
const [response, setResponse] = useState('');
const input = useRef()
console.log(window.api, window)
const sendData = async(e) => {
	e.preventDefault();



}
useEffect(()=>{
	const getDbData=async ()=>{
		console.log(window.api)
		const mes = "message from mainPage";
 window.api.sendMessage(mes).then(data=>{
    console.log(data);
				setResponse(data)
});
	 // await window.api.getSmth().then(data=>	)


console.log('a',response)
};getDbData()
},
[message])
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

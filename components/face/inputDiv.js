import React from 'react'
import Link from 'next/link'
import store from '../store.js'

const styleDiv = {padding: "5%"};
const styleInput = {borderRadius: "10px"};

export default function InputDiv(props) {
	const makeChange = () => {
		const inputUrl = document.getElementById('inputUrl');
		if(inputUrl.value != ''){
			store.dispatch({type: 'faceUrl', payload: inputUrl.value});
			console.log("Value dispatched" + inputUrl.value);
		}else{
			inputUrl.placeholder = 'Incorrect Url';
		}
	};
	return(
		<form action="/face" method="GET">
			<input
				type='text'
				className='text-center'
				onChange={makeChange}
				placeholder={props.error ? "AI don't like that image" : 'Image URL'}
				id="inputUrl"
				style={styleInput}
				/>
			<a type="submit">
				<button className='btn magicButton'> 	GENERATE	</button>
			</a>
		</form>
	)
};

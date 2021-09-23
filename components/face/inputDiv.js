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
		}else{
			inputUrl.placeholder = 'Incorrect Url';
		}
	};
	return(
		<form>
			<input
				type='text'
				className='text-center'
				placeholder={props.error ? "AI don't like that image" : 'Image URL'}
				id="inputUrl"
				style={styleInput}
				/>
			<Link href="/face" type="submit">
				<button className='btn magicButton' onClick={makeChange}> 	GENERATE	</button>
			</Link>
		</form>
	)
};
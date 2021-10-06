import React from 'react'
import Link from 'next/link'

const styleInput = {borderRadius: "10px", margin: "1%"};

export default function generateContainer() {
	const [value, setValue] = React.useState('You sould complete the input first');
	const changeValue = () => {
		const newValue = document.getElementById('inputText').value;
		setValue(newValue);
	};
	return (
		<form action={"/text/" + value} method="GET">
			<input
				type='text'
				className='text-center'
				onChange={changeValue}
				placeholder="Your sentence"
				id="inputText"
				style={styleInput}
				/>
			<a type="submit">
				<button className='btn mx-auto magicButton cuadrado'>  GENERATE  </button>
			</a>
		</form>
	)
}	

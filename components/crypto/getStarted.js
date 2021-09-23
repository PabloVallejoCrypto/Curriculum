import React from 'react'


const divStyle = {padding: "5%"};

export default function GetStarted(props) {
	const changePhase = () => {
		props.newPhase(1);
	}
	return (
		<div className='col-lg-8 mx-auto text-center'>
			<h1 className='display-4'>  Get Started  </h1>
			<h1 className='lead'>  Whats happening here?  </h1>
			<h1 className='lead text-center'><button className='btn mx-auto magicButton cuadrado' onClick={changePhase}>  NEXT  </button></h1>
		</div>
	)
}
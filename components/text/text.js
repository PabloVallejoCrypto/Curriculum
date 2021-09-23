import React from 'react'
import Link from 'next/link'

import GenerateContainer from './generateContainer.js'



const styleDiv = {padding: "5%", backgroundColor: "#333", minHeight: "100vh"};
const containerStyle = {padding: "5%"};
const styleButton = {margin: "2%"};

export default function Text(props) {

	return (
		<div className="col-lg-12 mx-auto text-center" style={styleDiv}>
			<div className='col-lg-8 cardStyle2 mx-auto' style={containerStyle}>
				<h1 className='display-4'>	Text Generator	</h1>
				<h1 className='lead'>	GPT-2 implementation 	</h1>
				<h1 className='lead'>	Write something and let the AI generate! </h1>
				<h4> <GenerateContainer   /> </h4>
				<div className='col-lg-8 mx-auto' style={{textAlign: "left"}}>
					<strong className='display-6'> {props.text[1]}  </strong>
					<p id="aiText">{props.text[0].output}</p>
				</div>
	            <Link href='/apps'><button className='btn cuadrado magicButton mb-3 mx-auto'> RETURN </button></Link>    
			</div>
		
		</div>
	)
}	


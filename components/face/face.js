import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import PexelsLogo from '../../public/pexelsLogo.png'

import Loader from '../loader.js'
import InputDiv from './inputDiv.js'

import store from '../../components/store.js'


const styleDiv = {padding: "5%", backgroundColor: "#333", minHeight: "100vh"};
const containerStyle = {padding: "5%"};
const styleInput = {borderRadius: "10px"};

export default function Face(props) {
	const state = store.getState();

	return (
		<div className="col-lg-12 mx-auto text-center" style={styleDiv}>
			<div className='col-lg-8 cardStyle2 mx-auto' style={containerStyle}>
				<h1 className='display-4'>	Facial Recognition AI	</h1>
				<h1 className='lead'> Choose a face image and AI will tell you their age and appearance!  </h1>
				<p>  For security reasons we only allow Pexels.com images  </p>
				<Link href='https://www.pexels.com/'>
					<button className='btn magicButton mb-3'>	
						Choose a cool image
						<Image 
							src={PexelsLogo}
							className='redondeado' 
							width="35px"	
							height="35px"
							/>
			 		</button>
			 	</Link>
				<h4><InputDiv   /></h4> 
				<Image 
					src={state.faceUrl[state.faceUrl.length - 1]}
					className='redondeado' 
					width="250px"	
					height="250px"
					/>
				<div className='col-lg-4 mx-auto'>
					<h1 className='lead'> Gender:  {props.face.faces[0].gender}  </h1>
					<h1 className='lead'> Age range:  {props.face.faces[0].age_range[0]} - {props.face.faces[0].age_range[1]} </h1>
					<h1 className='lead'> Age Coincidence:  {props.face.faces[0].age_range_confidence}  </h1>
					<h1 className='lead'> Cultural Appearance: {props.face.faces[0].cultural_appearance} </h1>
				</div>
				<Link href='/apps'><button className='btn cuadrado magicButton mb-3 mx-auto'> RETURN </button></Link>    
			</div>
		</div>
	)
}	
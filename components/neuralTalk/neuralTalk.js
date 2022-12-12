import React from 'react'
import deepai from "deepai";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import PexelsLogo from '../../public/pexelsLogo.png'

import InputDiv from './inputDiv.js'
import Loader from '../loader.js'
import store from '../store.js'

import { Configuration, OpenAIApi } from "openai";

const styleDiv = {padding: "7.5%", backgroundColor: "#333", minHeight: "100vh"};
const containerStyle = {padding: "5%"};
const styleInput = {borderRadius: "10px"};


export default function NeuralTalk(props) {
	const state = store.getState();

	if (typeof window != "undefined") {
		//const apiKey = "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";

		console.log(apiKey);
		
		const configuration = new Configuration({
			apiKey: apiKey,
		});

		console.log(configuration);

		const openai = new OpenAIApi(configuration);
		
		const gimmie = async () => {
			  
			const response = await openai.createCompletion({
				model: "text-ada-001",
				prompt: "Como te llamas guap@?",
				temperature: 0,
				max_tokens: 18,
			});
			
			console.log(response);	
		};

		gimmie();
	}
	  
	return (
		<div className="col-lg-12 mx-auto text-center" style={styleDiv}>
			<div className='col-lg-8 cardStyle2 mx-auto' style={containerStyle}>
				<h1 className='display-4'>	Neural Talk 2 AI	</h1>
				<h1 className='lead'> Choose a random image and AI will tell you what is going on!  </h1>
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
				<Image src={state.neuralUrl[state.neuralUrl.length - 1]} className='redondeado' width="250px"	height="250px"/>
				<h1 className='display-6' style={{textAlign: "left"}}>  Output  </h1>
				<h1 className='lead' style={{textAlign: "left"}}> {props.neural.output} </h1>
	            <Link href='/apps'><button className='btn cuadrado magicButton mb-3 mx-auto'> RETURN </button></Link>    
			</div>
		</div>
	)
}	
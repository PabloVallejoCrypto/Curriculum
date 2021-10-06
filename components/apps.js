import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Data from './cv/cardBase.json'
import Card from './cardLevel.js'
import Logo1 from '../public/googleMapsPhoto.jpg'
import Logo from '../public/chaoticLogo.png'

import Badge from '../public/badgeApps.png'

import Loader from './loader.js'

const divStyle = {padding: "3%", backgroundColor: "#333"};
const titleStyle = {margin: "3%"};

const buttonStyle = {margin: "3%", padding: "3%"}


export default function Apps() {
	return (		
		<div className='col-lg-12 mx-auto text-center'  style={divStyle}>
			<div className='col-lg-6 mx-auto' style={titleStyle}>
				<Image
				    src={Badge}
				    className='redondeado'
				    layout="responsive"
				    alt="Badge of the Title"
					/>
			</div>
			<Link href='https://github.com/PabloVallejoCrypto/Curriculum'>
				<button className='btn mb-3 mx-auto magicButton' style={buttonStyle}>  All code here!  </button>
			</Link>
			<div className='row mx-auto'>
				<Card key={1} title="Google Maps API" level={1} link='/map' logo={Data.images[0]} description={Data.descriptions[0]}	/>
				<Card key={2} title="GPT-2 AI" level={2} link='/text' logo={Data.images[1]} description={Data.descriptions[1]}	/>
			</div>
			<Card key={5} title="DeepAI NFT" link='/crypto' level={5} logo={Logo} description={Data.descriptions[4]}		/>
			<Link href='/' replace>
				<button className='btn mx-auto mb-3 magicButton cuadrado'>  RETURN  </button>
			</Link>
		</div>
	)
}

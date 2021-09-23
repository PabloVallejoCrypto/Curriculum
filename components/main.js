import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Card from './cardLevel.js'
import Logo1 from '../public/googleMapsPhoto.jpg'
import Logo from '../public/chaoticLogo.png'

import Data from './cv/cardBase.json'
import Title from './cv/title.js'
import Contact from './cv/contact.js'
import Description from './cv/description.js'
import DescriptionRow from './cv/descriptionRow.js'
import FullStackBadge from './cv/fullStackBadge.js'
import SolidityBadge from './cv/solidityBadge.js'
import PythonBadge from './cv/pythonBadge.js'
import MyApps from './cv/myApps.js'

import Loader from './loader.js'

import Apps from './apps.js'


const styleDiv = {padding: "5%"};

export default function Main() {
	const newAnimation = "coolStart 4s ease-in-out";
	const [animations, setAnimations] = React.useState("keepDeath 0s ease");

	const startAnimations = (_actualHeight) => {
		const mainSkills = document.getElementById("mainSkills") == null ? {scrollHeight: 614} : document.getElementById("mainSkills"); 
		if (_actualHeight >= mainSkills.scrollHeight - 200) {
			mainSkills.style.animation = "coolStart 2s ease";
		}
		const appsDiv = document.getElementById("level0") == null ? {scrollHeight: 6500} : document.getElementById("level0"); 
		if (_actualHeight >= appsDiv.scrollHeight - 200) {
			setAnimations(newAnimation);
		}
	};

	if (typeof window != "undefined"){
		window.onscroll = () => {
			if(window.next.router.route == '/'){
				startAnimations(window.scrollY);
			}
			
		}
	}
	return (
		<div className="col-lg-12 mx-auto text-center" style={styleDiv}>
			<Title 			/>
			<DescriptionRow   />
			<FullStackBadge   />
			<SolidityBadge  />
			<MyApps  />
			<Description    	/>
			<Contact   />
			<Loader   />
		</div>
	)
}
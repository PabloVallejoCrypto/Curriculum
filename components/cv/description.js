import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import DeveloperCard from './developerCard.js'
import CustomerCard from './customerCard.js'

import Skills from './skills.js'


export default function Description() {
	const [phase, setPhase] = React.useState(0);
	const closeDeveloper = () => {setPhase(1)};
	const closeCustomer = () => {setPhase(0)};
	return (
		<div className="col-lg-10 mx-auto mb-3">
			<h1 className='display-6 mb-3'>  About Me  </h1>
			<h1 className='lead' style={{textAlign: "left"}}>
				Born on Barcelona, 1998. 
				Currently in active search for work with more than 4 years of profesional experience as customer service related job.
				And more than one year of freelance developer.
			</h1>
			<h1 className='lead' style={{textAlign: "left"}}>
				I love to study new technologies and how can be implemented. 
				I have been studing the last years as a self-taught way to improve and make more visible technologies as BlockChain and Neural Networks.
			</h1>
			<h1 className='lead' style={{textAlign: "left"}}>
				Actualy living in Barcelona, but interested on remote work and open to travel. 
				EU driving license B, 5 years.
				Adaptable to SCRUM and other Agile methodologies.
			</h1>
			<Skills   />
			<h1 className='displa-6'> EXPERIENCE </h1>
			<div className='row mx-auto'>
				<button className='btn mb-3 mx-auto magicButton1' id='developerButton' onClick={closeCustomer}>
					DEVELOPER
				</button>
				<button className='btn mb-3 mx-auto magicButton1' id='customerButton' onClick={closeDeveloper}>
					CUSTOMER SERVICE
				</button>
			</div>
			{phase == 0 ? <DeveloperCard  /> : <CustomerCard  />}
			<div className='col-lg-8 cardStyle mx-auto' style={{margin: "2%", padding: "2.5%"}} id='customerDiv' hidden={true}>
				<h1> customer service </h1>
			</div>
		</div>
	)
}
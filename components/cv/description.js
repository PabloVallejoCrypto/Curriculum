import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import DeveloperCard from './developerCard.js'
import CustomerCard from './customerCard.js'

import Skills from './skills.js'
import Curriculum from '../../public/PabloVallejoCVeng.png'

const someMargin = {margin: "4%"};

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
			<div className='col-lg-4 mx-auto cardStyle' style={someMargin}>
				<h1 className='lead'>  CURRICULUM   </h1>
				<p>  Check my Resume  </p>
				<Link href={Curriculum.src}>
					<a style={{textDecoration: "none"}}>
						<Image
						    src="https://img.icons8.com/nolan/512/pdf-2.png"
						    width="100"
						    height="100"
						    className='redondeado'
							alt="Curriculum Link"
							/>
					</a>
				</Link>
			</div>
			<Skills   />
		</div>
	)
}

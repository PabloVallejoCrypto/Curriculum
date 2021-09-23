import Image from 'next/image'
import Link from 'next/link'


export default function CustomerCard() {
	return (
		<div className='col-lg-12 cardStyle mx-auto' style={{margin: "2%", padding: "2.5%", textAlign: "left"}}>
			<h1 className='display-6 text-center'> Customer Service </h1>
			<h1 className='lead'>
			I am currently working with "Grupo Sagardi" and I have more than 4 years of profesional experience as customer service job.
			Actualy living in Barcelona, but more interested on remote work and open to travel. 
			EU driving license B, 5 years.
			Adaptable to SCRUM and other Agile methodologies.
		</h1>
		<div className='row mx-auto cardStyle1'>
			<div className='col-lg-8'>
				<h1 className='lead'>  GRUPO SAGARDI  </h1>
				<p>  2021  </p>
				<p>  Working as a waiter at Sagardi in the Gothic Quarter of Barcelona.  </p>
				<Link href="https://gruposagardi.com/"><button className="btn magicButton mb-3">  VISIT  </button></Link>
			</div>
			
		</div>
		<h1 className='lead'>
			For more information about the experience above please contact me.
		</h1>
		</div>
		
	)
}
import Link from 'next/link'
import Image from 'next/image'

const titleStyle = {padding: "3%", margin: "2%"};

export default function Name() {
	return (	
	<div className='col-lg-6 mx-auto' style={titleStyle}>
		<h1 className='display-2'>
			Pablo Vallejo
		</h1>
		<h1 className='display-6'>	Full Stack Developer	</h1>
		<h1 className='lead'>   BLOCKCHAIN  ·  WEB   </h1>
		<p>  BARCELONA, 1998  </p>
		<div className='row mx-auto'>
			<Link href='#mainSkills'><button className='btn mx-auto magicButton1 cuadrado'>  NEXT  </button></Link>
			<Link href='#contact'><button className='btn mx-auto magicButton1 cuadrado'> CONTACT  </button></Link>
		</div>			
	</div>			
	)
}

import Image from 'next/image'
import Link from 'next/link'

const divStyle = {margin: "2%", padding: "2.5%"};
const textLeft = {textAlign: "left"};

export default function DeveloperCard() {
	return (
		<div className='col-lg-12 cardStyle mx-auto text-center' style={divStyle}>
			<h1 className='display-4'> Developer </h1>
			<h1 className='lead' style={textLeft}>
				My developer experience consist on more than 1 year of profesional work and more than 5 years creating personal webs and protocols. 
				The profesional experience was with a local business, Autoescola Maragall (2016), my work there was about create and build their website and database, maintenance and updating of it. 
				Domain management and SEO improvement. Responsive and attractive design. Customer support, for business information and possible bugs.
			</h1>
			<h1 className='lead' style={textLeft}>
				I studied the technological baccalaureate, but my more advanced knowledge was acquired in a self taught way. 
				I developed several websites using different technologies, some on my GitHub to view more please mail me. 
				Full stack websites with Express.js, server-side rendering with Next, AI protocols with Python, REST-API and Ethereum/Binance implementations.
				I wrote some in-chain protocols, too on GitHub as SmartContracts, random number generation algorithms, other protocols implementations, token factories (ERC20, ERC721) and more.
			</h1>
			<h1 className='display-6 mb-3'>  5 Test Apps  </h1>
			<Link href='/apps'>
				<button className='btn mb-3 magicButton1 cuadrado'>  CHECK  </button>
			</Link>
		</div>
	)
}
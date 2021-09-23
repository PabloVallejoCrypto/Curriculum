import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh", alignItems: "center", animation: "keepDeath 0s ease 0s forwards"};
const someMargin = {margin: "2%"};
const buttonStyle = {margin: "1%", padding: "4%"};

const textLeft = {textAlign: "left"};

export default function DescriptionRow() {
	return (
		<div className="row mx-auto text-center" id="mainSkills" style={rowStyle}>
			<div className='col-lg-3 mx-auto cardStyle' style={someMargin}>
				<Image
				    src={'https://img.icons8.com/fluency/240/000000/developer-mode.png'}
				    width="65px"
				    height="65px"
					alt="Developer Phone"
					/>
					<h1 className='display-6'>
						Full Stack
					</h1>
					<h1 className='lead' style={textLeft}>  + 5 years of personal Nodejs projects with ES6 syntaxt. Back-end REST-API made with Express JS.   </h1>
					<Link href='#fullStack'><button className='btn mx-auto magicButton1' style={buttonStyle}>  DISCOVER  </button></Link>
			</div>
			<div className='col-lg-3 mx-auto cardStyle' style={someMargin}>
				<Image
				    src={'https://img.icons8.com/officel/480/000000/react.png'}
				    width="65px"
				    height="65px"
					alt="Reactjs Logo"
					/>
					<h1 className='display-6'>
						React  &  NextJS
					</h1>
					<h1 className='lead' style={textLeft}>  Next server generation with sever-side rendering. Faster and more secure apps. JSX - Babel syntax and Redux implementation.  </h1>
					<Link href='#fullStack'><button className='btn mx-auto magicButton1' style={buttonStyle}>  DISCOVER  </button></Link>
			</div>
			<div className='col-lg-3 mx-auto cardStyle' style={someMargin}>
				<Image
				    src={'https://img.icons8.com/fluency/480/000000/ethereum.png'}
				    width="75px"
				    height="75px"
					alt="Ethereum Logo"
					/>
					<h1 className='display-6'>
						SOLIDITY
					</h1>
					<h1 className='lead' style={textLeft}>  + 2 years developing Smart Contracts, creating and implementing cryptographic protocols. WebSite implementation.  </h1>
					<Link href='#solidity'><button className='btn mx-auto magicButton1' style={buttonStyle}>  DISCOVER  </button></Link>
			</div>
			
		</div>
	)
}
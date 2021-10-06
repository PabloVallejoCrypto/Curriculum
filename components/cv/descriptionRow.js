import Image from 'next/image'
import Link from 'next/link'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh", alignItems: "center", animation: "keepDeath 0s ease 0s forwards"};
const someMargin = {margin: "2%"};
const buttonStyle = {margin: "1%", padding: "4%"};

const textLeft = {textAlign: "left"};

export default function DescriptionRow() {
	return (
		<div className="row mx-auto text-center" id="mainSkills" style={rowStyle}>
			<div className='col-lg-3 mx-auto cardStyle' style={someMargin}>
				<Image
				    src={'https://img.icons8.com/officel/480/000000/react.png'}
				    width="65px"
				    height="65px"
					alt="Reactjs Logo"
					/>
					<h1 className='display-6'>
						Full Stack
					</h1>
					<h1 className='lead' style={textLeft}>  + 5 years of personal NodeJS(ES6 syntaxt) projects.  </h1>
					<h1 className='lead' style={textLeft}>  NextJS sever-side rendering. JSX - Babel syntax, Redux and REST-API implementation.  </h1>
					<h1 className='lead' style={textLeft}>  Back-end ExpressJS.  </h1>
					<Link href='#fullStack'><button className='btn mx-auto magicButton1' style={buttonStyle}>  MORE  </button></Link>
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
					<h1 className='lead' style={textLeft}>  + 2 years BlockChain experience, developing Smart Contracts, creating and implementing in-chain protocols.  </h1>
					<h1 className='lead' style={textLeft}>  Web implementation, via Web3, of own contracts, exchanges and other protocols.  </h1>
					<p className='' style={textLeft}>  On GitHub: Random Generator, Basic Democratic System, Chaotic Token and more.  </p>
					<Link href='#solidity'><button className='btn mx-auto magicButton1' style={buttonStyle}>  MORE  </button></Link>
			</div>
			
		</div>
	)
}

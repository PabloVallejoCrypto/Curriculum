import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import Logo from '../../public/chaoticLogo.png'

const cardStyle = {padding: "5%", margin: "5%"};

const innerCardStyle = {margin: "2%", padding: "3%"};

export default function Skills() {
	return (
		<div className="row mx-auto text-center mb-3">
			<div className='col-lg-5 cardStyle mx-auto' style={cardStyle}>
				<h1 className='display-6'>  LANGUAGES  </h1>
				<div className='col-lg-10 mb-3 mx-auto' style={innerCardStyle}>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Catalan  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Spanish  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  English  </h1></span>
				</div>
				<h1 className='display-6'>  CODING  </h1>
				<div className='col-lg-12 mx-auto' style={innerCardStyle}>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  C  </h1></span> 
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  HTML5  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  JavaScript(ES6)  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  CSS  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Solidity  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Python  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  React(JSX-Babel)  </h1></span>
				</div>   
			</div>
			<div className='col-lg-5 cardStyle mx-auto' style={cardStyle}>
				<h1 className='display-6'>  SKILLS  </h1>
				<div className='col-lg-12 mx-auto lead' style={innerCardStyle}>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  NextJs  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  React  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Redux  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Scrum(Agile)  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  NodeJs  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Express  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  DeepAI  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  BabylonJs  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Socket.io  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Ethereum(EVM) & Binance  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  Truffle & Ganache  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  WEB3  </h1></span>
					<span className='btn mb-3 badgeBlack'><h1 className='lead'>  BigNumberJs  </h1></span>
				</div>   
			</div>	
		</div>
	)
}
import React from 'react'
import Link from 'next/link'

import GetStarted from './getStarted.js'
import Faucet from './faucet.js'
import Generator from './generator.js'

const divStyle = {padding: "5%", backgroundColor: "#333", minHeight: "100vh"};
const containerStyle = {padding: "5%"};

function Alert(props) {
	return (
		<div className='col-lg-8 mx-auto badgeWhite'>
			<h1 className='lead'>
				Token ready!! Check it on Binance
			</h1>
			<a className='btn badgeBlack' href={'https://testnet.bscscan.com/token/' + window.contractTokenNFT._address + '?a=' + props.id}>
				Binance Scanner
			</a>
			<a className='btn badgeBlack' href={'/crypto/' + props.id}>
				DeepNFT Generator
			</a>
		</div>
	)
}
//
export default function Canvas() {
	const [phase, setPhase] = React.useState(0);
	const [tokenId, setTokenId] = React.useState(18);
	return (
		<div className='col-lg-12 text-center' style={divStyle}>
			<div className='col-lg-8 mx-auto cardStyle2 text-left' style={containerStyle}>
				{tokenId != 18 ? <Alert id={tokenId}  /> : <></>}
				{phase == 0 ? <GetStarted newPhase={setPhase}  /> : (phase == 1 ? <Faucet newPhase={setPhase}  /> : <Generator newToken={setTokenId}  />)}
				<Link href='/apps'><h1 className='lead text-center'><button className='btn mx-auto magicButton'>  RETURN  </button></h1></Link>
			</div>
		</div>
	)
}
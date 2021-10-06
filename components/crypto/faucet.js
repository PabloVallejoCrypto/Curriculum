import React from 'react'
import Link from 'next/link'

import store from '../store.js'


const divStyle = {padding: "5%"};
const rowStyle = {padding: "1.5%", margin: "3.5%"};
const morePadding = {padding: "5%", margin: "2%", justifyContent: "center"};
const linkNoStyle = {textDecoration: "none"};
const arialStyle = {fontFamily: "Arial"};

export default function Faucet(props) {
	const changePhase = () => {
		props.newPhase(2);
	}
	const chaosFaucet = async () => {
		const globalState = await store.getState();
		window.contractToken.methods
		.generate()
		.send({from: globalState.accounts[0]})
		.then(x => {
		});
	}
	return (
		<div className='col-lg-12 mx-auto text-center'>
			<h1 className='display-4'>  Faucet  </h1>
			<h1 className='lead'>  Get some FREE money!  </h1>
			<div className='row mx-auto' style={rowStyle}>
				<div className='col-lg-5 mx-auto cardStyle2' style={morePadding}>
					<h1 className='display-6'>  Binance Smart Chain  </h1>
					<a href='https://testnet.binance.org/faucet-smart' style={linkNoStyle}><button className='btn mb-3 mx-auto linkGroc' style={arialStyle}>  FREE BNB  </button></a>
				</div>
				<div className='col-lg-5 mx-auto cardStyle2' style={morePadding}>
					<h1 className='display-6'>  Chaotic BCN    </h1>
					<p>  If you don't see your token at wallet, add it with the contract address.  </p>
					<a href='https://testnet.bscscan.com/token/0x655E53dB0d79075A02E6c6e576fef40304218721' style={linkNoStyle}><button className='btn mb-3 mx-auto linkGroc cuadrado' style={arialStyle}>  Contract Address  </button></a>
					<button className='btn mb-3 mx-auto linkGroc' onClick={chaosFaucet} style={arialStyle}>  FREE XΟΣ  </button>
				</div>
			</div>
			<h1 className='lead text-center'><button className='btn mx-auto magicButton cuadrado' onClick={changePhase}>  NEXT PAGE  </button></h1>
		</div>
	)
}

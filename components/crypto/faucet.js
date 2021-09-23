import React from 'react'
import Link from 'next/link'

import store from '../store.js'


const divStyle = {padding: "5%"};

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
		<div className='col-lg-8 mx-auto text-center'>
			<h1 className='display-4'>  Faucet  </h1>
			<div className='row mx-auto'>
				<h1 className='lead'>  Gimmie some BNC  </h1>
				<Link href='https://testnet.binance.org/faucet-smart'><button className='btn mb-3 mx-auto linkGroc cuadrado' style={{fontFamily: "Arial"}}>  FREE BNC  </button></Link>
			</div>
			<div className='row'>
				<h1 className='lead text-left'>  Gimmie a million CHAOS </h1>
				<button className='btn mb-3 mx-auto linkGroc cuadrado' onClick={chaosFaucet} style={{fontFamily: "Arial"}}>  FREE XΟΣ  </button>
			</div>
			<h1 className='lead text-center'><button className='btn mx-auto magicButton cuadrado' onClick={changePhase}>  NEXT  </button></h1>
		</div>
	)
}
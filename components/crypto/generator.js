import React from 'react'
import Router from 'next/router'
import store from '../../components/store.js'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/chaoticLogo.png'
import BigNumber from 'bignumber.js';


export default function Generator(props = {}) {
	const approve = async () => {
		const unity = BigNumber(1e18).multipliedBy(99);
		const globalState = await store.getState();
		window.contractToken.methods
		.approve(window.contractTokenNFT._address, unity.toString())
		.send({from: globalState.accounts[0]})
		.then(x => {
			window.contractTokenNFT.methods.buyToken(unity.toString())
			.send({from: globalState.accounts[0]})
			.then(y => {
				props.newToken(y.events.Transfer.returnValues.tokenId)
			});
		});
	};	

	return (
		<div className='col-lg-8 mx-auto text-center'>
			<h1 className='display-6'> 	DEEP NFT Generator 	</h1>
			<Image
			    src={Logo}
			    className="mx-auto redondeado"
			    width="225px"
			    height="200px"
			    alt="Random image DeepAi generated"
			    />
			    <Link href={'https://testnet.bscscan.com/token/' + window.contractTokenNFT._address}>
			    	<h4><a className='badge badgeWhite' style={{textDecoration: "none"}}>  View Contract on Binance Scan  </a></h4>
			    </Link>
			    <h1 className='lead'>  COST  <p style={{fontFamily: "Arial"}}>99 XΟΣ</p></h1>
			<h1 className='lead'><button className='btn magicButton cuadrado mb-3' onClick={approve}> BUY </button></h1>
		</div>
	)
}
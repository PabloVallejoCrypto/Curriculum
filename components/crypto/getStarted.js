import React from 'react'
import Image from 'next/image'

import BinanceLogo from '../../public/binanceLogo.png'
import ChaoticLogo from '../../public/chaoticLogo.png'

const divStyle = {padding: "5%"};
const rowStyle = {padding: "3.5%", margin: "3.5%"};
const someMargin = {margin: "3%"};
const textLeft = {textAlign: "left"};
const arialStyle = {fontFamily: "Arial"};


export default function GetStarted(props) {
	const changePhase = () => {
		props.newPhase(1);
	}
	return (
		<div className='col-lg-12 mx-auto text-center'>
			<h1 className='display-4'>  Get Started  </h1>
			<div className='col-lg-10 mx-auto' style={textLeft}>
				<h1 className='display-6'>  
					NFT Generator is simple,
					<span className='lead'> you just need:  </span>
				</h1>
				<p>  1. You BUY the NFToken to my smart contract.  </p>
				<p>  2. The contract generates a random ADN of 18 digits and MINT the NFT(Protocol ERC721).  </p>
				<p>  3. Next server gets the ADN and calls some AI that generates and modify the random image and give you an URL to see result  </p>
				<h1 className='display-6'>
					Easy Start
					<span className='lead'>  With FREE Tokens at TestNet!  </span>
				</h1>
			</div>
			<div className='row mx-auto' style={rowStyle}>
				<div className='col-lg-5 mx-auto cardStyle2' style={someMargin}>
					<h1 className='lead'>  1. Connect to Binance TestNet  </h1>
					<p>  See how to connect your wallet to Binance Network from the oficial page.  </p>
					<a href='https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain'>
						<button className='btn mx-auto magicButton cuadrado'> 
							<Image 
								src={BinanceLogo}
								className='redondeado'
								width='98px'
								height='98px'
								/>
						</button>
					</a>
				</div>
				<div className='col-lg-5 mx-auto cardStyle2' style={someMargin}>
					<h1 className='lead'>  2. Get some Free BNB  </h1>
					<p>  Time to get money to pay taxes. The FAUCET is on the next page. </p>
					<p>  For keeping the Network secure most BlockChains require a little payment to maintain the encrypting level.    </p>
					<a href='https://academy.binance.com/en/glossary/gas'>
						<button className='btn mb-3 mx-auto magicButton'> See more about GAS  </button>
					</a>
				</div>
				<div className='col-lg-5 mx-auto cardStyle2' style={someMargin}>
					<h1 className='lead'>  
						3. Get some Free
						<span style={arialStyle}>  XΟΣ  </span>
					</h1>
					<p>  I too created a token, and it is going to be the method of payment, and is fungible.(Protocol ERC20)  </p>
					<p>  For testing I am going to give you a million tokens on next page.  </p>
					<p>  If you wanna read the contract, click on image.  </p>
					<a href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticToken/ChaoticToken.sol'>
						<button className='btn mx-auto magicButton cuadrado'> 
							<Image 
								src={ChaoticLogo}
								className='redondeado'
								width='98px'
								height='98px'
								/>
						</button>
					</a>
				</div>
				<div className='col-lg-5 mx-auto cardStyle2' style={someMargin}>
					<h1 className='lead'>  4. Test the AIs with the seed you want  </h1>
					<p>  at url chaoticbcn.com/crypto/yourSeed  </p>
					<a href='/crypto/Hello'><button className='btn mx-auto magicButton cuadrado'>  Test it!  </button></a>  
					<h1 className='lead text-center'><button className='btn mx-auto magicButton cuadrado' onClick={changePhase}>  NEXT PAGE  </button></h1>
				</div>
			</div>
		</div>
	)
}

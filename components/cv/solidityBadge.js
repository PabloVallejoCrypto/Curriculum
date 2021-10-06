import Image from 'next/image'
import Link from 'next/link'
import cryptoBadge from '../../public/cryptoBadge.png'
import randomCode from '../../public/randomGeneratorCode.png'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh"};
const textLeft = {textAlign: "left", margin: "3%"};
const textRight = {textAlign: "right", margin: "3%"};
const linkStyle = {justifyContent: "center"};
const  arialStyle = {fontFamily: "Arial"};

export default function DescriptionRow() {
	return (
		<div className="row mx-auto text-center" id='solidity' style={rowStyle}>
			<div className='col-lg-6 mx-auto'>
				<Image
				    src={cryptoBadge}
				    layout='responsive'
				    className='redondeado'
					alt="Solidity Badge"
					/>
			</div>
			<div className='col-lg-4 mx-auto text-center'>
				<div style={textRight}>
					<h1 className='display-4'>
						Solidity
					</h1>
					<h1 className='lead'>  SOME OF MY CONTRACTS  </h1>
				</div>
				<div style={textLeft}>
					<h1 className='display-6'>
						Random Generator
					</h1>
					<h1 className='lead'>  SECURE FULL IN-CHAIN NUMBER GENERATOR  </h1>
					<Image
					    src={randomCode}
					    layout='responsive'
					    className='redondeado'
						alt="Pablo' Smart Contract"
						/>
					<a href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticCasino/ChaotiCasino.sol'>
						<button className='btn mb-3 magicButton1'> CODE  </button>
					</a>
				</div>
				<div style={textRight}>
					<h1 className='display-6'>
						CHAOS Token
					</h1>
					<h1 className='lead' style={arialStyle}>  XΟΣ  </h1>
					<p>
						Next Generation Token Deflationary-Inflationary.
					</p>
					<p>
						Deflacionary token with a closed INITIAL SUPPLY of 18 millions and one Inflationary process,
					</p>
					<p> 
						a World Democratic System. ERC20 Protocol implemented.
					</p>
					<a href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticToken/ChaoticToken.sol'>
						<button className='btn mb-3 magicButton1'>  CODE  </button>
					</a>
				</div>
				<div style={textLeft}>
					<h1 className='display-6'>
						DeepNFT
					</h1>
					<h1 className='lead'>  Genetic & Artificial Intelligence Based NFT  </h1>
					<p>
						To see a test go to chaoticbcn.com/crypto/ + seed to develop the token or just click see test!
					</p>
					<div className='row mx-auto' style={linkStyle}>
						<a href='/crypto/helloChaotic' className='btn mx-auto mb-3 magicButton1'>
							SEE TEST
						</a>
						<a href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticCasino/ChaotiCasino.sol' className='btn mb-3 magicButton1'>
							CODE
						</a>
					</div>
				</div>
				<a href='https://github.com/PabloVallejoCrypto/SmartContracts'>
					<button className='btn mx-auto mb-3 magicButton1 cuadrado'> MORE CONTRACTS  </button>
				</a>
			</div>
		</div>
	)
}

import Image from 'next/image'
import Link from 'next/link'
import cryptoBadge from '../../public/cryptoBadge.png'
import randomCode from '../../public/randomGeneratorCode.png'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh"};
const textLeft = {textAlign: "left", margin: "3%"};
const textRight = {textAlign: "right", margin: "3%"};

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
					<h1 className='lead'>  SMART CONTRACTS  </h1>
					<p> More than 2 years  </p>
				</div>
				<div style={textLeft}>
					<h1 className='display-6'>
						Random Generator
					</h1>
					<h1 className='lead'>  OWN IN-CHAIN GENERATOR  </h1>
					<Image
					    src={randomCode}
					    layout='responsive'
					    className='redondeado'
						alt="Pablo' Smart Contract"
						/>
					<Link href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticCasino/ChaotiCasino.sol'>
						<button className='btn mb-3 magicButton1'> GitHub  </button>
					</Link>
				</div>
				<div style={textRight}>
					<h1 className='display-6'>
						CHAOS Token
					</h1>
					<h1 className='lead'>  XΟΣ  </h1>
					<p> New type of token. 
					Uses ERC20 protocol but implements some logic. 
					It is a deflationary currency, like bitcoin, which through a democratic process becomes inflationary, like the dollar. 
					All thanks to the magic of Ethereum. </p>
					<Link href='https://github.com/PabloVallejoCrypto/SmartContracts/blob/main/ChaoticToken/ChaoticToken.sol'>
						<button className='btn mb-3 magicButton1'> GitHub  </button>
					</Link>
				</div>
				<h1 className='display-6'>  More Contracts  </h1>
				<h1 className='lead'>  Chaotic NFT (ERC721), Catalan Exchange and more...   </h1>
				<Link href='https://github.com/PabloVallejoCrypto/SmartContracts'>
					<button className='btn mx-auto mb-3 magicButton1'> GitHub  </button>
				</Link>
			</div>
		</div>
	)
}
import Image from 'next/image'
import Link from 'next/link'

const divStyle = {padding: "5%", backgroundColor: "#333", minHeight: "100vh"};
const containerStyle = {padding: "5%"};

const titleStyle = {margin: "3%", padding: "2%"};

export default function TokenCard(props) {
	return (
		<div className='col-lg-12' style={divStyle}>
			<div className='col-lg-8 mx-auto cardStyle2 text-center' style={containerStyle}>
				<Image
				    src={props.imageLink}
				    className='redondeado'
				    layout="responsive"
				    width="175px"
				    height="150px"
				    alt="Chaotic Barcelona Logo"
				    />
				<div className='col-lg-8 mx-auto' style={titleStyle}>
					<h1 className='display-4'>  Deep NFToken  </h1>
					<h1 className='lead'>
						<span className='badgeWhite'> ID: {props.tokenId}  </span>
					</h1>
				</div>
				<Link href='/apps'><h1 className='lead text-center'><button className='btn mx-auto magicButton'>  RETURN  </button></h1></Link>
			</div>
		</div>
	)
}

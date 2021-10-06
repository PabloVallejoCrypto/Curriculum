import Link from 'next/link'

const contactStyle = {padding: "10%", margin: "2%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"};
const cardStyle = {margin: "2%", padding: "5%", alignItems: "center"};
const marginStyle = {margin: "2%"};
const textLeft = {textAlign: "left"};

export default function Contact() {
	return (	
		<div style={contactStyle}>
			<div className='col-lg-5 mx-auto cardStyle1' style={cardStyle}>
				<h1 className='display-4 text-center'>  NextJS Apps  </h1>
				<h1 className='lead' style={textLeft}>
					To demonstrate my programming level I have developed 3 applications that implement different technologies and frameworks. 
				</h1>
				<Link href='/apps' style={marginStyle}>
					<button className='btn mx-auto mb-3 magicButton cuadrado'>  NEXT  </button>
				</Link>
			</div>		
		</div>	
	)
}

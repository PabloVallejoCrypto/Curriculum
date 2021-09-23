import Link from 'next/link'
import Image from 'next/image'

const contactStyle = {padding: "1%", margin: "4%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"};
const cardStyle = {margin: "2%", alignItems: "center"};
const marginStyle = {margin: "2%"};

export default function Contact() {
	return (	
		<div style={contactStyle} id='contact'>
			<div className='col-lg-6 mx-auto cardStyle' style={cardStyle}>
				<h1 className='display-4'>  CONTACT  </h1>
				<h1 className='lead'>
					<Link href='https://github.com/PabloVallejoCrypto' className='mb-3'>
						<a className='btn badgeBlack' style={marginStyle}>	 
							<Image
							    src={'https://img.icons8.com/nolan/512/github.png'}
							    width="55px"
							    height="55px"
								alt="GitHub Logo"
								/>
						</a>
					</Link>
					<Link href='https://www.linkedin.com/in/pablovallejocrypto' className='mb-3'>
						<a className='btn badgeBlack' style={marginStyle}>	 
							<Image
							    src={'https://img.icons8.com/nolan/512/linkedin.png'}
							    width="55px"
							    height="55px"
								alt="Linkedin Logo"
								/>
						</a>
					</Link>
				</h1>
				<Link href='tel:+34637724846' style={{margin: "2%"}}>
				<h1 className='lead'>
					Phone: +34 637 724 846
					<a className='btn mb-3 badgeBlack'  style={marginStyle}>	
						<Image
							    src={'https://img.icons8.com/external-justicon-flat-justicon/512/000000/external-phone-notifications-justicon-flat-justicon.png'}
							    width="50px"
							    height="50px"
								alt="Phone Icons8 Logo"
								/>
					</a>
				</h1>
				</Link>
				<Link href='mail: pablovallejo.gon@gmail.com' style={{margin: "2%"}}>
				<h1 className='lead'>
					Mail: pablovallejo.gon@gmail.com
					<a className='btn mb-3 badgeBlack'  style={marginStyle}>	
						<Image
							    src={'https://img.icons8.com/external-justicon-flat-justicon/512/000000/external-email-notifications-justicon-flat-justicon.png'}
							    width="50px"
							    height="50px"
								alt="Email Icons8 Logo"
								/>
					</a>
				</h1>
				</Link>
			</div>		
		</div>	
	)
}
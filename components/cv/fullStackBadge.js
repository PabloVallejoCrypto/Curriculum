import Image from 'next/image'
import Link from 'next/link'
import reactBadge from '../../public/reactBadge.png'

const rowStyle = {padding: "1%", margin: "3%", minHeight: "100vh"};
const marginStyle = {margin: "3%"};
const textLeft = {textAlign: "left"};
const textRight = {textAlign: "right"};

export default function DescriptionRow() {
	return (
		<div className="row mx-auto text-center" id='fullStack' style={rowStyle}>
			<div className='col-lg-6 mx-auto'>
				<Image
				    src={reactBadge}
				    layout='responsive'
				    className='redondeado'
					alt="React Badge"
					/>
			</div>
			<div className='col-lg-4 mx-auto text-center' style={marginStyle}>
				<div style={textLeft}>
					<h1 className='display-4'>
						⚛️ React
					</h1>
					<h1 className='lead'>  JSX  ·  BABEL  </h1>
					<p> JSX syntax for component model based. Components life flow, responsive design, libraries, frameworks and others implementations.  </p>
				</div>
				<div style={textRight}>
					<h1 className='display-4'>
						Next
					</h1>
					<h1 className='lead'>  SERVER-SIDE RENDERING  </h1>
					<p>  Next generation for server. Secure server-side REST-APIs, dynamic fetch and routing, Redux store based and much more.  </p>
				</div>
				<div style={textLeft}>
					<h1 className='display-4'>
						HTML5
					</h1>
					<h1 className='lead'>   ES6 Syntax  </h1>
					<p>  +5 years of HTML5, CSS3 and JS development. New syntaxts methods. Responsive UIs. Secure client side calls. React, Socket.io, Web3, BabylonJS and more.  </p>
				</div>
				<div style={textRight}>
					<h1 className='display-4'>
						ExpressJS
					</h1>
					<h1 className='lead'>  +2 years of Back-End with ExpressJS. REST-APIs, Helmet, CORS, MongoDB, dynamic routing and more.  </h1>
				</div>
				<h1 className='display-6'>  Redux & Web3  </h1>
				<h1 className='lead'> IMPLEMENTED  </h1>
				<Link href='https://github.com/PabloVallejoCrypto/Curriculum'>
					<button className='btn mx-auto mb-3 magicButton1'> This site Repository  </button>
				</Link>
			</div>
		</div>
	)
}

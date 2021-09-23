import Image from 'next/image'
import Link from 'next/link'
import reactBadge from '../../public/reactBadge.png'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh", alignItems: "center"};
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
			<div className='col-lg-4 mx-auto text-center'>
				<div style={textLeft}>
					<h1 className='display-4'>
						⚛️ React
					</h1>
					<h1 className='lead'>  JSX  ·  BABEL  </h1>
					<p> Much react and more react, with something about react  </p>
				</div>
				<div style={textRight}>
					<h1 className='display-4'>
						Next
					</h1>
					<h1 className='lead'>  SERVER-SIDE RENDERING  </h1>
					<p> Much next and more next, with something about next  </p>
				</div>
				<h1 className='display-6'>  Redux  </h1>
				<h1 className='lead'> That site uses redux  </h1>
				<Link href='https://github.com/PabloVallejoCrypto/Curriculum'>
					<button className='btn mx-auto mb-3 magicButton1'> This site Repository  </button>
				</Link>
			</div>
		</div>
	)
}
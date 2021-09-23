import Image from 'next/image'

const rowStyle = {padding: "1%", margin: "2%", minHeight: "100vh", alignItems: "center"};

export default function DescriptionRow() {
	return (
		<div className="row mx-auto text-center" id='python' style={rowStyle}>
			<div className='col-lg-2 mx-auto'>
				<Image
				    src={'https://img.icons8.com/nolan/512/artificial-intelligence.png'}
				    width="75px"
				    height="75px"
					alt="Chaotic Barcelona Logo"
					/>
					<h1 className='display-6'>
						Artificial Intelligence
					</h1>
					<h1 className='lead'>  PYTHON  </h1>
					<h1 className='lead'>  COMING SOON  </h1>
			</div>
		</div>
	)
}
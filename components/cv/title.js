import Image from 'next/image'
import MyFace from '../../public/profilePhoto.jpg'
import Name from './name.js'

const titleStyle = {padding: "1%", margin: "2%", minHeight: "100vh", justifyContent: "center", animation: "coolStart 2s ease-in-out"};
const containerStyle = {maxHeight: "35px"};

export default function Title() {
	return (
		<div className='row mx-auto text-center' style={titleStyle}>
			<div className='col-lg-4 mx-auto'>
				<Image
				    src={MyFace}
				    style={containerStyle}
				    className='redondeado'
				    layout="responsive"
				    width="220px"
				    height="230px"
					alt="Pablo Vallejo Face"
					/>
			</div>
			<Name  />	
				
		</div>
	)
}
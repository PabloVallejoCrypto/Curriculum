import Image from 'next/image'
import MyFace from '../../public/pabloBadge.png'

const containerStyle = {maxHeight: "550px"};

export default function Title() {
	return (
		<div className='col-lg-6 mx-auto' style={containerStyle}>
			<Image
			    src={MyFace}
			    className=' redondeado'
			    layout="responsive"
				alt="Pablo Vallejo Face"
				/>
		</div>
	)
}

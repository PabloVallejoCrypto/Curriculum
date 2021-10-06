import Name from './name.js'
import ProfilePhoto from './profilePhoto.js'
const titleStyle = {padding: "1%", margin: "2%", height: "100vh", justifyContent: "center", animation: "coolStart 2s ease-in-out"};

export default function Title() {
	return (
		<div className='row mx-auto text-center' style={titleStyle}>
			<ProfilePhoto   />
			<Name  />	
				
		</div>
	)
}

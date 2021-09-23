import React from 'react'
const alertStyle = {top: "5vh"}

class Alerta extends React.Component {
	constructor(props = {}) {
		super(props);
		this.closeClick = this.closeClick.bind(this);
	}
	closeClick = () => {
		document.getElementById("closeDiv").hidden = true
	}
	render() {
		return (
			<div className='col-lg-4 mx-auto cardStyle1' id='closeDiv' style={alertStyle}>
				<h1 className='lead'> 
					Where we go?
				</h1>
				<button onClick={this.closeClick} className='btn mb3 mx-auto magicButton text-danger'>
					❌
				</button>
			</div>
		)
	}
}
export default Alerta;
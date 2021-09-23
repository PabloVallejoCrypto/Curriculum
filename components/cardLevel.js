import Image from 'next/image'
import Link from 'next/link'

export default function Card(props = {}) {
	const divStyle = {padding: "2.5%", margin: "2%", animation: "coolStart 3." + (props.level * 4) + "s ease", justifyContent: "center"};

	return (
			<div className=' col-lg-4 cardStyle2 text-left mx-auto mb-3' id={"level" + props.level} style={divStyle}>		
				<div className='row mx-auto'>
					<Image
					    src={props.logo}
					    className="btn redondeado mx-auto"
					    layout="responsive"
					    width="75px"
					    height="75px"
					    alt={props.title}
						/>
					<h1 className='display-6'>	{props.title}	</h1>
				</div>	
				<p style={{textAlign: "left"}}>{props.description}</p>
				<a href={props.link}>
					<button className='btn mx-auto mb-3 magicButton cuadrado'>
						GO TO APP
					</button>
				</a>
			</div>
	)
}
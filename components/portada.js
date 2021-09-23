import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/chaoticLogo.png'
import styles from '../styles/Home.module.css'



export default function Portada() {
	return (
		<div className={styles.container}>
			<Image
			    src={Logo}
			    width="225px"
			    height="200px"
			    alt="Chaotic Barcelona Logo"
			    />
			<h1 className='display-4'>		My Curriculum		</h1>
			<h1 className='lead'>	Pablo Vallejo	</h1>
			<Link href='/main'>
				<button className='btn magicButton1 mb-3 cuadrado'>	DISCOVER		</button>
			</Link>
		</div>
	)
}
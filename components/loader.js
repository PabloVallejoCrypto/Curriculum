import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Loader() {
	return (
		<div className="col-lg-10 mx-auto text-center">
			<Link href="#">
		        <div className="loader">
		          <div className="inner one"></div>
		          <div className="inner two"></div>
		          <div className="inner three"></div>
		        </div>
		    </Link>			
		</div>
	)
};
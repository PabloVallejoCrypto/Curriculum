import styles from '../styles/Home.module.css'

const containerStyle = {paddingTop: "40vh"};

export default function Loader() {
	return (
		<div className="col-lg-8 mx-auto" style={containerStyle}>
		        <div className="loader">
		          <div className="inner one"></div>
		          <div className="inner two"></div>
		          <div className="inner three"></div>
		        </div>
		</div>
	)
};
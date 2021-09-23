import React from 'react'
import Image from 'next/image'
import Logo from '../../public/chaoticLogo.png'
import styles from '../../styles/Home.module.css'

import MetamaskConnection from './initiMetamask.js'
import Container from './container.js'

import store from '../../components/store.js'


export default function Crypto() {

	const [phase, setPhase] = React.useState(0);
	const [account, setAccount] = React.useState("");

	store.subscribe(() => {
		let state = store.getState()
		if (state.accounts != []){
			setPhase(1);
			setAccount(state.accounts);
		}
	});
	return (
		<>
			{phase == 0 ? <MetamaskConnection  /> : <Container  /> }
		</>
	)
}
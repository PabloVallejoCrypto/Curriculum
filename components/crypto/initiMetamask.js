import React from 'react';
import Link from 'next/link'
import Web3 from 'web3';

import ChaoticToken from '../contracts/chaoticTokenABI.json';
import ChaoticTokenNFT from '../contracts/chaoticNFTtokenABI.json';

import store from '../../components/store.js'

const containerStyle = {backgroundColor: "#333", justifyContent: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"};

export default function MetamaskConnection() {

	const connectContract = async () => {
		return new window.web3.eth.Contract(
		      	ChaoticToken.abi,
		      	ChaoticToken.networks[97].address
		    	);
	};
	const connectContractNFT = async () => {
		return new window.web3.eth.Contract(
		      	ChaoticTokenNFT.abi,
		      	ChaoticTokenNFT.networks[97].address
		    	);
	};
	const loadContracts = async () => {
		window.contractToken = await connectContract();
		window.contractTokenNFT = await connectContractNFT();
		return true;
	} ;
	const loadAccount = async () => {
		window.web3.eth.getAccounts()
		.then(y => {
			store.dispatch({type: "accounts", payload: y[0]});
			window.accounts = y;
			return true;
		});
	}

	const connectMetamask = async () => {
		if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    await connectContract();
    await connectContractNFT();
    await loadContracts();
    loadAccount();
    return ;
  }
  console.log("¡¡ERROR ON WALLET CONNECTION!!");
	}

	return (
		<div className='col-lg-12 text-center' style={containerStyle}>
			<h4><button className='btn mb-3 mx-auto magicButton cuadrado' onClick={connectMetamask}>  CONNECT WALLET  </button></h4>
			<Link href='/apps'>
				<a><button className='btn mx-auto magicButton cuadrado'> RETURN </button></a>
			</Link>
		</div>
	)
}

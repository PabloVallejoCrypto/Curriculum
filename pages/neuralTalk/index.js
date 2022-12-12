import styles from '../../styles/Home.module.css'
import deepai from "deepai";

//Components
import Talk from '../../components/neuralTalk/neuralTalk.js'
import Head from '../../components/head.js'
import store from '../../components/store.js'

function NeuralTalkPage(pageProps) {
  return (
    <>
      <Head   />
      <Talk  neural={pageProps}  />    
    </>
  )
}
//
NeuralTalkPage.getInitialProps = async (context) => {
  return true;
};
export default NeuralTalkPage;
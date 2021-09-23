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
  const state = store.getState();
  await deepai.setApiKey(process.env.DEEPAI_KEY);
  var resp = await deepai.callStandardApi("neuraltalk", {
          image: state.neuralUrl[state.neuralUrl.length - 1]
        })
        .catch(e => {
          console.error(e);
          return state.neuralDesc[0];
        });
  await store.dispatch({type: 'neuralDesc', payload: resp});
  return (resp);
};
export default NeuralTalkPage;
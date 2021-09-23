import deepai from "deepai";
//Components
import Face from '../../components/face/face.js'
import Head from '../../components/head.js'
import store from '../../components/store.js'
function FacePage(pageProps) {
  return (
    <>
      <Head   />
      <Face  face={pageProps}  />
    </>
  )
}
//
FacePage.getInitialProps = async (context) => {
  const state = store.getState();
  await deepai.setApiKey(process.env.DEEPAI_KEY);
  var resp = await deepai.callStandardApi("demographic-recognition", {
          image: state.faceUrl[state.faceUrl.length - 1]
        })
        .catch(e => {
          console.error(e);
          return state.faceDesc[0];
        });
  store.dispatch({type: 'faceDesc', payload: resp.output});
  return (resp.output);
};
export default FacePage;
import deepai from "deepai";
//Components
import Text from '../../../components/text/text.js'
import Head from '../../../components/head.js'
function TextPageDinamic(pageProps) {
  return (
    <>
      <Head   />
      <Text  text={pageProps}  />    
    </>
  )
}
//
TextPageDinamic.getInitialProps = async (context) => {
  const {query} = context;
  await deepai.setApiKey(process.env.DEEPAI_KEY);
  var resp = await deepai.callStandardApi("text-generator", {
          text: query.newText,
        })
        .catch(e => {
          console.error(e);
        });
  return ([resp, query.newText]);
};
export default TextPageDinamic;
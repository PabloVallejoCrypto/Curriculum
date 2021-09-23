import deepai from "deepai";
//Components
import Text from '../../components/text/text.js'
import Head from '../../components/head.js'
function TextPage(pageProps) {
  return (
    <>
      <Head   />
      <Text  text={pageProps}  />    
    </>
  )
}
//
TextPage.getInitialProps = async (context) => {
  const {req} = context;
  if (req) {
    const drugs = "My favorite book is";
    await deepai.setApiKey(process.env.DEEPAI_KEY);
    var resp = await deepai.callStandardApi("text-generator", {
            text: drugs,
          })
          .catch(e => {
            console.error(e);
          });
    return ([resp, drugs]);
  }
};
export default TextPage;
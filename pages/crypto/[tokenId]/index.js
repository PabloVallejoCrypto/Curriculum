import deepai from 'deepai'
//Components
import TokenCard from '../../../components/crypto/tokenCard.js'
import Head from '../../../components/head.js'

const styleUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.analogmuseum.org%2Fenglish%2Fexamples%2Florenz_attractor%2Fattractor.jpg&f=1&nofb=1";
const imageStyle = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*bsYCkBd9So8ojNbrsiKPnQ.jpeg&f=1&nofb=1';

const imageStyle1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.hipwallpaper.com%2Fi%2F92%2F40%2FOzV8Mv.jpg&f=1&nofb=1';

const imageStyle2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.abm-enterprises.net%2Ffractal-art-2%2Fchaos-theory-3-wallpaper.jpg&f=1&nofb=1';

function TokenPage(pageProps) {
  return (
    <>
      <Head   />
      <TokenCard  imageLink={pageProps.imageLink} tokenId={pageProps.tokenId}  />    
    </>
  )
}
//
TokenPage.getInitialProps = async (context) => {
  const {query} = context;
  await deepai.setApiKey(process.env.DEEPAI_KEY);
  var resp = await deepai.callStandardApi("text2img", {
    text: query.tokenId.toString()
  });
  var resp1 = await deepai.callStandardApi("deepdream", {
    image: resp.output_url,
  });
  var resp2 = await deepai.callStandardApi("fast-style-transfer", {
    content: resp1.output_url,
    style: imageStyle,
  });
  var resp3 = await deepai.callStandardApi("deepdream", {
    image: resp2.output_url,
  });
  return ({imageLink: resp3.output_url, tokenId: query.tokenId});
};
export default TokenPage;
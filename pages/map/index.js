import Head from '../../components/head.js'
import Map from '../../components/map/map.js'


const rowStyle = {padding: "3%"};

function MapPage(pageProps) {
  return (
    <>
      <Head   />
      <Map  KEY={pageProps}   />
    </>   
  )
}
//
MapPage.getInitialProps = async (context) => {
  return ({KEY: process.env.GOOGLE_API_KEY});
};
export default MapPage;

import React from 'react'
import Router from 'next/router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import Loader from './loader.js'

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(0);

   Router.onRouteChangeStart = (url) => {
      setLoading(1);
    };

    Router.onRouteChangeComplete = (url) => {
      setLoading(0);
    };

    Router.onRouteChangeError = (err, url) => {
      // an error occurred
    };

  return (
    <>
    {loading == 0 ? <Component {...pageProps} /> : <Loader  />}
    </>
  )
};

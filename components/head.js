import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/chaoticLogo.png'


export default function HeadComponent() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="Chaotic Barcelona, especialista en programació, disseny web i WEB3! 🔱CHAOTIC BCN🔱 DE PABLO VALLEJO"
      />
      <meta
        name="keywords"
        content="crypto, chaos, chaotic, Chaos Barcelona, chaoticbcn, Barcelona, Pablo Vallejo"
      />
      <meta name="author" content="Pablo Vallejo" />
      <title>  Pablo's CV  </title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:200"
        rel="stylesheet"
        type="text/css"
      />

    </Head>
  )
}

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../ui/theme'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title>Squid</title>
        <meta name='description' content="The easiest place to buy and sell cryptocurrency today." />

        <meta property="og:image" content="/assets/SquidLogo.jpg" />
        <meta property="og:title" content="Squid" />
        <meta property="og:description" content="The easiest place to buy and sell cryptocurrency today." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
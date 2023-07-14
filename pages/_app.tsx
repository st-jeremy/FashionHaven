import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';   
import type { AppProps } from 'next/app'
import Header from '../Components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head';
import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  
  return (
    <SessionProvider session={session} >
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minHeight={'100vh'} >
            <Head>
              <title>Fashion Haven</title>
              <meta name="description" content="eCommerce Fashion Website" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/logo.png" />
            </Head>

            <Header />
              <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  )
}

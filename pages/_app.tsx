import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';   
import type { AppProps } from 'next/app'
import Header from '../Components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer'
import { SessionProvider } from 'next-auth/react'

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider session={session} >
      <Provider store={store}>
        <ChakraProvider>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minHeight={'100vh'} >
            <Header />
              <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
      </Provider>
    </SessionProvider>
  )
}

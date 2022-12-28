import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../redux/store';   
import type { AppProps } from 'next/app'
import Header from '../Components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  )
}

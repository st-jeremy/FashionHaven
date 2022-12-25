import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Header'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

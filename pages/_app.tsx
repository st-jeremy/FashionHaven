import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../Components/Header'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Footer from '../Components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box minHeight={'150vh'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <ChakraProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Box>
  )
}

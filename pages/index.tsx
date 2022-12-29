import Head from 'next/head'
import { Inter } from '@next/font/google';
import Slideshow from '../Components/Slideshow';
import Categories from '../Components/Categories';
import { Box } from '@chakra-ui/react';
import MultiCarousel from '../Components/MultiCarousel/MultiCarousel';
import Brands from '../Components/Brands';
import LimitedStock from '../Components/MultiCarousel/LimitedStocks';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fashion Haven</title>
        <meta name="description" content="eCommerce Fashion Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bgColor={'blackAlpha.300'} width={{ base: '24px', md: '40px', lg: '56px' }}>
        <Box display={'flex'} paddingTop={4} m={'auto'}>
          <Categories />

          <Slideshow />

          <Brands />
        </Box>

        <MultiCarousel />

        <LimitedStock />
      </Box>
    </>
  )
}
